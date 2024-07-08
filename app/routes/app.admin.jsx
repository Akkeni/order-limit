import {
    Text,
    Card,
    Page,
    FormLayout,
    TextField,
    Button,
    InlineStack,
    BlockStack,
    Spinner,
    Banner
} from '@shopify/polaris';
import { authenticate } from '../shopify.server';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useSubmit, useLoaderData, useActionData } from '@remix-run/react';
import { json } from '@remix-run/node';
import db from '../db.server';
import '../resources/style.css';

//fetches the necessary data
export async function loader({ request }) {
    const { admin, billing, session } = await authenticate.admin(request);
    const limiters = await db.limiters.findMany();

    return json({
        ok: true,
        limiters,
        admin: false,
    });

}

export async function action({ request, params }) {
    const { admin, session } = await authenticate.admin(request);

    try {

        const formData = await request.formData();
        console.log('formData name in action ', formData.get('name'));
        if (formData.get('action') === 'login') {
            if (formData.get('name') === `${process.env.ADMIN_NAME}` && formData.get('password') === `${process.env.ADMIN_PASSWORD}`) {
                return json({
                    admin: true
                });
            } else {
                return json({
                    admin: false
                });
            }
        }

        if (formData.get('action') === 'save') {
            const limiters = JSON.parse(formData.get('limiters'));
            if (limiters) {
                for (const typeName in limiters) {
                    try {
                        const limit = await db.limiters.findUnique({
                            where: {
                                typeName: typeName,
                            },
                        });
                        if (limit) {
                            await db.limiters.update({
                                where: {
                                    typeName: typeName,
                                },
                                data: {
                                    value: Number(limiters[typeName]),
                                },
                            });
                        } else {
                            await db.limiters.create({
                                data: {
                                    typeName: typeName,
                                    value: Number(limiters[typeName]),
                                },
                            });
                        }
                    } catch (error) {
                        console.log('error while creating ', error);

                    }
                }
            }
            return json({
                created: true,
            });
        }

        return json({
            ok: true
        })

    } catch (error) {

        console.log('Error in action ', error);
        return json({
            admin: false,
            error: error
        });
    }
}

export default function Admin() {

    const loaderData = useLoaderData();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(loaderData?.admin || false);
    const [error, setError] = useState(false);
    const submit = useSubmit();
    const actionData = useActionData();
    const existingLimiters = loaderData?.limiters ? loaderData.limiters : [];
    const [limiters, setLimiters] = useState({
        products: existingLimiters.find((item) => item.typeName == 'products')?.value || 0,
        categories: existingLimiters.find((item) => item.typeName == 'categories')?.value || 0,
        collections: existingLimiters.find((item) => item.typeName == 'collections')?.value || 0,
        vendors: existingLimiters.find((item) => item.typeName == 'vendors')?.value || 0,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        console.log('action data ', actionData?.admin);
        if (actionData?.admin) {
            setAdmin(true);
            setIsLoading(false);
            setError(false);
            //localStorage.setItem('admin', true);
            setWithExpiry('admin', true, 3600000);
            Cookies.set('admin', 'true', { expires: 7 });
        } else if (actionData?.created) {
            setIsLoading(false);
            setSuccess(true);
        } else if (actionData?.admin === false) {
            setIsLoading(false);
            setError(true);
        }
    }, [actionData]);

    useEffect(() => {
        if(loaderData?.ok) { 
            if(getWithExpiry('admin')/*localStorage.getItem('admin')*/ ) {
                setAdmin(true);
                //localStorage.removeItem('admin');
            }
            console.log('localStorage ', localStorage.getItem('admin') );
            console.log("cookies ", Cookies.get('admin'));
        }
    }, [loaderData]);

    const handleName = (value) => {
        console.log(value);
        setName(value);
    }

    const handlePassword = (value) => {
        console.log(value);
        setPassword(value);
    }

    const handleLimiters = (value, name) => {
        setLimiters((prevalue) => ({
            ...prevalue,
            [name]: value
        }));
    }

    const handleSave = () => {
        console.log('save');
        setIsLoading(true);
        submit({ limiters: JSON.stringify(limiters), action: "save" }, { method: "post" });
    }

    const handleLogin = () => {
        console.log('name and password ' + name + " " + password);
        if (name && password) {
            setIsLoading(true);
            submit({ name: name, password: password, action: "login" }, { method: "post" });
        }
    }

    const setWithExpiry = (key, value, ttl) => {
        const now = new Date();
        const item = {
            value: value,
            expiry: now.getTime() + ttl, // Calculate expiry time
        };
        localStorage.setItem(key, JSON.stringify(item)); // Store as a JSON string
    }

    const getWithExpiry = (key) => {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) {
            return null; // Item doesn't exist
        }
        const item = JSON.parse(itemStr);
        const now = new Date();
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key); // Remove expired item
            return null;
        }
        return item.value; // Return the original value
    }

    if (isLoading) {
        //console.log('isSaving ', isSaving);
        return (
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: "999",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    fontSize: "18px",
                }}>
                    <Spinner accessibilityLabel="Saving" size="large" />
                </div>
            </div>
        );
    }
    return (
        <Page>
            <ui-title-bar title="Admin Login" />
            <div>

                {error && (
                    <Text as="p" tone="critical">Invalid username or password</Text>
                )}

                {success && (
                    <Banner
                        title="Saved successfully!"
                        tone="success"
                        onDismiss={() => setSuccess(false)}
                    />
                )}

                <br />
                <br />

                {!admin && (
                    <Card>
                        <BlockStack>
                            <FormLayout>
                                <TextField
                                    value={name}
                                    label="Admin"
                                    type="text"
                                    onChange={(value) => { handleName(value) }}
                                    requiredIndicator
                                />
                                <TextField
                                    value={password}
                                    label="Password"
                                    type="password"
                                    onChange={(value) => { handlePassword(value) }}
                                    requiredIndicator
                                />
                                <div style={{ float: 'right' }}>
                                    <InlineStack inlineAlignment="end" gap="none">
                                        <Button variant="primary" onClick={handleLogin}>Login</Button>
                                    </InlineStack>
                                </div>
                            </FormLayout>
                        </BlockStack>
                    </Card>
                )}


                {admin && (
                    <Card>
                        <BlockStack>
                            <FormLayout>
                                <InlineStack gap="200">
                                    <TextField
                                        value={limiters.products}
                                        label="Products"
                                        type="number"
                                        onChange={(value) => { handleLimiters(value, 'products') }}
                                        requiredIndicator
                                    />
                                    <TextField
                                        value={limiters.categories}
                                        label="Categories"
                                        type="number"
                                        onChange={(value) => { handleLimiters(value, 'categories') }}
                                        requiredIndicator
                                    />
                                    <TextField
                                        value={limiters.collections}
                                        label="Collections"
                                        type="number"
                                        onChange={(value) => { handleLimiters(value, 'collections') }}
                                        requiredIndicator
                                    />
                                    <TextField
                                        value={limiters.vendors}
                                        label="Vendors"
                                        type="number"
                                        onChange={(value) => { handleLimiters(value, 'vendors') }}
                                        requiredIndicator
                                    />
                                </InlineStack>
                                <div style={{ float: 'right' }}>
                                    <InlineStack inlineAlignment="end" gap="none">
                                        <Button variant="primary" onClick={handleSave}>Save</Button>
                                    </InlineStack>
                                </div>
                            </FormLayout>
                        </BlockStack>
                    </Card>
                )}
            </div>
        </Page>
    );
}

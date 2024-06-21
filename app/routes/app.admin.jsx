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
} from '@shopify/polaris';
import { authenticate } from '../shopify.server';
import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useSubmit, useLoaderData, useActionData } from '@remix-run/react';
import { json } from '@remix-run/node';
import db from '../db.server';

//fetches the necessary data
export async function loader({ request }) {
    const { admin, billing, session } = await authenticate.admin(request);
    const limiters = await db.limiters.findMany();

    return json({
        ok: true,
        limiters,
    });

}

export async function action({ request, params }) {
    const { admin, session } = await authenticate.admin(request);

    try {

        const formData = await request.formData();
        console.log('formData name ', formData.get('name'));
        if (formData.get('action') === 'login') {
            if (formData.get('name') === "Appfoster" && formData.get('password') === "Appfoster") {
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
                    await db.limiters.create({
                        data: {
                            typeName: typeName,
                            value: Number(limiters[typeName]),
                        },
                    });
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
    const [admin, setAdmin] = useState(false);
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


    useEffect(() => {
        console.log('action data ', actionData?.admin);
        if (actionData?.admin) {
            setAdmin(true);
            setIsLoading(false);
        } else if(actionData?.created) {
            setIsLoading(false);
        }
    }, [actionData]);

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

    /*const handleLogin = useCallback(() => {

        console.log('name and password ', name);
        if (name && password) {
            console.log('submit');
            submit({ name: name, password: password }, { method: "post" });
        }
    },
    [],
    );*/
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
                                    type="text"
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

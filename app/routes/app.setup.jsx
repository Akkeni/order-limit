import {
    Layout,
    Page,
    Card,
    Banner,
    InlineStack,
    Link,
    Spinner,
    Text
} from '@shopify/polaris';
import { useState, useCallback } from 'react';
import '../resources/style.css';

export default function SetUp() {
    const [isLoading, setIsLoading] = useState(false);

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
    
    //const importedBlobs = getBlobs();
    //console.log('blobs in helpPage ', importedBlobs);
    return (
        <Page>
            <ui-title-bar title="Setup" />
            <InlineStack gap="400">
                <Link url='/app' onClick={() => setIsLoading(true)}>Home</Link>
                <Link url='/app/help' onClick={() => setIsLoading(true)}>Help</Link>
                <Link url='/app/pricing' onClick={() => setIsLoading(true)}>Plan</Link>
            </InlineStack>

            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Text variant="headingLg" as="h5">
                            Steps to follow to set up the app after installation
                        </Text>
                        <ul>
                            <li>
                                <strong>
                                    Cart Extension: Validates the cart for the minimum limit and displays a message on the checkout UI.
                                </strong>
                                <dl>
                                    <dt>
                                        <b>Step 1: </b> Go to settings and click on Checkout, scroll down to the bottom and click on 'Add rule'.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/y6DR29wm/cart-Extension1.png" alt="Cart Extension 1" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 2: </b> Click on order-limit-validation. Then click on 'save', and click on 'Turn on' to activate the validation.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/L6f18S4h/cart-Extension2.png" alt="Cart Extension 2" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                </dl>
                            </li>
                            <br />
                            <li>
                                <strong>
                                    Checkout Extension: Validates products and displays a message on the checkout UI. Only works for Shopify Plus store owners. For Checkout Extension to work, customize checkout page by adding 'app blocks' before 'contact field' and after 'items in cart'.
                                </strong>
                                <dl>
                                    <dt>
                                        <b>Step 1: </b> Go to settings and click on Checkout, then click on 'Customize'.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/Hk98btyg/checkout-Extension0.png" alt="Checkout Extension 0" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 2: </b> Click on 'Add app block'.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/SKZXvNd1/checkout-Extension1.png" alt="Checkout Extension 1" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 3: </b> Click on 'checkout-ui'.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/SsJXFFtS/checkout-Extension2.png" alt="Checkout Extension 2" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 4: </b> Click on checkbox to uncheck if you don't want to block the checkout otherwise leave it as it is.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/V6pJzG3j/checkout-Extension3.png" alt="Checkout Extension 3" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 5: </b> Repeat steps from 2 to 5, to add another app block.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/j2fL26bB/checkout-Extension4.png" alt="Checkout Extension 4" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 6: </b> Click and hold the created app block 'checkout-ui' to drag it under the 'Items in cart' field of 'Order summary'
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/BnSnffXr/checkout-Extension5.png" alt="Checkout Extension 4" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                    <dt>
                                        <b>Step 7: </b> Click on 'Save' to save the settings.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/ZqkBkMzp/checkout-Extension6.png" alt="Checkout Extension 5" style={{ height: '450px', margin: '10px' }} />
                                    </dd>
                                </dl>
                            </li>
                            <br />
                        </ul>
                    </div>
                </div>
            </div>

        </Page>
    );
}
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
            <ui-title-bar title="Setup" />
            <div className='container'>
                <div className='row'>
                    <div className='col pL-1'>
                        <InlineStack gap="400">
                            <Link url='/app' onClick={() => setIsLoading(true)}>Home</Link>
                            <Link url='/app/help' onClick={() => setIsLoading(true)}>Help</Link>
                            <Link url='/app/pricing' onClick={() => setIsLoading(true)}>Plan</Link>
                        </InlineStack>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <div className='container'>
                <div className='row'>
                    <div className='col pL-1'>
                        <Text variant="headingLg" as="h5" className="pL-1">
                            Steps to follow to set up the app after installation
                        </Text>
                    </div>
                    <div className='col'>
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
                                        <img src="https://i.postimg.cc/y6DR29wm/cart-Extension1.png" alt="Cart Extension 1" className='responsive-image' />
                                    </dd>
                                    <dt>
                                        <b>Step 2: </b> Click on order-limit-validation. Then click on 'save', and click on 'Turn on' to activate the validation.
                                    </dt>
                                    <dd>
                                        <img src="https://i.postimg.cc/L6f18S4h/cart-Extension2.png" alt="Cart Extension 2" className='responsive-image' />
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
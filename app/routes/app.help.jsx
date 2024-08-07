import {
    LegacyCard,
    Tabs,
    Layout,
    Page,
    Card,
    Banner,
    InlineStack,
    Link,
    Spinner
} from '@shopify/polaris';
import { useState, useCallback } from 'react';
import '../resources/style.css';

export default function HelpPage() {

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
            <ui-title-bar title="Help" />
            <div className='pL-1'>
                <InlineStack gap="400">
                    <Link url='/app' onClick={() => setIsLoading(true)}>Home</Link>
                    <Link url='/app/pricing' onClick={() => setIsLoading(true)}>Plan</Link>
                    <Link url='/app/setup' onClick={() => setIsLoading(true)}>Setup</Link>
                </InlineStack>

                <br />
                <br />
                <Banner title='Contact and Support' status="info">
                    <div>
                        <strong>
                            <p>
                                For support contact us at info@appfoster.com
                            </p>
                        </strong>
                    </div>
                </Banner>



                <br />
                <Card sectioned>


                    <Banner title="Available Extension" status="info">
                        <div>
                            <strong>
                                <p>
                                    To activate extension please refer <Link url='/app/setup' onClick={() => setIsLoading(true)}>here</Link> :
                                </p>
                                <ul>
                                    <li>
                                        <strong>
                                            Cart Extension: Validates the cart for the minimum limit and displays a message on the checkout UI.
                                        </strong>
                                    </li>
                                </ul>
                            </strong>
                        </div>
                    </Banner>
                    <br />

                    <div>
                        <p> <b>Explanation for various limits supported by us: </b> </p>
                    </div>
                    <br />

                    <Banner title="Store Wise Limits (paid)" status="info">
                        <div>
                            <p>
                                This tab allows you to set overall limits for your entire store. These limits apply to all products and categories within the store. Here's how it works:
                            </p>
                            <ul>
                                <li><strong>Store Limit:</strong> Maximum and Minimum number of products allowed to checkout. Considers all the products quantity from the cart. Set to 0 for no limit.</li>
                                <li><strong>Error Messages:</strong> Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                            </ul>
                        </div>
                    </Banner>

                    <br />

                    <Banner title="General Limits (paid)" status="info">
                        <div>
                            <p>
                                This tab allows you to set general limits that apply to all products in the cart, regardless of category or collection:
                            </p>
                            <ul>
                                <li><strong>Price Limit:</strong> Maximum and Minimum price allowed to checkout. It considers 'Total Amount'. If there is a difference in currency codes set by you and customer's cart then it will block the checkout and asks the user to change into the currency code set by you. Set to 0 for no restriction.</li>
                                <li><strong>Weight Limit:</strong> Maximum and Minimum weight allowed to checkout. Set to 0 for no restriction.</li>
                                <li><strong>Error Messages:</strong>Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                            </ul>
                        </div>
                    </Banner>

                    <br />

                    <Banner title="Vendor Wise Limits" status="info">
                        <div>
                            <p>
                                This tab allows you to set limits for individual vendors. These limits control how many products can be added to cart from each vendor:
                            </p>
                            <ul>
                                <li><strong>Vedor Limit:</strong> Maximum and Minimum number of products from the vendor. Set to 0 for no limit.</li>
                                <li><strong>Error Messages:</strong> Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                            </ul>
                        </div>
                    </Banner>

                    <br />

                    <Banner title="Collection Wise Limits" status="info">
                        <div>
                            <p>
                                This tab allows you to set limits for individual collections. These limits control how many products can be added to cart in each collection:
                            </p>
                            <ul>
                                <li><strong>Collection Limit:</strong> Maximum and Minimum number of products in a collection. Set to 0 for no limit.</li>
                                <li><strong>Error Messages:</strong> Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                            </ul>
                        </div>
                    </Banner>

                    <br />

                    <Banner title="Category Wise Limits" status="info">
                        <div>
                            <p>
                                This tab allows you to set limits for individual categories. These limits control how many products can be added to each category:
                            </p>
                            <ul>
                                <li><strong>Category Limit:</strong> Maximum and Minimum quantity of products within each category. Set to 0 for no restriction.</li>
                                <li><strong>Error Messages:</strong>Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                            </ul>
                        </div>
                    </Banner>

                    <br />

                    <Banner title="Product Wise Limits" status="info">
                        <div>
                            <p>
                                This tab allows you to set limits on individual products or their variants. Here's how it works:
                            </p>
                            <ul>
                                <li><strong>Product Limit:</strong> Maximum and Minimum number of that particular product allowed to checkout. Set to 0 for no limit.</li>
                                <li><strong>Variant Limit:</strong> Maximum and Minimum quantity for each product variant. Set to 0 for no restriction.</li>
                                <li>
                                    <strong>Apply Limit to Product or Variant:</strong> Choose to apply the limit to the entire product (all variants) or each individual variant.
                                    <ul>
                                        <li><strong>Product Level Limit:</strong> Total quantity of all variants must not exceed the limit.</li>
                                        <li><strong>Variant Level Limit:</strong> Each variant must individually stay within the specified limit.</li>
                                    </ul>
                                </li>
                                <li><strong>Error Messages:</strong> Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                            </ul>
                        </div>
                    </Banner>

                    <br />
                    <br />

                </Card>

                <br />
            </div>

        </Page>
    );
}

import {
    LegacyCard,
    Tabs,
    Layout,
    Page,
    Card,
    Banner
} from '@shopify/polaris';
import { useState, useCallback } from 'react';

export default function HelpPage() {

    return (
        <Page>

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


                <Banner title="Available Extensions for Minimum" status="info">
                    <div>
                        <strong>
                            <p>
                                Two extensions are available to select to validate the minimum limit:
                            </p>
                            <ul>
                                <li>
                                    <strong>
                                        Cart Extension: Validates the cart for the minimum limit and displays a message on the cart UI. Requires a quantity selector before the 'Add to cart' button.
                                    </strong>
                                </li>
                                <li>
                                    <strong>
                                        Checkout Extension: Validates products and displays a message on the checkout UI. Only works for Shopify Plus store owners.
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
                <Banner title="General Limits" status="info">
                    <div>
                        <p>
                            This tab allows you to set general limits that apply to all products in the cart, regardless of category or collection:
                        </p>
                        <ul>
                            <li><strong>Price Limit:</strong> Maximum and Minimum price for products. Set to 0 for no restriction.</li>
                            <li><strong>Weight Limit:</strong> Maximum and Minimum weight for products. Set to 0 for no restriction.</li>
                            <li><strong>Error Messages:</strong>Text field to enter your own error messages to be displayed in the cart. You can use the provided placeholders.</li>
                        </ul>
                    </div>
                </Banner>

                <br />


                <Banner title="Store Wise Limits" status="info">
                    <div>
                        <p>
                            This tab allows you to set overall limits for your entire store. These limits apply to all products and categories within the store. Here's how it works:
                        </p>
                        <ul>
                            <li><strong>Store Limit:</strong> Maximum and Minimum number of products in your store. Set to 0 for no limit.</li>
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
                            <li><strong>Product Limit:</strong> Maximum and Minimum number of variants for a product. Set to 0 for no limit.</li>
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
            </Card>

            <br />


        </Page>
    );
}

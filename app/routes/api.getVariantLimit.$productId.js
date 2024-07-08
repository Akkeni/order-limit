import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";


export const loader = async ({ request, params }) => {
    // The authenticate.admin method returns a CORS method to automatically wrap responses so that extensions, which are hosted on extensions.shopifycdn.com, can access this route.
    const { cors, admin } = await authenticate.admin(request);

    try {


        const productId = "gid://shopify/ProductVariant/" + params.productId;


        const response = await admin.graphql(`
        {
            productVariant(id: "${productId}") {
                title
                price
                productVariantLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    value
                }
        
            }
        }`);

        const variantData = await response.json();
        const productVariantLimitField = variantData?.data?.productVariant?.productVariantLimitField;



        return cors(json({ productVariantLimitField: productVariantLimitField }));
    } catch (error) {
        console.log('error in api getVariant limit', error);
        return cors(json({ error: error }));
    }
}
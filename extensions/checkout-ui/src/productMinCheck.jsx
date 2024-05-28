import { useEffect, useState } from "react";
import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useCartLines,
  useExtensionCapability,
  useBuyerJourneyIntercept,
  useAppMetafields,
  useCartLineTarget,
  Text,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension("purchase.checkout.cart-line-item.render-after", () => <App />);

function App() {

  const translate = useTranslate();
  const { extension } = useApi();
  const productLimitFields = useAppMetafields({
    type: "product",
    namespace: "productLimit",
    key: "productLimit"
  });

  const productVariantLimitFields = useAppMetafields({
    type: "variant",
    namespace: "productLimit",
    key: "productLimit"
  });

  const cartLineTarget = useCartLineTarget();

  console.log('productVariantLimitField in app ', productVariantLimitFields);

  const [errorMessage, setErrorMessage] = useState("");

  const canBlockProgress = useExtensionCapability("block_progress");
  console.log('canBlockProgress in app', canBlockProgress);

  useEffect(() => {
    // Get the product ID from the cart line item
    const productId = cartLineTarget?.merchandise?.product?.id;
    if (!productId) {
      return;
    }

    const productVariantId = cartLineTarget?.merchandise?.id;
    if(!productVariantId) {
      return;
    }

    console.log('cartLineTarget in app ', cartLineTarget);
    const quantity = cartLineTarget?.quantity;

    const productMetafield = productLimitFields.find(({ target }) => {
      // Check if the target of the metafield is the product from our cart line
      return `gid://shopify/Product/${target.id}` === productId;
    });

    const productVariantMetafield = productVariantLimitFields.find(({ target }) => {
      // Check if the target of the metafield is the product from our cart line
      return `gid://shopify/ProductVariant/${target.id}` === productVariantId;
    });

    console.log('productMetaField', productVariantMetafield);

    if (productMetafield ||  productVariantMetafield) {
      const productMeta = productMetafield?.metafield;
      const productMin = Number(productMeta?.value.split(',')[0]);

      const productVariantMeta = productVariantMetafield?.metafield;
      const productVariantMin = Number(productVariantMeta?.value.split(',')[0]);

      console.log('quantity ', quantity);

      // If we find the metafield, set the watering instructions for this cart line
      if (quantity < productMin && productMin !== 0) {
        setErrorMessage(`Minimum required products ${productMin}`);
      }else if (quantity < productVariantMin && productVariantMin !== 0) {
        setErrorMessage(`Minimum required products ${productVariantMin}`);
      }
    }
  }, [cartLineTarget, productLimitFields, productVariantLimitFields]);

  useBuyerJourneyIntercept(({canBlockProgress}) => {

    if (canBlockProgress && errorMessage) {
      return {
        behavior: "block",
        reason: "Minimum products required",
        errors: [
          {
            // Show a validation error on the page
            message:
              `please refer to the error messages at the below of the products`,
          },
        ],
      };
    }

    return {
      behavior: "allow",
      perform: () => {
        // Ensure any errors are hidden
        setErrorMessage("");
      },
    };
  });

  

  // Render the minimum limit error message if applicable
  if (errorMessage && canBlockProgress) {

    return (
      <Text>
        {errorMessage}
      </Text>
    );
  }

  return null;

}
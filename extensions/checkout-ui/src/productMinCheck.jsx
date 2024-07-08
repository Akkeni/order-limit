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

  const errorMsgsField = useAppMetafields({
    type: "shop",
    namespace: "errorMsgs",
    key: "errorMsgs"
  });

  const cartLineTarget = useCartLineTarget();



  const [errorMessage, setErrorMessage] = useState("");

  const canBlockProgress = useExtensionCapability("block_progress");


  const errorMsgsMetaField = errorMsgsField[0]?.metafield;
  let errorMsgs = {};
  if (errorMsgsMetaField?.value) {
    errorMsgs = JSON.parse(errorMsgsMetaField?.value);
  }


  useEffect(() => {
    // Get the product ID from the cart line item
    const productId = cartLineTarget?.merchandise?.product?.id;
    if (!productId) {
      return;
    }

    const productVariantId = cartLineTarget?.merchandise?.id;
    if (!productVariantId) {
      return;
    }

    const quantity = cartLineTarget?.quantity;

    const productMetafield = productLimitFields.find(({ target }) => {
      // Check if the target of the metafield is the product from our cart line
      return `gid://shopify/Product/${target.id}` === productId;
    });

    const productVariantMetafield = productVariantLimitFields.find(({ target }) => {
      // Check if the target of the metafield is the product from our cart line
      return `gid://shopify/ProductVariant/${target.id}` === productVariantId;
    });

    if (productMetafield || productVariantMetafield) {
      const productMeta = productMetafield?.metafield;
      const productMin = Number(productMeta?.value.split(',')[0]);
      const productMax = Number(productMeta?.value.split(',')[1]);

      const productVariantMeta = productVariantMetafield?.metafield;
      const productVariantMin = Number(productVariantMeta?.value.split(',')[0]);
      const productVariantMax = Number(productVariantMeta?.value.split(',')[1]);

      // If we find the metafield, set the watering instructions for this cart line
      if (quantity < productMin && productMin !== 0) {

        let msg = errorMsgs?.productMinErrMsg
          ? errorMsgs.productMinErrMsg.replace("{productMin}", productMin).replace("{productName}", cartLineTarget?.merchandise?.title)
          : `You can't select less than ${productMin} for ${cartLineTarget?.merchandise?.title}.`;

        setErrorMessage(msg);

      } else if (quantity < productVariantMin && productVariantMin !== 0) {

        let msg = errorMsgs?.variantMinErrMsg
          ? errorMsgs.variantMinErrMsg.replace("{productVariantMin}", productVariantMin).replace("{productName}", cartLineTarget?.merchandise?.title)
          : `You can't select less than ${productVariantMin} for this product variant ${cartLineTarget?.merchandise?.title}.`;

        setErrorMessage(msg);

      } else if (quantity > productMax && productMax > 0) {
        let msg = errorMsgs.productMaxErrMsg
          ? errorMsgs.productMaxErrMsg.replace("{productMax}", productMax).replace("{productName}", cartLineTarget?.merchandise?.title)
          : `Quantity limit reached, you can't select more than ${productMax} for ${cartLineTarget?.merchandise?.title}.`;
        setErrorMessage(msg);

      } else if (quantity > productVariantMax && productVariantMax > 0) {

        let msg = errorMessagesFieldValue.variantMaxErrMsg
          ? errorMessagesFieldValue.variantMaxErrMsg.replace("{productVariantMax}", productVariantMax).replace("{productName}", cartLineTarget?.merchandise?.title)
          : `Quantity limit reached, you can't select more than ${productVariantMax}.`;

        setErrorMessage(msg);
      }
    }
  }, [cartLineTarget, productLimitFields, productVariantLimitFields]);

  useBuyerJourneyIntercept(({ canBlockProgress }) => {
    if (errorMsgs?.extensionMsg === "Checkout Extension" || errorMsgs?.extensionMsg === "Both") {
      if (canBlockProgress && errorMessage) {
        return {
          behavior: "block",
          reason: "Minimum products required",
          errors: [
            {
              // Show a validation error on the page
              message:
                `Please refer to the messages at the below of the products`,
            },
          ],
        };
      }
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
  if (errorMessage && canBlockProgress && (errorMsgs?.extensionMsg === "Checkout Extension" || errorMsgs?.extensionMsg === "Both")) {

    return (
      <Text>
        {errorMessage}
      </Text>
    );
  }

  return null;

}
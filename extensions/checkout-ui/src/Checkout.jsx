import { useEffect, useState } from "react";
import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  useCartLines,
  useTotalAmount,
  useExtensionCapability,
  useBuyerJourneyIntercept,
  useAppMetafields,
  useCartLineTarget,
} from '@shopify/ui-extensions-react/checkout';

// Set the entry points for the extension
export default reactExtension("purchase.checkout.block.render", () => <Extension />);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  const priceLimit = 2000;

  const priceLimitField = useAppMetafields({
    type: "shop",
    namespace: "priceLimit",
    key: "priceLimit"
  });

  const weightLimitField = useAppMetafields({
    type: "shop",
    namespace: "weightLimit",
    key: "weightLimit"
  });

  const storeLimitField = useAppMetafields({
    type: "shop",
    namespace: "storeLimit",
    key: "storeLimit"
  });

  const productLimitFields = useAppMetafields({
    type: "product",
    namespace: "productLimit",
    key: "productLimit"
  });
  console.log('productLimitField in extension ', productLimitFields);

  const priceMetaField = priceLimitField[0]?.metafield;
  const priceMin = priceMetaField?.value.split(',')[0];

  const storeMetaField = storeLimitField[0]?.metafield;
  const storeMin = storeMetaField?.value.split(',')[0];

  

  const cartLines = useCartLines();
  const totalAmount = useTotalAmount();

  console.log('totalAmount in extension ', totalAmount);
  const totalQuantity = cartLines.reduce((acc, curr) => acc + curr.quantity, 0);
  console.log('totalQuantity in extension ', totalQuantity);

  for (const cartLine of cartLines) {
    console.log('cartLine in extension ', cartLine);
  }

  const [errorMessages, setErrorMessages] = useState("");
  const canBlockProgress = useExtensionCapability("block_progress");
  console.log('canBlockProgress in extension ', canBlockProgress);

  // Ensure the totalAmount is a valid number
  const totalAmountValue = Number(totalAmount?.amount);
  console.log('totalAmountValue in extension ', totalAmountValue);


  useBuyerJourneyIntercept(({canBlockProgress}) => {

    if (canBlockProgress && totalAmountValue < priceMin) {
      return {
        behavior: "block",
        reason: "Minimum price required",
        errors: [
          {
            // Show a validation error on the page
            message:
              `Minimum price is ${priceMin}`,
          },
        ],
      };
    }

    if (canBlockProgress && totalQuantity < storeMin) {
      return {
        behavior: "block",
        reason: "Minimum products quantity required",
        errors: [
          {
            // Show a validation error on the page
            message:
              `Minimum number of products required for checkout is ${storeMin}`,
          },
        ],
      };
    }

    return {
      behavior: "allow",
      perform: () => {
        // Ensure any errors are hidden
        setErrorMessages("");
      },
    };
  });

}


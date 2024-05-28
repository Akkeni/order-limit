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

  const categoryLimitFields = useAppMetafields({
    type: "product",
    namespace: "categoryLimit",
    key: "categoryLimit"
  });

  const collectionLimitFields = useAppMetafields({
    type: "product",
    namespace: "collectionLimit",
    key: "collectionLimit"
  });

  console.log('collectionLimitField in extension ', collectionLimitFields);
  console.log('productLimitField in extension ', productLimitFields);

  const priceMetaField = priceLimitField[0]?.metafield;
  const priceMin = priceMetaField?.value.split(',')[0];

  const storeMetaField = storeLimitField[0]?.metafield;
  const storeMin = storeMetaField?.value.split(',')[0];

  const [errorMessages, setErrorMessages] = useState("");
  const canBlockProgress = useExtensionCapability("block_progress");
  console.log('canBlockProgress in extension ', canBlockProgress);

  

  const cartLines = useCartLines();
  const totalAmount = useTotalAmount();
  // Ensure the totalAmount is a valid number
  const totalAmountValue = Number(totalAmount?.amount);

  console.log('totalAmountValue in extension ', totalAmountValue);
  console.log('totalAmount in extension ', totalAmount);

  const totalQuantity = cartLines.reduce((acc, curr) => acc + curr.quantity, 0);
  console.log('totalQuantity in extension ', totalQuantity);

  const categoriesWithProducts = {};
  const categoriesWithMinValues = {};

  categoryLimitFields.forEach(item => {
    const valueParts = item.metafield.value.split(',');
    const category = valueParts[0]; // Extract category name
    const minValue = valueParts[1]; // Extract minimum value
    const productId = item.target.id; // Extract product id

    // Initialize the category key in categoriesWithProducts if it doesn't exist
    if (!categoriesWithProducts[category]) {
      categoriesWithProducts[category] = [];
    }

    // Add the product id to the category list
    categoriesWithProducts[category].push(productId);

    // Set the minimum value for the category in categoriesWithMinValues
    if (!categoriesWithMinValues[category]) {
      categoriesWithMinValues[category] = minValue;
    }
  });

  console.log('category product ids in extension', categoriesWithProducts);
  console.log('category min values extenison', categoriesWithMinValues);

  const totalCategoriesQuantity = {};
  for(const name in categoriesWithProducts){
    let c = 0;
    for(const id of categoriesWithProducts[name]) {
        const quantity = cartLines.find((item)=> item?.merchandise?.product?.id === `gid://shopify/Product/${id}`)?.quantity;
        if(quantity) {
          c += quantity;
        }
    }
    totalCategoriesQuantity[name] = c;
  }

  console.log('totalCategriesquantities', totalCategoriesQuantity);

  for (const cartLine of cartLines) {
    console.log('cartLine in extension ', cartLine);
  }

  

  let categoryErrors = [];

  Object.keys(categoriesWithMinValues).forEach(category => {
    const minQuantity = Number(categoriesWithMinValues[category]);
    const totalQuantity = totalCategoriesQuantity[category] || 0;
    console.log('minQuantity in object', minQuantity);
    if (totalQuantity < minQuantity) {
      categoryErrors.push(`Minimum ${minQuantity} products required from this category: ${category}`);    
    }
  });
  categoryErrors = categoryErrors.join(' and ');

  //collection wise min limit
  const collectionsWithProducts = {};
  const collectionsWithMinValues = {};

  collectionLimitFields.forEach(item => {
    const valueParts = item.metafield.value.split(',');
    const collection = valueParts[0]; // Extract collection name
    const minValue = valueParts[1]; // Extract minimum value
    const productId = item.target.id; // Extract product id

    // Initialize the category key in categoriesWithProducts if it doesn't exist
    if (!collectionsWithProducts[collection]) {
      collectionsWithProducts[collection] = [];
    }

    // Add the product id to the category list
    collectionsWithProducts[collection].push(productId);

    // Set the minimum value for the category in categoriesWithMinValues
    if (!collectionsWithMinValues[collection]) {
      collectionsWithMinValues[collection] = minValue;
    }
  });

  console.log('collection product ids in extension', collectionsWithProducts);
  console.log('collection min values extenison', collectionsWithMinValues);

  const totalCollectionsQuantity = {};
  for(const name in collectionsWithProducts){
    let c = 0;
    for(const id of collectionsWithProducts[name]) {
        const quantity = cartLines.find((item)=> item?.merchandise?.product?.id === `gid://shopify/Product/${id}`)?.quantity;
        if(quantity) {
          c += quantity;
        }
    }
    totalCollectionsQuantity[name] = c;
  }

  console.log('totalCollectionsquantities', totalCollectionsQuantity);

  let collectionErrors = [];

  Object.keys(collectionsWithMinValues).forEach(collection => {
    const minQuantity = Number(collectionsWithMinValues[collection]);
    const totalQuantity = totalCollectionsQuantity[collection] || 0;
    console.log('minQuantity of collection in object', minQuantity);
    if (totalQuantity < minQuantity) {
      collectionErrors.push(`Minimum ${minQuantity} products required from this collection: ${collection}`);  
    }
  });

  collectionErrors = collectionErrors.join(' and ');
  console.log('collection errors in extension ', collectionErrors);

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

    if(canBlockProgress && categoryErrors) {
          return {
            behavior: "block",
            reason: "Minimum products quantity required",
            errors: [
              {
                // Show a validation error on the page
                message: categoryErrors,
              },
            ],
          };

    }

    if(canBlockProgress && collectionErrors) {
      return {
        behavior: "block",
        reason: "Minimum products quantity required",
        errors: [
          {
            // Show a validation error on the page
            message: collectionErrors,
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


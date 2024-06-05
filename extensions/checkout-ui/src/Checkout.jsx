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
  const { extension, query } = useApi();

 

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

  const errorMsgsField = useAppMetafields({
    type: "shop",
    namespace: "errorMsgs",
    key: "errorMsgs"
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

  const weightMetaField = weightLimitField[0]?.metafield;
  const weightMin = weightMetaField?.value.split(',')[0];

  const errorMsgsMetaField = errorMsgsField[0]?.metafield;
  let errorMsgs = {};
  if (errorMsgsMetaField?.value) {
    errorMsgs = JSON.parse(errorMsgsMetaField?.value);
  }


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
  let totalWeight = 0;


  for (const cartLine of cartLines) {
    const productId = cartLine?.merchandise?.product?.id;
    const productVariantId = cartLine?.merchandise?.id;

    query(`
      {
        product(id: "${productId}"){
          variants(first:250){
            edges{
              node {
                id
                weight
              }
            }
          }
        }
      }
      `).then(({ data }) => {
      console.log('data in query', data);
      const variant = data?.product?.variants?.edges.find(variant => variant.node.id === productVariantId);
      console.log('variant from query ', variant);
      if (variant) {
        console.log('weight of variant ', Number(variant.node.weight));
        totalWeight = totalWeight + Number(variant.node.weight);
        console.log('totalWeight in useeffect ', totalWeight);
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  console.log('totalWeight ', totalWeight);
  console.log('weight min', weightMin);

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
  for (const name in categoriesWithProducts) {
    let c = 0;
    for (const id of categoriesWithProducts[name]) {
      const quantity = cartLines.find((item) => item?.merchandise?.product?.id === `gid://shopify/Product/${id}`)?.quantity;
      if (quantity) {
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

      let msg = errorMsgs?.categoryMinErrMsg
        ? errorMsgs.categoryMinErrMsg.replace("{categoryMin}", minQuantity).replace("{categoryName}", category)
        : `You have to select minimun ${minQuantity} products from the category "${category}".`;

      categoryErrors.push(msg);
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
  for (const name in collectionsWithProducts) {
    let c = 0;
    for (const id of collectionsWithProducts[name]) {
      const quantity = cartLines.find((item) => item?.merchandise?.product?.id === `gid://shopify/Product/${id}`)?.quantity;
      if (quantity) {
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

      let msg = errorMsgs?.collectionMinErrMsg
        ? errorMsgs.collectionMinErrMsg.replace("{collectionMin}", minQuantity).replace("{collectionName}", collection)
        : `You have to select minimun ${minQuantity} products from the collection "${collection}".`;

      collectionErrors.push(msg);
    }
  });

  collectionErrors = collectionErrors.join(' and ');
  console.log('collection errors in extension ', collectionErrors);

  //vendor wise min limit
  const vendorsWithProducts = {};
  const vendorsWithMinValues = {};

  productLimitFields.forEach(item => {
    const [productMin, productMax, vendorName, vendorMin, vendorMax] = item.metafield.value.split(',');
    if (isNaN(vendorName)) {
      const vendor = vendorName; // Extract vendor name
      const minValue = vendorMin; // Extract minimum value
      const productId = item.target.id; // Extract product id

      // Initialize the category key in categoriesWithProducts if it doesn't exist
      if (!vendorsWithProducts[vendor]) {
        vendorsWithProducts[vendor] = [];
      }

      // Add the product id to the category list
      vendorsWithProducts[vendor].push(productId);

      // Set the minimum value for the category in categoriesWithMinValues
      if (!vendorsWithMinValues[vendor]) {
        vendorsWithMinValues[vendor] = minValue;
      }
    }
  });

  console.log('venodor product ids in extension', vendorsWithProducts);
  console.log('vendor min values extenison', vendorsWithMinValues);

  const totalVendorsQuantity = {};
  if (vendorsWithProducts) {
    for (const name in vendorsWithProducts) {
      let c = 0;
      for (const id of vendorsWithProducts[name]) {
        const quantity = cartLines.find((item) => item?.merchandise?.product?.id === `gid://shopify/Product/${id}`)?.quantity;
        if (quantity) {
          c += quantity;
        }
      }
      totalVendorsQuantity[name] = c;
    }
  }

  console.log('totalVendorsquantities', totalVendorsQuantity);

  let vendorErrors = [];

  if (vendorsWithMinValues) {

    Object.keys(vendorsWithMinValues).forEach(vendor => {
      const minQuantity = Number(vendorsWithMinValues[vendor]);
      const totalQuantity = totalVendorsQuantity[vendor] || 0;
      console.log('minQuantity of vendor in object', minQuantity);
      if (totalQuantity < minQuantity) {

        let msg = errorMsgs?.vendorMinErrMsg
          ? errorMsgs.vendorMinErrMsg.replace("{vendorMin}", minQuantity).replace("{vendorName}", vendor)
          : `You have to select minimun ${minQuantity} products from the vendor "${vendor}".`;

        vendorErrors.push(msg);
      }
    });

    vendorErrors = vendorErrors.join(' and ');
    console.log('vendor errors in extension ', vendorErrors);

  }

  useBuyerJourneyIntercept(({ canBlockProgress }) => {

    if (errorMsgs?.extensionMsg === "Checkout Extension" || errorMsgs?.extensionMsg === "Both") {



      if (canBlockProgress && totalAmountValue < priceMin) {
        return {
          behavior: "block",
          reason: "Minimum price required",
          errors: [
            {
              // Show a validation error on the page
              message:
                errorMsgs?.priceMinErrMsg
                  ? errorMsgs.priceMinErrMsg.replace("{priceMin}", priceMin)
                  : `Minimum amount ${priceMin} is required for checkout`,
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
                errorMsgs?.shopMinErrMsg
                  ? errorMsgs.shopMinErrMsg.replace("{shopMin}", storeMin)
                  : `Minmum ${storeMin} products are required for checkout`,
            },
          ],
        };
      }

      console.log('total weight in useBuyer ', totalWeight);

      if (canBlockProgress && totalWeight < Number(weightMin)) {
        return {
          behavior: "block",
          reason: "Minimum weight required",
          errors: [
            {
              // Show a validation error on the page
              message:
                errorMsgs?.weightMinErrMsg
                  ? errorMsgs.weightMinErrMsg.replace("{weightMin}", weightMin)
                  : `Minmum weight ${weightMin} is required for checkout`,
            },
          ],
        };
      }

      if (canBlockProgress && categoryErrors) {
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

      if (canBlockProgress && collectionErrors) {
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

      if (canBlockProgress && vendorErrors) {
        return {
          behavior: "block",
          reason: "Minimum products quantity required",
          errors: [
            {
              // Show a validation error on the page
              message: vendorErrors,
            },
          ],
        };

      }
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


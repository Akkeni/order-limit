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

  //console.log('Extension in checkout UI is working...!');

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

  const generalLimitersField = useAppMetafields({
    type: "shop",
    namespace: "generalLimiters",
    key: "generalLimiters"
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

  //console.log('collectionLimitField in extension ', collectionLimitFields);
  //console.log('productLimitField in extension ', productLimitFields);

  const priceMetaField = priceLimitField[0]?.metafield;
  const priceMin = priceMetaField?.value.split(',')[0];
  const priceMax = priceMetaField?.value.split(',')[1];

  const storeMetaField = storeLimitField[0]?.metafield;
  const storeMin = storeMetaField?.value.split(',')[0];
  const storeMax = storeMetaField?.value.split(',')[1];

  const weightMetaField = weightLimitField[0]?.metafield;
  const weightMin = weightMetaField?.value.split(',')[0];
  const weightMax = weightMetaField?.value.split(',')[1];


  const errorMsgsMetaField = errorMsgsField[0]?.metafield;
  let errorMsgs = {};
  if (errorMsgsMetaField?.value) {
    errorMsgs = JSON.parse(errorMsgsMetaField?.value);
  }

  const generalLimitersMetaField = generalLimitersField[0]?.metafield;
  let generalLimiters = {};
  if (generalLimitersMetaField?.value) {
    generalLimiters = JSON.parse(generalLimitersMetaField?.value);
  }


  const [errorMessages, setErrorMessages] = useState("");
  const canBlockProgress = useExtensionCapability("block_progress");
  //console.log('canBlockProgress in extension ', canBlockProgress);



  const cartLines = useCartLines();
  const totalAmount = useTotalAmount();
  // Ensure the totalAmount is a valid number
  const totalAmountValue = Number(totalAmount?.amount);

  //console.log('totalAmountValue in extension ', totalAmountValue);
  //console.log('cartlines in extension ', cartLines);
  const cartCurrencyCode = cartLines[0]?.cost?.totalAmount?.currencyCode;


  const totalQuantity = cartLines.reduce((acc, curr) => acc + curr.quantity, 0);
  //console.log('currencyCode in extension '+ cartCurrencyCode + " , " + generalLimiters?.currencyCode);

  const categoriesWithProducts = {};
  const categoriesWithMinValues = {};
  const categoriesWithMaxValues = {};
  let totalWeight = 0;

  const convertWeight = (value, fromUnit, toUnit) => {
    let grams;
    console.log('toUnit in covert ', toUnit);
    try {
      // Convert the input weight to grams first
      switch (fromUnit.toLowerCase()) {
        case 'grams':
          grams = value;
          break;
        case 'kilograms':
          grams = value * 1000;
          break;
        case 'ounces':
          grams = value * 28.3495;
          break;
        case 'pounds':
          grams = value * 453.592;
          break;
        default:
          throw new Error('Unsupported unit: ' + fromUnit);
      }

      // Convert grams to the target unit
      let result;
      switch (toUnit.toLowerCase()) {
        case 'grams':
          result = grams;
          break;
        case 'kilograms':
          result = grams / 1000;
          break;
        case 'ounces':
          result = grams / 28.3495;
          break;
        case 'pounds':
          result = grams / 453.592;
          break;
        default:
          throw new Error('Unsupported unit: ' + toUnit);
      }

      return result;
    } catch (error) {
      console.log('error ', error);
    }
  }

  // Example usage:
  //console.log(convertWeight(1000, 'grams', 'kilograms'));  // Output: 1

  for (const cartLine of cartLines) {
    const productId = cartLine?.merchandise?.product?.id;
    const productVariantId = cartLine?.merchandise?.id;
    const quantity = cartLine?.quantity;

    query(`
      {
        product(id: "${productId}"){
          variants(first:250){
            edges{
              node {
                id
                weight
                weightUnit
              }
            }
          }
        }
      }
      `).then(({ data }) => {
      //console.log('data in query', data);
      const variant = data?.product?.variants?.edges.find(variant => variant.node.id === productVariantId);
      //console.log('variant from query ', variant);
      if (variant) {
        //console.log('weight of variant ', Number(variant.node.weight));
        let cartWeight = Number(variant.node.weight);
        const fromWeightUnit = variant.node?.weightUnit;
        const toWeightUnit = generalLimiters.weightUnit;
        if(fromWeightUnit && toWeightUnit) {
        //console.log('from weight unit ', fromWeightUnit);
        //console.log('toweightUnit ', toWeightUnit);
        let weight = convertWeight(cartWeight, fromWeightUnit, toWeightUnit);
        totalWeight = totalWeight + (quantity * weight);
        }
        
        //console.log('totalWeight ', totalWeight);
      }
    }).catch((error) => {
      console.error(error);
    });
  }


  //console.log('totalWeight ', totalWeight);
  //console.log('weight min', weightMin);

  categoryLimitFields.forEach(item => {
    const valueParts = item.metafield.value.split(',');
    const category = valueParts[0]; // Extract category name
    const minValue = valueParts[1]; // Extract minimum value
    const maxValue = valueParts[2];
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
    if (!categoriesWithMaxValues[category]) {
      categoriesWithMaxValues[category] = maxValue;
    }
  });

  //console.log('category product ids in extension', categoriesWithProducts);
  //console.log('category min values extenison', categoriesWithMinValues);

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

  //console.log('totalCategriesquantities', totalCategoriesQuantity);





  let categoryErrors = [];

  Object.keys(categoriesWithMinValues).forEach(category => {
    const minQuantity = Number(categoriesWithMinValues[category]);
    const maxQuantity = Number(categoriesWithMaxValues[category]);
    const totalQuantity = totalCategoriesQuantity[category] || 0;
    //console.log('minQuantity in object', minQuantity);
    if (totalQuantity < minQuantity) {

      let msg = errorMsgs?.categoryMinErrMsg
        ? errorMsgs.categoryMinErrMsg.replace("{categoryMin}", minQuantity).replace("{categoryName}", category)
        : `You have to select minimun ${minQuantity} products from the category "${category}".`;

      categoryErrors.push(msg);
    } else if (totalQuantity > maxQuantity && maxQuantity != 0) {
      let msg = errorMsgs.categoryMaxErrMsg
        ? errorMsgs.categoryMaxErrMsg.replace("{categoryMax}", maxQuantity).replace("{categoryName}", category)
        : `Can't select more than ${maxQuantity} products from the category "${category}".`
      categoryErrors.push(msg);
    }
  });
  categoryErrors = categoryErrors.join(' and ');

  console.log('category errors ', categoryErrors);

  //collection wise min limit
  const collectionsWithProducts = {};
  const collectionsWithMinValues = {};
  const collectionsWithMaxValues = {};

  collectionLimitFields.forEach(item => {
    const valueParts = item.metafield.value.split(',');
    const collection = valueParts[0]; // Extract collection name
    const minValue = valueParts[1]; // Extract minimum value
    const maxValue = valueParts[2]; // Extract minimum value
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
    if (!collectionsWithMaxValues[collection]) {
      collectionsWithMaxValues[collection] = maxValue;
    }
  });

  //console.log('collection product ids in extension', collectionsWithProducts);
  //console.log('collection min values extenison', collectionsWithMinValues);

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

  //console.log('totalCollectionsquantities', totalCollectionsQuantity);

  let collectionErrors = [];

  Object.keys(collectionsWithMinValues).forEach(collection => {
    const minQuantity = Number(collectionsWithMinValues[collection]);
    const maxQuantity = Number(collectionsWithMaxValues[collection]);
    const totalQuantity = totalCollectionsQuantity[collection] || 0;
    //console.log('minQuantity of collection in object', minQuantity);
    if (totalQuantity < minQuantity) {

      let msg = errorMsgs?.collectionMinErrMsg
        ? errorMsgs.collectionMinErrMsg.replace("{collectionMin}", minQuantity).replace("{collectionName}", collection)
        : `You have to select minimun ${minQuantity} products from the collection "${collection}".`;

      collectionErrors.push(msg);
    } else if (totalQuantity > maxQuantity && maxQuantity != 0) {
      let msg = errorMsgs.collectionMaxErrMsg
        ? errorMsgs.collectionMaxErrMsg.replace("{collectionMax}", maxQuantity).replace("{collectionName}", collection)
        : `Can't select more than ${maxQuantity} products from the collection "${collection}".`
      collectionErrors.push(msg);
    }
  });

  collectionErrors = collectionErrors.join(' and ');
  //console.log('collection errors in extension ', collectionErrors);

  //vendor wise min limit
  const vendorsWithProducts = {};
  const vendorsWithMinValues = {};
  const vendorsWithMaxValues = {};


  productLimitFields.forEach(item => {
    const [productMin, productMax, vendorName, vendorMin, vendorMax] = item.metafield.value.split(',');
    if (isNaN(vendorName)) {
      const vendor = vendorName; // Extract vendor name
      const minValue = vendorMin; // Extract minimum value
      const maxValue = vendorMax; // Extract minimum value
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
      // Set the minimum value for the category in categoriesWithMinValues
      if (!vendorsWithMaxValues[vendor]) {
        vendorsWithMaxValues[vendor] = maxValue;
      }
    }
  });

  //console.log('venodor product ids in extension', vendorsWithProducts);
  //console.log('vendor min values extenison', vendorsWithMinValues);

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

  //console.log('totalVendorsquantities', totalVendorsQuantity);

  let vendorErrors = [];

  if (vendorsWithMinValues) {

    Object.keys(vendorsWithMinValues).forEach(vendor => {
      const minQuantity = Number(vendorsWithMinValues[vendor]);
      const maxQuantity = Number(vendorsWithMaxValues[vendor]);
      const totalQuantity = totalVendorsQuantity[vendor] || 0;
      //console.log('minQuantity of vendor in object', minQuantity);
      if (totalQuantity < minQuantity) {

        let msg = errorMsgs?.vendorMinErrMsg
          ? errorMsgs.vendorMinErrMsg.replace("{vendorMin}", minQuantity).replace("{vendorName}", vendor)
          : `You have to select minimun ${minQuantity} products from the vendor "${vendor}".`;

        vendorErrors.push(msg);
      } else if (totalQuantity > maxQuantity && maxQuantity != 0) {
        let msg = errorMsgs.vendorMaxErrMsg
          ? errorMsgs.vendorMaxErrMsg.replace("{vendorMax}", maxQuantity).replace("{vendorName}", vendor)
          : `Can't select more than ${maxQuantity} products from the vendor "${vendor}".`;
        vendorErrors.push(msg);
      }
    });

    vendorErrors = vendorErrors.join(' and ');
    //console.log('vendor errors in extension ', vendorErrors);

  }

  //console.log('priceMin ', priceMin);

  useBuyerJourneyIntercept(({ canBlockProgress }) => {
  if (errorMsgs?.extensionMsg === "Checkout Extension" || errorMsgs?.extensionMsg === "Both") {
    console.log('category errors in useBuyer ', categoryErrors);
    console.log('canBlockProgress in useBuyer ', canBlockProgress);

    // Check minimum product quantity
    if (canBlockProgress && totalQuantity < storeMin && storeMin > 0) {
      return {
        behavior: "block",
        reason: "Minimum products quantity required",
        errors: [
          {
            message:
              errorMsgs?.shopMinErrMsg
                ? errorMsgs.shopMinErrMsg.replace("{shopMin}", storeMin)
                : `Minimum ${storeMin} products are required for checkout`,
          },
        ],
      };
    } else if (canBlockProgress && totalQuantity > storeMax && storeMax > 0) {
      return {
        behavior: "block",
        reason: "Maximum products quantity reached",
        errors: [
          {
            message:
              errorMsgs?.shopMaxErrMsg
                ? errorMsgs.shopMaxErrMsg.replace("{shopMax}", storeMax)
                : `Cart exceeds ${storeMax} products. Please remove some items`,
          },
        ],
      };
    }

    // Check currency code mismatch
    if (cartCurrencyCode !== generalLimiters?.currencyCode && errorMsgs?.plan) {
      return {
        behavior: "block",
        reason: "Correct currency code is required",
        errors: [
          {
            message: `Please change your shopping currency to ${generalLimiters?.currencyCode} to proceed with checkout`,
          },
        ],
      };
    } else {
      if (canBlockProgress && totalAmountValue < Number(generalLimiters?.priceMin) && Number(generalLimiters?.priceMin) > 0) {
        return {
          behavior: "block",
          reason: "Minimum price required",
          errors: [
            {
              message:
                errorMsgs?.priceMinErrMsg
                  ? errorMsgs.priceMinErrMsg.replace("{priceMin}", generalLimiters?.priceMin).replace("{currencyCode}", generalLimiters?.currencyCode)
                  : `Minimum amount ${generalLimiters?.priceMin} ${generalLimiters?.currencyCode} is required for checkout.`,
            },
          ],
        };
      } else if (canBlockProgress && totalAmountValue > Number(generalLimiters?.priceMax) && Number(generalLimiters?.priceMax) > 0) {
        return {
          behavior: "block",
          reason: "Maximum price reached",
          errors: [
            {
              message:
                errorMsgs?.priceMaxErrMsg
                  ? errorMsgs.priceMaxErrMsg.replace("{priceMax}", generalLimiters.priceMax).replace("{currencyCode}", generalLimiters?.currencyCode)
                  : `Cart exceeds amount ${generalLimiters.priceMax} ${generalLimiters?.currencyCode}. Please remove some items.`,
            },
          ],
        };
      }
    }

    // Check minimum and maximum weight
    if (canBlockProgress && totalWeight < Number(generalLimiters?.weightMin)) {
      return {
        behavior: "block",
        reason: "Minimum weight required",
        errors: [
          {
            message:
              errorMsgs?.weightMinErrMsg
                ? errorMsgs.weightMinErrMsg.replace("{weightMin}", generalLimiters?.weightMin).replace("{weightUnit}", generalLimiters?.weightUnit.toLowerCase())
                : `Minimum weight ${generalLimiters?.weightMin} ${generalLimiters?.weightUnit.toLowerCase()} is required for checkout`,
          },
        ],
      };
    } else if (canBlockProgress && totalWeight > Number(generalLimiters?.weightMax)) {
      return {
        behavior: "block",
        reason: "Maximum weight exceeded",
        errors: [
          {
            message:
              errorMsgs?.weightMaxErrMsg
                ? errorMsgs.weightMaxErrMsg.replace("{weightMax}", generalLimiters?.weightMax).replace("{weightUnit}", generalLimiters?.weightUnit.toLowerCase())
                : `Cart exceeds weight ${generalLimiters?.weightMax} ${generalLimiters?.weightUnit.toLowerCase()}. Please remove some items`,
          },
        ],
      };
    }

    // Check for vendor errors
    if (canBlockProgress && vendorErrors) {
      return {
        behavior: "block",
        reason: "Vendor error",
        errors: [
          {
            message: vendorErrors,
          },
        ],
      };
    }

    // Check for collection errors
    if (canBlockProgress && collectionErrors) {
      return {
        behavior: "block",
        reason: "Collection error",
        errors: [
          {
            message: collectionErrors,
          },
        ],
      };
    }

    // Check for category errors
    if (canBlockProgress && categoryErrors) {
      return {
        behavior: "block",
        reason: "Category error",
        errors: [
          {
            message: categoryErrors,
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


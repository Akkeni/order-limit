// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {


  const errors = [];

  // Create a map to store the total quantity for each category
  const categoryQuantities = new Map();
  const collectionQuantities = new Map();
  const vendorQuantities = new Map();


  let errorMessagesFieldValue = {}
  if (input.shop.errorMsgsField) {
    errorMessagesFieldValue = JSON.parse(input.shop?.errorMsgsField?.value);
  }

  let generalLimiters = {}
  if (input.shop.generalLimitersField) {
    generalLimiters = JSON.parse(input.shop?.generalLimitersField?.value);
  }

  //console.log(generalLimiters);

  for (const line of input.cart.lines) {
    const { quantity, merchandise } = line;

    // Check store limit
    if (input.shop.storeLimitField) {
      const storeLimit = input.shop.storeLimitField.value;
      const [shopMin, shopMax] = storeLimit.split(',').map(Number);
      const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

      if (shopMin > totalQuantity && shopMin !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.shopMinErrMsg
            ? errorMessagesFieldValue.shopMinErrMsg.replace("{shopMin}", shopMin)
            : `Minmum ${shopMin} products are required for checkout`,
          target: "cart",
        });

      } else if (totalQuantity > shopMax && shopMax !== 0) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.shopMaxErrMsg
            ? errorMessagesFieldValue.shopMaxErrMsg.replace("{shopMax}", shopMax)
            : `Cart exceeds ${shopMax} number of products. please remove some items`,
          target: "cart",
        });

      }
    }

    // Check price limit
    if (generalLimiters) {

      //const priceLimit = input.shop.priceLimitField.value;
      //const priceMin = priceLimit.split(',')[0];
      //const priceMax = priceLimit.split(',')[1];
      const totalAmount = Number(input.cart?.cost?.totalAmount?.amount);
      console.log('priceMin ', Number(generalLimiters?.priceMin));

      if (totalAmount < Number(generalLimiters?.priceMin) && Number(generalLimiters?.priceMin) !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.priceMinErrMsg
            ? errorMessagesFieldValue.priceMinErrMsg.replace("{priceMin}", generalLimiters?.priceMin)
            : `Minimum amount ${generalLimiters?.priceMin} is required for checkout`,
          target: "cart",
        });

      } else if (totalAmount > Number(generalLimiters?.priceMax) && Number(generalLimiters?.priceMax) !== 0) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.priceMaxErrMsg
            ? errorMessagesFieldValue.priceMaxErrMsg.replace("{priceMax}", generalLimiters?.priceMax)
            : `Cart exceeds amount ${generalLimiters?.priceMax} please remove some items`,
          target: "cart",
        });

      }
    }




    // Check if merchandise is a ProductVariant
    if (merchandise.__typename === "ProductVariant") {
      const { product } = merchandise;

      //check weight limit
      // Calculate total weight of items in the cart
      const cartLines = input.cart.lines;
      let totalWeight = 0;

      cartLines.forEach(line => {
        const quantity = Number(line.quantity);
        let weight = Number(merchandise?.weight);
        const weightUnit = merchandise?.weightUnit;
        //converting into Kilograms
        if(weightUnit == "POUNDS" || weightUnit.toLowerCase() == "pounds") {
          weight = weight * 0.453592;
        } else if (weightUnit == "OUNCES" || weightUnit.toLowerCase() == "ounces") {
          weight = weight * 0.0283495231;
        } else if (weightUnit == "GRAMS" || weightUnit.toLowerCase() == "grams") {
          weight = weight * 0.001;
        }
        if (weight) {
          totalWeight += quantity * weight;
        }
      });

      // Parse the weightLimitField
      if (generalLimiters) {

        //const weightLimitField = input.shop?.weightLimitField?.value;
        //const [weightMin, weightMax] = weightLimitField.split(',').map(Number);


        if (Number(generalLimiters?.weightMin) > totalWeight && Number(generalLimiters?.weightMin) !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.weightMinErrMsg
              ? errorMessagesFieldValue.weightMinErrMsg.replace("{weightMin}", generalLimiters?.weightMin)
              : `Minmum weight ${generalLimiters?.weightMin} kilograms is required for checkout`,
            target: "cart",
          });

        } else if (totalWeight > Number(generalLimiters?.weightMax) && Number(generalLimiters?.weightMax) !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.weightMaxErrMsg
              ? errorMessagesFieldValue.weightMaxErrMsg.replace("{weightMax}", generalLimiters?.weightMax)
              : `Cart exceeds weight ${generalLimiters?.weightMax} kilograms please remove some items`,
            target: "cart",
          });

        }
      }

      console.log(totalWeight);

      // Check if product has category information
      if (product.categoryLimitField) {

        const [categoryName, categoryMin, categoryMax] = product.categoryLimitField.value.split(',');


        // Update categoryQuantities map with quantity for current category
        if (categoryQuantities.has(categoryName)) {
          categoryQuantities.set(categoryName, categoryQuantities.get(categoryName) + quantity);
        } else {
          categoryQuantities.set(categoryName, quantity);
        }

        // Check if total quantity exceeds category limit
        if (Number(categoryQuantities.get(categoryName)) > Number(categoryMax) && Number(categoryMax) !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.categoryMaxErrMsg
              ? errorMessagesFieldValue.categoryMaxErrMsg.replace("{categoryMax}", categoryMax).replace("{categoryName}", categoryName)
              : `Can't select more than ${categoryMax} products from the category "${categoryName}".`,
            target: "cart",
          });

        } else if (Number(categoryQuantities.get(categoryName)) < Number(categoryMin) && Number(categoryMin) !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.categoryMinErrMsg
              ? errorMessagesFieldValue.categoryMinErrMsg.replace("{categoryMin}", categoryMin).replace("{categoryName}", categoryName)
              : `You have to select minimun ${categoryMin} products from the category "${categoryName}".`,
            target: "cart",
          });

        }
      }

      // Check if product has collection information
      if (product.collectionLimitField) {

        const [collectionName, collectionMin, collectionMax] = product.collectionLimitField.value.split(',');


        // Update categoryQuantities map with quantity for current collection
        if (collectionQuantities.has(collectionName)) {
          collectionQuantities.set(collectionName, collectionQuantities.get(collectionName) + quantity);
        } else {
          collectionQuantities.set(collectionName, quantity);
        }

        // Check if total quantity exceeds collection limit
        if (Number(collectionQuantities.get(collectionName)) > Number(collectionMax) && Number(collectionMax) !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.collectionMaxErrMsg
              ? errorMessagesFieldValue.collectionMaxErrMsg.replace("{collectionMax}", collectionMax).replace("{collectionName}", collectionName)
              : `Can't select more than ${collectionMax} products from the collection "${collectionName}".`,
            target: "cart",
          });

        } else if (Number(collectionQuantities.get(collectionName)) < Number(collectionMin) && Number(collectionMin) !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.collectionMinErrMsg
              ? errorMessagesFieldValue.collectionMinErrMsg.replace("{collectionMin}", collectionMin).replace("{collectionName}", collectionName)
              : `You have to select minimun ${collectionMin} products from the collection "${collectionName}".`,
            target: "cart",
          });

        }
      }

      // Check if product has collection information
      if (product.productLimitField) {

        const [productMin, productMax, vendorName, vendorMin, vendorMax] = product.productLimitField.value.split(',');

        if (vendorName !== '0') {

          // Update vendorQuantities map with quantity for current collection
          if (vendorQuantities.has(vendorName)) {
            vendorQuantities.set(vendorName, vendorQuantities.get(vendorName) + quantity);
          } else {
            vendorQuantities.set(vendorName, quantity);
          }

          // Check if total quantity exceeds collection limit
          if (Number(vendorQuantities.get(vendorName)) > Number(vendorMax) && Number(vendorMax) !== 0) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.vendorMaxErrMsg
                ? errorMessagesFieldValue.vendorMaxErrMsg.replace("{vendorMax}", vendorMax).replace("{collectionName}", vendorName)
                : `Can't select more than ${vendorMax} products from the vendor "${vendorName}".`,
              target: "cart",
            });

          } else if (Number(vendorQuantities.get(vendorName)) < Number(vendorMin) && Number(vendorMin) !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.vendorMinErrMsg
                ? errorMessagesFieldValue.vendorMinErrMsg.replace("{vendorMin}", vendorMin).replace("{vendorName}", vendorName)
                : `You have to select minimun ${vendorMin} products from the vendor "${vendorName}".`,
              target: "cart",
            });

          }
        }
      }



      // Check product limit
      if (merchandise.productVariantLimitField) {

        //const productName = product?.title;
        const [productVariantMin, productVariantMax] = merchandise.productVariantLimitField.value.split(',').map(Number);

        if (quantity > productVariantMax && productVariantMax !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.variantMaxErrMsg
              ? errorMessagesFieldValue.variantMaxErrMsg.replace("{productVariantMax}", productVariantMax).replace(" {productName}", '.')
              : `Quantity limit reached, you can't select more than ${productVariantMax}.`,
            target: "cart",
          });

        } else if (quantity < productVariantMin && productVariantMin !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.variantMinErrMsg
              ? errorMessagesFieldValue.variantMinErrMsg.replace("{productVariantMin}", productVariantMin).replace(" {productName}", '.')
              : `You can't select less than ${productVariantMin} for this product variant`,
            target: "cart",
          });

        }
      } else if (product.productLimitField) {

        
        //const productName = product?.title;
        //console.log('productName ', productName);
        const [productMin, productMax] = product.productLimitField.value.split(',').map(Number);
        const [productM, productMa, vendorName, vendorMin, vendorMax, productName] = product.productLimitField.value.split(',');

        if (quantity > productMax && productMax !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.productMaxErrMsg
              ? errorMessagesFieldValue.productMaxErrMsg.replace("{productMax}", productMax).replace("{productName}", productName)
              : `Quantity limit reached, you can't select more than ${productMax} for ${productName}.`,
            target: "cart",
          });

        } else if (quantity < productMin && productMin !== 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.productMinErrMsg
              ? errorMessagesFieldValue.productMinErrMsg.replace("{productMin}", productMin).replace("{productName}", productName)
              : `You can't select less than ${productMin} for ${productName}.`,
            target: "cart",
          });

        }
      }
    }

  }

  return {
    errors
  }
};
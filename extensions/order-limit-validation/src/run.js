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

  
  let errorMessagesFieldValue = {}
  if(input.shop.errorMsgsField) {
    errorMessagesFieldValue = JSON.parse(input.shop?.errorMsgsField?.value);
  }
  


  for (const line of input.cart.lines) {
    const { quantity, merchandise } = line;

    // Check store limit
    if (input.shop.storeLimitField) {
      const storeLimit = input.shop.storeLimitField.value;
      const [shopMin, shopMax] = storeLimit.split(',').map(Number);
      const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

      /*if (shopMin > totalQuantity && shopMin !== 0) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.shopMinErrMsg
          ? errorMessagesFieldValue.shopMinErrMsg.replace("{shopMin}", shopMin)
          : `Minmum ${shopMin} products are required for checkout`,
          target: "cart",
        });

      } else*/ if (totalQuantity > shopMax && shopMax !== 0) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.shopMaxErrMsg
          ? errorMessagesFieldValue.shopMaxErrMsg.replace("{shopMax}", shopMax)
          : `Cart exceeds ${shopMax} number of products. please remove some items`,
          target: "cart",
        });

      }
    }

    // Check price limit
    if (input.shop.priceLimitField) {

      const priceLimit = input.shop.priceLimitField.value;
      const priceMin = priceLimit.split(',')[0];
      const priceMax = priceLimit.split(',')[1];
      const totalAmount = Number(input.cart?.cost?.totalAmount?.amount);
      console.log(errorMessagesFieldValue["priceMinErrMsg"]);

      /*if (totalAmount < Number(priceMin) && Number(priceMin) !== 0) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.priceMinErrMsg
          ? errorMessagesFieldValue.priceMinErrMsg.replace("{priceMin}", priceMin)
          : `Minimum amount ${priceMin} is required for checkout`,
          target: "cart",
        });

      } else*/ if (totalAmount > Number(priceMax) && Number(priceMax) !== 0) {

        errors.push({
          localizedMessage: errorMessagesFieldValue?.priceMaxErrMsg
          ? errorMessagesFieldValue.priceMaxErrMsg.replace("{priceMax}", priceMax)
          : `Cart exceeds amount ${priceMax} please remove some items`,
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
        const weight = Number(merchandise?.weight);
        if (weight) {
          totalWeight += quantity * weight;
        }
      });

      // Parse the weightLimitField
      if (input.shop?.weightLimitField?.value) {

        const weightLimitField = input.shop?.weightLimitField?.value;
        const [weightMin, weightMax] = weightLimitField.split(',').map(Number);


        /*if (weightMin > totalWeight && weightMin !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.weightMinErrMsg
            ? errorMessagesFieldValue.weightMinErrMsg.replace("{weightMin}", weightMin)
            : `Minmum weight ${weightMin} is required for checkout`,
            target: "cart",
          });

        } else*/ if (totalWeight > weightMax && weightMax !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.weightMaxErrMsg
            ? errorMessagesFieldValue.weightMaxErrMsg.replace("{weightMax}", weightMax)
            : `Cart exceeds weight ${weightMax} please remove some items`,
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

        } /*else if (Number(categoryQuantities.get(categoryName)) < Number(categoryMin) && Number(categoryMin) !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.categoryMinErrMsg
            ? errorMessagesFieldValue.categoryMinErrMsg.replace("{categoryMin}", categoryMin).replace("{categoryName}", categoryName)
            : `You have to select minimun ${categoryMin} products from the category "${categoryName}".`,
            target: "cart",
          });

        }*/
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

        } /*else if (Number(collectionQuantities.get(collectionName)) < Number(collectionMin) && Number(collectionMin) !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.collectionMinErrMsg
            ? errorMessagesFieldValue.collectionMinErrMsg.replace("{collectionMin}", collectionMin).replace("{collectionName}", collectionName)
            : `You have to select minimun ${collectionMin} products from the collection "${collectionName}".`,
            target: "cart",
          });

        }*/
      }



      // Check product limit
      if (merchandise.productVariantLimitField) {

        const productVariantLimit = parseInt(merchandise.productVariantLimitField.value);
        const [productVariantMin, productVariantMax] = merchandise.productVariantLimitField.value.split(',').map(Number);

        if (quantity > productVariantMax && productVariantMax !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.variantMaxErrMsg
            ? errorMessagesFieldValue.variantMaxErrMsg.replace("{productVariantMax}", productVariantMax)
            : `Quantity limit reached, you can't select more than ${productVariantMax}.`,
            target: "cart",
          });

        } /*else if (quantity < productVariantMin && productVariantMin !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.variantMinErrMsg
            ? errorMessagesFieldValue.variantMinErrMsg.replace("{productVariantMin}", productVariantMin)
            : `you can't select less than ${productVariantMin} for this product variant.`,
            target: "cart",
          });

        }*/
      } else if (product.productLimitField) {

        const productLimit = parseInt(product.productLimitField.value);
        const [productMin, productMax] = product.productLimitField.value.split(',').map(Number);

        if (quantity > productMax && productMax !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.productMaxErrMsg
            ? errorMessagesFieldValue.productMaxErrMsg.replace("{productMax}", productMax)
            : `Quantity limit reached, you can't select more than ${productMax}.`,
            target: "cart",
          });

        } /*else if (quantity < productMin && productMin !== 0) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.productMinErrMsg
            ? errorMessagesFieldValue.productMinErrMsg.replace("{productMin}", productMin)
            : `you can't select less than ${productMin} for this product.`,
            target: "cart",
          });
          
        }*/
      }
    }

  }
  /*const errors = input.cart.lines
    .filter(({ quantity }) => quantity > 1)
    .map(() => ({
      localizedMessage: "Not possible to order more than one of each",
      target: "cart",
    }));*/

  return {
    errors
  }
};
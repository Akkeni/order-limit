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


  const vendorErrors = [];
  const collectionErrors = [];
  const categoryErrors = [];
  const productErrors = [];
  const generalErrors = [];
  let errors = [];




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


  if (input.buyerJourney.step !== "CART_INTERACTION") {

    for (const line of input.cart.lines) {
      const { quantity, merchandise } = line;

      // Check store limit
      if (input.shop.storeLimitField) {
        const storeLimit = input.shop.storeLimitField.value;
        const [shopMin, shopMax] = storeLimit.split(',').map(Number);
        const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

        if (shopMin > totalQuantity && shopMin > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.shopMinErrMsg
              ? errorMessagesFieldValue.shopMinErrMsg.replace("{shopMin}", shopMin)
              : `Minmum ${shopMin} products are required for checkout`,
            target: "cart",
          });

          break;

        } else if (totalQuantity > shopMax && shopMax > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

          errors.push({
            localizedMessage: errorMessagesFieldValue?.shopMaxErrMsg
              ? errorMessagesFieldValue.shopMaxErrMsg.replace("{shopMax}", shopMax)
              : `Cart exceeds ${shopMax} products. Please remove some items`,
            target: "cart",
          });

          break;

        }
      }

      // Check price limit
      if (generalLimiters) {

        const totalAmount = Number(input.cart?.cost?.totalAmount?.amount);
        const cartCurrencyCode = input.cart?.cost?.totalAmount?.currencyCode;
        const appliedCurrencyCode = generalLimiters?.currencyCode;

        if (cartCurrencyCode != appliedCurrencyCode && errorMessagesFieldValue?.plan == true) {

          errors.push({
            localizedMessage: `Please change your shopping currency to ${appliedCurrencyCode} to proceed with checkout`,
            target: "cart",
          });

          break;

        } else {

          if (totalAmount < Number(generalLimiters?.priceMin) && Number(generalLimiters?.priceMin) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.priceMinErrMsg
                ? errorMessagesFieldValue.priceMinErrMsg.replace("{priceMin}", generalLimiters?.priceMin).replace("{currencyCode}", appliedCurrencyCode)
                : `Minimum amount ${generalLimiters?.priceMin} ${appliedCurrencyCode} is required for checkout`,
              target: "cart",
            });

            break;

          } else if (totalAmount > Number(generalLimiters?.priceMax) && Number(generalLimiters?.priceMax) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.priceMaxErrMsg
                ? errorMessagesFieldValue.priceMaxErrMsg.replace("{priceMax}", generalLimiters?.priceMax).replace("{currencyCode}", appliedCurrencyCode)
                : `Cart exceeds amount ${generalLimiters?.priceMax} ${appliedCurrencyCode} please remove some items`,
              target: "cart",
            });

            break;

          }
        }
      }




      // Check if merchandise is a ProductVariant
      if (merchandise.__typename === "ProductVariant") {
        const { product } = merchandise;

        //check weight limit
        // Calculate total weight of items in the cart
        const cartLines = input.cart.lines;
        let totalWeight = 0;

        const convertWeight = (value, fromUnit, toUnit) => {
          let grams;
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


        cartLines.forEach(line => {
          const quantity = Number(line.quantity);
          let cartWeight = Number(merchandise?.weight);
          const fromWeightUnit = merchandise?.weightUnit;
          const toWeightUnit = generalLimiters?.weightUnit;
          let weight = convertWeight(cartWeight, fromWeightUnit, toWeightUnit);

          if (weight) {
            totalWeight += quantity * weight;
          }
        });

        // Parse the weightLimitField
        if (generalLimiters) {

          if (Number(generalLimiters?.weightMin) > totalWeight && Number(generalLimiters?.weightMin) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.weightMinErrMsg
                ? errorMessagesFieldValue.weightMinErrMsg.replace("{weightMin}", generalLimiters?.weightMin).replace("{weightUnit}", generalLimiters?.weightUnit.toLowerCase())
                : `Minmum weight ${generalLimiters?.weightMin} ${generalLimiters?.weightUnit.toLowerCase()} is required for checkout`,
              target: "cart",
            });

            break;

          } else if (totalWeight > Number(generalLimiters?.weightMax) && Number(generalLimiters?.weightMax) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.weightMaxErrMsg
                ? errorMessagesFieldValue.weightMaxErrMsg.replace("{weightMax}", generalLimiters?.weightMax).replace("{weightUnit}", generalLimiters?.weightUnit.toLowerCase())
                : `Cart exceeds weight ${generalLimiters?.weightMax} ${generalLimiters?.weightUnit.toLowerCase()} please remove some items`,
              target: "cart",
            });

            break;

          }
        }

        // Check if product has vendor information
        if (product.productLimitField) {

          const [productMin, productMax, vendorName, vendorMin, vendorMax, productName] = product.productLimitField.value.split(',');

          if (vendorName !== '0') {

            // Update vendorQuantities map with quantity for current collection
            if (vendorQuantities.has(vendorName)) {
              vendorQuantities.set(vendorName, vendorQuantities.get(vendorName) + quantity);
            } else {
              vendorQuantities.set(vendorName, quantity);
            }

            // Check if total quantity exceeds collection limit
            if (Number(vendorQuantities.get(vendorName)) > Number(vendorMax) && Number(vendorMax) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

              errors.push({
                localizedMessage: errorMessagesFieldValue?.vendorMaxErrMsg
                  ? errorMessagesFieldValue.vendorMaxErrMsg.replace("{vendorMax}", vendorMax).replace("{vendorName}", vendorName)
                  : `Can't select more than ${vendorMax} products from the vendor "${vendorName}".`,
                target: "vendor",
              });


            } else if (Number(vendorQuantities.get(vendorName)) < Number(vendorMin) && Number(vendorMin) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

              errors.push({
                localizedMessage: errorMessagesFieldValue?.vendorMinErrMsg
                  ? errorMessagesFieldValue.vendorMinErrMsg.replace("{vendorMin}", vendorMin).replace("{vendorName}", vendorName)
                  : `You have to select minimun ${vendorMin} products from the vendor "${vendorName}".`,
                target: "vendor",
              });



            }
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
          if (Number(collectionQuantities.get(collectionName)) > Number(collectionMax) && Number(collectionMax) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.collectionMaxErrMsg
                ? errorMessagesFieldValue.collectionMaxErrMsg.replace("{collectionMax}", collectionMax).replace("{collectionName}", collectionName)
                : `Can't select more than ${collectionMax} products from the collection "${collectionName}".`,
              target: "collection",
            });



          } else if (Number(collectionQuantities.get(collectionName)) < Number(collectionMin) && Number(collectionMin) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.collectionMinErrMsg
                ? errorMessagesFieldValue.collectionMinErrMsg.replace("{collectionMin}", collectionMin).replace("{collectionName}", collectionName)
                : `You have to select minimun ${collectionMin} products from the collection "${collectionName}".`,
              target: "collection",
            });


          }
        }

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
          if (Number(categoryQuantities.get(categoryName)) > Number(categoryMax) && Number(categoryMax) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.categoryMaxErrMsg
                ? errorMessagesFieldValue.categoryMaxErrMsg.replace("{categoryMax}", categoryMax).replace("{categoryName}", categoryName)
                : `Can't select more than ${categoryMax} products from the category "${categoryName}".`,
              target: "category",
            });



          } else if (Number(categoryQuantities.get(categoryName)) < Number(categoryMin) && Number(categoryMin) > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.categoryMinErrMsg
                ? errorMessagesFieldValue.categoryMinErrMsg.replace("{categoryMin}", categoryMin).replace("{categoryName}", categoryName)
                : `You have to select minimun ${categoryMin} products from the category "${categoryName}".`,
              target: "category",
            });



          }
        }


        // Check product limit
        if (merchandise.productVariantLimitField) {

          const productName = product?.title;
          const [productVariantMin, productVariantMax] = merchandise.productVariantLimitField.value.split(',').map(Number);

          if (quantity > productVariantMax && productVariantMax > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMaxErrMsg
                ? errorMessagesFieldValue.variantMaxErrMsg.replace("{productVariantMax}", productVariantMax).replace(" {productName}", productName)
                : `Quantity limit reached, you can't select more than ${productVariantMax}.`,
              target: "product",
            });

          } else if (quantity < productVariantMin && productVariantMin > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMinErrMsg
                ? errorMessagesFieldValue.variantMinErrMsg.replace("{productVariantMin}", productVariantMin).replace(" {productName}", productName)
                : `You can't select less than ${productVariantMin} for this product variant`,
              target: "product",
            });


          }
        } else if (product.productLimitField) {

          const [productMin, productMax] = product.productLimitField.value.split(',').map(Number);
          const [productM, productMa, vendorName, vendorMin, vendorMax, productName] = product.productLimitField.value.split(',');

          if (quantity > productMax && productMax > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.productMaxErrMsg
                ? errorMessagesFieldValue.productMaxErrMsg.replace("{productMax}", productMax).replace("{productName}", productName)
                : `Quantity limit reached, you can't select more than ${productMax} for ${productName}.`,
              target: "product",
            });


          } else if (quantity < productMin && productMin > 0 && (errorMessagesFieldValue?.extensionMsg === "Cart Extension" || errorMessagesFieldValue?.extensionMsg === "Both")) {

            errors.push({
              localizedMessage: errorMessagesFieldValue?.productMinErrMsg
                ? errorMessagesFieldValue.productMinErrMsg.replace("{productMin}", productMin).replace("{productName}", productName)
                : `You can't select less than ${productMin} for ${productName}.`,
              target: "product",
            });

          }
        }
      }

    }

    for (const msg of errors) {

      if (msg.target === "vendor") {
        vendorErrors.push({
          localizedMessage: msg.localizedMessage,
          target: "cart",
        });
      } else if (msg.target === "collection") {
        collectionErrors.push({
          localizedMessage: msg.localizedMessage,
          target: "cart",
        });
      } else if (msg.target === "category") {
        categoryErrors.push({
          localizedMessage: msg.localizedMessage,
          target: "cart",
        });
      } else if (msg.target === "product") {
        productErrors.push({
          localizedMessage: msg.localizedMessage,
          target: "cart",
        });
      } else {
        generalErrors.push({
          localizedMessage: msg.localizedMessage,
          target: "cart",
        })
      }
    }
  }

  if (generalErrors.length) {
    errors = generalErrors;
  } else if (vendorErrors.length) {
    errors = vendorErrors;
  } else if (collectionErrors.length) {
    errors = collectionErrors;
  } else if (categoryErrors.length) {
    errors = categoryErrors;
  } else if (productErrors.length) {
    errors = productErrors;
  }

  return {
    errors
  }

};
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

  const categoryQuantities = new Map();
  const collectionQuantities = new Map();
  const vendorQuantities = new Map();

  let isVariantLimitSet = false;
  let isProductLimitSet = false;
  let isCategoryLimitSet = false;
  let isCollectionLimitSet = false;
  let isVendorLimitSet = false;
  let isStoreLimitSet = false;


  let errorMessagesFieldValue = {};
  if (input.shop.errorMsgsField) {
    errorMessagesFieldValue = JSON.parse(input.shop.errorMsgsField.value);
  }

  let generalLimiters = {};
  if (input.shop.generalLimitersField) {
    generalLimiters = JSON.parse(input.shop.generalLimitersField.value);
  }

  const currentLocale = (input.localization.language.isoCode).toLowerCase();
  const selectedLocale = (errorMessagesFieldValue?.locale || '').toLowerCase();




  if (input.buyerJourney.step !== "CART_INTERACTION") {

    const checkPriceLimit = () => {
      if (generalLimiters) {
        const totalAmount = Number(input.cart?.cost?.totalAmount?.amount);
        const cartCurrencyCode = input.cart?.cost?.totalAmount?.currencyCode;
        const appliedCurrencyCode = generalLimiters?.currencyCode;

        if (cartCurrencyCode !== appliedCurrencyCode && errorMessagesFieldValue?.plan === true) {
          errors.push({
            localizedMessage: `Please change your shopping currency to ${appliedCurrencyCode} to proceed with checkout`,
            target: "cart",
          });
          return true;
        } else {
          if (totalAmount < Number(generalLimiters?.priceMin) && Number(generalLimiters?.priceMin) > 0) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.priceMinErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.priceMinErrMsg.replace("{priceMin}", generalLimiters?.priceMin).replace("{currencyCode}", appliedCurrencyCode)
                : `Minimum amount ${generalLimiters?.priceMin} ${appliedCurrencyCode} is required for checkout.`,
              target: "cart",
            });
            return true;
          } else if (totalAmount > Number(generalLimiters?.priceMax) && Number(generalLimiters?.priceMax) > 0) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.priceMaxErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.priceMaxErrMsg.replace("{priceMax}", generalLimiters?.priceMax).replace("{currencyCode}", appliedCurrencyCode)
                : `Cart exceeds amount ${generalLimiters?.priceMax} ${appliedCurrencyCode} please remove some items.`,
              target: "cart",
            });
            return true;
          }
        }
      }
      return false;
    };

    const convertWeight = (value, fromUnit, toUnit) => {
      let grams;
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
    };

    const checkWeightLimit = () => {
      if (generalLimiters) {
        const cartLines = input.cart.lines;
        let totalWeight = 0;

        cartLines.forEach(line => {
          const quantity = Number(line.quantity);
          const merchandise = line.merchandise;
          if (merchandise.__typename === "ProductVariant") {
            let cartWeight = Number(merchandise?.weight);
            const fromWeightUnit = merchandise?.weightUnit;
            const toWeightUnit = generalLimiters?.weightUnit;
            const weight = convertWeight(cartWeight, fromWeightUnit, toWeightUnit);

            if (weight) {
              totalWeight += quantity * weight;
            }
          }
        });

        if (Number(generalLimiters?.weightMin) > totalWeight && Number(generalLimiters?.weightMin) > 0) {
          errors.push({
            localizedMessage: errorMessagesFieldValue?.weightMinErrMsg && currentLocale === selectedLocale
              ? errorMessagesFieldValue.weightMinErrMsg.replace("{weightMin}", generalLimiters?.weightMin).replace("{weightUnit}", generalLimiters?.weightUnit.toLowerCase())
              : `Minimum weight ${generalLimiters?.weightMin} ${generalLimiters?.weightUnit.toLowerCase()} is required for checkout.`,
            target: "cart",
          });
          return true;
        } else if (totalWeight > Number(generalLimiters?.weightMax) && Number(generalLimiters?.weightMax) > 0) {
          errors.push({
            localizedMessage: errorMessagesFieldValue?.weightMaxErrMsg && currentLocale === selectedLocale
              ? errorMessagesFieldValue.weightMaxErrMsg.replace("{weightMax}", generalLimiters?.weightMax).replace("{weightUnit}", generalLimiters?.weightUnit.toLowerCase())
              : `Cart exceeds weight ${generalLimiters?.weightMax} ${generalLimiters?.weightUnit.toLowerCase()} please remove some items.`,
            target: "cart",
          });
          return true;
        }
      }
      return false;
    };

    if (checkPriceLimit() || checkWeightLimit()) {
      return { errors };
    }

    const checkMinLimit = (quantity, min) => {
      return (Number(min) > 0 && quantity < Number(min));
    };

    const checkMaxLimit = (quantity, max) => {
      return (Number(max) > 0 && quantity > Number(max));
    }

    //accumulateQuantities 
    for (const line of input.cart.lines) {
      const { quantity, merchandise } = line;

      if (merchandise.__typename === "ProductVariant") {
        const { product } = merchandise;

        if (product.categoryLimitField) {
          const [categoryName] = product.categoryLimitField.value.split(',');

          if (categoryQuantities.has(categoryName)) {
            categoryQuantities.set(categoryName, categoryQuantities.get(categoryName) + quantity);
          } else {
            categoryQuantities.set(categoryName, quantity);
          }
        }

        if (product.collectionLimitField) {
          const [collectionName] = product.collectionLimitField.value.split(',');

          if (collectionQuantities.has(collectionName)) {
            collectionQuantities.set(collectionName, collectionQuantities.get(collectionName) + quantity);
          } else {
            collectionQuantities.set(collectionName, quantity);
          }
        }

        if (product.productLimitField) {

          const [productMin, productMax, vendorName, vendorMin, vendorMax, productName] = product.productLimitField.value.split(',');

          if (vendorQuantities.has(vendorName)) {
            vendorQuantities.set(vendorName, vendorQuantities.get(vendorName) + quantity);
          } else {
            vendorQuantities.set(vendorName, quantity);
          }
        }
      }
    }

    //to check variant limit and then product limit
    for (const line of input.cart.lines) {
      const { quantity, merchandise } = line;

      if (merchandise.__typename === "ProductVariant") {
        const { product } = merchandise;

        if (merchandise.productVariantLimitField) {
          const productName = product?.title;
          const [productVariantMin, productVariantMax] = merchandise.productVariantLimitField.value.split(',').map(Number);

          if (productVariantMin > 0 || productVariantMax > 0) {
            isVariantLimitSet = true;
          }

          if (checkMaxLimit(quantity, productVariantMax)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMaxErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.variantMaxErrMsg.replace("{productVariantMax}", productVariantMax).replace(" {productName}", productName)
                : `Quantity limit reached, you can't select more than ${productVariantMax}.`,
              target: "cart",
            });
          } else if (checkMinLimit(quantity, productVariantMin)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMinErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.variantMinErrMsg.replace("{productVariantMin}", productVariantMin).replace(" {productName}", productName)
                : `You can't select less than ${productVariantMin} for this product variant.`,
              target: "cart",
            });
          }
        }

        if (!isVariantLimitSet) {
          if (product.productLimitField) {
            const [productMin, productMax, vendorName, vendorMin, vendorMax, productName] = product.productLimitField.value.split(',');

            if (Number(productMin) > 0 || Number(productMax) > 0) {
              isProductLimitSet = true;
            }

            if (checkMaxLimit(quantity, productMax)) {
              errors.push({
                localizedMessage: errorMessagesFieldValue?.productMaxErrMsg && currentLocale === selectedLocale
                  ? errorMessagesFieldValue.productMaxErrMsg.replace("{productMax}", productMax).replace("{productName}", productName)
                  : `Quantity limit reached, you can't select more than ${productMax} for ${productName}.`,
                target: "cart",
              });
            } else if (checkMinLimit(quantity, productMin)) {
              errors.push({
                localizedMessage: errorMessagesFieldValue?.productMinErrMsg && currentLocale === selectedLocale
                  ? errorMessagesFieldValue.productMinErrMsg.replace("{productMin}", productMin).replace("{productName}", productName)
                  : `You can't select less than ${productMin} for ${productName}.`,
                target: "cart",
              });
            }
          }
        }
      }
    }

    //to check category limit
    if (!isProductLimitSet && !isVariantLimitSet) {
      for (const line of input.cart.lines) {
        const { merchandise } = line;

        if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;

          if (product.categoryLimitField) {
            const [categoryName, categoryMin, categoryMax] = product.categoryLimitField.value.split(',');

            if (Number(categoryMin) > 0 || Number(categoryMax) > 0) {
              isCategoryLimitSet = true;
            }

            if (categoryName) {

              if (checkMaxLimit(Number(categoryQuantities.get(categoryName)), Number(categoryMax))) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.categoryMaxErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.categoryMaxErrMsg.replace("{categoryMax}", categoryMax).replace("{categoryName}", categoryName)
                    : `Can't select more than ${categoryMax} products from the category "${categoryName}".`,
                  target: "cart",
                });
              } else if (checkMinLimit(Number(categoryQuantities.get(categoryName)), Number(categoryMin))) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.categoryMinErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.categoryMinErrMsg.replace("{categoryMin}", categoryMin).replace("{categoryName}", categoryName)
                    : `You have to select minimun ${categoryMin} products from the category "${categoryName}".`,
                  target: "cart",
                });
              }
            }
          }
        }
      }
    }

    //to check collection limit
    if (!isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet) {
      for (const line of input.cart.lines) {
        const { merchandise } = line;

        if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;

          if (product.collectionLimitField) {
            const [collectionName, collectionMin, collectionMax] = product.collectionLimitField.value.split(',');

            if (Number(collectionMin) > 0 || Number(collectionMax) > 0) {
              isCollectionLimitSet = true;
            }

            if (collectionName) {

              if (checkMaxLimit(Number(collectionQuantities.get(collectionName)), Number(collectionMax))) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.collectionMaxErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.collectionMaxErrMsg.replace("{collectionMax}", collectionMax).replace("{collectionName}", collectionName)
                    : `Can't select more than ${collectionMax} products from the collection "${collectionName}".`,
                  target: "cart",
                });
              } else if (checkMinLimit(Number(collectionQuantities.get(collectionName)), Number(collectionMin))) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.collectionMinErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.collectionMinErrMsg.replace("{collectionMin}", collectionMin).replace("{collectionName}", collectionName)
                    : `You have to select minimun ${collectionMin} products from the collection "${collectionName}".`,
                  target: "cart",
                });
              }
            }
          }
        }
      }
    }

    if (!isCollectionLimitSet && !isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet) {
      for (const line of input.cart.lines) {
        const { merchandise } = line;

        if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;
          // Check if product has vendor information
          if (product.productLimitField) {

            const [productMin, productMax, vendorName, vendorMin, vendorMax, productName] = product.productLimitField.value.split(',');

            if (vendorName) {

              if (Number(vendorMin) > 0 || Number(vendorMax) > 0) {
                isVendorLimitSet = true;
              }

              if (checkMaxLimit(Number(vendorQuantities.get(vendorName)), vendorMax)) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.vendorMaxErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.vendorMaxErrMsg.replace("{vendorMax}", vendorMax).replace("{vendorName}", vendorName)
                    : `Can't select more than ${vendorMax} products from the vendor "${vendorName}".`,
                  target: "cart",
                });
              } else if (checkMinLimit(Number(vendorQuantities.get(vendorName)), vendorMin)) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.vendorMinErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.vendorMinErrMsg.replace("{vendorMin}", vendorMin).replace("{vendorName}", vendorName)
                    : `You have to select minimun ${vendorMin} products from the vendor "${vendorName}".`,
                  target: "cart",
                });

              }
            }
          }
        }
      }
    }

    if (!isVendorLimitSet && !isCollectionLimitSet && !isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet) {
      if (input.shop.storeLimitField) {
        const storeLimit = input.shop.storeLimitField.value;
        const [storeMin, storeMax] = storeLimit.split(',').map(Number);
        const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);


        if (checkMaxLimit(totalQuantity, storeMax)) {
          errors.push({
            localizedMessage: errorMessagesFieldValue?.shopMaxErrMsg && currentLocale === selectedLocale
              ? errorMessagesFieldValue.shopMaxErrMsg.replace("{shopMax}", storeMax)
              : `Cart exceeds ${storeMax} products. Please remove some items.`,
            target: "cart",
          });
        } else if (checkMinLimit(totalQuantity, storeMin)) {
          errors.push({
            localizedMessage: errorMessagesFieldValue?.shopMinErrMsg && currentLocale === selectedLocale
              ? errorMessagesFieldValue.shopMinErrMsg.replace("{shopMin}", storeMin)
              : `Minmum ${storeMin} products are required for checkout.`,
            target: "cart",
          });
        }
      }
    }
  }
  return { errors };
}

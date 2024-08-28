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
  let isCustomerTagPriceLimitSet = false;
  let isCustomerTagStoreLimitSet = false;
  let isSkuLimitSet = false;
  let skuLimiters = [];


  let errorMessagesFieldValue = {};
  if (input.shop.errorMsgsField) {
    errorMessagesFieldValue = JSON.parse(input.shop.errorMsgsField.value);
  }

  let generalLimiters = {};
  if (input.shop.generalLimitersField) {
    generalLimiters = JSON.parse(input.shop.generalLimitersField.value);
    skuLimiters = generalLimiters?.skuLimiters;
  }

  const currentLocale = (input.localization.language.isoCode).toLowerCase();
  const selectedLocale = (errorMessagesFieldValue?.locale || '').toLowerCase();




  if (input.buyerJourney.step !== "CART_INTERACTION") {

    const checkMinLimit = (quantity, min) => {
      return (Number(min) > 0 && quantity < Number(min));
    };

    const checkMaxLimit = (quantity, max) => {
      return (Number(max) > 0 && quantity > Number(max));
    }

    const checkCustomerTagPriceLimit = () => {
      
        const customerTagLimitField = input.cart.buyerIdentity?.customer?.customerTagLimitField;
        const totalAmount = Number(input.cart?.cost?.totalAmount?.amount);
        const appliedCurrencyCode = generalLimiters?.currencyCode;

        if (customerTagLimitField) {
          const customerTagLimitFieldValue = JSON.parse(customerTagLimitField.value);
          // Extract the selected customer tags from the parsed metafield value
          const selectedCustomerTags = customerTagLimitFieldValue.selectedCustomerTags || [];

          // Loop through each customer tag limit object to apply the appropriate rules
          for (const tagLimit of selectedCustomerTags) {
            const { priceMin, priceMax, shopMin, shopMax } = tagLimit;

            // Convert values to numbers for comparison
            const priceMinValue = Number(priceMin);
            const priceMaxValue = Number(priceMax);
            
            if(priceMinValue > 0 || priceMaxValue > 0) {
              isCustomerTagPriceLimitSet = true;
            }

            // Check against price limits
            if (totalAmount < priceMinValue && priceMinValue > 0) {
              errors.push({
                localizedMessage: errorMessagesFieldValue?.priceMinErrMsg && currentLocale === selectedLocale
                  ? errorMessagesFieldValue.priceMinErrMsg.replace("{priceMin}", priceMinValue).replace("{currencyCode}", appliedCurrencyCode)
                  : `Minimum amount ${priceMinValue} ${appliedCurrencyCode} is required for checkout.`,
                target: "cart",
              });
              return true;

            } else if (totalAmount > priceMaxValue && priceMaxValue > 0) {
              errors.push({
                localizedMessage: errorMessagesFieldValue?.priceMaxErrMsg && currentLocale === selectedLocale
                  ? errorMessagesFieldValue.priceMaxErrMsg.replace("{priceMax}", priceMaxValue).replace("{currencyCode}", appliedCurrencyCode)
                  : `Cart exceeds amount ${priceMaxValue} ${appliedCurrencyCode}, please remove some items.`,
                target: "cart",
              });
              return true;

            } else {
              return false;
            }
          }
        }
    }

    const checkPriceLimit = () => {
      if (generalLimiters && !isCustomerTagPriceLimitSet) {
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

    if (checkPriceLimit() || checkWeightLimit() || checkCustomerTagPriceLimit()) {
      return { errors };
    }

    
    const checkMultipleLimit = (quantity, multiple) => {
      if (Number(multiple) > 0) {
        return (!(quantity % Number(multiple) == 0));
      } else {
        return false;
      }
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

          const vendorName = product.productLimitField.value.split(',')[3];

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
        const productName = product?.title;

        if (merchandise.productVariantLimitField) {
          //const productName = product?.title;
          const [productVariantMin, productVariantMax, productVariantMultiple] = merchandise.productVariantLimitField.value.split(',').map(Number);

          if (productVariantMin > 0 || productVariantMax > 0 || productVariantMultiple > 0) {
            isVariantLimitSet = true;
          }

          if (checkMaxLimit(quantity, productVariantMax)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMaxErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.variantMaxErrMsg.replace("{productVariantMax}", productVariantMax).replace(" {productName}", productName)
                : `Quantity limit reached, you can't select more than ${productVariantMax} for this ${productName} variant.`,
              target: "cart",
            });
          } else if (checkMinLimit(quantity, productVariantMin)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMinErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.variantMinErrMsg.replace("{productVariantMin}", productVariantMin).replace(" {productName}", productName)
                : `You can't select less than ${productVariantMin} for this ${productName} variant.`,
              target: "cart",
            });
          } else if (checkMultipleLimit(quantity, productVariantMultiple)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.variantMultipleErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.variantMultipleErrMsg.replace("{productVariantMultiple}", productVariantMultiple).replace(" {productName}", productName)
                : `Quantity should be a multiple of ${productVariantMultiple} for this ${productName} variant.`,
              target: "cart",
            });
          }
        }

        if (!isVariantLimitSet) {
          if (merchandise.__typename === "ProductVariant") {
            const sku = merchandise?.sku;
            // const { product } = merchandise;
            // const productName = product?.title;
            if (sku) {
              const isSkuExist = skuLimiters.find((item) => item.id === sku);
              if (isSkuExist) {
                if (Number(isSkuExist?.multiple) > 0 || Number(isSkuExist?.min) > 0 || Number(isSkuExist?.max) > 0) {
                  isSkuLimitSet = true;
                }

                if (Number(isSkuExist?.multiple) > 0) {
                  if (quantity % Number(isSkuExist?.multiple) != 0) {
                    errors.push({
                      localizedMessage: errorMessagesFieldValue?.skuMultipleErrMsg && currentLocale === selectedLocale
                        ? errorMessagesFieldValue.skuMultipleErrMsg.replace("{skuMultiple}", isSkuExist?.multiple).replace("{productName}", productName)
                        : `You can only select multiple of ${isSkuExist?.multiple} for ${productName}.`,
                      target: "cart",
                    });
                  }
                } else if (checkMaxLimit(quantity, Number(isSkuExist?.max))) {
                  errors.push({
                    localizedMessage: errorMessagesFieldValue?.skuMaxErrMsg && currentLocale === selectedLocale
                      ? errorMessagesFieldValue.skuMaxErrMsg.replace("{skuMax}", Number(isSkuExist?.max)).replace(" {productName}", productName)
                      : `Quantity limit reached, you can't select more than ${Number(isSkuExist?.max)}.`,
                    target: "cart",
                  });
                } else if (checkMinLimit(quantity, Number(isSkuExist?.min))) {
                  errors.push({
                    localizedMessage: errorMessagesFieldValue?.skuMinErrMsg && currentLocale === selectedLocale
                      ? errorMessagesFieldValue.skuMinErrMsg.replace("{skuMin}", Number(isSkuExist?.min)).replace(" {productName}", productName)
                      : `You can't select less than ${Number(isSkuExist?.min)} for this product variant.`,
                    target: "cart",
                  });
                }

              }
            }
          }
        }

        if (!isVariantLimitSet && !isSkuLimitSet) {
          if (product.productLimitField) {

            const [productMin, productMax, productMultiple, vendorName, vendorMin, vendorMax, vendorMultiple] = product.productLimitField.value.split(',');

            if (Number(productMin) > 0 || Number(productMax) > 0 || Number(productMultiple) > 0) {
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
            } else if (checkMultipleLimit(quantity, productMultiple)) {
              errors.push({
                localizedMessage: errorMessagesFieldValue?.productMultipleErrMsg && currentLocale === selectedLocale
                  ? errorMessagesFieldValue.productMultipleErrMsg.replace("{productMultiple}", productMultiple).replace("{productName}", productName)
                  : `Quantity should be a multiple of ${productMultiple} for ${productName}.`,
                target: "cart",
              });
            }
          }
        }
      }
    }

    //to check category limit
    if (!isProductLimitSet && !isVariantLimitSet && !isSkuLimitSet) {
      for (const line of input.cart.lines) {
        const { merchandise } = line;

        if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;

          if (product.categoryLimitField) {
            const [categoryName, categoryMin, categoryMax, categoryMultiple] = product.categoryLimitField.value.split(',');

            if (Number(categoryMin) > 0 || Number(categoryMax) > 0 || Number(categoryMultiple) > 0) {
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
              } else if (checkMultipleLimit(Number(categoryQuantities.get(categoryName)), Number(categoryMultiple))) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.categoryMultipleErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.categoryMultipleErrMsg.replace("{categoryMultiple}", categoryMultiple).replace("{categoryName}", categoryName)
                    : `Quantity should be a multiple of ${categoryMultiple} for the category ${categoryName}.`,
                  target: "cart",
                });
              }
            }
          }
        }
      }
    }

    //to check collection limit
    if (!isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet && !isSkuLimitSet) {
      for (const line of input.cart.lines) {
        const { merchandise } = line;

        if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;

          if (product.collectionLimitField) {
            const [collectionName, collectionMin, collectionMax, collectionMultiple] = product.collectionLimitField.value.split(',');

            if (Number(collectionMin) > 0 || Number(collectionMax) > 0 || Number(collectionMultiple) > 0) {
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
              } else if (checkMultipleLimit(Number(collectionQuantities.get(collectionName)), Number(collectionMultiple))) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.collectionMultipleErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.collectionMultipleErrMsg.replace("{collectionMultiple}", collectionMultiple).replace("{collectionName}", collectionName)
                    : `Quantity should be a multiple of ${collectionMultiple} for the collection ${collectionName}.`,
                  target: "cart",
                });
              }
            }
          }
        }
      }
    }

    if (!isCollectionLimitSet && !isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet && !isSkuLimitSet) {
      for (const line of input.cart.lines) {
        const { merchandise } = line;

        if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;
          // Check if product has vendor information
          if (product.productLimitField) {
            const [productMin, productMax, productMultiple, vendorName, vendorMin, vendorMax, vendorMultiple, productName] = product.productLimitField.value.split(',');
            console.log('vendor name ', vendorName);
            console.log('vendor quantity ', vendorQuantities.get(vendorName));
            if (vendorName) {

              if (Number(vendorMin) > 0 || Number(vendorMax) > 0 || Number(vendorMultiple) > 0) {
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

              } else if (checkMultipleLimit(Number(vendorQuantities.get(vendorName)), vendorMultiple)) {
                errors.push({
                  localizedMessage: errorMessagesFieldValue?.vendorMultipleErrMsg && currentLocale === selectedLocale
                    ? errorMessagesFieldValue.vendorMultipleErrMsg.replace("{vendorMultiple}", vendorMultiple).replace("{vendorName}", vendorName)
                    : `Quantity should be a multiple of ${vendorMultiple} for the vendor ${vendorName}.`,
                  target: "cart",
                });

              }
            }
          }
        }
      }
    }

    if (!isVendorLimitSet && !isCollectionLimitSet && !isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet && !isSkuLimitSet) {
      const customerTagLimitField = input.cart.buyerIdentity?.customer?.customerTagLimitField;

      if (customerTagLimitField) {
        const customerTagLimitFieldValue = JSON.parse(customerTagLimitField.value);
        // Extract the selected customer tags from the parsed metafield value
        const selectedCustomerTags = customerTagLimitFieldValue.selectedCustomerTags || [];

        // Loop through each customer tag limit object to apply the appropriate rules
        for (const tagLimit of selectedCustomerTags) {
          const { priceMin, priceMax, shopMin, shopMax } = tagLimit;

          // Convert values to numbers for comparison
          const shopMinValue = Number(shopMin);
          const shopMaxValue = Number(shopMax);

          if(shopMinValue > 0 || shopMaxValue > 0) {
            isCustomerTagStoreLimitSet = true;
          }

          // Calculate the total quantity of items in the cart
          const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

          // Check against shop quantity limits
          if (checkMaxLimit(totalQuantity, shopMaxValue)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.shopMaxErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.shopMaxErrMsg.replace("{shopMax}", shopMaxValue)
                : `Cart exceeds ${shopMaxValue} products. Please remove some items.`,
              target: "cart",
            });
          } else if (checkMinLimit(totalQuantity, shopMinValue)) {
            errors.push({
              localizedMessage: errorMessagesFieldValue?.shopMinErrMsg && currentLocale === selectedLocale
                ? errorMessagesFieldValue.shopMinErrMsg.replace("{shopMin}", shopMinValue)
                : `Minimum ${shopMinValue} products are required for checkout.`,
              target: "cart",
            });
          }
        }
      }
    }

    if (!isVendorLimitSet && !isCollectionLimitSet && !isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet && !isSkuLimitSet && !isCustomerTagStoreLimitSet) {
      if (generalLimiters) {
        const storeMin = Number(generalLimiters?.shopMin);
        const storeMax = Number(generalLimiters?.shopMax);
        // const [storeMin, storeMax] = storeLimit.split(',').map(Number);
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

    // if (!isVendorLimitSet && !isCollectionLimitSet && !isCategoryLimitSet && !isProductLimitSet && !isVariantLimitSet && !isSkuLimitSet && !isStoreLimitSet) {
    //   const customerTagLimitField = input.cart.buyerIdentity?.customer?.customerTagLimitField;
    //   const totalAmount = Number(input.cart?.cost?.totalAmount?.amount);
    //   const appliedCurrencyCode = generalLimiters?.currencyCode;

    //   if (customerTagLimitField) {
    //     const customerTagLimitFieldValue = JSON.parse(customerTagLimitField.value);
    //     // Extract the selected customer tags from the parsed metafield value
    //     const selectedCustomerTags = customerTagLimitFieldValue.selectedCustomerTags || [];

    //     // Loop through each customer tag limit object to apply the appropriate rules
    //     for (const tagLimit of selectedCustomerTags) {
    //       const { priceMin, priceMax, shopMin, shopMax } = tagLimit;

    //       // Convert values to numbers for comparison
    //       const priceMinValue = Number(priceMin);
    //       const priceMaxValue = Number(priceMax);
    //       const shopMinValue = Number(shopMin);
    //       const shopMaxValue = Number(shopMax);

    //       if(priceMinValue > 0 || priceMaxValue > 0) {
    //         isCustomerTagPriceLimitSet = true;
    //       }

    //       if(shopMinValue > 0 || shopMaxValue > 0) {
    //         isCustomerTagStoreLimitSet = true;
    //       }

    //       // Check against price limits
    //       if (totalAmount < priceMinValue && priceMinValue > 0) {
    //         errors.push({
    //           localizedMessage: errorMessagesFieldValue?.priceMinErrMsg && currentLocale === selectedLocale
    //             ? errorMessagesFieldValue.priceMinErrMsg.replace("{priceMin}", priceMinValue).replace("{currencyCode}", appliedCurrencyCode)
    //             : `Minimum amount ${priceMinValue} ${appliedCurrencyCode} is required for checkout.`,
    //           target: "cart",
    //         });

    //       } else if (totalAmount > priceMaxValue && priceMaxValue > 0) {
    //         errors.push({
    //           localizedMessage: errorMessagesFieldValue?.priceMaxErrMsg && currentLocale === selectedLocale
    //             ? errorMessagesFieldValue.priceMaxErrMsg.replace("{priceMax}", priceMaxValue).replace("{currencyCode}", appliedCurrencyCode)
    //             : `Cart exceeds amount ${priceMaxValue} ${appliedCurrencyCode}, please remove some items.`,
    //           target: "cart",
    //         });

    //       }

    //       // Calculate the total quantity of items in the cart
    //       const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

    //       // Check against shop quantity limits
    //       if (checkMaxLimit(totalQuantity, shopMaxValue)) {
    //         errors.push({
    //           localizedMessage: errorMessagesFieldValue?.shopMaxErrMsg && currentLocale === selectedLocale
    //             ? errorMessagesFieldValue.shopMaxErrMsg.replace("{shopMax}", shopMaxValue)
    //             : `Cart exceeds ${shopMaxValue} products. Please remove some items.`,
    //           target: "cart",
    //         });
    //       } else if (checkMinLimit(totalQuantity, shopMinValue)) {
    //         errors.push({
    //           localizedMessage: errorMessagesFieldValue?.shopMinErrMsg && currentLocale === selectedLocale
    //             ? errorMessagesFieldValue.shopMinErrMsg.replace("{shopMin}", shopMinValue)
    //             : `Minimum ${shopMinValue} products are required for checkout.`,
    //           target: "cart",
    //         });
    //       }
    //     }
    //   }
    // }
  }
  return { errors };
}

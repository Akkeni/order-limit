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

  for (const line of input.cart.lines) {
    const { quantity, merchandise } = line;

    // Check if merchandise is a ProductVariant
    if (merchandise.__typename === "ProductVariant") {
      const { product } = merchandise;

      // Check store limit
      if (input.shop.storeLimitField) {
        const storeLimit = input.shop.storeLimitField.value;
        const [shopMin, shopMax] = storeLimit.split(',').map(Number);
        const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);

        if (shopMin > totalQuantity && shopMin !== 0) {
          errors.push({
            localizedMessage: `Minmum ${shopMin} products are required for checkout`,
            target: "cart",
          });
        } else if (totalQuantity > shopMax && shopMax !== 0) {
          errors.push({
            localizedMessage: `Cart exceeds ${shopMax} number of products. please remove some items`,
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
        console.log(totalAmount, priceMin, priceMax);
        if (totalAmount < Number(priceMin) && Number(priceMin) !== 0) {
          errors.push({
            localizedMessage: `Minmum amount ${priceMin} is required for checkout`,
            target: "cart",
          });
        } else if (totalAmount > Number(priceMax) && Number(priceMax) !== 0) {
          errors.push({
            localizedMessage: `Cart exceeds amount ${priceMax} please remove some items`,
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
          const quantity = line.quantity;
          const weight = merchandise?.weight;
          if (weight) {
            totalWeight += quantity * weight;
          }
        });

        // Parse the weightLimitField
        if (input.shop?.weightLimitField?.value) {
          const weightLimitField = input.shop?.weightLimitField?.value;
          const [weightMin, weightMax] = weightLimitField.split(',').map(Number);


          if (weightMin > totalWeight && weightMin !== 0) {
            errors.push({
              localizedMessage: `Minmum weight ${weightMin} is required for checkout`,
              target: "cart",
            });
          } else if (totalWeight > weightMax && weightMax !== 0) {
            errors.push({
              localizedMessage: `Cart exceeds weight ${weightMax} please remove some items`,
              target: "cart",
            });
          }

        }

        console.log(totalWeight);

        // Check if product has category information
        if (product.categoryLimitField) {
          const [categoryName, categoryMin, categoryMax] = product.categoryLimitField.value.split(',');
          //const categoryName = product.categoryNameField.value;
          const categoryLimit = parseInt(product.categoryLimitField.value);

          // Update categoryQuantities map with quantity for current category
          if (categoryQuantities.has(categoryName)) {
            categoryQuantities.set(categoryName, categoryQuantities.get(categoryName) + quantity);
          } else {
            categoryQuantities.set(categoryName, quantity);
          }

          // Check if total quantity exceeds category limit
          if (Number(categoryQuantities.get(categoryName)) > Number(categoryMax)) {
            errors.push({
              localizedMessage: `Can't select more than ${categoryMax} products from the category "${categoryName}".`,
              target: "cart",
            });
          } else if (Number(categoryQuantities.get(categoryName)) < Number(categoryMin)) {
            errors.push({
              localizedMessage: `You have to select minimun ${categoryMin} products from the category "${categoryName}".`,
              target: "cart",
            });
          }
        }
      }


      // Check product limit
      if (merchandise.productVariantLimitField && parseInt(merchandise.productVariantLimitField.value) > 0) {
        const productVariantLimit = parseInt(merchandise.productVariantLimitField.value);
        if (quantity > productVariantLimit) {
          errors.push({
            localizedMessage: `Quantity limit reached, you can't select more than ${productVariantLimit}.`,
            target: "cart",
          });
        }
      } else if (product.productLimitField && parseInt(product.productLimitField.value) > 0) {
        const productLimit = parseInt(product.productLimitField.value);
        if (quantity > productLimit) {
          errors.push({
            localizedMessage: `Quantity limit reached, you can't select more than ${productLimit}.`,
            target: "cart",
          });
        }
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
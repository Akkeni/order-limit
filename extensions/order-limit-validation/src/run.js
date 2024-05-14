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
      if (input.shop.storeLimitField && parseInt(input.shop.storeLimitField.value) > 0) {
        const storeLimit = parseInt(input.shop.storeLimitField.value);
        if (input.shop.storeStatusField && input.shop.storeStatusField.value === "active") {
          const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);
          if (totalQuantity > storeLimit) {
            errors.push({
              localizedMessage: `Can't select more than ${storeLimit} from this store.`,
              target: "cart",
            });
          }
        }
      }

      // Check if merchandise is a ProductVariant
      if (merchandise.__typename === "ProductVariant") {
        const { product } = merchandise;

        // Check if product has category information
        if (product.categoryNameField && product.categoryLimitField) {
          const categoryName = product.categoryNameField.value;
          const categoryLimit = parseInt(product.categoryLimitField.value);

          // Update categoryQuantities map with quantity for current category
          if (categoryQuantities.has(categoryName)) {
            categoryQuantities.set(categoryName, categoryQuantities.get(categoryName) + quantity);
          } else {
            categoryQuantities.set(categoryName, quantity);
          }

          // Check if total quantity exceeds category limit
          if (categoryQuantities.get(categoryName) > categoryLimit && product?.categoryStatusField?.value === "active") {
            errors.push({
              localizedMessage: `Can't select more than ${categoryLimit} products from the category "${categoryName}".`,
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
            localizedMessage: `Can't select more than ${productVariantLimit}.`,
            target: "cart",
          });
        }
      } else if (product.productLimitField && parseInt(product.productLimitField.value) > 0) {
        const productLimit = parseInt(product.productLimitField.value);
        if (quantity > productLimit) {
          errors.push({
            localizedMessage: `Can't select more than ${productLimit}.`,
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
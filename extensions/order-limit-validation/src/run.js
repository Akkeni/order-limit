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

  for (const line of input.cart.lines) {
      const { quantity, merchandise } = line;
      
      // Check if merchandise is a ProductVariant
      if (merchandise.__typename === "ProductVariant") {
          const { product } = merchandise;
          
          // Check store limit
          if (product.storeLimitField && parseInt(product.storeLimitField.value) > 0) {
              const storeLimit = parseInt(product.storeLimitField.value);
              if (product.storeStatusField && product.storeStatusField.value === "active") {
                  const totalQuantity = input.cart.lines.reduce((acc, curr) => acc + curr.quantity, 0);
                  if (totalQuantity > storeLimit) {
                      errors.push({
                        localizedMessage: `Can't select more than ${storeLimit} from this store.`,
                        target: "cart",
                      });
                  }
              }
          }
          
          // Check category limit
          if (product.categoryNameField && product.categoryLimitField && parseInt(product.categoryLimitField.value) > 0 && product?.categoryStatusField?.value === "active") {
              const categoryName = product.categoryNameField.value;
              const categoryLimit = parseInt(product.categoryLimitField.value);
              const totalQuantityInCategory = input.cart.lines
                  .filter(line => line.merchandise.__typename === "ProductVariant" && line.merchandise.product.categoryNameField && line.merchandise.product.categoryNameField.value === categoryName)
                  .reduce((acc, curr) => acc + curr.quantity, 0);
              if (totalQuantityInCategory > categoryLimit) {
                  errors.push({
                    localizedMessage: `Can't select more than ${categoryLimit} products from the category ${categoryName}.`,
                    target: "cart",
                  });
              }
          }
          
          // Check product limit
          if (product.productLimitField && parseInt(product.productLimitField.value) > 0 && product?.productStatusField?.value === "active") {
              const productLimit = parseInt(product.productLimitField.value);
              if (quantity > productLimit) {
                  errors.push({
                    localizedMessage: `Can't select more than ${productLimit} of product ${merchandise.product.id}.`,
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
export async function getAllProductsData(graphql) {
  let allProductsData = [];
  const resProduct = await graphql(
    `query AllProducts{
        products(first: 5) {
          edges {
            cursor
            node {
              id
              title
              vendor
              status
              variants(first: 250) {
                edges {
                  node {
                    id
                    image {
                      url
                    }
                    price
                    inventoryQuantity
                    title
                    productVariantLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                        id
                        value
                    }
                  }
                }
              }
              category {
                name
              }
                totalInventory
                productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                        id
                        value
                    }
        		productStatusField: metafield(namespace: "productStatus", key: "productStatus") {
                    id
          			value
        		}
              categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                id
                value
              }
              categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
                id
                value
              }
                categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
                    id
                    value
                }
                collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                  id
                  value
                }
        			priceRangeV2 {
        				maxVariantPrice {
            				amount
        				}
        				minVariantPrice {
           				 amount
        				}
                    }
                images(first: 1) {
                    edges {
                        node {
                            url
                        }
                    }
                }
            }
          }
        }
      }`
  );
  const allData = await resProduct.json();
  allProductsData = allProductsData.concat(allData?.data?.products?.edges);

  //const products = allProductsData?.data?.products?.edges;
  let cursor = allProductsData[allProductsData.length - 1]?.cursor;

  while (true) {
    let productResponse = await graphql(`
          query GetProductsPaginated($after: String) {
            products(first: 250, after: $after) {
              edges {
                cursor
                node {
                  id
                  title
                  vendor
                  status
                  variants(first: 250) {
                    edges {
                      node {
                        id
                        image {
                          url
                        }
                        price
                        inventoryQuantity
                        title
                        productVariantLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                            id
                            value
                        }
                      }
                    }
                  }
                  category {
                    name
                  }
                  totalInventory
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  productStatusField: metafield(namespace: "productStatus", key: "productStatus") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
                  categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
                    id
                    value
                  }
                  categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
                    id
                    value
                  }
                  collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                    id
                    value
                  }
                  priceRangeV2 {
                    maxVariantPrice {
                        amount
                    }
                    minVariantPrice {
                        amount
                    }
                  }
                  images(first: 1) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                }
              }
              pageInfo {
                hasNextPage
              }
            }
          }`,
      {
        variables: {
          after: cursor,
        },
      }
    );

    let productData = await productResponse.json();
    //console.log('product data in loader while loop', allProductsData);
    allProductsData = allProductsData.concat(productData?.data?.products?.edges);
    //i++;
    if (productData?.data?.products?.pageInfo?.hasNextPage) {
      const products = productData?.data?.products?.edges;
      if (products) {
        cursor = products[products.length - 1]?.cursor;
      } else {
        break;
      }
    } else {
      break;
    }
  }

  return allProductsData;
} 
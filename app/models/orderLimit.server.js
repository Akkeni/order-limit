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

export async function deleteNonPlanData(graphql) {
    //console.log('deletePreviousDataValue in if', formData.get('deletePreviousData'));

    let allProductsData = await getAllProductsData(graphql);
    
    const deleteMetafield = async (metafieldId) => {
      if (metafieldId) {
        await graphql(
          `mutation metafieldDelete($input: MetafieldDeleteInput!) {
            metafieldDelete(input: $input) {
              userErrors {
                field
                message
              }
            }
          }`,
          {
            variables: {
              input: {
                id: metafieldId
              }
            }
          }
        );
      }
    };

    const fields = [
      'categoryLimitField',
      'collectionLimitField'
    ];

    for (let product of allProductsData) {
      for (let field of fields) {
        // Check and delete metafields at the product level
        let productMetafieldId = product.node[field]?.id;
        await deleteMetafield(productMetafieldId);
      }
    }

    const response = await graphql(
      `{
        shop {
          id
          name
          currencyCode
          weightUnit
          priceLimitField: metafield(namespace: "priceLimit", key: "priceLimit") {
            id
            value
          }
          weightLimitField: metafield(namespace: "weightLimit", key: "weightLimit") {
            id
            value
          }
          generalLimitersField: metafield(namespace: "generalLimiters", key: "generalLimiters"){
            id
            value
          }
        }
      }
    `);


    const data = await response.json();

    const storeFieldIds = [
      data?.data?.shop?.priceLimitField?.id,
      data?.data?.shop?.weightLimitField?.id,
      data?.data?.shop?.generalLimitersField?.id,
    ];
  
    for (const id of storeFieldIds) {
      if (id) {
        await deleteMetafield(id);
      }
    }

    const generalLimiters = JSON.stringify({
      currencyCode: data?.data?.shop?.currencyCode,
      weightUnit: data?.data?.shop?.weightUnit,
      plan: false
    });

    const mutationQuery = `mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields {
          id
          namespace
          key
          value
        }
        userErrors {
          field
          message
        }
      }
    }`;

    const metafields = {
      variables: {
        metafields: [
          {
            "ownerId": `${data?.data?.shop?.id}`,
            "namespace": "generalLimiters",
            "key": "generalLimiters",
            "type": "string",
            "value": `${generalLimiters}`

          }
        ]
      }
    };

    await graphql(mutationQuery, metafields);

    //return redirect('/app');
    return null;

}
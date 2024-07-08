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
    'productLimitField',
    'productVariantLimitField',
    'categoryLimitField',
    'collectionLimitField'
  ];

  for (let product of allProductsData) {
    for (let field of fields) {
      await deleteMetafield(product.node[field]?.id);
      if (field === 'productVariantLimitField') {
        for (let variant of product.node.variants.edges) {
          await deleteMetafield(variant.node[field]?.id);
        }
      }
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
          storeLimitField: metafield(namespace: "storeLimit", key: "storeLimit") {
            id
            value
          }
          generalLimitersField: metafield(namespace: "generalLimiters", key: "generalLimiters"){
            id
            value
          }
          errorMsgsField: metafield(namespace: "errorMsgs", key: "errorMsgs") {
            id 
            value 
          }
        }
      }
    `);


  const data = await response.json();

  const storeFieldIds = [
    data?.data?.shop?.storeLimitField?.id,
    data?.data?.shop?.generalLimitersField?.id,
    data?.data?.shop?.errorMsgsField?.id,
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

export async function createFreePlanMetafields(graphql, existingLimiters) {

  const appIdQuery = await graphql(`
    #graphql
    query {
      currentAppInstallation {
        id
      }
    }
  `);

  const appIdQueryData = await appIdQuery.json();
  const appInstallationID = appIdQueryData.data.currentAppInstallation.id;

  const value = JSON.stringify(existingLimiters);

  const appMetafield = await graphql(
    `
      #graphql
      mutation CreateAppDataMetafield($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            id
            namespace
            key
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        metafields: {
          namespace: "freePlanLimiters",
          key: "freePlanLimiters",
          type: "string",
          value: value,
          ownerId: appInstallationID,
        },
      },
    },
  );

}

async function handleGraphqlMutation(graphql, mutationName, variables) {
  const query = `
    mutation SetMetafield($namespace: String!, $ownerId: ID!, $key: String!, $type: String!, $value: String!) {
      metafieldDefinitionCreate(
        definition: {namespace: $namespace, key: $key, name: "Limiters", ownerType: PRODUCT, type: $type, access: {admin: MERCHANT_READ_WRITE}}
      ) {
        createdDefinition {
          id
        }
      }
      metafieldsSet(metafields: [{ownerId:$ownerId, namespace:$namespace, key:$key, type:$type, value:$value}]) {
        userErrors {
          field
          message
          code
        }
      }
    }
  `;

  await graphql(query, {
    variables: {
      ownerId: variables.input.id,
      namespace: variables.input.metafields[0].namespace,
      key: variables.input.metafields[0].key,
      type: variables.input.metafields[0].type,
      value: variables.input.metafields[0].value,
    },
  });
}

export async function createCategoryWiseLimiter(graphql, allProductsData, limiter) {
  const productIds = allProductsData
    .filter(product => product.node.category?.name === limiter.id)
    .map(product => product.node.id);

  for (const id of productIds) {
    let value = `${limiter.value}`;
    const variables = {
      input: {
        id: id,
        metafields: [
          { namespace: "categoryLimit", key: "categoryLimit", type: "string", value },
        ]
      }
    };

    await handleGraphqlMutation(graphql, 'productUpdate', variables);
  }
}

export async function createCollectionWiseLimiter(graphql, allCollectionsData, allProductsData, limiter) {

  const collectionId = allCollectionsData.find((item) => item.node.title === limiter.id)?.node?.id;

  if (collectionId) {
    for (const product of allProductsData) {
      const productId = product?.node?.id;
      let response = await graphql(
        `{
          collection(id: "${collectionId}"){
            hasProduct(id: "${productId}")
          }
        }`
      );
      const responseData = await response.json();
      if (responseData?.data?.collection?.hasProduct) {
        let value = `${limiter.value}`;
        const variables = {

          input: {
            id: productId,
            metafields: [
              { namespace: "collectionLimit", key: "collectionLimit", type: "string", value }
            ]
          }

        };

        await handleGraphqlMutation(graphql, 'productUpdate', variables);
      }
    }
  }
}

export async function createVendorWiseLimiter(graphql, allProductsData, limiter) {

  const productIds = allProductsData
    .filter(product => product.node.vendor === limiter.id)
    .map(product => product.node.id);

  for (const id of productIds) {
    let value = '';
    let allValues = limiter.value.split(',').slice(3,5);
    let vendorValue = `${allValues[0]},${allValues[1]}`;
    //console.log(vendorValue)
    //let value = limiter.value;

    const productResponse = await graphql(
      `{
        product(id: "${id}") {
          title
          productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
            value
          }
        }
      }`
    );

    const productData = await productResponse.json();

    const product = productData.data.product;

    const productLimitFieldValue = product?.productLimitField?.value;

    if (productLimitFieldValue) {
      const [productMin, productMax, vendorName, vendorMin, vendorMax] = productLimitFieldValue.split(',');

      value = `${productMin},${productMax},${limiter.id},${vendorValue},${product.title}`;
    } else {
      // If there is no previous metafield value, construct a new value
      value = `0,0,${limiter.id},${vendorValue},${product.title}`;
    }

    const variables = {
      input: {
        id: id,
        metafields: [
          { namespace: "productLimit", key: "productLimit", type: "string", value },
        ]
      }
    };
    await handleGraphqlMutation(graphql, 'productUpdate', variables);
  }
}
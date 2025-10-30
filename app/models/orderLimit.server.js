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
                    sku
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
                        sku
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
  
    allProductsData = allProductsData.concat(productData?.data?.products?.edges);
    
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



export async function getAllCustomerTags(graphql) {
  let allCustomersData = [];
  let cursor = null;
  let hasNextPage = true;

  // Use a loop to handle pagination
  while (hasNextPage) {
    const resCustomer = await graphql(
      `query AllCustomers($after: String) {
        customers(first: 250, after: $after) {
          edges {
            cursor
            node {
              tags
              id
              metafield(namespace: "customerTag", key: "customerTag") {
                value
                id
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

    const customerData = await resCustomer.json();
    const edges = customerData?.data?.customers?.edges || [];

    
    allCustomersData.push(...edges);

    
    if (edges.length > 0) {
      cursor = edges[edges.length - 1].cursor;
    }

    hasNextPage = customerData?.data?.customers?.pageInfo?.hasNextPage;
  }

  // Collect all unique customer tags
  const uniqueCustomerTags = new Set();
  allCustomersData.forEach(({ node }) => {
    node.tags.forEach(tag => uniqueCustomerTags.add(tag));
  });

  // Convert the Set back to an array
  const allCustomerTags = Array.from(uniqueCustomerTags);

  return {
    allCustomerTags,
    allCustomersData,
  };
}

// --- Helper: Delete metafield by ownerId + namespace + key
export const deleteMetafield = async (details, graphql) => {
  if (!details) return;

  try {
    const res = await graphql(
      `#graphql
        mutation metafieldsDelete($metafields: [MetafieldIdentifierInput!]!) {
          metafieldsDelete(metafields: $metafields) {
            deletedMetafields { key namespace ownerId }
            userErrors { field message }
          }
        }`,
      {
        variables: {
          metafields: [
            {
              ownerId: details.ownerId,
              namespace: details.namespace,
              key: details.key,
            },
          ],
        },
      }
    );

    const json = await res.json();
    const errors = json?.data?.metafieldsDelete?.userErrors;
    if (errors?.length) {
      console.log("metafieldsDelete userErrors:", errors);
    }
  } catch (err) {
    console.log("Error deleting metafield:", err);
  }
  return;
};

export async function deleteNonPlanData(graphql) {

  let allProductsData = await getAllProductsData(graphql);
  let { allCustomerTags, allCustomersData } = await getAllCustomerTags(graphql);

  const fields = [
    {fieldName: 'productLimitField', namespace: 'productLimit', key: 'productLimit'},
    {fieldName: 'productVariantLimitField', namespace: 'productLimit', key: 'productLimit'},
    {fieldName: 'categoryLimitField', namespace: 'categoryLimit', key: 'categoryLimit'},
    {fieldName:'collectionLimitField', namespace: 'collectionLimit', key: 'collectionLimit' },
  ];

  // Delete metafields from products and variants
  for (let product of allProductsData) {
    for (let field of fields) {
      await deleteMetafield({key: field.key, namespace: field.namespace,  ownerId: product.node.id}, graphql);
      if (field?.fieldName === 'productVariantLimitField') {
        for (let variant of product.node.variants.edges) {
          await deleteMetafield({ownerId: variant.node?.id, namespace: field.namespace, key: field.key}, graphql);
        }
      }
    }
  }

  // Delete metafields from customers
  for (const customer of allCustomersData) {
    const { metafield } = customer.node;
    if (metafield?.id) {
      await deleteMetafield({ownerId: customer.node.id, namespace: 'customerTag', key: 'customerTag'}, graphql);
    }
  }

  // Delete shop-level metafields
  const response = await graphql(
    `#graphql
      {
        shop {
          id
          name
          currencyCode
          weightUnit
          priceLimitField: metafield(namespace: "priceLimit", key: "priceLimit") { id }
          weightLimitField: metafield(namespace: "weightLimit", key: "weightLimit") { id }
          storeLimitField: metafield(namespace: "storeLimit", key: "storeLimit") { id }
          generalLimitersField: metafield(namespace: "generalLimiters", key: "generalLimiters"){ id }
          errorMsgsField: metafield(namespace: "errorMsgs", key: "errorMsgs") { id }
        }
      }`
  );

  const data = await response.json();
  const shop = data?.data?.shop;

  const storeFieldIds = [
    {ownerId: shop?.id, namespace: 'storeLimit', key: 'storeLimit'},
    {ownerId: shop?.id, namespace: 'generalLimiters', key: 'generalLimiters'},
    {ownerId: shop?.id, namespace: 'errorMsgs', key: 'errorMsgs'},
  ];

  for (const detail of storeFieldIds) {
    if (detail) await deleteMetafield(detail, graphql);
  }

  // Recreate default generalLimiters metafield
  const generalLimiters = JSON.stringify({
    currencyCode: shop?.currencyCode,
    weightUnit: shop?.weightUnit,
    plan: false,
  });

  const mutationQuery = `#graphql
    mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
      metafieldsSet(metafields: $metafields) {
        metafields { id namespace key value }
        userErrors { field message }
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
    let allValues = limiter.value.split(',').slice(4, 7);
    let vendorValue = `${allValues[0]},${allValues[1]},${allValues[2]}`;

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
      const [productMin, productMax, productMultiple, vendorName, vendorMin, vendorMax, vendorMulitple, productName] = productLimitFieldValue.split(',');

      value = `${productMin},${productMax},${productMultiple},${limiter.id},${vendorValue},${product.title}`;
    } else {
      // If there is no previous metafield value, construct a new value
      value = `0,0,0,${limiter.id},${vendorValue},${product.title}`;
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
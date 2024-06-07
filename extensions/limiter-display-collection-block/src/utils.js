export async function updateCollectionLimit(productId, limiters) {

  console.log('productId in update ', productId);
  console.log('limiters in updateLimiters ', limiters);


  const collectionValue = limiters?.collectionName + ',' + limiters?.collectionMin + ',' + limiters?.collectionMax;

  console.log('collectionValue in update ', collectionValue);



  return await makeGraphQLQuery(
    `mutation SetMetafield($namespace: String!, $ownerId: ID!, $key: String!, $type: String!, $value: String!) {
        metafieldDefinitionCreate(
          definition: {namespace: $namespace, key: $key, name: "Tracked Issues", ownerType: PRODUCT, type: $type, access: {admin: MERCHANT_READ_WRITE}}
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
      `,
    {
      ownerId: productId,
      namespace: "collectionLimit",
      key: "collectionLimit",
      type: "string",
      value: collectionValue,
    }
  );

}

export async function getCollection(collectionId, productId) {

  return await makeGraphQLQuery(
    `query collection {
            collection(id: "${collectionId}") {
                id
                title
                productsCount {
                    count
                }
                hasProduct(id: "${productId}")
            }
        }`,
    {}
  );
}

export async function updateLimiters(collectionId, limiters) {

  const allProductsData = await getAllProductsData();

  for (const edge of allProductsData) {
    const collectionData = await getCollection(collectionId, edge?.node?.id);

    if (collectionData?.data?.collection?.hasProduct) {
        await updateCollectionLimit(edge?.node?.id, limiters);
    }
  }
  return ({ success: true });
}

export async function getLimiters(collectionId) {
  // This example uses metafields to store the data. For more information, refer to https://shopify.dev/docs/apps/custom-data/metafields.


  const allProductsData = await getAllProductsData();
  const limiters = {};

  console.log('allProductsData in getLimiters ', allProductsData);

  for (const edge of allProductsData) {
    const collectionData = await getCollection(collectionId, edge?.node?.id);

    if (collectionData?.data?.collection?.hasProduct) {
      limiters['collectionName'] = collectionData?.data?.collection?.title;
      if (edge?.node?.collectionLimitField?.value) {
        const [collectionName, collectionMin, collectionMax] = edge?.node?.collectionLimitField?.value.split(',');
        limiters['collectionMin'] = collectionMin;
        limiters['collectionMax'] = collectionMax;
        break;
      }
    }
  }

  return limiters;


}


async function makeGraphQLQuery(query, variables) {
  const graphQLQuery = {
    query,
    variables,
  };

  const res = await fetch("shopify:admin/api/graphql.json", {
    method: "POST",
    body: JSON.stringify(graphQLQuery),
  });

  if (!res.ok) {
    console.error("Network error");
  }

  return await res.json();
}

async function getAllProductsData() {
  let allProductsData = [];
  const allData = await makeGraphQLQuery(
    `query AllProducts{
        products(first: 2) {
            edges {
                cursor
                node {
                    id
                    collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                        id
                        value
                    }
                }    
            }
        }
    }`,
    {}
  );

  allProductsData = allProductsData.concat(allData?.data?.products?.edges);

  //const products = allProductsData?.data?.products?.edges;
  let cursor = allProductsData[allProductsData.length - 1]?.cursor;

  while (true) {
    let productData = await makeGraphQLQuery(
      `query GetProductsPaginated($after: String) {
            products(first: 250, after: $after) {
              edges {
                cursor
                node {
                  id
                  collectionLimitField: metafield(namespace: "collectionLimit", key: "collectionLimit") {
                    id
                    value
                  }
                }
              }
              pageInfo {
                hasNextPage
              }
            }
        }`,
      {
        after: cursor,
      }

    );

    //console.log('product data in loader while loop', allProductsData);
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
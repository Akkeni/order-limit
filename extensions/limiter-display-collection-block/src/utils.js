export async function updateCollectionLimit(productId, limiters) {

  const collectionValue = limiters?.collectionName + ',' + limiters?.collectionMin + ',' + limiters?.collectionMax;

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

  const limiters = {};

  const planDetails = await makeGraphQLQuery(`{
    currentAppInstallation {
      id
      planMetaField: metafield(namespace:"hasPlan", key: "hasPlan") {
        value
      }
      freePlanLimitersMetaField: metafield(namespace:"freePlanLimiters", key: "freePlanLimiters") {
        value
      }
  
    }
  }`, {});


  if (planDetails?.data?.currentAppInstallation?.planMetaField?.value == "false") {
    limiters['plan'] = false;
    if (planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value) {
      limiters['freePlanLimiters'] = JSON.parse(planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value);
    }

  } else {
    limiters['plan'] = true;
  }

  const allProductsData = await getAllProductsData();

  for (const edge of allProductsData) {
    const collectionData = await getCollection(collectionId, edge?.node?.id);
    
    if (collectionData?.data?.collection?.hasProduct) {
      limiters['collectionName'] = collectionData?.data?.collection?.title;
      if (edge?.node?.collectionLimitField?.value) {
        const [collectionName, collectionMin, collectionMax] = edge?.node?.collectionLimitField?.value.split(',');
        if(collectionName === collectionData?.data?.collection?.title) {
          limiters['collectionMin'] = collectionMin;
          limiters['collectionMax'] = collectionMax;
          break;
        }
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

function getAllProductsInCategory(categoryName, allProductsData) {
  let quantityLimit = 0;
  let obj = {};
  for (const edge of allProductsData) {
    const productCategory = edge.node.category ? edge.node.category.name : null;
    // If the product category matches the current category, increment the count
    if (productCategory === categoryName) {
      quantityLimit++;
    }
  }
  obj['categoryName'] = categoryName;
  obj['quantityLimit'] = quantityLimit;
  return quantityLimit;
}

function getAllProductsInVendor(vendorName, allProductsData) {
        let quantityLimit = 0;
        let name = vendorName;
        let obj = {};
        for (const edge of allProductsData) {
          const productVendor = edge.node?.vendor ? edge.node?.vendor : null;
          // If the product vendor matches the current vendor, increment the count
          if (productVendor === name) {
            quantityLimit++;
          }
        }
        obj['vendorName'] = name;
        obj['quantityLimit'] = quantityLimit;
        return quantityLimit;
}

function getAllProductsInCollection(collectionName, allCollectionsData) {

  const countOfProducts = allCollectionsData.find((item) => item.node?.title === collectionName)?.node?.productsCount?.count;
  return countOfProducts;
}

export async function getExistingProductLimits(collectionId) {
  let totalProductsCount = 0;
  
  let productLimitCounts = {};
  let vendorCounts = {};
  let categoryCounts = {};
  let collectionCounts = {};

  const collectionData  = await makeGraphQLQuery (`query AllCollections {
    collections(first: 250) {
      edges {
        node {
          id
          title
          productsCount {
            count
          }
        }
      }
    }
  }`, {});

  const currentCollection =  await makeGraphQLQuery(
    `query collection {
            collection(id: "${collectionId}") {
              id
              title
              productsCount {
                  count
              }
            }
        }`,
    {}
  );

  const allCollectionsData = collectionData?.data?.collections?.edges;
  const allProductsData = await getAllProductsData();

  const currentCollectionName = currentCollection?.data?.collection?.title;
  const productsInCurrentCollection = getAllProductsInCollection(currentCollectionName, allCollectionsData);

  allProductsData.forEach(item => {
    const node = item.node;

    if (node.productLimitField && node.productLimitField.value) {
      const productLimitValues = node.productLimitField.value.split(',');
      const productLimits = productLimitValues.slice(0, 2).map(Number);
      const vendorName = productLimitValues[2];
      const vendorLimits = productLimitValues.slice(3, 5).map(Number);
      const productName = productLimitValues[5];

      if (productLimits.some(value => value !== 0)) {
        if (!productLimitCounts[productName]) {
          productLimitCounts[productName] = 0;
          totalProductsCount = totalProductsCount + 1;
        }
        productLimitCounts[productName]++;
      }

      if (vendorLimits.some(value => value !== 0)) {
        if (!vendorCounts[vendorName]) {
          vendorCounts[vendorName] = 0;
          totalProductsCount = totalProductsCount + getAllProductsInVendor(vendorName, allProductsData);
        }
        vendorCounts[vendorName]++;
      }
    }

    if (node.categoryLimitField && node.categoryLimitField.value) {
      const categoryValues = node.categoryLimitField.value.split(',');
      const categoryName = categoryValues[0].trim();
      const categoryLimits = categoryValues.slice(1).map(Number);

      if (categoryLimits.some(value => value !== 0)) {
        if (!categoryCounts[categoryName]) {
          categoryCounts[categoryName] = 0;
          totalProductsCount = totalProductsCount + getAllProductsInCategory(categoryName, allProductsData);
        }
        categoryCounts[categoryName]++;
      }
    }

    if (node.collectionLimitField && node.collectionLimitField.value) {
      const collectionValues = node.collectionLimitField.value.split(',');
      const collectionName = collectionValues[0].trim();
      const collectionLimits = collectionValues.slice(1).map(Number);

      if (collectionLimits.some(value => value !== 0)) {
        if (!collectionCounts[collectionName]) {
          collectionCounts[collectionName] = 0;
          totalProductsCount = totalProductsCount +  getAllProductsInCollection(collectionName, allCollectionsData);
        }
        collectionCounts[collectionName]++;
      }
    }
  });

  return (totalProductsCount + productsInCurrentCollection);
}

export async function getExistingCollectionLimits() {
  const allProductsData = await getAllProductsData();

  let collectionCounts = {};

  allProductsData.forEach(item => {
    const node = item.node;

    if (node.collectionLimitField && node.collectionLimitField.value) {
      const collectionValues = node.collectionLimitField.value.split(',');
      const collectionName = collectionValues[0].trim();
      const collectionLimits = collectionValues.slice(1).map(Number);

      if (collectionLimits.some(value => value !== 0)) {
        if (!collectionCounts[collectionName]) {
          collectionCounts[collectionName] = 0;
        }
        collectionCounts[collectionName]++;
      }
    }
  });

  return collectionCounts;
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
                  vendor
                  category {
                    name
                  }
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
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

  let cursor = allProductsData[allProductsData.length - 1]?.cursor;

  while (true) {
    let productData = await makeGraphQLQuery(
      `query GetProductsPaginated($after: String) {
            products(first: 250, after: $after) {
              edges {
                cursor
                node {
                  id
                  vendor
                  category {
                    name
                  }
                  productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                    id
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    id
                    value
                  }
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
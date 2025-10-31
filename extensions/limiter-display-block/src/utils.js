export async function updateLimiters(productId, limiters) {

  const productData = await getLimiters(productId);
  const allProductsData = await getAllProductsData();

  const productValue = limiters?.productMin + ',' + limiters?.productMax + ',' + limiters?.productMultiple + ',' + limiters?.vendorName + ',' + limiters?.vendorMin + ',' + limiters?.vendorMax + ',' + limiters?.vendorMultiple + ',' + productData?.data?.product?.title;
  const categoryValue = limiters?.categoryName + ',' + limiters?.categoryMin + ',' + limiters?.categoryMax + ',' + limiters?.categoryMultiple;


  if (limiters?.vendorName && Number(limiters?.vendorMax) >= 0 && Number(limiters?.vendorMin >= 0)) {
    let limiter = {
      id: limiters?.vendorName,
      value: `${limiters?.vendorMin},${limiters?.vendorMax},${limiters?.vendorMultiple}`
    };
    await createVendorWiseLimiter(allProductsData, limiter);
  }

  if (categoryValue) {
    let limiter = {
      id: limiters?.categoryName,
      value: `${limiters?.categoryMin},${limiters?.categoryMax},${limiters?.categoryMultiple}`
    };
    await createCategoryWiseLimiter(allProductsData, limiter);
  }

  const metaData = await makeGraphQLQuery(
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
      namespace: "productLimit",
      key: "productLimit",
      type: "string",
      value: productValue,
    }
  );


  const categoryData = await makeGraphQLQuery(
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
      namespace: "categoryLimit",
      key: "categoryLimit",
      type: "string",
      value: categoryValue,
    }
  );

  return ({ success: true });
}

export async function createVendorWiseLimiter(allProductsData, limiter) {

  
  const productIds = allProductsData.filter(product => product.node.vendor === limiter.id).map(product => product.node.id);

  try {
    
    for (const id of productIds) {
      let value = '';
      let allValues = limiter.value.split(',').slice(4, 7);
      let vendorValue = `${allValues[0]},${allValues[1]},${allValues[2]}`;

      const productData = await makeGraphQLQuery(
        `query Product($id: ID!) {
        product(id: $id) {
          title
          productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
            value
          }
        }
      }`,
        { id: id });

      
      const product = productData.data.product;

      

      const productLimitFieldValue = product?.productLimitField?.value;

      if (productLimitFieldValue) {
        const [productMin, productMax, productMultiple, vendorName, vendorMin, vendorMultiple, vendorMax] = productLimitFieldValue.split(',');

        value = `${productMin},${productMax},${productMultiple},${limiter.id},${limiter.value},${product.title}`;
      } else {
        // If there is no previous metafield value, construct a new value
        value = `0,0,0,${limiter.id},${limiter.value},${product.title}`;
      }

      const variables = {
        input: {
          id: id,
          metafields: [
            { namespace: "productLimit", key: "productLimit", type: "string", value },
          ]
        }
      };
      await handleGraphqlMutation(id, value);
    }
  } catch (error) {
    console.log('error while creating vendor limits ', error);
  }
}

export async function createCategoryWiseLimiter(allProductsData, limiter) {
  
  const productIds = allProductsData.filter(product => product.node.category?.name === limiter.id).map(product => product.node.id);
 
  try {
    for (const id of productIds) {
      let value = `${limiter.id},${limiter.value}`;
      await handleGraphqlCategoryMutation(id, value);
    }
  } catch (error) {
    console.log('error while creating category values ', error);
  }
}

async function handleGraphqlCategoryMutation(productId, categoryValue) {
  const categoryData = await makeGraphQLQuery(
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
      namespace: "categoryLimit",
      key: "categoryLimit",
      type: "string",
      value: categoryValue,
    }
  );
}

async function handleGraphqlMutation(productId, productValue) {
  const vendorData = await makeGraphQLQuery(
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
      namespace: "productLimit",
      key: "productLimit",
      type: "string",
      value: productValue,
    }
  );
 
}

export async function getLimiters(productId) {
  // This example uses metafields to store the data. For more information, refer to https://shopify.dev/docs/apps/custom-data/metafields.
  return await makeGraphQLQuery(
    `query Product($id: ID!) {
        product(id: $id) {
          title
          category {
            name
          }
          vendor
          metafield(namespace:"productLimit", key:"productLimit") {
            value
          }
          categoryLimitField: metafield(namespace:"categoryLimit", key:"categoryLimit") {
            value
          }
        }
      }
    `,
    { id: productId }
  );
}

export async function getPlan() {
  let plan = false;
  const allPlanDetails = {
    plan: false,
    freePlanLimiters: [],
  };

  const planDetails = await makeGraphQLQuery(`query appInstallation {
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

  if (planDetails?.data?.currentAppInstallation?.planMetaField?.value == "true") {
    allPlanDetails.plan = true;

    return allPlanDetails;

  } else {
    if (planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value) {
      allPlanDetails.freePlanLimiters = JSON.parse(planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value);
      return allPlanDetails;
    }
  }
  return allPlanDetails;
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

export async function getExistingProductLimits(productId) {
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

  const productData = await getLimiters(productId);

  const currentCategoryName = productData?.data?.product?.category?.name;
  const currentVendorName = productData?.data?.product?.vendor;

  const allCollectionsData = collectionData?.data?.collections?.edges;
  const allProductsData = await getAllProductsData();

  const currentProductsInCategory = getAllProductsInCategory(currentCategoryName, allProductsData);
  const currentProductsInVendor = getAllProductsInVendor(currentVendorName, allProductsData);

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

  const productCount = totalProductsCount + 1;
  const categoryCount = totalProductsCount + currentProductsInCategory;
  const vendorCount = totalProductsCount + currentProductsInVendor;

return {
    productCount,
    vendorCount,
    categoryCount
  };
}


export async function getExistingLimits() {
  const allProductsData = await getAllProductsData();

  let productLimitCounts = {};
  let vendorCounts = {};
  let categoryCounts = {};

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
        }
        productLimitCounts[productName]++;
      }

      if (vendorLimits.some(value => value !== 0)) {
        if (!vendorCounts[vendorName]) {
          vendorCounts[vendorName] = 0;
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
        }
        categoryCounts[categoryName]++;
      }
    }
  });

  return {
    productLimitCounts,
    vendorCounts,
    categoryCounts
  };
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

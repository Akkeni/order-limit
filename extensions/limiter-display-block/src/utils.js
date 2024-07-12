export async function updateLimiters(productId, limiters) {

  const productData = await getLimiters(productId);
  const allProductsData = await getAllProductsData();

  const productValue = limiters?.productMin + ',' + limiters?.productMax + ',' + limiters?.vendorName + ',' + limiters?.vendorMin + ',' + limiters?.vendorMax + ',' + productData?.data?.product?.title;
  const categoryValue = limiters?.categoryName + ',' + limiters?.categoryMin + ',' + limiters?.categoryMax;


  if (limiters?.vendorName && Number(limiters?.vendorMax) >= 0 && Number(limiters?.vendorMin >= 0)) {
    let limiter = {
      id: limiters?.vendorName,
      value: `${limiters?.vendorMin},${limiters?.vendorMax}`
    };
    await createVendorWiseLimiter(allProductsData, limiter);
  }

  if (categoryValue) {
    let limiter = {
      id: limiters?.categoryName,
      value: `${limiters?.categoryMin},${limiters?.categoryMax}`
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
      let allValues = limiter.value.split(',').slice(3, 5);
      let vendorValue = `${allValues[0]},${allValues[1]}`;

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
        const [productMin, productMax, vendorName, vendorMin, vendorMax] = productLimitFieldValue.split(',');

        value = `${productMin},${productMax},${limiter.id},${limiter.value},${product.title}`;
      } else {
        // If there is no previous metafield value, construct a new value
        value = `0,0,${limiter.id},${limiter.value},${product.title}`;
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

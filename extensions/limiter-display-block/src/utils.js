export async function updateLimiters(productId, limiters) {

  //console.log('productId in update ', productId);
  //console.log('limiters in updateLimiters ', limiters);
  const productData = await getLimiters(productId);

  const productValue = limiters?.productMin + ',' + limiters?.productMax + ',' + limiters?.vendorName + ',' + limiters?.vendorMin + ',' + limiters?.vendorMax + ',' + productData?.data?.product?.title;
  const categoryValue = limiters?.categoryName + ',' + limiters?.categoryMin + ',' + limiters?.categoryMax;

  //console.log('productValue in update ', productValue);
  //console.log('categoryValue in update ', categoryValue);

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

  //const metaData = await makeGraphQLQuery(mutationQuery, variables);
  //const metaData = await metaResponse.json();
  //const existingMetafields = metaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)
  //console.log('metaData ', metaData);
  //console.log('categoryData ', categoryData);


  return ({ success: true });
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
  console.log('planDetails value ', planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value);

  if (planDetails?.data?.currentAppInstallation?.planMetaField?.value == "true") {
    allPlanDetails.plan = true;
    //console.log('plan value in utils ', plan);
    return allPlanDetails;

  } else {
    if (planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value) {
      allPlanDetails.freePlanLimiters = JSON.parse(planDetails?.data?.currentAppInstallation?.freePlanLimitersMetaField?.value);
      console.log('freePlanLimiters in extension ', allPlanDetails.freePlanLimiters);
      return allPlanDetails;
    }
  }
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

  console.log('productLimitCounts in function ', productLimitCounts);

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

export async function updateLimiters(productId, limiters) {

    console.log('productId in update ', productId);
    console.log('limiters in updateLimiters ', limiters);
    const productData = await getLimiters(productId);

    const productValue = limiters?.productMin + ',' + limiters?.productMax + ',' + limiters?.vendorName + ',' + limiters?.vendorMin + ',' + limiters?.vendorMax + ',' + productData?.data?.product?.title;
    const categoryValue = limiters?.categoryName + ',' + limiters?.categoryMin + ',' + limiters?.categoryMax;

    console.log('productValue in update ', productValue);
    console.log('categoryValue in update ', categoryValue);

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
    console.log('metaData ', metaData);
    console.log('categoryData ', categoryData);
    /*const errorMessages = metaData?.data?.productUpdate.userErrors;
    
    //console.log('existingrecords', existingMetafields);
    
    if (errorMessages && errorMessages.length > 0) {
    
        const ids = [metaData?.data?.productUpdate?.product?.productLimitField?.id, metaData?.data?.productUpdate?.product?.categoryLimitField?.id];
        for (const id of ids) {
            if (id) {
                // Delete the conflicting metafield
                await admin.graphql(
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
                                id: `${id}`
                            }
                        }
                    }
                );
            }
        }
    
        // Now, execute the updateProduct query with the updated metafields
        const updatedMetaData = await makeGraphQLQuery(mutationQuery, variables);
        //const updatedMetaData = await updatedMetaResponse.json();
    }*/

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

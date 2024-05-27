import {
  BlockStack,
  Text,
  Card,
  Bleed,
  Divider,
  InlineStack,
  InlineError,
  Thumbnail,
  Layout,
  Page,
  Button,
  ButtonGroup,
  FullscreenBar,
  DataTable,
  IndexTable,
  Popover,
  ActionList,
  FormLayout,
  Select,
  TextField,
  Modal,
  Icon,
  Spinner,
  Banner,
} from '@shopify/polaris';
import { json, redirect } from '@remix-run/node';
import { useState, useCallback, useEffect } from 'react';
import { PageActions } from '@shopify/polaris';
import { useNavigate, useSubmit, useLoaderData, useActionData } from '@remix-run/react';
import { ImageIcon, ChevronLeftIcon, ChevronRightIcon, SelectIcon, SearchIcon, LogoXIcon } from '@shopify/polaris-icons';
import { authenticate } from '../shopify.server';
import db from '../db.server';
import React from 'react';
import { getAllProductsData } from '../models/orderLimit.server';


//fetches the category data
export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);

  const orderLimit = await db.order_Limit.findFirst({
    where: {
      shopName: session.shop
    } 
  });

  try {

    let needsConfirmation = false;

    if(orderLimit) {
      if(orderLimit?.shopName === session.shop && orderLimit?.hasToDelete === true) {
        needsConfirmation = true;
        /*let allProductsData = await getAllProductsData(admin.graphql);
        const deleteMetafield = async (metafieldId) => {
          if (metafieldId) {
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
                    id: metafieldId
                  }
                }
              }
            );
          }
        };
        
        const fields = [
          'productLimitField',
          'categoryLimitField',
          'productVariantLimitField',
          'productStatusField',
          'categoryStatusField',
          'categoryNameField'
        ];
        
        for (let product of allProductsData) {
          for (let field of fields) {
            // Check and delete metafields at the product level
            let productMetafieldId = product.node[field]?.id;
            await deleteMetafield(productMetafieldId);
        
            // Check and delete metafields at the variant level if the field is productVariantLimitField
            if (field === 'productVariantLimitField') {
              for (let variant of product.node.variants.edges) {
                let variantMetafieldId = variant.node[field]?.id;
                await deleteMetafield(variantMetafieldId);
              }
            }
          }
        }

        const response = await admin.graphql(
          `{
            shop {
              id
              name
              currencyCode
              weightUnit
              storeLimitField: metafield(namespace: "$app:storeLimit", key: "storeLimit") {
                id
                value
              }
              storeStatusField: metafield(namespace: "$app:storeStatus", key: "storeStatus") {
                id
                value
              }
              priceLimitField: metafield(namespace: "priceLimit", key: "priceLimit") {
                id
                value
              }
              weightLimitField: metafield(namespace: "weightLimit", key: "weightLimit") {
                id
                value
              }
              errorMsgsField: metafield(namespace: "errorMsgs", key: "errorMsgs"){
                id
                value
              }  
            }
          }
        `);
    
    
        const data = await response.json();
    
        const storeFieldIds = [
          data?.data?.shop?.storeLimitField?.id, 
          data?.data?.shop?.priceLimitField?.id, 
          data?.data?.shop?.weightLimitField?.id,
          data?.data?.shop?.errorMsgsField?.id
        ]

        for(const id of storeFieldIds) {
          if(id) {
            await deleteMetafield(id);
          }
        }*/

      }
      /*await db.order_Limit.update({
        where: {
          shopName: session.shop
        },
        data: {
          hasToDelete: false
        }
      })*/
    }

    /*const resProduct = await admin.graphql(
      `query AllProducts{
        products(first: 5) {
          edges {
            cursor
            node {
              id
              title
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
      let productResponse = await admin.graphql(`
          query GetProductsPaginated($after: String) {
            products(first: 10, after: $after) {
              edges {
                cursor
                node {
                  id
                  title
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
    }*/

    let allProductsData = await getAllProductsData(admin.graphql);

    const collectionResponse = await admin.graphql(`query AllCollections {
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
    }`);

    const collectionData = await collectionResponse.json();
    const allCollectionsData = collectionData?.data?.collections?.edges;

    const response = await admin.graphql(
      `{
        shop {
          id
          name
          currencyCode
          weightUnit
          storeLimitField: metafield(namespace: "$app:storeLimit", key: "storeLimit") {
            id
            value
          }
          storeStatusField: metafield(namespace: "$app:storeStatus", key: "storeStatus") {
            id
            value
          }
          priceLimitField: metafield(namespace: "priceLimit", key: "priceLimit") {
            id
            value
          }
          weightLimitField: metafield(namespace: "weightLimit", key: "weightLimit") {
            id
            value
          }
          errorMsgsField: metafield(namespace: "errorMsgs", key: "errorMsgs"){
            id
            value
          }  
          allProductCategories {
          productTaxonomyNode {
            fullName
            name
            id
          }
          }
        }
      }
    `);


    const data = await response.json();
    const allProductCategories = data?.data?.shop?.allProductCategories;
    const shopId = data?.data?.shop?.id;
    const shopName = data?.data?.shop?.name;
    const currencyCode = data?.data?.shop?.currencyCode;
    const weightUnit = data?.data?.shop?.weightUnit;


    const storeLimitFieldValue = data?.data?.shop?.storeLimitField?.value;
    const priceLimitFieldValue = data?.data?.shop?.priceLimitField?.value;
    const weightLimitFieldValue = data?.data?.shop?.weightLimitField?.value;
    const errorMsgsFieldValue = data?.data?.shop?.errorMsgsField?.value;


    const storeLimit = allProductsData.length; // allProductsData?.data?.products?.edges.length;

    const categoriesData = [];
    if (allProductCategories) {
      for (const category of allProductCategories) {
        const productTaxonomyNode = category.productTaxonomyNode;
        let quantityLimit = 0;
        let name = productTaxonomyNode.name;
        let obj = {};
        for (const edge of allProductsData/*.data.products.edges*/) {
          const productCategory = edge.node.category ? edge.node.category.name : null;
          // If the product category matches the current category, increment the count
          if (productCategory === productTaxonomyNode.name) {
            quantityLimit++;
          }
        }
        obj['categoryName'] = productTaxonomyNode.name;
        obj['quantityLimit'] = quantityLimit;
        categoriesData.push(obj);
        //categoryLimits[name] = quantityLimit;
      }
    }

    //console.log('shop id in loader', shopId);




    return json({
      ok: true,
      data,
      allProductsData,
      storeLimit,
      shopId,
      shopName,
      storeLimitFieldValue,
      priceLimitFieldValue,
      weightLimitFieldValue,
      currencyCode,
      weightUnit,
      categoriesData,
      errorMsgsFieldValue,
      needsConfirmation,
      allCollectionsData,
    });

  } catch (error) {
    console.error('Error in loader:', error);
    return json({
      ok: false,
      error: error,
    });
  }
}

//for storing records into database according to the type
export async function action({ request, params }) {

  const { admin, session } = await authenticate.admin(request);
  try {
    const formData = await request.formData();

    const allProductsData = JSON.parse(formData.get('allProductsData')) //await res.json();
    
    if(formData.get('deletePreviousData') === "true") {
      console.log('deletePreviousDataValue in if', formData.get('deletePreviousData'));
      const deleteMetafield = async (metafieldId) => {
        if (metafieldId) {
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
                  id: metafieldId
                }
              }
            }
          );
        }
      };
      
      const fields = [
        'productLimitField',
        'categoryLimitField',
        'productVariantLimitField',
        'productStatusField',
        'categoryStatusField',
        'categoryNameField',
        'collectionLimitField'
      ];
      
      for (let product of allProductsData) {
        for (let field of fields) {
          // Check and delete metafields at the product level
          let productMetafieldId = product.node[field]?.id;
          await deleteMetafield(productMetafieldId);
      
          // Check and delete metafields at the variant level if the field is productVariantLimitField
          if (field === 'productVariantLimitField') {
            for (let variant of product.node.variants.edges) {
              let variantMetafieldId = variant.node[field]?.id;
              await deleteMetafield(variantMetafieldId);
            }
          }
        }
      }

      const response = await admin.graphql(
        `{
          shop {
            id
            name
            currencyCode
            weightUnit
            storeLimitField: metafield(namespace: "$app:storeLimit", key: "storeLimit") {
              id
              value
            }
            storeStatusField: metafield(namespace: "$app:storeStatus", key: "storeStatus") {
              id
              value
            }
            priceLimitField: metafield(namespace: "priceLimit", key: "priceLimit") {
              id
              value
            }
            weightLimitField: metafield(namespace: "weightLimit", key: "weightLimit") {
              id
              value
            }
            errorMsgsField: metafield(namespace: "errorMsgs", key: "errorMsgs"){
              id
              value
            }  
          }
        }
      `);
  
  
      const data = await response.json();
  
      const storeFieldIds = [
        data?.data?.shop?.storeLimitField?.id, 
        data?.data?.shop?.priceLimitField?.id, 
        data?.data?.shop?.weightLimitField?.id,
        data?.data?.shop?.errorMsgsField?.id
      ]

      for(const id of storeFieldIds) {
        if(id) {
          await deleteMetafield(id);
        }
      }

      await db.order_Limit.update({
        where: {
          shopName: session.shop
        },
        data: {
          hasToDelete: false
        }
      })

      //return redirect('/app');
      return json({
        deleted: true,
      });

    } else if(formData.get('deletePreviousData') === "false"){
      await db.order_Limit.update({
        where: {
          shopName: session.shop
        },
        data: {
          hasToDelete: false
        }
      })
      return redirect('/app');
    }


    if (formData.get('action') == 'saveProduct') {

      const limiters = JSON.parse(formData.get('quantityLimit'));
      //console.log('limiters in action', limiters);
      const errorMessages = formData.get('errorMessages');
      
      console.log('messages value in action saveProduct',errorMessages);

      if(errorMessages) {
        const shopId = formData.get('shopId');
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
                "ownerId": `${shopId}`,
                "namespace": "errorMsgs",
                "key": "errorMsgs",
                "type": "string",
                "value": `${errorMessages}`

              }
            ]
          }
        };

        const metaResponse = await admin.graphql(mutationQuery, metafields);
        const metaData = await metaResponse.json();
      }

      for (const limiter of limiters) {

        try {
          if (Number(limiter.value) >= 0 && limiter.type === 'General') {
            const shopId = formData.get('shopId');
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

            if (limiter.id === 'priceMin' || limiter.id === 'priceMax') {
              /*let priceLimit = '';
              console.log('limiters in action', limiters);
              const priceMin = Number(limiters.find(item => item.id === 'priceMin')?.value) || 0;
              const priceMax = Number(limiters.find(item => item.id === 'priceMax')?.value) || 0;

              priceLimit += priceMin;
              priceLimit += ',' + priceMax;*/
              console.log('priceLimit in action ', formData.get('priceLimit'));
              const metafields = {
                variables: {
                  metafields: [
                    {
                      "ownerId": `${shopId}`,
                      "namespace": "priceLimit",
                      "key": "priceLimit",
                      "type": "string",
                      "value": `${formData.get('priceLimit')}`
                    }
                  ]
                }
              };

              const metaResponse = await admin.graphql(mutationQuery, metafields);
              const metaData = await metaResponse.json();
            }
            if (limiter.id === 'weightMin' || limiter.id === 'weightMax') {
              let weightLimit = '';
              console.log('limiters in action', limiters);
              const weightMin = Number(limiters.find(item => item.id === 'weightMin')?.value) || 0;
              const weightMax = Number(limiters.find(item => item.id === 'weightMax')?.value) || 0;

              weightLimit += weightMin;
              weightLimit += ',' + weightMax;
              console.log('weightLimit in action ', weightLimit);
              const metafields = {
                variables: {
                  metafields: [
                    {
                      "ownerId": `${shopId}`,
                      "namespace": "weightLimit",
                      "key": "weightLimit",
                      "type": "string",
                      "value": `${formData.get('weightLimit')}`

                    }
                  ]
                }
              };

              const metaResponse = await admin.graphql(mutationQuery, metafields);
              const metaData = await metaResponse.json();
            }
          }

          if (limiter.type === 'Store Wise') {

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
                    "ownerId": `${limiter.id}`,
                    "namespace": "$app:storeLimit",
                    "key": "storeLimit",
                    "type": "string",
                    "value": `${limiter.value}`

                  },
                  {
                    "ownerId": `${limiter.id}`,
                    "namespace": "$app:storeStatus",
                    "key": "storeStatus",
                    "type": "string",
                    "value": "active"

                  }
                ]
              }
            };

            const metaResponse = await admin.graphql(mutationQuery, metafields);
            const metaData = await metaResponse.json();
          }

          /*if(limiter.type === 'Product Wise' || limiter.type === 'Category Wise') {
             const result = await addLimiter(limiter);
          }*/

          if (limiter.type === 'Category Wise') {
            //console.log('limiter in category wise in action', limiter);

            // Initialize an empty array to store product IDs
            const productIds = [];

            // Iterate through the edges of the products
            allProductsData.forEach(edge => {
              const category = edge.node.category;
              // Check if the category exists and its name is "Snowboards"
              if (category && category?.name === limiter.id) {
                // If it matches, add the product ID to the array
                productIds.push(edge.node.id);
              }
            });

            // Now, snowboardProductIds array contains the IDs of products belonging to the "Snowboards" category
            //console.log('productIds in action', productIds);
            for (const id of productIds) {
              //console.log('productid in forloop', id);
              const mutationQuery = `mutation productUpdate($input: ProductInput!) {
                productUpdate(input: $input) {
                  product {
                    id
                    title
                    categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                      id
                    }
                    categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
                      id
                    }
                    categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
                      id
                    }
                  }
                  userErrors {
                    field
                    message
                  }
                }
              }`;
              let categoryLimitValue = limiter.id + ',' + limiter.value;
              const variables = {
                variables: {
                  input: {
                    id: `${id}`,
                    metafields: [
                      {
                        "namespace": "categoryName",
                        "key": "categoryName",
                        "type": "string",
                        "value": `${limiter.id}`
                      },
                      {
                        "namespace": "categoryLimit",
                        "key": "categoryLimit",
                        "value": `${categoryLimitValue}`,
                        "type": "string"
                      },
                      {
                        "namespace": "categoryStatus",
                        "key": "categoryStatus",
                        "value": "active",
                        "type": "string"
                      }
                    ]
                  }
                }
              };

              const metaResponse = await admin.graphql(mutationQuery, variables);
              const metaData = await metaResponse.json();
              //const existingMetafields = metaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)

              const errorMessages = metaData.data.productUpdate.userErrors;

              //console.log('existingerrorMessages in action', errorMessages);
              //console.log('existingMetafields in action', existingMetafields);
              //console.log('existingrecords', existingMetafields);

              if (errorMessages && errorMessages.length > 0) {

                const ids = [metaData?.data?.productUpdate?.product?.categoryLimitField?.id, metaData?.data?.productUpdate?.product?.categoryNameField?.id, metaData?.data?.productUpdate?.product?.categoryStatusField?.id];
                // Delete metafields one by one based on the given keys
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
                const updatedMetaResponse = await admin.graphql(mutationQuery, variables);
                const updatedMetaData = await updatedMetaResponse.json();
                const updatedMetafields = updatedMetaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)

                const updatedErrorMessages = updatedMetaData.data.productUpdate.userErrors;

                //console.log('updatedrecords in action', updatedErrorMessages);
                //console.log('updatedMetafields in action', updatedMetafields);
              }

            }

          }

          if (limiter.type === 'Product Wise') {

            if (limiter.id.includes("ProductVariant")) {
              //console.log('product variant id in action', limiter.id);
              const mutationQuery = `mutation productVariantUpdate($input: ProductVariantInput!) {
                productVariantUpdate(input: $input) {
                  productVariant{
                    productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                      id
                    }
                    productStatusField: metafield(namespace: "productStatus", key: "productStatus") {
                      id
                    }
                  }
                  userErrors {
                    field
                    message
                  }
                }
              }`;

              const variables = {
                variables: {
                  input: {
                    id: `${limiter.id}`,
                    metafields: [
                      {
                        "namespace": "productLimit",
                        "key": `productLimit`,
                        "type": "string",
                        "value": `${limiter.value}`
                      },
                      {
                        "namespace": "productStatus",
                        "key": "productStatus",
                        "type": "string",
                        "value": "active",
                      }
                    ]
                  }
                }
              };
              const metaResponse = await admin.graphql(mutationQuery, variables);
              const metaData = await metaResponse.json();
              //const existingMetafields = metaData?.data?.productVariantUpdate?.productVariant?.metafields?.edges.map(edge => edge.node)

              const errorMessages = metaData.data?.productVariantUpdate?.userErrors;

              //console.log('existingrecords', existingMetafields);

              if (errorMessages && errorMessages.length > 0) {

                const ids = [metaData?.data?.productVariantUpdate?.productVariant?.productLimitField?.id, metaData?.data?.productVariantUpdate?.productVariant?.productStatusField?.id];
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
                const updatedMetaResponse = await admin.graphql(mutationQuery, variables);
                const updatedMetaData = await updatedMetaResponse.json();
              }
            } else {

              const mutationQuery = `mutation productUpdate($input: ProductInput!) {
                productUpdate(input: $input) {
                  product {
                    id
                    title
                    productLimitField: metafield(namespace: "productLimit", key: "productLimit") {
                      id
                    }
                    productStatusField: metafield(namespace: "productStatus", key: "productStatus") {
                      id
                    }
                  }
                  userErrors {
                    field
                    message
                  }
                }
              }`;

              const variables = {
                variables: {
                  input: {
                    id: `${limiter.id}`,
                    metafields: [
                      {
                        "namespace": "productLimit",
                        "key": `productLimit`,
                        "type": "string",
                        "value": `${limiter.value}`
                      },
                      {
                        "namespace": "productStatus",
                        "key": "productStatus",
                        "type": "string",
                        "value": "active",
                      }
                    ]
                  }
                }
              };
              const metaResponse = await admin.graphql(mutationQuery, variables);
              const metaData = await metaResponse.json();
              //const existingMetafields = metaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)

              const errorMessages = metaData.data.productUpdate.userErrors;

              //console.log('existingrecords', existingMetafields);

              if (errorMessages && errorMessages.length > 0) {

                const ids = [metaData?.data?.productUpdate?.product?.productLimitField?.id, metaData?.data?.productUpdate?.product?.productStatusField?.id];
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
                const updatedMetaResponse = await admin.graphql(mutationQuery, variables);
                const updatedMetaData = await updatedMetaResponse.json();
              }
            }
          }

          if(limiter.type === 'Collection Wise') {
            console.log('collectionsData in action ', formData.get('allCollectionsData'));
            const allCollectionsData = JSON.parse(formData.get('allCollectionsData'));
            console.log('limiter id in collection ', limiter.id)
            const collectionId = allCollectionsData.find((item) => item.node.title === limiter.id)?.node?.id;
            console.log('collection id in collection wise ', collectionId);         
            for(const product of allProductsData) {
              const productId = product?.node?.id;
              console.log('product id in collection wise ', productId);        
              let response = await admin.graphql(
                ` {
                  collection(id: "${collectionId}"){
                    hasProduct(id: "${productId}")
                  }
              }`);
              const responseData = await response.json();
              console.log('responseData in collection wise ', responseData?.data);
              if(responseData?.data?.collection?.hasProduct) {
                const mutationQuery = `mutation productUpdate($input: ProductInput!) {
                  productUpdate(input: $input) {
                    product {
                      id
                      title
                      collectionLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                        id
                      }
                    }
                    userErrors {
                      field
                      message
                    }
                  }
                }`;
                let collectionLimitValue = limiter.id + ',' + limiter.value;
                const variables = {
                  variables: {
                    input: {
                      id: `${productId}`,
                      metafields: [
                        
                        {
                          "namespace": "collectionLimit",
                          "key": "collectionLimit",
                          "value": `${collectionLimitValue}`,
                          "type": "string"
                        }
                      ]
                    }
                  }
                };
  
                const metaResponse = await admin.graphql(mutationQuery, variables);
                const metaData = await metaResponse.json();
                //const existingMetafields = metaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)
  
                const errorMessages = metaData.data.productUpdate.userErrors;
  
                //console.log('existingerrorMessages in action', errorMessages);
                //console.log('existingMetafields in action', existingMetafields);
                //console.log('existingrecords', existingMetafields);
  
                if (errorMessages && errorMessages.length > 0) {
  
                  const ids = [metaData?.data?.productUpdate?.product?.collectionLimitField?.id];
                  // Delete metafields one by one based on the given keys
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
                  const updatedMetaResponse = await admin.graphql(mutationQuery, variables);
                  const updatedMetaData = await updatedMetaResponse.json();
                  const updatedMetafields = updatedMetaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node);
  
                  //console.log('updatedrecords in action', updatedErrorMessages);
                  //console.log('updatedMetafields in action', updatedMetafields);
                }
              }
            }

          }

          

        } catch (error) {

          console.log('error while creating metafields for products in action ', error);
          return json({
            ok: false,
            error: error
          });
        }
      }

      return json({
        created: true,
      });

    } else {
      return redirect('/app/');
    }

  } catch (error) {
    console.error('Error storing records:', error);
    return json({
      ok: false,
      error: error,
    });
  }
}


// Component to handle deletion confirmation
const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <Modal
      open
      onClose={onCancel}
      title="Confirm Deletion"
      primaryAction={{
        content: 'Confirm',
        onAction: onConfirm,
      }}
      secondaryAction={{
        content: 'Cancel',
        onAction: onCancel,
      }}
    >
      <Modal.Section>
        <p>Do you want to delete previous data?</p>
      </Modal.Section>
    </Modal>
  );
};


export default function Index() {

  const loaderData = useLoaderData();
  const actionData = useActionData();

  const [error, setError] = useState(false); // State to handle loader errors

  // useEffect to handle loader errors
  useEffect(() => {
    if (!loaderData?.ok) {
      setError(loaderData?.error || 'Unknown error occurred');
    }
  }, [loaderData]);

  // Handling action errors
  useEffect(() => {
    if (!actionData?.ok) {
      setError(actionData?.error || 'Unknown error occurred');
    }
  }, [actionData]);

  // Helper function to render error message
  const renderErrorMessage = () => {
    return (
      <Page>
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <InlineError message={error} />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  };

  // Render error message if error exists
  if (error) {
    renderErrorMessage();
  }

  const [showConfirmation, setShowConfirmation] = useState(loaderData?.needsConfirmation);
  const navigate = useNavigate();
  const submit = useSubmit();

  


  //const categoryLimits = loaderData?.categoryLimits;
  const categoryOptions = [];
  const categoryIds = {};
  const allProductCategories = loaderData?.data?.data.shop.allProductCategories;
  const shopName = loaderData.shopName;
  const shopLimit = loaderData.storeLimit;
  const allProductsData = loaderData?.allProductsData;
  const allCollectionsData = loaderData?.allCollectionsData;

  const categoriesData = loaderData?.categoriesData;

  let existingErrMsgs = {};

  if(loaderData?.errorMsgsFieldValue && showConfirmation === false) {
    existingErrMsgs = JSON.parse(loaderData?.errorMsgsFieldValue);
  }
  



  const [searchValue, setSearchValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [tagValue, setTagValue] = useState('General');
  const [quantityLimit, setQuantityLimit] = useState([]);
  const [variantQuantityLimits, setVariantQuantityLimits] = useState({});
  //const submit = useSubmit();
  const [isSaving, setIsSaving] = useState(false);

  const [selectedSortColumn, setSelectedSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('ascending');

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

  const [errorMessages, setErrorMessages] = useState({
    priceMinErrMsg: existingErrMsgs.priceMinErrMsg || '',
    priceMaxErrMsg: existingErrMsgs.priceMaxErrMsg || '',
    weightMinErrMsg: existingErrMsgs.weightMinErrMsg || '',
    weightMaxErrMsg: existingErrMsgs.weightMaxErrMsg || '',
    shopMinErrMsg: existingErrMsgs.shopMinErrMsg || '',
    shopMaxErrMsg: existingErrMsgs.shopMaxErrMsg || '', 
    productMinErrMsg: existingErrMsgs.productMinErrMsg || '',
    productMaxErrMsg: existingErrMsgs.productMaxErrMsg || '',
    variantMinErrMsg: existingErrMsgs.variantMinErrMsg || '',
    variantMaxErrMsg: existingErrMsgs.variantMaxErrMsg || '',
    categoryMinErrMsg: existingErrMsgs.categoryMinErrMsg || '',
    categoryMaxErrMsg: existingErrMsgs.categoryMaxErrMsg || '',
    collectionMinErrMsg: existingErrMsgs.collectionMinErrMsg || '',
    collectionMaxErrMsg:  existingErrMsgs.collectionMaxErrMsg || '',
  });

  const collectionIds = [];

  /*//to populate the category arrays
  for (const collection of allCollectionsData) {
    collectionIds.push(collection?.node?.id);
  }*/

  console.log('collections in index', collectionIds);
  //abscent of categories in the store
  if (!(categoriesData.length)) {
    //console.log('no categories');
    categoriesData.push({categoryName: 'No Categories'});
  }


  useEffect(() => {
    if (actionData?.exist) {
      //console.log('exist', actionData?.exist);
      toggleAlert();
    }
    if (actionData?.created || actionData?.updated) {
      setIsSaving(false);
      //toggleSuccess();
      setSuccess(true);
    }
  }, [actionData]);


  // Filter rows based on search value
  const filteredCategoryRows = categoriesData.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  const filteredProductRows = allProductsData.filter(product =>
    product.node.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    (product.node.priceRangeV2?.maxVariantPrice?.amount.toString().toLowerCase().includes(searchValue.toLowerCase())) ||
    (product.node?.totalInventory.toString().toLowerCase().includes(searchValue.toLowerCase()))

  );

  const filteredCollectionRows = allCollectionsData.filter(collection =>
    collection.node.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    (collection.node.productsCount?.count.toString().toLowerCase().includes(searchValue.toLowerCase()))  
  );

  // Sort the filtered rows based on the current sort column and direction
  const sortedCategoryFilteredRows = filteredCategoryRows.sort((a, b) => {
    const aValue = a[selectedSortColumn];
    const bValue = b[selectedSortColumn];
    if (aValue === bValue) return 0;
    return sortDirection === 'ascending' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });



  // Sort the filtered rows based on the current sort column and direction
  const sortedProductFilteredRows = filteredProductRows.sort((a, b) => {
    // Custom comparison logic for priceRangeV2
    if (selectedSortColumn === 'priceRangeV2') {
      const aPrice = a?.node.priceRangeV2?.maxVariantPrice?.amount;
      const bPrice = b?.node.priceRangeV2?.maxVariantPrice?.amount;
      return sortDirection === 'ascending' ? aPrice - bPrice : bPrice - aPrice;
    }
    const aValue = a.node[selectedSortColumn];
    const bValue = b.node[selectedSortColumn];
    if (aValue === bValue) return 0;
    return sortDirection === 'ascending' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });

   // Sort the filtered rows based on the current sort column and direction
   const sortedCollectionFilteredRows = filteredCollectionRows.sort((a, b) => {
    // Custom comparison logic for priceRangeV2
    if (selectedSortColumn === 'count') {
      const aCount = a?.node?.productsCount?.count;
      const bCount = b?.node?.productsCount?.count;
      return sortDirection === 'ascending' ? aCount - bCount : bCount - aCount;
    }
    const aValue = a.node[selectedSortColumn];
    const bValue = b.node[selectedSortColumn];
    if (aValue === bValue) return 0;
    return sortDirection === 'ascending' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });



  const handleNextPage = () => setCurrentPage(currentPage + 1)
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  const totalRecords = allProductsData.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);



  //handle sorting
  const handleSort = (column) => {
    //console.log('handleSort', column);
    if (selectedSortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === 'ascending' ? 'descending' : 'ascending'
      );
    } else {
      setSelectedSortColumn(column);
      setSortDirection('ascending');
    }
    //console.log('direction', sortDirection);
  };


  const fetchVariantQuantityLimit = async (productId) => {
    try {
      const limit = await getProductVariantQuantityLimit(productId);
      setVariantQuantityLimits(prevState => ({
        ...prevState,
        [productId]: limit
      }));
    } catch (error) {
      console.error('Error fetching variant quantity limit for product ID:', productId, error);
    }
  };

  useEffect(() => {
    allProductsData.forEach((product) => {
      product.node.variants.edges.forEach((variant) => {
        fetchVariantQuantityLimit(variant.node.id);
      });
    });
  }, []);


  const handleConfirm = () => {
    setIsSaving(true);
    const deletePreviousData = true;
    submit({deletePreviousData: deletePreviousData, allProductsData: JSON.stringify(loaderData?.allProductsData)}, { method: 'post' });
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    const deletePreviousData = false;
    submit({deletePreviousData: deletePreviousData, allProductsData: JSON.stringify(loaderData?.allProductsData)}, { method: 'post' });
    setShowConfirmation(false);
  };

  useEffect(() => {
    if (actionData?.deleted) {
      //return <DeleteConfirmation onConfirm={handleConfirm} onCancel={handleCancel} />;
      setIsSaving(false);
      navigate('/app');
    }
  }, [actionData]);
  /*if (!(showConfirmation)) {
    //return <DeleteConfirmation onConfirm={handleConfirm} onCancel={handleCancel} />;
    setIsSaving(false);
  }*/

  const toggleAlert = useCallback(
    () => setAlert((alert) => !alert),
    [],
  );
  const toggleSuccess = useCallback(
    () => setSuccess((success) => !success),
    [],
  );

  console.log('collections in index ', allCollectionsData);

  const handleErrorMessages = (name, value) => {
    setErrorMessages(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleTagValueChange = (value) => {
    setTagValue(value);
    //console.log('tag value', tagValue);
  };


  const handleSaveProduct = () => {
    setIsSaving(true);
    let priceLimit = '';
    let weightLimit = '';
    priceLimit = priceLimit + getPriceQuantityLimit('priceMin') + ',' + getPriceQuantityLimit('priceMax');
    weightLimit = weightLimit + getWeightQuantityLimit('weightMin') + ',' + getWeightQuantityLimit('weightMax');
    console.log('priceLimit ', priceLimit);
    submit({ action: 'saveProduct', quantityLimit: JSON.stringify(quantityLimit), allProductsData: JSON.stringify(allProductsData), shopId: loaderData?.shopId, priceLimit: priceLimit, weightLimit: weightLimit, errorMessages: JSON.stringify(errorMessages), allCollectionsData: JSON.stringify(allCollectionsData) }, { method: 'post' }).catch((error) => {
      // Handle error
      console.error('Error saving product:', error);
      setIsSaving(false); // Ensure saving state is set to false in case of error
    });
  }

  const handleQuantityLimit = (value, id, range = '') => {
    console.log('value and id in handlequantity', value, id);
    let limitValue = '';
    if (range === 'min') {
      if (tagValue === "Collection Wise") {
        let max = getCollectionQuantityLimit(id, 'max');
        limitValue = limitValue + value + ',' + max;
      } else if (id.includes("ProductVariant")) {
        let max = getVariantQunatity(id, 'max');
        limitValue = limitValue + value + ',' + max;
      } else if (id.includes("Product")) {
        let max = getProductQuantityLimit(id, 'max');
        limitValue = limitValue + value + ',' + max;
      } else if (id.includes('shop')) {
        let max = getStoreQuantityLimit(id, 'max');
        limitValue = limitValue + value + ',' + max;
      } else {
        let max = getCategoryQuantityLimit(id, 'max');
        limitValue = limitValue + value + ',' + max;
      }
    } else {
      if (tagValue === "Collection Wise") {
        let min = getCollectionQuantityLimit(id, 'min');
        limitValue = limitValue + min + ',' + value;
      } else if (id.includes("ProductVariant")) {
        let min = getVariantQunatity(id, 'min');
        limitValue = limitValue + min + ',' + value;
      } else if (id.includes("Product")) {
        let min = getProductQuantityLimit(id, 'min');
        limitValue = limitValue + min + ',' + value;
      } else if (id.includes('shop')) {
        let min = getStoreQuantityLimit(id, 'min');
        limitValue = limitValue + min + ',' + value;
      } else {
        let min = getCategoryQuantityLimit(id, 'min');
        limitValue = limitValue + min + ',' + value;
      }
    }
    if (!(tagValue === 'General')) {
      value = limitValue;
    }
    
    
      // Update quantityLimit state to contain objects with id as keys and quantity limits as values
      setQuantityLimit((prevQuantityLimit) => {
        // Check if the id already exists in the state
        const index = prevQuantityLimit.findIndex(item => item.id === id);

        if (index !== -1) {
          // If id exists, update its quantity limit
          return prevQuantityLimit.map(item => {
            if (item.id === id) {
              return { ...item, value, type: tagValue };
            } else {
              return item;
            }
          });
        } else {
          // If id doesn't exist, add it to the state
          return [...prevQuantityLimit, { id, value, type: tagValue }];
        }
      });
      setVariantQuantityLimits(prevState => ({
        ...prevState,
        [id]: value
      }));
    
  };

  const getProductQuantityLimit = (productId, range) => {
    //console.log('quantitylimits in getProduct', quantityLimit);
    //console.log('range in getProduct', range);
    const productLimit = quantityLimit.find(item => item.id === productId);
    //console.log('productLimit in getProduct ', productLimit);
    if (productLimit) {
      const productLimitValue = productLimit.value;
      if (range === "min") {
        return productLimitValue.split(',')[0];
      } else {
        return productLimitValue.split(',')[1];
      }
    } else {
      const productLimitFieldValue = allProductsData.find(product => product.node.id === productId)?.node.productLimitField?.value;
      //console.log('productLimitValue in getProduct ', productLimitFieldValue);

      if (productLimitFieldValue) {
        if (range === "min") {
          return productLimitFieldValue.split(',')[0];
        } else {
          return productLimitFieldValue.split(',')[1];
        } // Return the quantity limit from productLimitField if found and greater than 0
      } else {
        return 0; // Return 0 if no quantity limit found
      }
    }
  };


  //to populate variantQuantityLimits array
  const getProductVariantQuantityLimit = async (productId, range) => {

    try {
      const productLimit = quantityLimit.find(item => item.id === productId);
      if (productLimit) {
        return productLimit.value; // Return the quantity limit if found and greater than 0
      } else {
        const lastNumberId = productId.match(/\d+$/)[0];
        const response = await fetch(`/api/getVariantLimit/${lastNumberId}`);
        const responseData = await response.json();
        //console.log('responseData in getvariant quantity', responseData);
        const productVariantLimitField = responseData?.productVariantLimitField;
        if (productVariantLimitField?.value) {
          return productVariantLimitField?.value;
        } else {
          return '0,0';
        }
      }
    } catch (error) {
      console.log('error while fetching variant quantity limit ', error);
    }
  }

  const getVariantQunatity = (id, range) => {
    const variantQuantityLimitValue = variantQuantityLimits[id];
    console.log('variantQuantityLimitValue in getVariantQuantity', variantQuantityLimitValue);
    if (range === "min") {
      return variantQuantityLimitValue.split(',')[0];
    } else {
      return variantQuantityLimitValue.split(',')[1];
    }
  }


  const getCategoryQuantityLimit = (name, range) => {
    const categoryLimit = quantityLimit.find(item => item.id === name);
    if (categoryLimit) {
      const categoryLimitValue = categoryLimit.value;
      if (range === "min") {
        return categoryLimitValue.split(',')[0];
      } else {
        return categoryLimitValue.split(',')[1];
      }
    } else {

      const categoryLimitFieldValue = loaderData?.allProductsData.find((item) =>
        item.node?.category?.name === name &&
        item.node?.categoryLimitField &&
        item.node?.categoryLimitField.value !== "undefined"
      )?.node?.categoryLimitField?.value;

      if (categoryLimitFieldValue) {
        if (range === "min") {
          return categoryLimitFieldValue.split(',')[1];
        } else {
          return categoryLimitFieldValue.split(',')[2];
        }
      } else {
        return 0;
      }
    }
  }

  const getCollectionQuantityLimit = (name, range) => {
    const collectionLimit = quantityLimit.find(item => item.id === name);
    if (collectionLimit) {
      const collectionLimitValue = collectionLimit.value;
      if (range === "min") {
        return collectionLimitValue.split(',')[0];
      } else {
        return collectionLimitValue.split(',')[1];
      }
    } else {

      const collectionLimitFieldValue = loaderData?.allProductsData.find((item) => {
        if(item.node?.collectionLimitField && item.node?.collectionLimitField.value !== "undefined") {
            return item.node?.collectionLimitField?.value.split(',')[0] === name;
          }
      }
      )?.node?.collectionLimitField?.value;

      if (collectionLimitFieldValue) {
        if (range === "min") {
          return collectionLimitFieldValue.split(',')[1];
        } else {
          return collectionLimitFieldValue.split(',')[2];
        }
      } else {
        return 0;
      }
    }
  }


  const getStoreQuantityLimit = (shopId, range) => {
    //console.log('quantitylimit in getStore', quantityLimit);
    //console.log('range in getStore', range);
    const storeLimit = quantityLimit.find(item => item.id === shopId);
    if (storeLimit) {
      const storeLimitValue = storeLimit.value;
      if (range === "min") {
        return storeLimitValue.split(',')[0];
      } else {
        return storeLimitValue.split(',')[1];
      }
    } else {
      if (loaderData?.storeLimitFieldValue) {
        console.log('storeLimitFieldValue in getStore', loaderData?.storeLimitFieldValue);
        const storeLimit = loaderData?.storeLimitFieldValue;
        if (range === "min") {
          return storeLimit.split(',')[0];
        } else {
          return storeLimit.split(',')[1];
        }
      } else {
        return 0;
      }
    }
  }

  const getPriceQuantityLimit = (range) => {
    const priceLimit = quantityLimit.find(item => item.id === range);
    if (priceLimit) {
      return parseInt(priceLimit.value);
    } else {
      if (loaderData?.priceLimitFieldValue) {
        const priceLimit = loaderData?.priceLimitFieldValue;
        if (range === "priceMin") {
          return priceLimit.split(',')[0];
        } else {
          return priceLimit.split(',')[1];
        }
        //return parseInt(loaderData?.priceLimitFieldValue);
      } else {
        return 0;
      }
    }
  }

  const getWeightQuantityLimit = (range) => {
    const weightLimit = quantityLimit.find(item => item.id === range);

    if (weightLimit) {
      return parseInt(weightLimit.value);
    } else {
      if (loaderData?.weightLimitFieldValue) {
        const weightLimit = loaderData?.weightLimitFieldValue;
        if (range === "weightMin") {
          return weightLimit.split(',')[0];
        } else {
          return weightLimit.split(',')[1];
        }
        //return parseInt(loaderData?.weightLimitFieldValue);
      } else {
        return 0;
      }
    }
  }

  if (isSaving) {
    //console.log('isSaving ', isSaving);
    return (
      <div style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          fontSize: "18px",
        }}>
          <Spinner accessibilityLabel="Saving" size="large" />
        </div>
      </div>
    );
  }
  console.log('showconfirmation', showConfirmation);
  return (

    <div>
      {showConfirmation && (
       <Modal
        open
        onClose={handleCancel}
        title="Confirm Deletion"
        primaryAction={{
          content: 'Confirm',
          onAction: handleConfirm,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleCancel,
          },
        ]}
      >
       <Modal.Section>
         <p>Do you want to delete previous data?</p>
       </Modal.Section>
     </Modal>
      )}
      {!showConfirmation && (

    <Page fullWidth={true}>
      <ui-title-bar title="Order Wise Limit"></ui-title-bar>

      {/* Alert message */}
      {success && (
        <div>
          <Banner
            title="Saved successfully!"
            tone="success"
            onDismiss={() => setSuccess(false)}
          />
          {/*<Card padding="0">
            <div style={{ display: "flex", alignItems: "center", flexDirection: "row", alignContent: "stretch", justifyContent: "space-between", backgroundColor: "rgb(80 220 169)" }}>
              <Text><span style={{ padding: "0.5rem" }}>Saved successfully!</span></Text>
              <div style={{ float: "right" }}>
                <Button icon={LogoXIcon} accessibilityLabel="close" onClick={toggleSuccess} size="micro" tone="critical" />
              </div>
            </div>
          </Card>*/}
        </div>
      )}

      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
        <div style={{ paddingTop: '0.5rem', paddingBottom: '1.5rem', paddingRight: '1rem' }}>
          <InlineStack gap="500">
            <div style={{ paddingLeft: '0.5rem' }}>
              <TextField
                label="Search"
                value={searchValue}
                onChange={setSearchValue}
                prefix={<Icon source={SearchIcon} color="skyDark" />}
              />
            </div>
            <div style={{ paddingLeft: '0.5rem' }}>
              <FormLayout>
                <Select
                  label="Limit By"
                  options={['General', 'Store Wise', 'Product Wise', 'Category Wise', 'Collection Wise']}
                  value={tagValue}
                  onChange={handleTagValueChange}
                />
              </FormLayout>
            </div>
            <div style={{ marginLeft: 'auto' }}>
              <PageActions
                primaryAction={{
                  content: 'Save',
                  onAction: handleSaveProduct
                }}
              />
            </div>
          </InlineStack>
        </div>
      </div>



      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            {tagValue === 'Product Wise' && (
              <div>
              <Card>
                <IndexTable
                  headings={[
                    { title: 'Image' },
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('title')} variant="tertiary">
                            Title
                          </Button>
                          <Button onClick={() => handleSort('title')} variant="tertiary">
                            <Icon source={SelectIcon} />
                          </Button>
                        </ButtonGroup>
                      )
                    },
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('totalInventory')} variant="tertiary">
                            Quantity
                          </Button>
                          <Button icon={SelectIcon} onClick={() => handleSort('totalInventory')} variant="tertiary" size="micro" />
                        </ButtonGroup>
                      )
                    },
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('priceRangeV2')} variant="tertiary">
                            Price ({loaderData?.currencyCode})
                          </Button>
                          <Button icon={SelectIcon} onClick={() => handleSort('priceRangeV2')} variant="tertiary" size="micro" />
                        </ButtonGroup>
                      )
                    },
                    { title: 'Min Limit' },
                    { title: 'Max Limit' }
                  ]}
                  itemCount={allProductsData.length}
                  selectable={false}
                >
                  {sortedProductFilteredRows.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage).map((product, index) => (
                    <>
                      <IndexTable.Row key={index}>
                        <IndexTable.Cell>
                          <Thumbnail
                            source={product.node.images.edges[0]?.node?.url || ImageIcon}
                            alt="Product"
                          />

                        </IndexTable.Cell>
                        <IndexTable.Cell>{product.node.title}</IndexTable.Cell>
                        <IndexTable.Cell>{product.node.totalInventory}</IndexTable.Cell>
                        <IndexTable.Cell>{product.node.priceRangeV2?.maxVariantPrice?.amount}</IndexTable.Cell>
                        <IndexTable.Cell>
                          <FormLayout>
                            <TextField
                              value={getProductQuantityLimit(product.node.id, 'min')}
                              label="Product Min Limit"
                              type="number"
                              onChange={(value) => { handleQuantityLimit(value, product.node.id, 'min') }}
                            />
                          </FormLayout>
                        </IndexTable.Cell>
                        <IndexTable.Cell>
                          <FormLayout>
                            <TextField
                              value={getProductQuantityLimit(product.node.id, 'max')}
                              label="Product Max Limit"
                              type="number"
                              onChange={(value) => { handleQuantityLimit(value, product.node.id, 'max') }}
                            />
                          </FormLayout>
                        </IndexTable.Cell>
                      </IndexTable.Row>
                      {product?.node.variants?.edges.length > 1 && (
                        product.node.variants.edges.map((variant, index) => (
                          <IndexTable.Row key={index}>
                            <div style={{ paddingLeft: "3rem" }}>
                              <IndexTable.Cell >
                                <Thumbnail
                                  source={variant?.node?.image?.url || ImageIcon}
                                  alt="Product"
                                />
                              </IndexTable.Cell>
                            </div>
                            <IndexTable.Cell>{variant.node.title}</IndexTable.Cell>
                            <IndexTable.Cell>{variant.node.inventoryQuantity}</IndexTable.Cell>
                            <IndexTable.Cell>{variant.node.price}</IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={getVariantQunatity(variant.node.id, 'min')}
                                  label="Variant Min Limit"
                                  type="number"
                                  onChange={(value) => { handleQuantityLimit(value, variant.node.id, 'min') }}
                                />
                              </FormLayout>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={getVariantQunatity(variant.node.id, 'max')}
                                  label="Variant Max Limit"
                                  type="number"
                                  onChange={(value) => { handleQuantityLimit(value, variant.node.id, 'max') }}
                                />
                              </FormLayout>
                            </IndexTable.Cell>
                          </IndexTable.Row>
                        ))
                      )}
                    </>
                  ))}
                </IndexTable>
                {/* Pagination component*/}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <Button icon={ChevronLeftIcon} accessibilityLabel="Previous Page" disabled={currentPage === 1} onClick={handlePreviousPage} />
                  <span style={{ padding: '0.5rem', margin: '0.5rem' }}> Page {currentPage}</span>
                  <Button icon={ChevronRightIcon} accessibilityLabel="Next Page" disabled={currentPage === totalPages} onClick={handleNextPage} />
                </div>
              </Card>
              
              <br/>
              <br/>

              <Card>
                <TextField
                  label="Error Message for Product Minimum limit"
                  value={errorMessages.productMinErrMsg || existingErrMsgs?.productMinErrMsg}
                  onChange={(value) => { handleErrorMessages("productMinErrMsg", value) }}
                  placeholder="you can't select less than {productMin} for this product."
                  helpText="use {productMin} to include minimum limit"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Product Maximum limit"
                  value={errorMessages.productMaxErrMsg || existingErrMsgs?.productMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("productMaxErrMsg", value) }}
                  placeholder="Quantity limit reached, you can't select more than {productMax}."
                  helpText="use {productMax} to include maximum limit"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Product Variant Minimum limit"
                  value={errorMessages.variantMinErrMsg || existingErrMsgs?.variantMinErrMsg}
                  onChange={(value) => { handleErrorMessages("variantMinErrMsg", value) }}
                  placeholder="`you can't select less than {productVariantMin} for this product variant."
                  helpText="use {productVariantMin} to include minimum limit"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Product Variant Maximum limit"
                  value={errorMessages.variantMaxErrMsg || existingErrMsgs?.variantMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("variantMaxErrMsg", value) }}
                  placeholder="Quantity limit reached, you can't select more than {productVariantMax}."
                  helpText="use {productVariantMax} to include maximum limit"
                  autoComplete="off"
                />
                <br/>
              </Card>

              </div>
            )}

            {tagValue === 'Category Wise' && (
              <div>
              <Card>
                <IndexTable
                  headings={[
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('categoryName')} variant="tertiary">
                            Category Name
                          </Button>
                          <Button onClick={() => handleSort('categoryName')} variant="tertiary">
                            <Icon source={SelectIcon} />
                          </Button>
                        </ButtonGroup>
                      )
                    },
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                            Quantity Available
                          </Button>
                          <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                            <Icon source={SelectIcon} />
                          </Button>
                        </ButtonGroup>
                      )
                    },
                    { title: 'Min Limit' },
                    { title: 'Max Limit' },
                  ]}
                  itemCount={categoriesData.length}
                  selectable={false}
                >
                  {sortedCategoryFilteredRows.map((category, index) => (
                    <IndexTable.Row key={index}>
                      <IndexTable.Cell>
                        {category['categoryName']}
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        {category['quantityLimit']}
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <FormLayout>
                          <TextField
                            value={getCategoryQuantityLimit(category['categoryName'], 'min')}
                            label="Category Min Limit"
                            type="number"
                            onChange={(value) => { handleQuantityLimit(value, category['categoryName'], 'min') }}
                          />
                        </FormLayout>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <FormLayout>
                          <TextField
                            value={getCategoryQuantityLimit(category['categoryName'], 'max')}
                            label="Category Max Limit"
                            type="number"
                            onChange={(value) => { handleQuantityLimit(value, category['categoryName'], 'max') }}
                          />
                        </FormLayout>
                      </IndexTable.Cell>
                    </IndexTable.Row>
                  ))}
                </IndexTable>
              </Card>
               <br/>
              <br/>
              
              <Card>
                <TextField
                  label="Error Message for Category Minimum limit"
                  value={errorMessages.categoryMinErrMsg || existingErrMsgs?.categoryMinErrMsg}
                  onChange={(value) => { handleErrorMessages("categoryMinErrMsg", value) }}
                  placeholder="You have to select minimun {categoryMin} products from the category {categoryName}."
                  helpText="use {categoryMin} to include minimum limit and {categoryName} to include name"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Category Maximum limit"
                  value={errorMessages.categoryMaxErrMsg || existingErrMsgs?.categoryMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("categoryMaxErrMsg", value) }}
                  placeholder="Can't select more than {categoryMax} products from the category {categoryName}"
                  helpText="use {categoryMax} to include maximum limit and {categoryName} to include name"
                  autoComplete="off"
                />
                <br/>
              </Card>
              </div>
            )}

            {tagValue === 'Collection Wise' && (
              <div>
              <Card>
                <IndexTable
                  headings={[
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('title')} variant="tertiary">
                            Collection Name
                          </Button>
                          <Button onClick={() => handleSort('title')} variant="tertiary">
                            <Icon source={SelectIcon} />
                          </Button>
                        </ButtonGroup>
                      )
                    },
                    {
                      title: (
                        <ButtonGroup>
                          <Button onClick={() => handleSort('count')} variant="tertiary">
                            Quantity Available
                          </Button>
                          <Button onClick={() => handleSort('count')} variant="tertiary">
                            <Icon source={SelectIcon} />
                          </Button>
                        </ButtonGroup>
                      )
                    },
                    { title: 'Min Limit' },
                    { title: 'Max Limit' },
                  ]}
                  itemCount={allCollectionsData.length}
                  selectable={false}
                >
                  {sortedCollectionFilteredRows.map((collection, index) => (
                    <IndexTable.Row key={index}>
                      <IndexTable.Cell>
                        {collection?.node?.title}
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        {collection?.node?.productsCount?.count}
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <FormLayout>
                          <TextField
                            value={getCollectionQuantityLimit(collection?.node?.title, 'min')}
                            label="Collection Min Limit"
                            type="number"
                            onChange={(value) => { handleQuantityLimit(value, collection?.node?.title, 'min') }}
                          />
                        </FormLayout>
                      </IndexTable.Cell>
                      <IndexTable.Cell>
                        <FormLayout>
                          <TextField
                            value={getCollectionQuantityLimit(collection?.node?.title, 'max')}
                            label="Collection Max Limit"
                            type="number"
                            onChange={(value) => { handleQuantityLimit(value, collection?.node?.title, 'max') }}
                          />
                        </FormLayout>
                      </IndexTable.Cell>
                    </IndexTable.Row>
                  ))}
                </IndexTable>
              </Card>
               <br/>
              <br/>
              
              <Card>
                <TextField
                  label="Error Message for Collection Minimum limit"
                  value={errorMessages.collectionMinErrMsg || existingErrMsgs?.collectionMinErrMsg}
                  onChange={(value) => { handleErrorMessages("collectionMinErrMsg", value) }}
                  placeholder="You have to select minimun {collectionMin} products from the collection {collectionName}."
                  helpText="use {collectionMin} to include minimum limit and {collectionName} to include name"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Collection Maximum limit"
                  value={errorMessages.collectionMaxErrMsg || existingErrMsgs?.collectionMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("collectionMaxErrMsg", value) }}
                  placeholder="Can't select more than {collectionMax} products from the collection {collectionName}"
                  helpText="use {collectionMax} to include maximum limit and {collectionName} to include name"
                  autoComplete="off"
                />
                <br/>
              </Card>
              </div>
            )}  

            {tagValue === 'Store Wise' && (
              <div>
              <Card>
                <IndexTable
                  headings={[
                    { title: 'Store Name' },
                    { title: 'Quantity Available' },
                    { title: 'Min Limit' },
                    { title: 'Max Limit' }
                  ]}
                  itemCount={1}
                  selectable={false}
                >

                  <IndexTable.Row>
                    <IndexTable.Cell>
                      {shopName}
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      {shopLimit}
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <FormLayout>
                        <TextField
                          value={getStoreQuantityLimit(loaderData.shopId, "min")}
                          label="Store Min Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, loaderData.shopId, "min") }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <FormLayout>
                        <TextField
                          value={getStoreQuantityLimit(loaderData.shopId, "max")}
                          label="Store Max Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, loaderData.shopId, "max") }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                  </IndexTable.Row>
                </IndexTable>
              </Card>

              <br/>
              <br/>
              
              <Card>
                <TextField
                  label="Error Message for Store Minimum limit"
                  value={errorMessages.shopMinErrMsg || existingErrMsgs?.shopMinErrMsg}
                  onChange={(value) => { handleErrorMessages("shopMinErrMsg", value) }}
                  placeholder="Minmum {shopMin} products are required for checkout"
                  helpText="use {shopMin} to include minimum limit"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Store Maximum limit"
                  value={errorMessages.shopMaxErrMsg || existingErrMsgs?.shopMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("shopMaxErrMsg", value) }}
                  placeholder="Cart exceeds {shopMax} number of products. please remove some items"
                  helpText="use {shopMax} to include maximum limit"
                  autoComplete="off"
                />
                <br/>
              </Card>
              </div>
            )}

            {tagValue === 'General' && (
            <div>
              <Card>
                <IndexTable
                  headings={[
                    { title: 'Type Name' },
                    { title: 'Min Limit' },
                    { title: 'Max Limit' },
                  ]}
                  itemCount={2}
                  selectable={false}
                >
                  <IndexTable.Row>
                    <IndexTable.Cell>
                      Total Cart Price ({loaderData?.currencyCode})
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <FormLayout>
                        <TextField
                          value={getPriceQuantityLimit("priceMin")}
                          label="Price Min Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, "priceMin") }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <FormLayout>
                        <TextField
                          value={getPriceQuantityLimit("priceMax")}
                          label="Price Max Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, "priceMax") }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                  </IndexTable.Row>
                  <IndexTable.Row>
                    <IndexTable.Cell>
                      Total Cart Weight ({loaderData?.weightUnit})
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <FormLayout>
                        <TextField
                          value={getWeightQuantityLimit("weightMin")}
                          label="Weight Min Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, "weightMin") }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                    <IndexTable.Cell>
                      <FormLayout>
                        <TextField
                          value={getWeightQuantityLimit("weightMax")}
                          label="Weight Max Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, "weightMax") }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                  </IndexTable.Row>
                </IndexTable>
              </Card>

              <br/>
              <br/>

              <Card>
                <TextField
                  label="Error Message for Price Minimum limit"
                  value={errorMessages.priceMinErrMsg || existingErrMsgs?.priceMinErrMsg}
                  onChange={(value) => { handleErrorMessages("priceMinErrMsg", value) }}
                  placeholder="Minmum amount {priceMin} is required for checkout"
                  helpText="use {priceMin} to include minimum price"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Price Maximum limit"
                  value={errorMessages.priceMaxErrMsg || existingErrMsgs?.priceMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("priceMaxErrMsg", value) }}
                  placeholder="Cart exceeds amount {priceMax} please remove some items"
                  helpText="use {priceMax} to include maximum price"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Weight Minimum limit"
                  value={errorMessages.weightMinErrMsg || existingErrMsgs?.weightMinErrMsg}
                  onChange={(value) => { handleErrorMessages("weightMinErrMsg", value) }}
                  placeholder="Minmum weight {weightMin} is required for checkout"
                  helpText="use {weightMin} to include minimum price"
                  autoComplete="off"
                />
                <br/>
                <TextField
                  label="Error Message for Weight Maximum limit"
                  value={errorMessages.weightMaxErrMsg || existingErrMsgs?.weightMaxErrMsg}
                  onChange={(value) => { handleErrorMessages("weightMaxErrMsg", value) }}
                  placeholder="Cart exceeds weight {weightMax} please remove some items"
                  helpText="use {weightMax} to include maximum price"
                  autoComplete="off"
                />
                <br/>
              </Card>
            </div>
            )}
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
     )}
     </div>
  );
}

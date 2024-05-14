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
} from '@shopify/polaris';
import { json, redirect } from '@remix-run/node';
import { useState, useCallback, useEffect } from 'react';
import { PageActions } from '@shopify/polaris';
import { useNavigate, useSubmit, useLoaderData, useActionData } from '@remix-run/react';
import db from "../db.server";
import { ImageIcon, EditIcon, DeleteIcon, ChevronLeftIcon, ChevronRightIcon, SelectIcon, SearchIcon, LogoXIcon } from '@shopify/polaris-icons';
import { authenticate } from '../shopify.server';
import React from 'react';
import { updateLimiter, addLimiter } from '../models/Limiter.server';


//fetches the category data
export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  try {
    const orderLimit = await db.order_Limit.findMany();

    let allProductsData = [];
    const resProduct = await admin.graphql(
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
              	value
        			}
        			poductStatusField: metafield(namespace: "productStatus", key: "productStatus") {
          			value
        			}
              categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                value
              }
              categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
                value
              }
              categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
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
    //let allData = [];
    let i = 1;

      while(true){
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
                    value
                  }
                  poductStatusField: metafield(namespace: "productStatus", key: "productStatus") {
                    value
                  }
                  categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                    value
                  }
                  categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
                    value
                  }
                  categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
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


    const response = await admin.graphql(
      `{
        shop {
          id
          name
          storeLimitField: metafield(namespace: "storeLimit", key: "storeLimit") {
            value
          }
          storeStatusField: metafield(namespace: "storeStatus", key: "storeStatus") {
            value
          }
          categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
            value
          }
          categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
            value
          }
          categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
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

    const res = await admin.graphql(
      `query AllProducts{
        products(first: 10) {
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
              	value
        			}
        			poductStatusField: metafield(namespace: "productStatus", key: "productStatus") {
          			value
        			}
              categoryLimitField: metafield(namespace: "categoryLimit", key: "categoryLimit") {
                value
              }
              categoryStatusField: metafield(namespace: "categoryStatus", key: "categoryStatus") {
                value
              }
              categoryNameField: metafield(namespace: "categoryName", key: "categoryName") {
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
      }`
    );
    const productsData = await res.json();
    const data = await response.json();
    const allProductCategories = data?.data?.shop?.allProductCategories;
    const shopId = data?.data?.shop?.id;
    const shopName = data?.data?.shop?.name;

    const storeLimitFieldValue = data?.data?.shop?.storeLimitField?.value;
    const storeStatusFieldValue = data?.data?.shop?.storeStatusField?.value;
    const categoryLimitFieldValue = data?.data?.shop?.categoryLimitField?.value;
    const categoryStatusFieldValue = data?.data?.shop?.categoryStatusField?.value;
    const categoryNameFieldValue = data?.data?.shop?.categoryNameField?.value;

    const storeLimit = allProductsData.length; // allProductsData?.data?.products?.edges.length;

    const categoryLimits = {}
    for (const category of allProductCategories) {
      const productTaxonomyNode = category.productTaxonomyNode;
      let quantityLimit = 0;
      let name = productTaxonomyNode.name
      for (const edge of allProductsData/*.data.products.edges*/) {
        const productCategory = edge.node.category ? edge.node.category.name : null;
        // If the product category matches the current category, increment the count
        if (productCategory === productTaxonomyNode.name) {
          quantityLimit++;
        }
      }
      categoryLimits[name] = quantityLimit;
    }

    console.log('shop id in loader', shopId);


    //to populate the rows
    const rows = [];
    for (const limiter of orderLimit) {
      let row = {};

      row.id = limiter.id;

      if (limiter.type === 'store_wise') {
        row.type = 'Store';
        row.name = shopName;
        row.quantityLimit = limiter.quantityLimit;
      } else if (limiter.type === 'product_wise') {
        row.type = 'Product';
        let productResponse = await admin.graphql(
          `query Title($id:ID!){
              product(id: $id) {
                title
                availablePublicationsCount{
                  count
                }
              }
            }`,
          {
            variables: {
              id: limiter.typeId,
            },
          }
        );
        let productData = await productResponse.json();
        let productTitle = productData.data.product.title;
        row.name = productTitle;
        row.quantityLimit = limiter.quantityLimit;
      } else {
        row.type = 'Category';
        let categoryName = allProductCategories.find(
          (category) => category.productTaxonomyNode.id === limiter.typeId
        )?.productTaxonomyNode.name;
        row.name = categoryName;

        row.quantityLimit = limiter.quantityLimit;
      }

      row.status = limiter.status.charAt(0).toUpperCase() + limiter.status.slice(1);

      // Convert createdAt to a Date object if it's not already
      let createdAt = new Date(limiter.createdAt).toLocaleString();
      createdAt = new Date(createdAt.toLocaleString());
      createdAt = createdAt.getFullYear() + '-' + (createdAt.getMonth() + 1) + '-' + createdAt.getDate() + ' ' + createdAt.getHours() + ':' + createdAt.getMinutes() + ':' + createdAt.getSeconds();

      row.createdAt = createdAt;
      rows.push(row);
    }



    return json({
      ok: true,
      data,
      orderLimit,
      rows,
      allProductsData,
      categoryLimits,
      storeLimit,
      shopId,
      shopName,
      storeLimitFieldValue,
      storeStatusFieldValue,
      categoryLimitFieldValue,
      categoryStatusFieldValue,
      categoryNameFieldValue,
      productsData,
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

    const res = await admin.graphql(
      `query AllProducts{
        products(first: 250) {
            edges {
              node{
                id
                category {
                  name
                }
              }
            }
        }
      }`
    );
    const allProductsData = JSON.parse(formData.get('allProductsData')) //await res.json();


   



    if (formData.get('action') == 'saveProduct') {

      const limiters = JSON.parse(formData.get('quantityLimit'));
      console.log('limiters in action', limiters);

      for (const limiter of limiters) {

        try {
          console.log('limiter value in action saveProduct', limiter.value, limiter.id);

          if (Number(limiter.value) > 0 && limiter.type === 'Store Wise') {

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
                    "namespace": "storeLimit",
                    "key": "storeLimit",
                    "type": "string",
                    "value": `${limiter.value}`

                  },
                  {
                    "ownerId": `${limiter.id}`,
                    "namespace": "storeStatus",
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

          if (Number(limiter.value) > 0 && limiter.type === 'Category Wise') {
            console.log('limiter in category wise in action', limiter);

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
            console.log('productIds in action', productIds);
            for (const id of productIds) {
              console.log('productid in forloop', id);
              const mutationQuery = `mutation productUpdate($input: ProductInput!) {
                productUpdate(input: $input) {
                  product {
                    id
                    title
                    metafields(first: 10) {
                      edges {
                        node {
                          id
                          namespace
                          key
                          value
                        }
                      }
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
                        "value": `${limiter.value}`,
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
              const existingMetafields = metaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)

              const errorMessages = metaData.data.productUpdate.userErrors;

              console.log('existingerrorMessages in action', errorMessages);
              console.log('existingMetafields in action', existingMetafields);
              //console.log('existingrecords', existingMetafields);

              if (existingMetafields && existingMetafields.length > 0) {

                // Delete metafields one by one based on the given keys
                const keysToDelete = [
                  'categoryLimit', 'categoryStatus', 'categoryName'
                ];

                const deletePromises = keysToDelete.map(async key => {
                  // Find the corresponding metafield ID in the existing metafields
                  const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
                  //console.log('metafield', existingMetafield);

                  if (existingMetafield) {
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
                            id: `${existingMetafield.id}`
                          }
                        }
                      }
                    );
                  }
                });

                // Wait for all delete operations to complete
                await Promise.all(deletePromises);

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

          if (Number(limiter.value) > 0 && limiter.type === 'Product Wise') {

            if(limiter.id.includes("ProductVariant")) {
              console.log('product variant id in action', limiter.id);
              const mutationQuery = `mutation productVariantUpdate($input: ProductVariantInput!) {
                productVariantUpdate(input: $input) {
                productVariant{
                  metafields(first:10){
                    edges {
                      node {
                        id
                        key
                        value
                      }
                    }
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
              const existingMetafields = metaData?.data?.productVariantUpdate?.productVariant?.metafields?.edges.map(edge => edge.node)
  
              const errorMessages = metaData.data?.productVariantUpdate?.userErrors;
  
              //console.log('existingrecords', existingMetafields);
  
              if (errorMessages && errorMessages.length > 0) {
  
                // Delete metafields one by one based on the given keys
                const keysToDelete = [
                  'productLimit', 'productStatus'
                ];
  
                const deletePromises = keysToDelete.map(async key => {
                  // Find the corresponding metafield ID in the existing metafields
                  const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
                  //console.log('metafield', existingMetafield);
  
                  if (existingMetafield) {
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
                            id: `${existingMetafield.id}`
                          }
                        }
                      }
                    );
                  }
                });
  
                // Wait for all delete operations to complete
                await Promise.all(deletePromises);
  
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
                    metafields(first: 20) {
                      edges {
                        node {
                          id
                          namespace
                          key
                          value
                        }
                      }
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
              const existingMetafields = metaData?.data?.productUpdate?.product?.metafields?.edges.map(edge => edge.node)

              const errorMessages = metaData.data.productUpdate.userErrors;

              //console.log('existingrecords', existingMetafields);

              if (errorMessages && errorMessages.length > 0) {

                // Delete metafields one by one based on the given keys
                const keysToDelete = [
                  'productLimit', 'productStatus'
                ];

                const deletePromises = keysToDelete.map(async key => {
                  // Find the corresponding metafield ID in the existing metafields
                  const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
                  //console.log('metafield', existingMetafield);

                  if (existingMetafield) {
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
                            id: `${existingMetafield.id}`
                          }
                        }
                      }
                    );
                  }
                });

                // Wait for all delete operations to complete
                await Promise.all(deletePromises);

                // Now, execute the updateProduct query with the updated metafields
                const updatedMetaResponse = await admin.graphql(mutationQuery, variables);
                const updatedMetaData = await updatedMetaResponse.json();
              }
            }
          }

          if (Number(limiter.value) === 0 && limiter.type === 'Store Wise') {
            const response = await admin.graphql(
              `{
                shop {
                  id
                  name
                  storeLimitField: metafield(namespace: "storeLimit", key: "storeLimit") {
                    value
                    id
                  }
                  storeStatusField: metafield(namespace: "storeStatus", key: "storeStatus") {
                    value
                    id
                  }
                }
              }
            `);
            const shopData = await response.json();
            const ids = [shopData?.data?.shop?.storeLimitField?.id, shopData?.data?.shop?.storeStatusField?.id ];
            for(const id of ids) {
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
          }

          if(Number(limiter.value) === 0 && limiter.type === 'Category Wise') {
            // Initialize an empty array to store product IDs
            const productIds = [];

            // Iterate through the edges of the products
            allProductsData.forEach(edge => {
              const category = edge.node.category;
              if (category && category?.name === limiter.id) {
                productIds.push(edge.node.id);
              }
            });

            // Now, snowboardProductIds array contains the IDs of products belonging to the "Snowboards" category
            console.log('productIds in action', productIds);
            for (const id of productIds) {
                const productResponse = await admin.graphql(
                  `{  
                    product(id: "${id}") {
                      id
                      metafields(first: 20) {
                        edges {
                          node {
                            id
                            namespace
                            key
                            
                          }
                        }
                      }
                    }
                  }`
                );
                const productData = await productResponse.json();
                const existingMetafields = productData?.data?.product?.metafields?.edges.map(edge => edge.node);
                // Delete metafields one by one based on the given keys
                const keysToDelete = [
                  'categoryLimit', 'categoryStatus', 'categoryName'
                ];
    
                const deletePromises = keysToDelete.map(async key => {
                  // Find the corresponding metafield ID in the existing metafields
                  const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
                  //console.log('metafield', existingMetafield);
    
                  if (existingMetafield) {
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
                            id: `${existingMetafield.id}`
                          }
                        }
                      }
                    );
                  }
                });
    
                // Wait for all delete operations to complete
                await Promise.all(deletePromises);
              }
          }

          if (Number(limiter.value) === 0 && limiter.type === 'Product Wise') {

            const productResponse = await admin.graphql(
              `{  
                product(id: "${limiter.id}") {
                  id
                  metafields(first: 20) {
                    edges {
                      node {
                        id
                        namespace
                        key
                        
                      }
                    }
                  }
                }
              }`
            );
            const productData = await productResponse.json();
            const existingMetafields = productData?.data?.product?.metafields?.edges.map(edge => edge.node);
            // Delete metafields one by one based on the given keys
            const keysToDelete = [
              'productLimit', 'productStatus', 'categoryLimit', 'categoryStatus', 'categoryName'
            ];

            const deletePromises = keysToDelete.map(async key => {
              // Find the corresponding metafield ID in the existing metafields
              const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
              //console.log('metafield', existingMetafield);

              if (existingMetafield) {
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
                        id: `${existingMetafield.id}`
                      }
                    }
                  }
                );
              }
            });

            // Wait for all delete operations to complete
            await Promise.all(deletePromises);
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

    }

    //to delete a record from a database
    if (formData.get('action') == 'delete') {
      await db.order_Limit.delete({
        where: {
          id: Number(formData.get('pk')),
        }
      });

      if (formData.get('type') === 'product_wise') {
        const productResponse = await admin.graphql(
          `{  
            product(id: "${formData.get('typeId')}") {
              id
              metafields(first: 10) {
                edges {
                  node {
                    id
                    namespace
                    key
                    
                  }
                }
              }
            }
          }
        `);
        const productData = await productResponse.json();
        const existingMetafields = productData?.data?.product?.metafields?.edges.map(edge => edge.node);
        // Delete metafields one by one based on the given keys
        const keysToDelete = [
          'productLimit', 'productStatus', 'categoryLimit', 'categoryStatus', 'categoryName'
        ];

        const deletePromises = keysToDelete.map(async key => {
          // Find the corresponding metafield ID in the existing metafields
          const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
          //console.log('metafield', existingMetafield);

          if (existingMetafield) {
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
                    id: `${existingMetafield.id}`
                  }
                }
              }
            );
          }
        });

        // Wait for all delete operations to complete
        await Promise.all(deletePromises);
      }


      return json({ deleted: true });
    }

    if (formData.get('action') === 'update') {
      const result = await updateLimiter(formData, allProductsData);
      console.log('result in update', result);
      if (result?.exist === true) {
        return json({
          exist: true,
        });
      } else if (result?.updated === true) {
        return json({
          updated: true,
        });
      } else if (result?.ok === false) {
        console.log('error while storing records', result?.error);
        return json({
          ok: false,
          error: error,
        });
      } else {
        return redirect('/app/');
      }
    }

    else if (formData.get('action') === 'create') {
      const result = await addLimiter(formData, allProductsData);
      console.log('res in add', result);
      if (result?.exist === true) {
        return json({
          exist: true,
        });
      } else if (result?.created === true) {
        return json({
          created: true,
        });
      } else if (result?.ok === false) {
        console.log('error while storing records', result?.error);
        return json({
          ok: false,
          error: error,
        });
      } else {
        return redirect('/app/');
      }
    }

  } catch (error) {
    console.error('Error storing records:', error);
    return json({
      ok: false,
      error: error,
    });
  }
}


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


  const [productsData, setProductsData] = useState([]);
  const [cursor, setCursor] = useState('');

  useEffect(() => {
    const products = loaderData.productsData.data.products.edges;
    setProductsData(products);
    console.log('productsData in useEffect', productsData);
    const hasNextPage = loaderData.productsData.data.products.pageInfo.hasNextPage;
    const lastProductCursor = products[products.length - 1]?.cursor;
    setCursor(hasNextPage ? lastProductCursor : null);
  }, [loaderData]);


  useEffect(() => {
    console.log('cursor', cursor);
  }, [cursor]);
  
  useEffect(() => {
    console.log('productsData', productsData);
  }, [productsData]);
  //const productsData = loaderData?.allProductsData.data.products.edges;
  const categoryLimits = loaderData?.categoryLimits;
  const categoryOptions = [];
  const categoryIds = {};
  const allProductCategories = loaderData?.data?.data.shop.allProductCategories;
  const orderLimit = loaderData.orderLimit;
  const shopName = loaderData.shopName;
  const shopLimit = loaderData.storeLimit;
  const allProductsData = loaderData?.allProductsData;

  const categoriesData = [];

  //to populate the category arrays
  for (const category of allProductCategories) {
    let obj = {};
    const productTaxonomyNode = category.productTaxonomyNode;
    categoryOptions.push(productTaxonomyNode.name);
    obj['categoryName'] = productTaxonomyNode.name;
    obj['quantityLimit'] = categoryLimits[productTaxonomyNode.name];
    categoryIds[productTaxonomyNode.name] = productTaxonomyNode.id;
    categoriesData.push(obj);
  }

  console.log('categoriesData in index', categoriesData);
  //abscent of categories in the store
  if (!(categoryOptions.length)) {
    console.log('no categories');
    categoryOptions.push('No Categories');
  }

  const rows = loaderData.rows;

  //console.log('rows', rows);
  const [searchValue, setSearchValue] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pk, setPk] = useState(0);
  const [tagValue, setTagValue] = useState('Store Wise');
  const [statusValue, setStatusValue] = useState('Active');
  const [categoryValue, setCategoryValue] = useState(categoryOptions[0]);
  const [quantityLimit, setQuantityLimit] = useState([]);
  const [formState, setFormState] = useState({
    productId: '',
    productVariantId: '',
    productTitle: '',
    productHandle: '',
    productAlt: '',
    productImage: '',
    availablePublicationCount: 0,
  });
  const [variantQuantityLimits, setVariantQuantityLimits] = useState({});
  const navigate = useNavigate();
  const submit = useSubmit();

  const [selectedSortColumn, setSelectedSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('ascending');

  const [currentPage, setCurrentPage] = useState(1);
  const [totalProductPages, setTotalProductPages] = useState(3);
  const recordsPerPage = 4;

  //console.log(loaderData.orderLimit);

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

  // Sort the filtered rows based on the current sort column and direction
  const sortedCategoryFilteredRows = filteredCategoryRows.sort((a, b) => {
    const aValue = a[selectedSortColumn];
    const bValue = b[selectedSortColumn];
    //console.log('sortedfiletered', rows);
    if (aValue === bValue) return 0;
    return sortDirection === 'ascending' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });

  /*// Sort the filtered category rows based on the current sort column and direction
  const sortedCategoryFilteredRows = filteredCategoryRows.sort((a, b) => {
  // Directly compare the strings aValue and bValue
  const aValue = a;
  const bValue = b;

  // Alphabetically sort the strings
  return sortDirection === 'ascending' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
});*/

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

  // Slice the sorted rows to get records for the current page
  //const paginatedRows = sortedFilteredRows.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  // Handle pagination
const handleLoadMore = async () => {
  console.log('cursor in handleNextPage', cursor);
  try {
    const response = await fetch(`/api/${cursor}`);
    const responseData = await response.json();
    console.log('data from fetch ', responseData?.allProductsData?.data?.products?.edges);
    
    // Ensure `allProductsData` and its properties are defined
    if (responseData ) {
      const products = responseData?.allProductsData?.data?.products?.edges;
      if (products) {
        setProductsData((previousProducts) => [...previousProducts, ...products]);
        const hasNextPage = responseData?.allProductsData?.data.products.pageInfo.hasNextPage;
        const lastProductCursor = products[products.length - 1]?.cursor;
        setCursor(hasNextPage ? lastProductCursor : null);
      }
    } else {
      console.error('Invalid response format:', responseData);
      // Handle invalid response format
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle fetch error
  }
  
  // Update current page
  setCurrentPage(currentPage + 1);
};

  /*// Handle pagination
  const handleNextPage = () => {
    console.log('cursor in handleNextPage', cursor);
    const res = async () => {
      const response = await fetch(`/api/${cursor}`);
      const allProductsData = await response.json();
      console.log('data from fetch ', allProductsData);
      const products = allProductsData?.data.products.edges;
      if(products){
        setProductsData((previousProducts) => [...previousProducts, ...products]);
        const hasNextPage = actionData?.allProductsData.data.products.pageInfo.hasNextPage;
        const lastProductCursor = products[products.length - 1]?.cursor;
        setCursor(hasNextPage ? lastProductCursor : null);
      }
    }
    res();
    submit({ action: 'nextPage', cursor: cursor }, { method: 'post' });
    setCurrentPage(currentPage + 1);
  };*/

  const handleNextPage = () => setCurrentPage(currentPage + 1)
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  const totalRecords = allProductsData.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  useEffect(() => {
    const totalProducts = productsData.length;
    const totalPages = Math.ceil(totalProducts / recordsPerPage);
    setTotalProductPages(totalPages);
  }, [productsData, currentPage]);
  

  //handle sorting
  const handleSort = (column) => {
    console.log('handleSort', column);
    if (selectedSortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === 'ascending' ? 'descending' : 'ascending'
      );
    } else {
      setSelectedSortColumn(column);
      setSortDirection('ascending');
    }
    console.log('direction', sortDirection);
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

    useEffect(()=>{
      allProductsData.forEach((product) => {
      product.node.variants.edges.forEach((variant) => {
       fetchVariantQuantityLimit(variant.node.id);
      });
    });
  },[quantityLimit]);

  //responsible for opening and closing the Modal
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toggleIsUpdate = useCallback(
    () => setIsUpdate((isUpdate) => !isUpdate),
    [],
  );

  const toggleAlert = useCallback(
    () => setAlert((alert) => !alert),
    [],
  );
  const toggleSuccess = useCallback(
    () => setSuccess((success) => !success),
    [],
  );




  useEffect(() => {
    if (actionData?.exist) {
      console.log('exist', actionData?.exist);
      toggleAlert();
    }
    if (actionData?.created || actionData?.updated || actionData?.deleted) {
      toggleSuccess();
    }
  }, [actionData]);


  async function selectProduct() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
    });

    if (products) {
      console.log('products selected', products[0]);
      const { images, id, variants, title, handle, availablePublicationCount } = products[0];
      setFormState({
        ...formState,
        productId: id,
        productVariantId: variants[0].id,
        productTitle: title,
        productHandle: handle,
        productAlt: images[0]?.altText,
        productImage: images[0]?.originalSrc,
        availablePublicationCount: availablePublicationCount,
      });
      setQuantityLimit(availablePublicationCount);
    }
    //console.log('in selectproduct', formState.productId, formState.availablePublicationCount);

    toggleModalActive();
  }




  const handleTagValueChange = (value) => {
    setTagValue(value);
    console.log('tag value', tagValue);
  };

  /*useCallback((value) => {
    setTagValue(value);
    if (value === 'Product Wise' && !formState.productId) {
      selectProduct();
      toggleModalActive();
    }
  }, [formState.productId, selectProduct]);*/

  console.log('category options in index', categoryOptions);

  const handleCategoryValueChange = useCallback(
    (value) => {
      setCategoryValue(value);
      //setCategoryLimit(categoryLimits[value]);
      setQuantityLimit(categoryLimits[value]);
    },
    [],
  );

  const handleStatusValueChange = useCallback(
    (value) => {
      setStatusValue(value);
    },
    [],
  );

  const handleQuantityLimit = (value, id) => {
    console.log('value and id in handlequantity', value, id, quantityLimit);

    if (value >= 0) {
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
    }
  };

  const getProductQuantityLimit = (productId) => {
    const productLimit = quantityLimit.find(item => item.id === productId);
    if (productLimit) {
      return parseInt(productLimit.value); // Return the quantity limit if found and greater than 0
    } else {
      const productLimitField = productsData.find(product => product.node.id === productId)?.node.productLimitField?.value;
      if (productLimitField) {
        return parseInt(productLimitField); // Return the quantity limit from productLimitField if found and greater than 0
      } else {
        return 0; // Return 0 if no quantity limit found
      }
    }
  };

  const getProductVariantQuantityLimit = async (productId) => {
    
    try {
      const productLimit = quantityLimit.find(item => item.id === productId);
      if (productLimit) {
        return parseInt(productLimit.value); // Return the quantity limit if found and greater than 0
      } else {
        const lastNumberId = productId.match(/\d+$/)[0];
        const response = await fetch(`/api/getVariantLimit/${lastNumberId}`);
        const responseData = await response.json();
        console.log('responseData in getvariant quantity', responseData);
        const productVariantLimitField = responseData?.productVariantLimitField;
        if(productVariantLimitField?.value) {
          return parseInt(productVariantLimitField?.value);
        } else {
          return 0;
        }
      }
    } catch(error) {
      console.log('error while fetching variant quantity limit ', error);
    }
  }

  const handleSaveProduct = () => {
    submit({ action: 'saveProduct', quantityLimit: JSON.stringify(quantityLimit), allProductsData: JSON.stringify(allProductsData) }, { method: 'post' });
  }

  const getCategoryQuantityLimit = (name) => {
    const categoryLimit = quantityLimit.find(item => item.id === name);
    if (categoryLimit) {
      return parseInt(categoryLimit.value);
    } else {

      const categoryLimitFieldValue = loaderData?.productsData.data.products.edges.find((item) => 
        item.node?.category?.name === name &&
        item.node?.categoryLimitField &&
        item.node?.categoryLimitField.value !== "undefined"
      )?.node?.categoryLimitField?.value;

      if (categoryLimitFieldValue) {
        return parseInt(categoryLimitFieldValue);
      } else {
        return 0;
      }
    }
  }

  const getStoreQuantityLimit = (shopId) => {
    const storeLimit = quantityLimit.find(item => item.id === shopId);
    if (storeLimit) {
      return parseInt(storeLimit.value);
    } else {
      if (loaderData?.storeLimitFieldValue) {
        return parseInt(loaderData?.storeLimitFieldValue);
      } else {
        return 0;
      }
    }
  }


  return (
    <Page fullWidth={true}>
      <ui-title-bar title="Order Limit"></ui-title-bar>

      {/* Alert message */}
      {success && (
        <div>
          <Card>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "row", alignContent: "stretch", justifyContent: "space-between" }}>
                <Text>Saved successfully!</Text>
                <div style={{ float: "right" }}>
                  <Button onClick={toggleSuccess}>
                    <Icon
                      source={LogoXIcon}
                      tone="base"
                    />
                  </Button>
                </div>
              </div>
          </Card>
        </div>
      )}
      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>

        <div>
          {/*<Button onClick={handleAdd}>Add Order Limit</Button>*/}
        </div>

        <div style={{ paddingTop: '0.5rem' }}>
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
                  options={['Store Wise', 'Product Wise', 'Category Wise']}
                  value={tagValue}
                  onChange={handleTagValueChange}
                />
              </FormLayout>
            </div>
          </InlineStack>
        </div>

        <PageActions
          primaryAction={{
            content: 'Save',
            onAction: handleSaveProduct
          }}
        />
      </div>



      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            {tagValue === 'Product Wise' && (
              <Card>
                <IndexTable
                  headings={[
                    { title: 'Image' },
                    { title:  (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('title')} variant="tertiary">
                          Title
                        </Button>
                        <Button onClick={() => handleSort('title')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ) },
                    { title:  (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('totalInventory')} variant="tertiary">
                          Quantity Available
                        </Button>
                        <Button onClick={() => handleSort('totalInventory')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ) },
                    { title:  (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('priceRangeV2')} variant="tertiary">
                          Price
                        </Button>
                        <Button onClick={() => handleSort('priceRangeV2')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ) },
                    { title: 'Quantity Limit' },
                  ]}
                  itemCount={productsData.length}
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
                              value={getProductQuantityLimit(product.node.id)}
                              label="Quantity Limit"
                              type="number"
                              onChange={(value) => { handleQuantityLimit(value, product.node.id) }}
                            />
                          </FormLayout>
                        </IndexTable.Cell>
                      </IndexTable.Row>
                      {product?.node.variants?.edges.length > 1 && (
                        product.node.variants.edges.map((variant, index) => (
                          <IndexTable.Row key={index}>
                            <IndexTable.Cell>
                              <Thumbnail
                                source={variant?.node?.image?.url || ImageIcon}
                                alt="Product"
                              />
                            </IndexTable.Cell>
                            <IndexTable.Cell>{variant.node.title}</IndexTable.Cell>
                            <IndexTable.Cell>{variant.node.inventoryQuantity}</IndexTable.Cell>
                            <IndexTable.Cell>{variant.node.price}</IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={variantQuantityLimits[variant.node.id]}
                                  label="Quantity Limit"
                                  type="number"
                                  onChange={(value) => { handleQuantityLimit(value, variant.node.id) }}
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
                  {/*<Button onClick={handleLoadMore} disabled={!cursor}><span style={{ padding: '0.5rem', margin: '0.5rem' }}> Load More </span></Button>*/}
                  <Button icon={ChevronLeftIcon} accessibilityLabel="Previous Page" disabled={currentPage === 1} onClick={handlePreviousPage} />
                  <span style={{ padding: '0.5rem', margin: '0.5rem' }}> Page {currentPage}</span>
                <Button icon={ChevronRightIcon} accessibilityLabel="Next Page"  disabled={ currentPage === totalPages }  onClick={handleNextPage} />
                </div>
              </Card>
            )}

            {tagValue === 'Category Wise' && (
              <Card>
                <IndexTable
                  headings={[
                    { title:  (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('categoryName')} variant="tertiary">
                          Category Name
                        </Button>
                        <Button onClick={() => handleSort('categoryName')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ) },
                    { title:  (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                          Quantity Available
                        </Button>
                        <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ) },
                    { title: 'Quantity Limit' },
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
                            value={getCategoryQuantityLimit(category['categoryName'])}
                            label="Quantity Limit"
                            type="number"
                            onChange={(value) => { handleQuantityLimit(value, category['categoryName']) }}
                          />
                        </FormLayout>
                      </IndexTable.Cell>
                    </IndexTable.Row>
                  ))}
                </IndexTable>
              </Card>
            )}
            {tagValue === 'Store Wise' && (
              <Card>
                <IndexTable
                  headings={[
                    { title: 'Store Name' },
                    { title: 'Quantity Available' },
                    { title: 'Quantity Limit' },
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
                          value={getStoreQuantityLimit(loaderData.shopId)}
                          label="Quantity Limit"
                          type="number"
                          onChange={(value) => { handleQuantityLimit(value, loaderData.shopId) }}
                        />
                      </FormLayout>
                    </IndexTable.Cell>
                  </IndexTable.Row>
                </IndexTable>
              </Card>
            )}
          </Layout.Section>
        </Layout>
      </BlockStack>


    </Page>
  );
}

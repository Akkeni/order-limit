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
  Link,
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
  Badge,
  Tooltip,
} from '@shopify/polaris';
import { json, redirect } from '@remix-run/node';
import { useState, useCallback, useEffect } from 'react';
import { PageActions } from '@shopify/polaris';
import { useNavigate, useSubmit, useLoaderData, useActionData } from '@remix-run/react';
import { ImageIcon, ChevronLeftIcon, ChevronRightIcon, SelectIcon, SearchIcon, MenuVerticalIcon, InfoIcon } from '@shopify/polaris-icons';
import { authenticate } from '../shopify.server';
import db from '../db.server';
import React from 'react';
import { getAllProductsData, createFreePlanMetafields, deleteNonPlanData, createVendorWiseLimiter, createCollectionWiseLimiter, createCategoryWiseLimiter } from '../models/orderLimit.server';
import { useAppBridge } from '@shopify/app-bridge-react';
import '../resources/style.css';
import { getSubscriptionStatus, createSubscriptionMetafield, deleteAppInstallationMetafields } from '../models/Subscription.server';



//fetches the necessary data
export async function loader({ request }) {
  const { admin, billing, session } = await authenticate.admin(request);

  const subscription = await getSubscriptionStatus(admin.graphql);

  const activeSubscriptions = subscription.data.app.installation.activeSubscriptions;

  let plan = 'freePlan';

  let existingLimiters = [
    {id: 1, typeName: 'products', value:  process.env.FREE_PLAN_PRODUCT_LIMIT}
  ];

  let currentDateStr = new Date();
  currentDateStr = currentDateStr.toISOString();

  const orderLimit = await db.order_Limit.findFirst({
    where: {
      shopName: session.shop
    }
  });

  try {

    let needsConfirmation = false;

    if (orderLimit) {
      if (orderLimit?.shopName === session.shop && orderLimit?.hasToDelete === true) {
        await deleteAppInstallationMetafields(admin.graphql);
        needsConfirmation = true;
      }
    }


    const appQueryResponse = await admin.graphql(`query appInstallation {
      currentAppInstallation {
        id
        planMetaField: metafield(namespace:"hasPlan", key: "hasPlan") {
          id
          value
        }
        endDateMetaField: metafield(namespace:"endDate", key: "endDate") {
          value
          id
        }
        planNameMetaField: metafield(namespace:"planName", key: "planName") {
          value
          id
        }
      }
    }`);

    const appQeryData = await appQueryResponse.json();
    let endDateStr = appQeryData?.data?.currentAppInstallation?.endDateMetaField ? appQeryData?.data?.currentAppInstallation?.endDateMetaField?.value : '';
    plan = appQeryData?.data?.currentAppInstallation?.planMetaField ? appQeryData?.data?.currentAppInstallation?.planMetaField?.value : 'freePlan';
   
    if (activeSubscriptions.length < 1) {
      if (endDateStr) {
        const regex = /\d{4}-\d{2}-\d{2}/;
        currentDateStr = currentDateStr.match(regex);
        endDateStr = endDateStr.match(regex);
        if (currentDateStr && endDateStr) {
          currentDateStr = currentDateStr[0];
          endDateStr = endDateStr[0];
          const currentDate = new Date(currentDateStr);
          const endDate = new Date(endDateStr);
          if (currentDate >= endDate) {
            const planName = appQeryData?.data?.currentAppInstallation?.planNameMetaField ? appQeryData?.data?.currentAppInstallation?.planNameMetaField?.value : '';
            if (planName) {
              if (planName === "Monthly Subscription") {
                return redirect("/app/subscribe/monthly");
              } else if (planName === "Annual Subscription") {
                return redirect("/app/subscribe/annualy");

              }
            }

            await deleteAppInstallationMetafields(admin.graphql)
            await createSubscriptionMetafield(admin.graphql, "false");
            await deleteNonPlanData(admin.graphql);
            // existingLimiters = await db.limiters.findMany();
            await createFreePlanMetafields(admin.graphql, existingLimiters);
            plan = "freePlan";
          } else {
            await createSubscriptionMetafield(admin.graphql, "true");
            plan = "paidPlan";
          }
        }
      } else {
        await createSubscriptionMetafield(admin.graphql, "false");
        // existingLimiters = await db.limiters.findMany();
        await createFreePlanMetafields(admin.graphql, existingLimiters);
        plan = "freePlan";
      }
    } else {
      await createSubscriptionMetafield(admin.graphql, "true");
      plan = "paidPlan";
    }


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

    const getLocaleResponse = await admin.graphql(`{
      availableLocales {
        isoCode
        name
      }
    }`);

    const getLocaleData = await getLocaleResponse.json();
    const availableLocales = getLocaleData.data?.availableLocales;

    const response = await admin.graphql(
      `{
        shop {
          id
          name
          currencyCode
          weightUnit
          productVendors(first:250){
            edges{
              node 
            }
          }
          storeLimitField: metafield(namespace: "storeLimit", key: "storeLimit") {
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
          generalLimitersField: metafield(namespace: "generalLimiters", key: "generalLimiters"){
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
    const allVendors = data?.data?.shop?.productVendors?.edges;
    const shopId = data?.data?.shop?.id;
    const shopName = data?.data?.shop?.name;
    const currencyCode = data?.data?.shop?.currencyCode;
    const weightUnit = data?.data?.shop?.weightUnit;


    const storeLimitFieldValue = data?.data?.shop?.storeLimitField?.value;
    const priceLimitFieldValue = data?.data?.shop?.priceLimitField?.value;
    const weightLimitFieldValue = data?.data?.shop?.weightLimitField?.value;
    const errorMsgsFieldValue = data?.data?.shop?.errorMsgsField?.value;
    const existingGeneralLimiters = data?.data?.shop?.generalLimitersField?.value;



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
      }
    }

    const vendorsData = [];
    if (allVendors) {
      for (const vendor of allVendors) {
        let quantityLimit = 0;
        let name = vendor?.node;
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
        vendorsData.push(obj);
      }
    }


    const vendorLimiters = [];
    const collectionLimiters = [];
    const categoryLimiters = [];


    //to create category/collection/vendor wise limiters metafields for all the products based on existing metafields.
    for (const item of allProductsData) {
      const node = item.node;

      if (node.productLimitField && node.productLimitField.value) {
        const productLimitValues = node.productLimitField.value.split(',');
        const productLimits = productLimitValues.slice(0, 2).map(Number);
        const vendorName = productLimitValues[2];
        const vendorLimits = productLimitValues.slice(3, 5).map(Number);
        const productName = productLimitValues[5];

        if (vendorLimits.some(value => value !== 0)) {
          if (!vendorLimiters.find((item) => item.id === vendorName)) {
            let vendorLimiter = {
              id: vendorName,
              value: node.productLimitField.value
            };
            vendorLimiters.push(vendorLimiter);
            await createVendorWiseLimiter(admin.graphql, allProductsData, vendorLimiter);
          }
        }
      }

      if (node.categoryLimitField && node.categoryLimitField.value) {
        const categoryValues = node.categoryLimitField.value.split(',');
        const categoryName = categoryValues[0].trim();
        const categoryLimits = categoryValues.slice(1).map(Number);

        if (categoryLimits.some(value => value !== 0)) {
          if (!categoryLimiters.find((item) => item.id === categoryName)) {
            let categoryLimiter = {
              id: categoryName,
              value: node.categoryLimitField.value
            };
            categoryLimiters.push(categoryLimiter);
            await createCategoryWiseLimiter(admin.graphql, allProductsData, categoryLimiter);
          }
        }
      }

      if (node.collectionLimitField && node.collectionLimitField.value) {
        const collectionValues = node.collectionLimitField.value.split(',');
        const collectionName = collectionValues[0].trim();
        const collectionLimits = collectionValues.slice(1).map(Number);

        if (collectionLimits.some(value => value !== 0)) {
          if (!collectionLimiters.find((item) => item.id === collectionName)) {
            let collectionLimiter = {
              id: collectionName,
              value: node.collectionLimitField.value
            };
            collectionLimiters.push(collectionLimiter);
            await createCollectionWiseLimiter(admin.graphql, allCollectionsData, allProductsData, collectionLimiter);
          }
        }
      }
    }


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
      vendorsData,
      activeSubscriptions,
      existingGeneralLimiters,
      plan,
      existingLimiters,
      availableLocales,
    });


  } catch (error) {
    console.error('Error in loader:', error);
    return json({
      ok: false,
      error: error,
    });
  }
}


export async function action({ request, params }) {
  const { admin, session } = await authenticate.admin(request);

  try {
    const formData = await request.formData();
    const allProductsData = JSON.parse(formData.get('allProductsData'));

    if (formData.get('deletePreviousData') === "true") {
      await handleDeletePreviousData(admin, allProductsData);
      await db.order_Limit.update({
        where: { shopName: session.shop },
        data: { hasToDelete: false }
      });

      return json({ deleted: true });
    }

    if (formData.get('deletePreviousData') === "false") {
      await db.order_Limit.update({
        where: { shopName: session.shop },
        data: { hasToDelete: false }
      });

      return redirect('/app');
    }

    if (formData.get('action') === 'saveProduct') {
      const limiters = JSON.parse(formData.get('quantityLimit'));
      const errorMessages = formData.get('errorMessages');
      const generalLimiters = formData.get('generalLimiters');
      const shopId = formData.get('shopId');

      if (errorMessages || generalLimiters) {
        await saveErrorMessagesAndGeneralLimiters(admin, shopId, errorMessages, generalLimiters);
      }

      for (const limiter of limiters) {
        await handleLimiters(admin, formData, limiter, allProductsData);
      }

      return json({ created: true });
    }

    return redirect('/app/');
  } catch (error) {
    console.log('error in action ', error);
    return json({ ok: false, error });
  }
}

async function handleDeletePreviousData(admin, allProductsData) {
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
      await deleteMetafield(product.node[field]?.id);

      if (field === 'productVariantLimitField') {
        for (let variant of product.node.variants.edges) {
          await deleteMetafield(variant.node[field]?.id);
        }
      }
    }
  }

  const response = await admin.graphql(`{
    shop {
      id 
      name 
      currencyCode 
      weightUnit
      storeLimitField: metafield(namespace: "storeLimit", key: "storeLimit") {
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
      errorMsgsField: metafield(namespace: "errorMsgs", key: "errorMsgs") {
        id 
        value 
      }
      generalLimitersField: metafield(namespace: "generalLimiters", key: "generalLimiters") { 
        id 
        value 
      }
    }
  }`);

  const data = await response.json();
  const storeFieldIds = [
    data?.data?.shop?.storeLimitField?.id,
    data?.data?.shop?.priceLimitField?.id,
    data?.data?.shop?.weightLimitField?.id,
    data?.data?.shop?.errorMsgsField?.id,
    data?.data?.shop?.generalLimitersField?.id
  ];

  for (const id of storeFieldIds) {
    if (id) {
      await deleteMetafield(id);
    }
  }
}

async function handleGraphqlMutation(admin, mutationName, variables) {
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

  await admin.graphql(query, {
    variables: {
      ownerId: variables.input.id,
      namespace: variables.input.metafields[0].namespace,
      key: variables.input.metafields[0].key,
      type: variables.input.metafields[0].type,
      value: variables.input.metafields[0].value,
    },
  });
}

async function saveErrorMessagesAndGeneralLimiters(admin, shopId, errorMessages, generalLimiters) {
  const metafields = {
    variables: {
      metafields: [
        { ownerId: shopId, namespace: "errorMsgs", key: "errorMsgs", type: "string", value: errorMessages },
        { ownerId: shopId, namespace: "generalLimiters", key: "generalLimiters", type: "string", value: generalLimiters }
      ]
    }
  };

  await admin.graphql(
    `mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
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
    }`, metafields);
}

async function handleLimiters(admin, formData, limiter, allProductsData) {
  switch (limiter.type) {
    case 'Store Wise':
      await handleStoreWiseLimiter(admin, limiter);
      break;
    case 'Category Wise':
      await handleCategoryWiseLimiter(admin, allProductsData, limiter);
      break;
    case 'Product Wise':
      await handleProductWiseLimiter(admin, formData, limiter);
      break;
    case 'Collection Wise':
      await handleCollectionWiseLimiter(admin, formData, allProductsData, limiter);
      break;
    case 'Vendor Wise':
      await handleVendorWiseLimiter(admin, allProductsData, limiter);
      break;
    default:
      console.log('Unknown limiter type:', limiter.type);
  }
}

async function handleStoreWiseLimiter(admin, limiter) {
  const metafields = {
    variables: {
      metafields: [
        { ownerId: limiter.id, namespace: "storeLimit", key: "storeLimit", type: "string", value: limiter.value }
      ]
    }
  };

  await admin.graphql(`mutation metafieldsSet($metafields: [MetafieldsSetInput!]!) {
    metafieldsSet(metafields: $metafields) {
      metafields { id namespace key value }
      userErrors { field message }
    }
  }`, metafields);
}

async function handleProductWiseLimiter(admin, formData, limiter) {
  if (limiter.id.includes("ProductVariant")) {
    const variables = {

      input: {
        id: limiter.id,
        metafields: [
          { namespace: "productLimit", key: "productLimit", type: "string", value: limiter.value }
        ]
      }

    };

    await handleGraphqlMutation(admin, 'productVariantUpdate', variables);
  } else {
    const productResponse = await admin.graphql(`{
      product(id: "${limiter.id}") {
        title
        productLimitField: metafield(namespace: "productLimit", key: "productLimit") { value }
      }
    }`);

    const productData = await productResponse.json();
    let value = limiter.value;
    const productLimitFieldValue = productData?.data?.product?.productLimitField?.value;

    if (productLimitFieldValue) {
      const [productMin, productMax, vendorName, vendorMin, vendorMax] = productLimitFieldValue.split(',');
      value = `${limiter.value},${vendorName},${vendorMin},${vendorMax},${productData?.data?.product?.title}`;
    } else {
      value = `${limiter.value},0,0,0,${productData?.data?.product?.title}`;
    }

    const variables = {
      input: {
        id: limiter.id,
        metafields: [
          { namespace: "productLimit", key: "productLimit", type: "string", value }
        ]
      }
    };

    await handleGraphqlMutation(admin, 'productUpdate', variables);
  }
}

async function handleCategoryWiseLimiter(admin, allProductsData, limiter) {
  const productIds = allProductsData
    .filter(product => product.node.category?.name === limiter.id)
    .map(product => product.node.id);

  for (const id of productIds) {
    let value = `${limiter.id},${limiter.value}`;
    const variables = {
      input: {
        id: id,
        metafields: [
          { namespace: "categoryLimit", key: "categoryLimit", type: "string", value },
        ]
      }
    };

    await handleGraphqlMutation(admin, 'productUpdate', variables);
  }
}

async function handleCollectionWiseLimiter(admin, formData, allProductsData, limiter) {

  const allCollectionsData = JSON.parse(formData.get('allCollectionsData'));

  const collectionId = allCollectionsData.find((item) => item.node.title === limiter.id)?.node?.id;

  if (collectionId) {
    for (const product of allProductsData) {
      const productId = product?.node?.id;
      let response = await admin.graphql(
        `{
          collection(id: "${collectionId}"){
            hasProduct(id: "${productId}")
          }
        }`
      );
      const responseData = await response.json();
      if (responseData?.data?.collection?.hasProduct) {
        let value = `${limiter.id},${limiter.value}`;
        const variables = {

          input: {
            id: productId,
            metafields: [
              { namespace: "collectionLimit", key: "collectionLimit", type: "string", value }
            ]
          }

        };

        await handleGraphqlMutation(admin, 'productUpdate', variables);
      }
    }
  }
}

async function handleVendorWiseLimiter(admin, allProductsData, limiter) {

  const productIds = allProductsData
    .filter(product => product.node.vendor === limiter.id)
    .map(product => product.node.id);

  for (const id of productIds) {
    let value = limiter.value;

    const productResponse = await admin.graphql(
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
    await handleGraphqlMutation(admin, 'productUpdate', variables);
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

  const [showConfirmation, setShowConfirmation] = useState(loaderData?.needsConfirmation);
  const navigate = useNavigate();
  const submit = useSubmit();

  const activeSubscriptions = loaderData?.activeSubscriptions ? loaderData.activeSubscriptions : [];

  const allProductCategories = loaderData?.data?.data.shop.allProductCategories;
  const shopName = loaderData.shopName;
  const shopLimit = loaderData.storeLimit;
  const allProductsData = loaderData?.allProductsData ? loaderData?.allProductsData : [];
  const allCollectionsData = loaderData?.allCollectionsData ? loaderData?.allCollectionsData : [];
  const vendorsData = loaderData?.vendorsData ? loaderData?.vendorsData : [];

  const categoriesData = loaderData?.categoriesData ? loaderData?.categoriesData : [];

  const plan = loaderData?.plan;

  const availableLocales = loaderData?.availableLocales;

  let existingErrMsgs = {};
  let existingGeneralLimiters = {};

  if (loaderData?.errorMsgsFieldValue && showConfirmation === false) {
    existingErrMsgs = JSON.parse(loaderData?.errorMsgsFieldValue);
  }

  if (loaderData?.existingGeneralLimiters && showConfirmation === false) {
    existingGeneralLimiters = JSON.parse(loaderData?.existingGeneralLimiters);
  }



  const shopify = useAppBridge();
  const [searchValue, setSearchValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [tagValue, setTagValue] = useState((plan != "paidPlan") ? 'Product Wise' : 'General');
  const [quantityLimit, setQuantityLimit] = useState([]);
  const [variantQuantityLimits, setVariantQuantityLimits] = useState({});

  const [isSaving, setIsSaving] = useState(false);

  const [selectedSortColumn, setSelectedSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('ascending');

  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(1);
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
    collectionMaxErrMsg: existingErrMsgs.collectionMaxErrMsg || '',
    vendorMinErrMsg: existingErrMsgs.vendorMinErrMsg || '',
    vendorMaxErrMsg: existingErrMsgs.vendorMaxErrMsg || '',
    skuMinErrMsg: existingErrMsgs.skuMinErrMsg || '',
    skuMaxErrMsg: existingErrMsgs.skuMaxErrMsg || '',
    extensionMsg: existingErrMsgs?.extensionMsg || 'Cart Extension',
    plan: loaderData?.plan,
    locale: existingErrMsgs?.locale || 'en',
  });

  const [generalLimiters, setGeneralLimiters] = useState({
    priceMin: existingGeneralLimiters.priceMin || 0,
    priceMax: existingGeneralLimiters.priceMax || 0,
    currencyCode: existingGeneralLimiters.currencyCode || loaderData?.currencyCode,
    weightMin: existingGeneralLimiters.weightMin || 0,
    weightMax: existingGeneralLimiters.weightMax || 0,
    weightUnit: existingGeneralLimiters.weightUnit || loaderData?.weightUnit,
    shopMin: existingGeneralLimiters.shopMin || '',
    shopMax: existingGeneralLimiters.shopMax || '',
    skuLimiters: existingGeneralLimiters.skuLimiters || [],
  });


  const [popoverActive, setPopoverActive] = useState(false);

  const [isBlock, setIsBlock] = useState(false);

  const collectionIds = [];

  const tagOptions = (plan != "paidPlan") ? ['Product Wise', 'Category Wise', 'Collection Wise', 'Vendor Wise'] : ['General', 'Product Wise', 'SKU Wise', 'Category Wise', 'Collection Wise', 'Vendor Wise', 'Store Wise'];
  const localeOptions = availableLocales.map((locale) => ({
    label: locale.name,
    value: locale.isoCode,
  }));

  const existingLimiters = loaderData?.existingLimiters ? loaderData.existingLimiters : [];
  const [freePlanlimiters, setFreePlanLimiters] = useState({
    products: existingLimiters.find((item) => item.typeName == 'products')?.value || 0,
    categories: existingLimiters.find((item) => item.typeName == 'categories')?.value || 0,
    collections: existingLimiters.find((item) => item.typeName == 'collections')?.value || 0,
    vendors: existingLimiters.find((item) => item.typeName == 'vendors')?.value || 0,
  });

  
  const [countOfTotalProductsWithLimits, setCountOfTotalProductsWithLimits] = useState(0);
  const [countOfExistingTotalProductsWithLimits, setCountOfExistingTotalProductsWithLimits] = useState(0);
  const [errorState, setErrorState] = useState({});

  const [selectedLocale, setSelectedLocale] = useState(existingErrMsgs?.locale || 'en');

  const [skuLimitRows, setSkuLimitRows] = useState(existingGeneralLimiters?.skuLimiters || []);

  //abscent of categories in the store
  if (!(categoriesData)) {
    categoriesData.push({ categoryName: 'No Categories' });
  }


  useEffect(() => {
    if (actionData?.exist) {
      toggleAlert();
    }
    if (actionData?.created || actionData?.updated) {
      setIsSaving(false);
      //toggleSuccess();
      setSuccess(true);
    }
  }, [actionData]);


  useEffect(() => {
    if (searchValue !== '' && currentPage !== 1) {
      setPreviousPage(currentPage);
    }
    if (searchValue == '') {
      setCurrentPage(previousPage);
    } else {
      setCurrentPage(1);
    }
  }, [searchValue]);

  // Filter rows based on search value
  const filteredCategoryRows = categoriesData.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  // Filter rows based on search value
  const filteredVendorRows = vendorsData.filter(row =>
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
  const sortedVendorFilteredRows = filteredVendorRows.sort((a, b) => {
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
    // Custom comparison logic for count
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
    if (selectedSortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === 'ascending' ? 'descending' : 'ascending'
      );
    } else {
      setSelectedSortColumn(column);
      setSortDirection('ascending');
    }
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
  }, [allProductsData]);


  const handleConfirm = () => {
    setIsSaving(true);
    const deletePreviousData = true;
    submit({ deletePreviousData: deletePreviousData, allProductsData: JSON.stringify(loaderData?.allProductsData) }, { method: 'post' });
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    const deletePreviousData = false;
    submit({ deletePreviousData: deletePreviousData, allProductsData: JSON.stringify(loaderData?.allProductsData) }, { method: 'post' });
    setShowConfirmation(false);
  };

  useEffect(() => {
    if (actionData?.deleted) {
      setIsSaving(false);
      navigate('/app');
    }
  }, [actionData]);

  // useEffect(() => {
  //   countExistingLimits();
  //   setCountOfTotalProductsWithLimits(countOfExistingTotalProductsWithLimits);
  // }, [countOfExistingTotalProductsWithLimits]);

  const toggleAlert = useCallback(
    () => setAlert((alert) => !alert),
    [],
  );
  const toggleSuccess = useCallback(
    () => setSuccess((success) => !success),
    [],
  );



  const handleErrorMessages = (name, value) => {
    setErrorMessages(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleGeneralLimiters = (name, value) => {
    setGeneralLimiters(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // const handleSkuLimiters = (value, id, range = '') => {
  //   const obj = {};
  //   const name = 'sku';
  //   obj['id'] = id === 'id' ? value : id;
  //   obj['min'] = range === 'min' ? value : getSkuQuantityLimit(obj['id'], 'min');
  //   obj['max'] = range === 'max' ? value : getSkuQuantityLimit(obj['id'], 'max');
  //   obj['multiple'] = range === 'multiple' ? value : getSkuQuantityLimit(obj['id'], 'multiple');
  //   let existingObjects = generalLimiters.skuLimiters;
  //   existingObjects.concat(obj);
  //   setGeneralLimiters(prevState => ({
  //     ...prevState,
  //     [name]: existingObjects
  //   }));
  // }

  // Function to handle changes in SKU limit fields
  const handleSkuLimiters = (value, id, field = '') => {
    console.log('value ', value);
    console.log('id ', id);
    console.log('field ', field);
    setSkuLimitRows((prevRows) => {
        const existingIndex = prevRows.findIndex((sku) => sku.id === id);

        if (existingIndex !== -1) {
            // If the SKU with the given id exists, update the corresponding field
            const updatedRows = [...prevRows];
            updatedRows[existingIndex] = {
                ...updatedRows[existingIndex],
                [field]: value
            };
            return updatedRows;
        } else {
            // If the SKU with the given id does not exist, create a new SKU object
            return [
                ...prevRows,
                {
                    id: id,
                    [field]: value // Only set the field that is being changed
                }
            ];
        }
    });

    console.log('skuLimitRows ', skuLimitRows);
    console.log('generalLimiters ', generalLimiters);

    setGeneralLimiters((prevState) => ({
      ...prevState,
      skuLimiters: skuLimitRows,
    }));
  };

  const handleExtensionChange = (value) => {
    let name = "extensionMsg";
    setErrorMessages(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  const handleTagValueChange = (value) => {
    setTagValue(value);
  };

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );

  const handleLocaleChange = (value) => {
    let name = "locale";
    setErrorMessages(prevState => ({
      ...prevState,
      [name]: value
    }));
    setSelectedLocale(value);
  };

  const activator = (
    <Button onClick={togglePopoverActive} icon={MenuVerticalIcon} variant='plain' tone='base' />
  );

  const handleCountOfTotalProductsWithLimits = (productsCount, increment = true) => {
    setCountOfTotalProductsWithLimits(prevCount => (increment ? prevCount + productsCount : prevCount - productsCount));
  }
  
  const handleCountOfExistingTotalProductsWithLimits = (productsCount, increment = true) => {
    setCountOfExistingTotalProductsWithLimits(prevCount => (increment ? prevCount + productsCount : prevCount - productsCount));
  }

  const countExistingLimits = () => {
    let productLimitCounts = {};
    let vendorCounts = {};
    let categoryCounts = {};
    let collectionCounts = {};
    let totalCount = 0;
  
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
            totalCount += 1;
          }
          productLimitCounts[productName]++;
        }
  
        if (vendorLimits.some(value => value !== 0)) {
          if (!vendorCounts[vendorName]) {
            vendorCounts[vendorName] = 0;
            const countOfProductsInVendor = vendorsData.find((item) => item.vendorName === vendorName)?.quantityLimit;
            totalCount += countOfProductsInVendor;
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
            const countOfProductsInCategory = categoriesData.find((item) => item.categoryName === categoryName)?.quantityLimit;
            totalCount += countOfProductsInCategory;
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
            const countOfProductsInCollection = allCollectionsData.find((item) => item.node?.title === collectionName)?.node?.productsCount?.count;
            totalCount += countOfProductsInCollection;
          }
          collectionCounts[collectionName]++;
        }
      }
    });
  
    // Update the total count of products with limits directly
    setCountOfTotalProductsWithLimits(totalCount);
    setCountOfExistingTotalProductsWithLimits(totalCount);
  
    return {
      productLimitCounts,
      vendorCounts,
      categoryCounts,
      collectionCounts
    };
  };
  
  useEffect(() => {
    const {
      productLimitCounts: updatedProductLimitCounts,
      vendorCounts: updatedVendorCounts,
      categoryCounts: updatedCategoryCounts,
      collectionCounts: updatedCollectionCounts
    } = countExistingLimits();
  
    setProductLimitCounts(updatedProductLimitCounts);
    setVendorCounts(updatedVendorCounts);
    setCategoryCounts(updatedCategoryCounts);
    setCollectionCounts(updatedCollectionCounts);
  
    // console.log('count exist in useEffect ', countOfExistingTotalProductsWithLimits);
    // console.log('count total in useEffect ', countOfTotalProductsWithLimits);
  
  }, [loaderData]);
  
  

  const [productLimitCounts, setProductLimitCounts] = useState(null);
  const [vendorCounts, setVendorCounts] = useState(null);
  const [categoryCounts, setCategoryCounts] = useState(null);
  const [collectionCounts, setCollectionCounts] = useState(null);

  useEffect(() => {
    const {
      productLimitCounts: updatedProductLimitCounts,
      vendorCounts: updatedVendorCounts,
      categoryCounts: updatedCategoryCounts,
      collectionCounts: updatedCollectionCounts
    } = countExistingLimits();

    
    setProductLimitCounts(updatedProductLimitCounts);
    setVendorCounts(updatedVendorCounts);
    setCategoryCounts(updatedCategoryCounts);
    setCollectionCounts(updatedCollectionCounts);

  }, [loaderData]);

  // const [count, setCount] = useState({
  //   productCount: Object.keys(productLimitCounts).length,
  //   categoryCount: Object.keys(categoryCounts).length,
  //   collectionCount: Object.keys(collectionCounts).length,
  //   vendorCount: Object.keys(vendorCounts).length,
  // });


  const handleCount = (name, increment = true) => {
    setCount((prevCount) => ({
      ...prevCount,
      [name]: increment ? prevCount[name] + 1 : prevCount[name] - 1,
    }));
  };



  const handleCountDec = () => {
    let name = '';
    switch (tagValue) {
      case "Product Wise":
        name = "productCount";
        break;
      case "Collection Wise":
        name = "collectionCount";
        break;
      case "Category Wise":
        name = "categoryCount";
        break;
      case "Vendor Wise":
        name = "vendorCount";
        break;
      default:
        break;
    }

    if (name) {
      handleCount(name, false);
    }
  };


  const deleteLimit = (idToDelete) => {
    setQuantityLimit(prevLimits => prevLimits.filter(obj => obj.id !== idToDelete));
    setQuantityLimit(prevLimits => prevLimits.filter(obj => obj.value !== '0,0'));
  };

  
  const checkAvailableLimits = async (id, value, range) => {
    if (plan != "paidPlan") {

      let limitExceeded = false;
      
      const exists = quantityLimit.some(item => {
        if (item.id === id) {
          const [value1, value2] = item.value.split(',').map(Number);
          if (value1 > 0 || value2 > 0) {
            return true;
          } else {
            return false;
          }
        }
        return false;
      });
      switch (tagValue) {
        case 'Product Wise':
          const checkTotal = countOfTotalProductsWithLimits + 1;
          const title = allProductsData.find((item) => item.node.id === id)?.node?.title;
          if (!id.includes('ProductVariant')) {
            if (!(title in productLimitCounts)) {
              if (!exists) {
                if ( checkTotal <= freePlanlimiters.products ) {
                  limitExceeded = false;
                  
                  handleCountOfTotalProductsWithLimits(1);
                } else {
                  limitExceeded = true;
                }
              } else {
                limitExceeded = false;
              }

            } else {

              const reseted = quantityLimit.some(item => {
                if (item.id === id) {
                  const [value1, value2] = item.value.split(',').map(Number);
                  if (value1 == 0 && value2 == 0) {
                    return true;
                  } else {
                    return false;
                  }
                }
                return false;
              });

              if (reseted) {
                if (checkTotal <= freePlanlimiters.products) {
                  limitExceeded = false;
                  
                  handleCountOfTotalProductsWithLimits(1);
                } else {
                  limitExceeded = true;
                }
              } else {
                limitExceeded = false;
              }
            }

          } else {
            let productId = '';
            for (const item of allProductsData) {
              const variants = item.node.variants.edges;
              for (const variant of variants) {
                if (variant.node.id === id) {
                  productId = item.node.id;
                }
              }
            };
            const max = getQuantityLimit(productId, 'max');
            const min = getQuantityLimit(productId, 'min');
            if(Number(max) > 0 || Number(min) > 0) {
              limitExceeded = false;
            } else {
              limitExceeded = true;
            }
          }
          break;
        case 'Category Wise':
          const countOfProductsInCategory = categoriesData.find((item) => item.categoryName === id)?.quantityLimit;
          const checkCategoryTotal = countOfTotalProductsWithLimits + countOfProductsInCategory;
          if (!(id in categoryCounts)) {
            if (!exists) {
              if ( checkCategoryTotal <= freePlanlimiters.products ) {
                limitExceeded = false;
                
                handleCountOfTotalProductsWithLimits(countOfProductsInCategory);
              } else {
                limitExceeded = true;
              }
            } else {
              limitExceeded = false;
            }

          } else {
            const reseted = quantityLimit.some(item => {
              if (item.id === id) {
                const [value1, value2] = item.value.split(',').map(Number);
                if (value1 == 0 && value2 == 0) {
                  return true;
                } else {
                  return false;
                }
              }
              return false;
            });

            if (reseted) {
              if ( checkCategoryTotal <= freePlanlimiters.products ) {
                limitExceeded = false;
                
                handleCountOfTotalProductsWithLimits(countOfProductsInCategory);
              } else {
                limitExceeded = true;
              }
            } else {
              limitExceeded = false;
            }
          }

          break;

        case 'Collection Wise':
          const countOfProductsInCollection = allCollectionsData.find((item) => item.node?.title === id)?.node?.productsCount?.count;
          const checkCollectionTotal = countOfTotalProductsWithLimits + countOfProductsInCollection;
          if (!(id in collectionCounts)) {
            if (!exists) {
              if (checkCollectionTotal <= freePlanlimiters.products) {
                limitExceeded = false;

                handleCountOfTotalProductsWithLimits(countOfProductsInCollection);
              } else {
                limitExceeded = true;
              }
            } else {
              limitExceeded = false;
            }

          } else {
            const reseted = quantityLimit.some(item => {
              if (item.id === id) {
                const [value1, value2] = item.value.split(',').map(Number);
                if (value1 == 0 && value2 == 0) {
                  return true;
                } else {
                  return false;
                }
              }
              return false;
            });

            if (reseted) {
              if (checkCollectionTotal <= freePlanlimiters.products) {
                limitExceeded = false;

                handleCountOfTotalProductsWithLimits(countOfProductsInCollection);
              } else {
                limitExceeded = true;
              }
            } else {
              limitExceeded = false;
            }
          }
          break;

        case 'Vendor Wise':
          const countOfProductsInVendor = vendorsData.find((item) => item.vendorName === id)?.quantityLimit;
          const checkVendorTotal = countOfTotalProductsWithLimits + countOfProductsInVendor;
          if (!(id in vendorCounts)) {
            if (!exists) {
              if (checkVendorTotal <= freePlanlimiters.products) {
                limitExceeded = false;

                handleCountOfTotalProductsWithLimits(countOfProductsInVendor);
              } else {
                limitExceeded = true;
              }
            } else {
              limitExceeded = false;
            }

          } else {
            const reseted = quantityLimit.some(item => {
              if (item.id === id) {
                const [value1, value2] = item.value.split(',').map(Number);
                if (value1 == 0 && value2 == 0) {
                  return true;
                } else {
                  return false;
                }
              }
              return false;
            });

            if (reseted) {
              if (checkVendorTotal <= freePlanlimiters.products) {
                limitExceeded = false;

                handleCountOfTotalProductsWithLimits(countOfProductsInVendor);
              } else {
                limitExceeded = true;
              }
            } else {
              limitExceeded = false;
            }
          }

          break;
        default:
          return true;
      }

      if (limitExceeded) {
        return false;
      }

      return true;
    }

    return true;
  };

  // console.log('count total', countOfTotalProductsWithLimits);
  // console.log('count existing', countOfExistingTotalProductsWithLimits);

  const handleQuantityLimit = async (value, id, range = '') => {
    let limitValue = '';

    if (range === 'min') {
      const max = getQuantityLimit(id, 'max');
      limitValue = `${value},${max}`;
    } else {
      const min = getQuantityLimit(id, 'min');
      limitValue = `${min},${value}`;
    }

    if (Number(value) < 0) {
      return;
    }


    if (value == '' || Number(value) == 0) {

      const exists = quantityLimit.some(item => {
        if (item.id === id) {
          const [value1, value2] = item.value.split(',').map(Number);
          if (range == 'min') {
            if (value1 > 0 && value2 == 0) {
              return true;
            } else {
              return false;
            }
          } else {
            if (value2 > 0 && value1 == 0) {
              return true;
            } else {
              return false;
            }
          }
        }
        return false;
      });
      if (exists) {

        if (tagValue === 'Category Wise') {
          const countOfProducts = categoriesData.find((item) => item.categoryName === id)?.quantityLimit;
          handleCountOfTotalProductsWithLimits(countOfProducts, false);
        } else if (tagValue === 'Collection Wise') {
          const countOfProducts = allCollectionsData.find((item) => item.node?.title === id)?.node?.productsCount?.count;
          handleCountOfTotalProductsWithLimits(countOfProducts, false);
        } else if (tagValue === 'Vendor Wise') {
          const countOfProducts = vendorsData.find((item) => item.vendorName === id)?.quantityLimit;
          handleCountOfTotalProductsWithLimits(countOfProducts, false);
        } else if (tagValue === 'Product Wise' && !id.includes('ProductVariant')) {
          handleCountOfTotalProductsWithLimits(1, false);
        }
      } else {

        let title = id;
        if (tagValue === "Product Wise" && !id.includes('ProductVariant')) {
          title = allProductsData.find((item) => item.node.id === id)?.node?.title;
        }
        if ((title in productLimitCounts) || (title in categoryCounts) || (title in collectionCounts) || (title in vendorCounts)) {

          if (range === 'min') {
            const max = getQuantityLimit(id, 'max');
            if (Number(max) == 0) {

              if (tagValue === 'Category Wise') {
                const countOfProducts = categoriesData.find((item) => item.categoryName === id)?.quantityLimit;
                handleCountOfTotalProductsWithLimits(countOfProducts, false);
              } else if (tagValue === 'Collection Wise') {
                const countOfProducts = allCollectionsData.find((item) => item.node?.title === id)?.node?.productsCount?.count;
                handleCountOfTotalProductsWithLimits(countOfProducts, false);
              } else if (tagValue === 'Vendor Wise') {
                const countOfProducts = vendorsData.find((item) => item.vendorName === id)?.quantityLimit;
                handleCountOfTotalProductsWithLimits(countOfProducts, false);
              } else if (tagValue === 'Product Wise' && !id.includes('ProductVariant')) {
                handleCountOfTotalProductsWithLimits(1, false);
              }

              console.log();
            }
          } else {
            const min = getQuantityLimit(id, 'min');
            if (Number(min) == 0) {

              if (tagValue === 'Category Wise') {
                const countOfProducts = categoriesData.find((item) => item.categoryName === id)?.quantityLimit;
                handleCountOfTotalProductsWithLimits(countOfProducts, false);
              } else if (tagValue === 'Collection Wise') {
                const countOfProducts = allCollectionsData.find((item) => item.node?.title === id)?.node?.productsCount?.count;
                handleCountOfTotalProductsWithLimits(countOfProducts, false);
              } else if (tagValue === 'Vendor Wise') {
                const countOfProducts = vendorsData.find((item) => item.vendorName === id)?.quantityLimit;
                handleCountOfTotalProductsWithLimits(countOfProducts, false);
              } else if (tagValue === 'Product Wise' && !id.includes('ProductVariant')) {
                handleCountOfTotalProductsWithLimits(1, false);
              }

              console.log();
            }
          }


        }
      }
    }

    // setIsBlock(false);

    setErrorState({});


    if (Number(value) > 0) {
      const allow = await checkAvailableLimits(id, limitValue, range);
      if (!allow) {
        // setIsBlock(true);
        // Set the error state for the specific field
        setErrorState(prevState => {
          // Create a new state object with all keys set to false
          const newState = Object.keys(prevState).reduce((acc, key) => {
            acc[key] = false;
            return acc;
          }, {});

          // Set the specific field's error state
          newState[`${id}_${range}`] = error;

          return newState;
        });
        return;
      }
    }


    if (tagValue !== 'General') {
      value = limitValue;
    }

    setQuantityLimit((prevQuantityLimit) => {
      const index = prevQuantityLimit.findIndex(item => item.id === id);
      if (index !== -1) {
        return prevQuantityLimit.map(item => item.id === id ? { ...item, value, type: tagValue } : item);
      } else {
        return [...prevQuantityLimit, { id, value, type: tagValue }];
      }
    });

    setVariantQuantityLimits(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Helper function to get quantity limit
  const getQuantityLimit = (id, type) => {
    if (tagValue === "Collection Wise") {
      return getCollectionQuantityLimit(id, type);
    } else if (id.includes("ProductVariant")) {
      return getVariantQunatity(id, type);
    } else if (id.includes("Product")) {
      return getProductQuantityLimit(id, type);
    } else if (id.includes('shop')) {
      return getStoreQuantityLimit(id, type);
    } else if (tagValue === "Vendor Wise") {
      return getVendorQuantityLimit(id, type);
    } else {
      return getCategoryQuantityLimit(id, type);
    }
  };


  const handleSaveProduct = () => {
    setIsSaving(true);
    let priceLimit = '';
    let weightLimit = '';
    priceLimit = priceLimit + getPriceQuantityLimit('priceMin') + ',' + getPriceQuantityLimit('priceMax');
    weightLimit = weightLimit + getWeightQuantityLimit('weightMin') + ',' + getWeightQuantityLimit('weightMax');

    submit(
      {
        action: 'saveProduct',
        quantityLimit: JSON.stringify(quantityLimit),
        allProductsData: JSON.stringify(allProductsData),
        shopId: loaderData?.shopId,
        priceLimit: priceLimit,
        weightLimit: weightLimit,
        errorMessages: JSON.stringify(errorMessages),
        allCollectionsData: JSON.stringify(allCollectionsData),
        generalLimiters: JSON.stringify(generalLimiters),
      },
      { method: 'post' }
    ).catch((error) => {
      // Handle error
      console.error('Error saving product:', error);
      setIsSaving(false); // Ensure saving state is set to false in case of error
    });
  }


  const getProductQuantityLimit = (productId, range) => {
    const productLimit = quantityLimit.find(item => item.id === productId);
    if (productLimit) {
      const productLimitValue = productLimit.value;
      if (range === "min") {
        return productLimitValue.split(',')[0];
      } else {
        return productLimitValue.split(',')[1];
      }
    } else {
      const productLimitFieldValue = allProductsData.find(product => product.node.id === productId)?.node.productLimitField?.value;

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
    if (variantQuantityLimitValue) {
      if (range === "min") {
        return variantQuantityLimitValue.split(',')[0];
      } else {
        return variantQuantityLimitValue.split(',')[1];
      }
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
        if (item.node?.collectionLimitField && item.node?.collectionLimitField.value !== "undefined") {
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
      } else {
        return 0;
      }
    }
  }

  const getVendorQuantityLimit = (id, range) => {

    const vendorLimit = quantityLimit.find(item => item.id === id);

    if (vendorLimit) {
      const vendorLimitValue = vendorLimit.value;
      if (range === "min") {
        return vendorLimitValue.split(',')[0];
      } else {
        return vendorLimitValue.split(',')[1];
      }
    } else {
      const productLimitFieldValue = allProductsData.find(product => product.node.vendor === id)?.node.productLimitField?.value;

      if (productLimitFieldValue) {
        if (range === "min") {
          return productLimitFieldValue.split(',')[3];
        } else {
          return productLimitFieldValue.split(',')[4];
        } // Return the quantity limit from productLimitField if found and greater than 0
      } else {
        return 0; // Return 0 if no quantity limit found
      }
    }
  };

  // Function to get SKU quantity limit
  const getSkuQuantityLimit = (id, field = '') => {
    console.log('id in getSku ', id);
    console.log('field in getSku ', field);
    
    const skuLimit = skuLimitRows.find((item) => item.id === id);
    
    
    if(skuLimit) {
      if(Number(skuLimit[field]) > 0) {
        return Number(skuLimit[field]);
      } else {
        return 0;
      }
    } else {
      const existingSkuLimits = generalLimiters?.skuLimiters || [];
      const sku = existingSkuLimits.find((item) => item.id === id); 
      console.log('sku field value in getSku ', sku[field]);
      if (sku) {
        if(Number(sku[field]) > 0) {
          return Number(sku[field]);
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    } 
    //return sku ? Number(sku[field]) : 0;
  };

  // Function to handle adding a new SKU limit row
  // const handleAddSkuLimit = () => {
  //   const newSku = { id: '', min: '', max: '', multiple: '' };
  //   setSkuLimitRows([...skuLimitRows, newSku]);
  // };

  // console.log('allproductsdata ', allProductsData.find((item) => item.node.id === "gid://shopify/Product/8614183305468"));

  if (isSaving) {
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

  return (

    <>
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
          <ui-title-bar title="CartControl: Order Limit"></ui-title-bar>

          <div className='pL-1'>

            {(plan != "paidPlan") && (
              <Banner tone="critical">
                <p>
                  You currently don't have a plan. Please select a paid plan to unlock more features. <Link url="/app/pricing" onClick={() => setIsSaving(true)}><span style={{ color: "blue" }}>Plan selection</span></Link>
                </p>
              </Banner>
            )}
            <br />
            {/* Alert message */}
            {success && (
              <>
                <Banner
                  title="Saved successfully!"
                  tone="success"
                  onDismiss={() => setSuccess(false)}
                />
              </>
            )}

            <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
              <div style={{ paddingTop: '0.5rem', paddingBottom: '1.5rem', paddingRight: '1rem' }}>
                <InlineStack gap="500">
                  <div style={{ paddingLeft: '0.5rem' }}>
                    <FormLayout>
                      <Select
                        label="Limit By"
                        options={tagOptions}
                        value={tagValue}
                        onChange={handleTagValueChange}
                      />
                    </FormLayout>
                  </div>
                  {/*<div style={{ paddingLeft: '0.5rem' }}>
                    <FormLayout>
                      <Select
                        label="Use extension"
                        options={['Both', 'Cart Extension', 'Checkout Extension']}
                        value={errorMessages?.extensionMsg}
                        onChange={handleExtensionChange}
                      />
                    </FormLayout>
                  </div>*/}
                  {(tagValue !== 'General' && tagValue !== 'Store Wise') && (
                    <div style={{ paddingLeft: '0.5rem' }}>
                      <TextField
                        label="Search"
                        value={searchValue}
                        onChange={setSearchValue}
                        prefix={<Icon source={SearchIcon} color="skyDark" />}
                      />
                    </div>
                  )}
                  <div style={{ marginLeft: 'auto' }}>
                    <InlineStack gap="400" blockAlign='center'>
                      <PageActions
                        primaryAction={{
                          content: 'Save',
                          onAction: handleSaveProduct
                        }}
                      />
                      <>
                        <Popover
                          active={popoverActive}
                          activator={activator}
                          autofocusTarget="first-node"
                          onClose={togglePopoverActive}
                        >
                          <Popover.Pane>
                            <ActionList
                              actionRole="menuitem"
                              items={[
                                { content: 'Help', url: '/app/help' },
                                { content: 'Plan', url: '/app/pricing' },
                                { content: 'Setup', url: '/app/setup' }
                              ]}
                            />
                          </Popover.Pane>
                        </Popover>
                      </>
                    </InlineStack>
                  </div>
                </InlineStack>
              </div>
            </div>



            <BlockStack gap="500">
              <Layout>
                <Layout.Section>
                  {tagValue === 'Product Wise' && (
                    <>
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
                                  <Button onClick={() => handleSort('status')} variant="tertiary">
                                    Status
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
                                  <Button
                                    url={`shopify:admin/products/${product.node.id.match(/\d+$/)[0]}`}
                                    target="_blank"
                                    variant="tertiary"
                                  >
                                    <Thumbnail
                                      source={product.node.images.edges[0]?.node?.url || ImageIcon}
                                      alt="Product"
                                    />
                                  </Button>
                                </IndexTable.Cell>
                                <IndexTable.Cell>
                                  <Button
                                    url={`shopify:admin/products/${product.node.id.match(/\d+$/)[0]}`}
                                    target="_blank"
                                    variant="tertiary"
                                  >
                                    <div id='underLine'>
                                      {product.node.title}
                                    </div>
                                  </Button>
                                </IndexTable.Cell>
                                <IndexTable.Cell>
                                  <Badge tone={product.node?.status === 'ACTIVE' ? 'success' : 'info'}>
                                    {product.node?.status}
                                  </Badge>
                                </IndexTable.Cell>
                                <IndexTable.Cell>
                                  <div style={{ textAlign: 'center' }}>
                                    {product.node.totalInventory}
                                  </div>
                                </IndexTable.Cell>
                                <IndexTable.Cell>
                                  <div style={{ textAlign: 'center' }}>
                                    {product.node.priceRangeV2?.maxVariantPrice?.amount}
                                  </div>
                                </IndexTable.Cell>
                                <IndexTable.Cell>
                                  <FormLayout>
                                    <TextField
                                      value={getProductQuantityLimit(product.node.id, 'min')}
                                      label="Product Min Limit"
                                      type="number"
                                      onChange={(value) => { handleQuantityLimit(value, product.node.id, 'min') }}
                                      error={errorState[`${product.node.id}_min`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
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
                                      error={errorState[`${product.node.id}_max`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
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
                                    <IndexTable.Cell>
                                      <Badge tone={product.node?.status === 'ACTIVE' ? 'success' : 'info'}>
                                        {product.node?.status}
                                      </Badge>
                                    </IndexTable.Cell>
                                    <IndexTable.Cell>
                                      <div style={{ textAlign: 'center' }}>
                                        {variant.node.inventoryQuantity}
                                      </div>
                                    </IndexTable.Cell>
                                    <IndexTable.Cell>
                                      <div style={{ textAlign: 'center' }}>
                                        {variant.node.price}
                                      </div>
                                    </IndexTable.Cell>
                                    <IndexTable.Cell>
                                      <FormLayout>
                                        <TextField
                                          value={getVariantQunatity(variant.node.id, 'min')}
                                          label="Variant Min Limit"
                                          type="number"
                                          onChange={(value) => { handleQuantityLimit(value, variant.node.id, 'min') }}
                                          error={errorState[`${variant.node.id}_min`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
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
                                          error={errorState[`${variant.node.id}_max`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
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

                      <br />
                      <br />

                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message(place holders should be in English). If the browsing language differs, English will be used by default."}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for Product Minimum limit"
                          value={errorMessages.productMinErrMsg}
                          onChange={(value) => { handleErrorMessages("productMinErrMsg", value) }}
                          placeholder="You can't select less than {productMin} for {productName}."
                          helpText="use {productMin} to include minimum limit and {productName} to include product name"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Product Maximum limit"
                          value={errorMessages.productMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("productMaxErrMsg", value) }}
                          placeholder="Quantity limit reached, you can't select more than {productMax} for {productName}."
                          helpText="use {productMax} to include maximum limit and {productName} to include product name"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Product Variant Minimum limit"
                          value={errorMessages.variantMinErrMsg}
                          onChange={(value) => { handleErrorMessages("variantMinErrMsg", value) }}
                          placeholder="You can't select less than {productVariantMin} for this product variant {productName}."
                          helpText="use {productVariantMin} to include minimum limit and {productName} to include product name"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Product Variant Maximum limit"
                          value={errorMessages.variantMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("variantMaxErrMsg", value) }}
                          placeholder="Quantity limit reached, you can't select more than {productVariantMax} for {productName}."
                          helpText="use {productVariantMax} to include maximum limit and {productName} to include product name"
                          autoComplete="off"
                        />
                        <br />
                      </Card>

                    </>
                  )}

                  {tagValue === 'Category Wise' && (
                    <>
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
                                    Products Available
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
                                    error={errorState[`${category['categoryName']}_min`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
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
                                    error={errorState[`${category['categoryName']}_max`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
                                  />
                                </FormLayout>
                              </IndexTable.Cell>
                            </IndexTable.Row>
                          ))}
                        </IndexTable>
                      </Card>
                      <br />
                      <br />

                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message. If the browsing language differs, English will be used by default"}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for Category Minimum limit"
                          value={errorMessages.categoryMinErrMsg}
                          onChange={(value) => { handleErrorMessages("categoryMinErrMsg", value) }}
                          placeholder="You have to select minimun {categoryMin} products from the category {categoryName}."
                          helpText="use {categoryMin} to include minimum limit and {categoryName} to include name"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Category Maximum limit"
                          value={errorMessages.categoryMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("categoryMaxErrMsg", value) }}
                          placeholder="Can't select more than {categoryMax} products from the category {categoryName}."
                          helpText="use {categoryMax} to include maximum limit and {categoryName} to include name"
                          autoComplete="off"
                        />
                        <br />
                      </Card>
                    </>
                  )}

                  {tagValue === 'Collection Wise' && (
                    <>
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
                                    Products Available
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
                                    error={errorState[`${collection?.node?.title}_min`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}

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
                                    error={errorState[`${collection?.node?.title}_max`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
                                  />
                                </FormLayout>
                              </IndexTable.Cell>
                            </IndexTable.Row>
                          ))}
                        </IndexTable>
                      </Card>
                      <br />
                      <br />

                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message. If the browsing language differs, English will be used by default"}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for Collection Minimum limit"
                          value={errorMessages.collectionMinErrMsg}
                          onChange={(value) => { handleErrorMessages("collectionMinErrMsg", value) }}
                          placeholder="You have to select minimun {collectionMin} products from the collection {collectionName}."
                          helpText="use {collectionMin} to include minimum limit and {collectionName} to include name"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Collection Maximum limit"
                          value={errorMessages.collectionMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("collectionMaxErrMsg", value) }}
                          placeholder="Can't select more than {collectionMax} products from the collection {collectionName}."
                          helpText="use {collectionMax} to include maximum limit and {collectionName} to include name"
                          autoComplete="off"
                        />
                        <br />
                      </Card>
                    </>
                  )}

                  {tagValue === 'Store Wise' && (
                    <>
                      <Card>
                        <IndexTable
                          headings={[
                            { title: 'Store Name' },
                            { title: 'Total Products' },
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

                      <br />
                      <br />

                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message. If the browsing language differs, English will be used by default"}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for Store Minimum limit"
                          value={errorMessages.shopMinErrMsg}
                          onChange={(value) => { handleErrorMessages("shopMinErrMsg", value) }}
                          placeholder="Minmum {shopMin} products are required for checkout"
                          helpText="use {shopMin} to include minimum limit"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Store Maximum limit"
                          value={errorMessages.shopMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("shopMaxErrMsg", value) }}
                          placeholder="Cart exceeds {shopMax} number of products. please remove some items."
                          helpText="use {shopMax} to include maximum limit"
                          autoComplete="off"
                        />
                        <br />
                      </Card>
                    </>
                  )}

                  {tagValue === 'General' && (
                    <>
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
                              Total Cart Price ({generalLimiters?.currencyCode})
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={generalLimiters?.priceMin}
                                  label="Price Min Limit"
                                  type="number"
                                  onChange={(value) => { handleGeneralLimiters("priceMin", value) }}
                                />
                              </FormLayout>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={generalLimiters?.priceMax}
                                  label="Price Max Limit"
                                  type="number"
                                  onChange={(value) => { handleGeneralLimiters("priceMax", value) }}
                                />
                              </FormLayout>
                            </IndexTable.Cell>
                          </IndexTable.Row>
                          <IndexTable.Row>
                            <IndexTable.Cell>
                              Total Cart Weight ({generalLimiters?.weightUnit})
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={generalLimiters?.weightMin}
                                  label="Weight Min Limit"
                                  type="number"
                                  onChange={(value) => { handleGeneralLimiters("weightMin", value) }}
                                />
                              </FormLayout>
                            </IndexTable.Cell>
                            <IndexTable.Cell>
                              <FormLayout>
                                <TextField
                                  value={generalLimiters?.weightMax}
                                  label="Weight Max Limit"
                                  type="number"
                                  onChange={(value) => { handleGeneralLimiters("weightMax", value) }}
                                />
                              </FormLayout>
                            </IndexTable.Cell>
                          </IndexTable.Row>
                        </IndexTable>
                      </Card>

                      <br />
                      <br />

                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message. If the browsing language differs, English will be used by default"}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for Price Minimum limit"
                          value={errorMessages.priceMinErrMsg}
                          onChange={(value) => { handleErrorMessages("priceMinErrMsg", value) }}
                          placeholder="Minmum amount {priceMin} {currencyCode} is required for checkout."
                          helpText="use {priceMin} to include minimum price, {currencyCode} to include currency code."
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Price Maximum limit"
                          value={errorMessages.priceMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("priceMaxErrMsg", value) }}
                          placeholder="Cart exceeds amount {priceMax} {currencyCode} please remove some items."
                          helpText="use {priceMax} to include maximum price, {currencyCode} to include currency code."
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Weight Minimum limit"
                          value={errorMessages.weightMinErrMsg}
                          onChange={(value) => { handleErrorMessages("weightMinErrMsg", value) }}
                          placeholder="Minmum weight {weightMin} {weightUnit} is required for checkout."
                          helpText="use {weightMin} to include minimum weight, {weightUnit} to include unit."
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for Weight Maximum limit"
                          value={errorMessages.weightMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("weightMaxErrMsg", value) }}
                          placeholder="Cart exceeds weight {weightMax} {weightUnit} please remove some items."
                          helpText="use {weightMax} to include maximum weight, {weightUnit} to include unit."
                          autoComplete="off"
                        />
                        <br />
                      </Card>
                    </>
                  )}

                  {tagValue === 'Vendor Wise' && (
                    <>
                      <Card>
                        <IndexTable
                          headings={[
                            {
                              title: (
                                <ButtonGroup>
                                  <Button onClick={() => handleSort('vendorName')} variant="tertiary">
                                    Vendor Name
                                  </Button>
                                  <Button onClick={() => handleSort('vendorName')} variant="tertiary">
                                    <Icon source={SelectIcon} />
                                  </Button>
                                </ButtonGroup>
                              )
                            },
                            {
                              title: (
                                <ButtonGroup>
                                  <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                                    Products Available
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
                          itemCount={vendorsData.length}
                          selectable={false}
                        >
                          {sortedVendorFilteredRows.map((vendor, index) => (
                            <IndexTable.Row key={index}>
                              <IndexTable.Cell>
                                {vendor['vendorName']}
                              </IndexTable.Cell>
                              <IndexTable.Cell>
                                {vendor['quantityLimit']}
                              </IndexTable.Cell>
                              <IndexTable.Cell>
                                <FormLayout>
                                  <TextField
                                    value={getVendorQuantityLimit(vendor['vendorName'], 'min')}
                                    label="Vendor Min Limit"
                                    type="number"
                                    onChange={(value) => { handleQuantityLimit(value, vendor['vendorName'], 'min') }}
                                    error={errorState[`${vendor['vendorName']}_min`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
                                  />

                                </FormLayout>
                              </IndexTable.Cell>
                              <IndexTable.Cell>
                                <FormLayout>
                                  <TextField
                                    value={getVendorQuantityLimit(vendor['vendorName'], 'max')}
                                    label="Vendor Max Limit"
                                    type="number"
                                    onChange={(value) => { handleQuantityLimit(value, vendor['vendorName'], 'max') }}
                                    error={errorState[`${vendor['vendorName']}_max`] ? `You have ${freePlanlimiters.products - countOfTotalProductsWithLimits} products remaining under the free plan.` : ''}
                                  />
                                </FormLayout>
                              </IndexTable.Cell>
                            </IndexTable.Row>
                          ))}
                        </IndexTable>
                      </Card>
                      <br />
                      <br />
                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message. If the browsing language differs, English will be used by default"}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for Vendor Minimum limit"
                          value={errorMessages.vendorMinErrMsg}
                          onChange={(value) => { handleErrorMessages("vendorMinErrMsg", value) }}
                          placeholder="You have to select minimun {vendorMin} products from the vendor {vendorName}."
                          helpText="use {vendorMin} to include minimum limit and {vendorName} to include name"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for vendor Maximum limit"
                          value={errorMessages.vendorMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("vendorMaxErrMsg", value) }}
                          placeholder="Can't select more than {vendorMax} products from the vendor {vendorName}."
                          helpText="use {vendorMax} to include maximum limit and {vendorName} to include name"
                          autoComplete="off"
                        />
                        <br />
                      </Card>
                    </>
                  )}

                  {tagValue === 'SKU Wise' && (
                    <>
                      <Card>
                        <IndexTable
                          headings={[
                            {
                              title: 'SKU Id'
                            },
                            {
                              title: 'Quantity Available'
                            },
                            {
                              title: 'Min Limit'
                            },
                            {
                              title: 'Max Limit'
                            },
                            {
                              title: 'Multiple'
                            }
                          ]}
                          itemCount={allProductsData.length}
                          selectable={false}
                        >
                          {allProductsData.map((product, index) => (
                            <>
                              {product?.node.variants?.edges.length > 0 && (
                                product.node.variants.edges.map((variant, index) => (
                                  <>
                                    {variant?.node?.sku != '' && (
                                      <IndexTable.Row key={index}>
                                        <IndexTable.Cell>{variant.node.sku}</IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <div style={{ textAlign: 'center' }}>
                                            {variant.node.inventoryQuantity}
                                          </div>
                                        </IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <FormLayout>
                                            <TextField
                                              value={getSkuQuantityLimit(variant.node.sku, 'min')}
                                              label="SKU Min Limit"
                                              type="number"
                                              onChange={(value) => handleSkuLimiters(value, variant.node.sku, 'min')}
                                            />
                                          </FormLayout>
                                        </IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <FormLayout>
                                            <TextField
                                              value={getSkuQuantityLimit(variant.node.sku, 'max')}
                                              label="SKU Max Limit"
                                              type="number"
                                              onChange={(value) => handleSkuLimiters(value, variant.node.sku, 'max')}
                                            />
                                          </FormLayout>
                                        </IndexTable.Cell>
                                        <IndexTable.Cell>
                                          <FormLayout>
                                            <TextField
                                              value={getSkuQuantityLimit(variant.node.sku, 'multiple')}
                                              label="Multiple"
                                              type="number"
                                              onChange={(value) => handleSkuLimiters(value, variant.node.sku, 'multiple')}
                                            />
                                          </FormLayout>
                                        </IndexTable.Cell>
                                      </IndexTable.Row>
                                    )}
                                  </>
                                ))
                              )}
                            </>
                          ))}
                        </IndexTable>
                      </Card >

                      <br />
                      <br />

                      <div style={{ width: '100%', overflow: 'auto', marginLeft: '0.5rem' }}>
                        <div>
                          <InlineStack gap="500">
                            <div style={{ paddingLeft: '0.5rem' }}>
                              <div style={{ display: 'flex' }}>
                                <label >Select Language</label>
                                <Tooltip content={"Select a language and enter the message. If the browsing language differs, English will be used by default"}>
                                  <Button icon={InfoIcon} variant="plain" />
                                </Tooltip>
                              </div>
                              <FormLayout>
                                <Select
                                  labelHidden
                                  options={localeOptions}
                                  value={selectedLocale}
                                  onChange={handleLocaleChange}
                                />
                              </FormLayout>
                            </div>
                          </InlineStack>
                        </div>
                      </div>

                      <br />

                      <Card>
                        <TextField
                          label="Error Message for SKU Minimum limit"
                          value={errorMessages.skuMinErrMsg}
                          onChange={(value) => { handleErrorMessages("skuMinErrMsg", value) }}
                          placeholder="You can't select less than {skumin} for this product {productName}."
                          helpText="use {skuMin} to include minimum limit"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for SKU Maximum limit"
                          value={errorMessages.skuMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("skuMaxErrMsg", value) }}
                          placeholder="Quantity limit reached, you can't select more than {skuMax} for {productName}."
                          helpText="use {skuMax} to include maximum limit"
                          autoComplete="off"
                        />
                        <br />
                        <TextField
                          label="Error Message for SKU Multiple limit"
                          value={errorMessages.skuMaxErrMsg}
                          onChange={(value) => { handleErrorMessages("skuMaxErrMsg", value) }}
                          placeholder="You can only select multiple of {skumultiple} for {productName}."
                          helpText="use {skuMultiple} to include multiple limit"
                          autoComplete="off"
                        />
                        <br />
                      </Card>
                    </>
                  )}

                </Layout.Section>
              </Layout>
            </BlockStack>
          </div>
        </Page>
      )}
    </>
  );
}

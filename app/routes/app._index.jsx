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
import { ImageIcon, EditIcon, DeleteIcon, ChevronLeftIcon, ChevronRightIcon, SelectIcon, SearchIcon } from '@shopify/polaris-icons';
import { authenticate } from '../shopify.server';
import React from 'react';
import { updateLimiter, addLimiter } from '../models/Limiter.server';
//import {getProductTitle} from '../models/Limiter.server';


//fetches the category data
export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  try {
    const orderLimit = await db.order_Limit.findMany();

    const response = await admin.graphql(
      `{
        shop {
          id
          name
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
    const allProductsData = await res.json();
    const data = await response.json();
    const allProductCategories = data?.data?.shop?.allProductCategories;
    const shopId = data?.data?.shop?.id;
    const shopName = data?.data?.shop?.name;
    const storeLimit = allProductsData?.data?.products?.edges.length;

    const categoryLimits = {}
    for (const category of allProductCategories) {
      const productTaxonomyNode = category.productTaxonomyNode;
      let quantityLimit = 0;
      let name = productTaxonomyNode.name
      for (const edge of allProductsData.data.products.edges) {
        const productCategory = edge.node.category ? edge.node.category.name : null;
        // If the product category matches the current category, increment the count
        if (productCategory === productTaxonomyNode.name) {
          quantityLimit++;
        }
      }
      categoryLimits[name] = quantityLimit;
    }

    console.log('shop id in loader', shopId);
    //for loop to create metafields for products and shop
    for (const orderLimiter of orderLimit) {
      
      if(orderLimiter.type === 'store_wise') {
        console.log('store limit and status', orderLimiter.quantityLimit, orderLimiter.status)
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
                "namespace": "storeLimit",
                "key": "storeLimit",
                "type": "string",
                "value": `${orderLimiter.quantityLimit}`
                
              },
              {
                "ownerId": `${shopId}`,
                "namespace": "storeStatus",
                "key": "storeStatus",
                "type": "string",
                "value": `${orderLimiter.status}`
                
              }
            ]
          }
        };

        const metaResponse = await admin.graphql(mutationQuery, metafields);
        const metaData = await metaResponse.json();
        const existingMetafields = metaData?.data?.metafieldsSet?.metafields;

        const errorMessages = metaData?.data?.metafieldsSet?.userErrors;
        console.log(metaData?.data?.metafieldsSet?.userErrors);

        console.log('existingrecords in storemeta', metaData?.data?.metafieldsSet?.metafields);

        /*if (errorMessages && errorMessages.length > 0) {

          // Delete metafields one by one based on the given keys
          const keysToDelete = [
            'storeLimit', 'storeStatus'
          ];

          const deletePromises = keysToDelete.map(async key => {
            // Find the corresponding metafield ID in the existing metafields
            const existingMetafield = existingMetafields.find(metafield => metafield.key === key);
            console.log('metafield in storemeta', existingMetafield);

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
          const updatedMetaResponse = await admin.graphql(mutationQuery, metafields);
          const updatedMetaData = await updatedMetaResponse.json();
        }*/
      }
      
      if (orderLimiter.type === 'product_wise') {
        //console.log('store limit in metafields', orderLimit.find((item) => item.type === 'store_wise')?.quantityLimit);

        const categoryName = allProductsData.data.products.edges.find(
          (product) => product.node.id === orderLimiter.typeId
        )?.node?.category?.name;

        const categoryId = allProductCategories.find(
          (category) => category.productTaxonomyNode.name === categoryName
        )?.productTaxonomyNode.id

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
              id: orderLimiter.typeId,
              metafields: [
                {
                  "namespace": "productLimit",
                  "key": `productLimit`,
                  "type": "string",
                  "value": `${orderLimiter.quantityLimit}`
                },
                {
                  "namespace": "productStatus",
                  "key": "productStatus",
                  "type": "string",
                  "value": `${orderLimiter.status}`,
                },
                {
                  "namespace": "categoryName",
                  "key": "categoryName",
                  "type": "string",
                  "value": `${categoryName}`
                },
                {
                  "namespace": "categoryLimit",
                  "key": "categoryLimit",
                  "value": `${orderLimit.find(
                    (item) => item.typeId === categoryId
                  )?.quantityLimit}`,
                  "type": "string"
                },
                {
                  "namespace": "categoryStatus",
                  "key": "categoryStatus",
                  "value": `${orderLimit.find(
                    (item) => item.typeId === categoryId
                  )?.status}`,
                  "type": "string"
                },
                {
                  "namespace": "storeLimit",
                  "key": "storeLimit",
                  "value": `${orderLimit.find((item) => item.type === 'store_wise')?.quantityLimit}`,
                  "type": "string"
                },
                {
                  "namespace": "storeStatus",
                  "key": "storeStatus",
                  "value": `${orderLimit.find((item) => item.type === 'store_wise')?.status}`,
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

        //console.log('existingrecords', existingMetafields);

        if (errorMessages && errorMessages.length > 0) {

          // Delete metafields one by one based on the given keys
          const keysToDelete = [
            'productLimit', 'productStatus', 'categoryLimit', 'categoryStatus', 'categoryName', 'storeLimit', 'storeStatus'
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

        // console.log(metaData.data.productUpdate.product , metaData.data.productUpdate.userErrors);
      }
    }

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
        /*const quantityLimit = productData.data.product.availablePublicationsCount.count;*/
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
      categoryLimits,
      storeLimit,
      graphql: admin.graphql,
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
    const allProductsData = await res.json();


    const formData = await request.formData();

    console.log('status value in loader', formData.get('status'), formData.get('id'));

    //to delete a record from a database
    console.log(formData.get('action'), formData.get('pk'));
    if (formData.get('action') == 'delete') {
      await db.order_Limit.delete({
        where: {
          id: Number(formData.get('pk')),
        }
      });
    
      console.log('type and typeId in action', formData.get('type'), formData.get('typeId'));
      if(formData.get('type') === 'product_wise') {
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
    <renderErrorMessage />
  }

  const categoryLimits = loaderData.categoryLimits;
  const categoryOptions = [];
  const categoryIds = [];
  const allProductCategories = loaderData.data.data.shop.allProductCategories;
  const orderLimit = loaderData.orderLimit;

  //to populate the category arrays
  for (const category of allProductCategories) {
    const productTaxonomyNode = category.productTaxonomyNode;
    categoryOptions.push(productTaxonomyNode.name);
    categoryIds.push(productTaxonomyNode.id);
  }
  //abscent of categories in the store
  if (!(categoryOptions.length)) {
    console.log('no categories');
    categoryOptions.push('No Categories');
  }

  const rows = loaderData.rows;

  /*//to add buttons to the rows
  const rows = allFieldRows ? rows.map(row => [
    row.id,
    row.type,
    row.name,
    row.quantityLimit,
    row.status,
    row.createdAt,
    <ButtonGroup gap="200">
      <Button onClick={() => handleEdit(row.id, row.type)}>
        <Icon
          source={EditIcon}
          tone="base"
        />
      </Button>
      <Button onClick={() => handleDelete(row.id)}>
        <Icon
          source={DeleteIcon}
          tone="base"
        />
      </Button>
    </ButtonGroup>
  ]) : [];*/

  console.log('rows', rows);
  const [searchValue, setSearchValue] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pk, setPk] = useState(0);
  const [tagValue, setTagValue] = useState('Store Wise');
  const [statusValue, setStatusValue] = useState('Active');
  const [categoryValue, setCategoryValue] = useState(categoryOptions[0]);
  const [quantityLimit, setQuantityLimit] = useState(loaderData.storeLimit);
  const [categoryLimit, setCategoryLimit] = useState(categoryLimits[categoryValue]);
  const [formState, setFormState] = useState({
    productId: '',
    productVariantId: '',
    productTitle: '',
    productHandle: '',
    productAlt: '',
    productImage: '',
    availablePublicationCount: 0,
  });
  const navigate = useNavigate();
  const submit = useSubmit();

  const [selectedSortColumn, setSelectedSortColumn] = useState('id');
  const [sortDirection, setSortDirection] = useState('ascending');

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  //console.log(loaderData.orderLimit);

  // Filter rows based on search value
  const filteredRows = rows.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );

  // Sort the filtered rows based on the current sort column and direction
  const sortedFilteredRows = filteredRows.sort((a, b) => {
    const aValue = a[selectedSortColumn];
    const bValue = b[selectedSortColumn];
    //console.log('sortedfiletered', rows);
    if (aValue === bValue) return 0;
    return sortDirection === 'ascending' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });

  // Slice the sorted rows to get records for the current page
  const paginatedRows = sortedFilteredRows.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  // Handle pagination
  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  const totalRecords = rows.length;
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  //handle sorting
  const handleSort = (column) => {
    console.log('handleSort');
    if (selectedSortColumn === column) {
      setSortDirection((prevDirection) =>
        prevDirection === 'ascending' ? 'descending' : 'ascending'
      );
    } else {
      setSelectedSortColumn(column);
      setSortDirection('ascending');
    }
    console.log('direction', sortDirection);
    //filteredRows = sortedFilteredRows(filteredRows);
  };


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




  const handleTagValueChange = useCallback((value) => {
    setTagValue(value);
    if (value === 'Product Wise' && !formState.productId) {
      selectProduct();
      toggleModalActive();
    }
  }, [formState.productId, selectProduct]);

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

  const handleQuantityLimit = useCallback(
    (value) => {
      setQuantityLimit(value);
    },
    [],
  );



  const handleAdd = () => {
    setIsUpdate(false);
    setTagValue('Store Wise');
    setFormState({
      ...formState,
      productId: ''
    });
    toggleModalActive();
  }

  const handleEdit = (id, type) => {
    console.log(id + 'in edit');
    for (const row of orderLimit) {
      console.log('row id and edit id', row.id);
      console.log('row status in edit', row.status);
      if (row.id == id) {
        if (row.type === 'product_wise') {
          setFormState({
            ...formState,
            productId: row.typeId,
            productTitle: rows.find(
              (record) => record.id === row.id
            )?.name,
            productImage: '',
            //availablePublicationCount: row.quantityLimit
          });
          setQuantityLimit(row.quantityLimit);
          setTagValue('Product Wise');
          setStatusValue(row.status.charAt(0).toUpperCase() + row.status.slice(1));
        } else if (row.type === 'category_wise') {
          setTagValue('Category Wise');
          //setCategoryLimit(row.quantityLimit);
          setQuantityLimit(row.quantityLimit);
          setStatusValue(row.status.charAt(0).toUpperCase() + row.status.slice(1));
          setCategoryValue(rows.find(
            (record) => record.id === row.id
          )?.name);
        } else {
          setTagValue('Store Wise');
          setStatusValue(row.status.charAt(0).toUpperCase() + row.status.slice(1));
          setQuantityLimit(row.quantityLimit);
        }
      }
    }
    setPk(id);
    setIsUpdate(true);
    toggleModalActive();
  }

  const handleDelete = (id) => {
    console.log(id + 'in delete');
    const typeId = orderLimit.find(
      (record) => record.id === id
    )?.typeId;
    const type = orderLimit.find(
      (record) => record.id === id
    )?.type;
    submit({ action: 'delete', pk: id, typeId: typeId, type: type }, { method: 'post' });
  }

  const handleUpdate = () => {
    let id = '';
    //let quantityLimit = 0;
    let name = ''

    if (tagValue === 'Category Wise') {
      const indexId = categoryOptions.indexOf(categoryValue);
      id = categoryIds[indexId];
      name = categoryValue;
      //quantityLimit = categoryLimit;
    } else if (tagValue === 'Product Wise') {
      console.log('in handleSave', formState.productId);
      id = formState.productId;
      //quantityLimit = formState.availablePublicationCount;
    }

    //triggers the action function. Makes the post request
    submit({ action: 'update', choice: tagValue, name: name, id: id, status: statusValue.toLowerCase(), pk: pk, quantityLimit: quantityLimit }, { method: 'post' });
    toggleIsUpdate();
    toggleModalActive();
  }

  const handleSave = () => {
    let id = '';
    //let quantityLimit = 0;
    let name = '';

    if (tagValue === 'Category Wise') {
      const indexId = categoryOptions.indexOf(categoryValue);
      id = categoryIds[indexId];
      name = categoryValue;
      //quantityLimit = categoryLimit;
    } else if (tagValue === 'Product Wise') {
      console.log('in handleSave', formState.productId);
      id = formState.productId;
      //quantityLimit = formState.availablePublicationCount;
    }


    //triggers the action function. Makes the post request
    submit({ action: 'create', choice: tagValue, id: id, status: statusValue.toLowerCase(), quantityLimit: quantityLimit, name: name }, { method: 'post' });
    toggleModalActive();
  }

  return (
    <Page fullWidth={true}>
      <ui-title-bar title="Order Limit"></ui-title-bar>

      <Modal
        open={modalActive}
        onClose={toggleModalActive}
        title="Limiters"
        primaryAction={{
          content: isUpdate ? 'update' : 'save', // Conditional primary action content
          onAction: isUpdate ? handleUpdate : handleSave, // Conditional primary action handler
        }}
        secondaryActions={[
          {
            content: 'Close',
            onAction: toggleModalActive,
          },
        ]}
      >
        <Modal.Section>
          <FormLayout>
            <Select
              label="Limit By"
              options={['Store Wise', 'Product Wise', 'Category Wise']}
              value={tagValue}
              onChange={handleTagValueChange}
              onClick={() => handleTagValueChange(tagValue)}
            />
          </FormLayout>
          <div style={{ marginTop: '1rem' }}>
            <FormLayout>
              <Select
                label="Status"
                options={['Active', 'Inactive']}
                value={statusValue}
                onChange={handleStatusValueChange}
              />
            </FormLayout>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <FormLayout>
              <TextField
                value={quantityLimit}
                label="Quantity Limit"
                type="number"
                onChange={handleQuantityLimit}
              />
            </FormLayout>
          </div>
          {tagValue === 'Product Wise' && formState.productId && (
            <div style={{ marginTop: '1rem' }}>
              <Card>
                <BlockStack gap="500">
                  <InlineStack align="space-between">
                    {formState.productId ? (
                      <>
                        <Text as={"h2"} variant="headingLg">
                          Product
                        </Text>
                        <Button variant="plain" Primary onClick={() => { selectProduct(formState, setFormState); toggleModalActive(); }}>
                          Change product
                        </Button>
                      </>
                    ) : null}
                  </InlineStack>
                  {formState.productId ? (
                    <InlineStack blockAlign="center" gap="500">
                      <Thumbnail
                        source={formState.productImage || ImageIcon}
                        alt={formState.productAlt}
                      />
                      <Text as="span" variant="headingMd" fontWeight="semibold">
                        {formState.productTitle}
                      </Text>
                      <input type="hidden" name="productForm" value={formState.productId} />
                    </InlineStack>
                  ) : null}
                  <Bleed marginInlineStart="200" marginInlineEnd="200">
                    <Divider />
                  </Bleed>
                </BlockStack>
                {/*<BlockStack>
                  <TextField
                    value={formState.availablePublicationCount}
                    label="Quantity Limit"
                    type="number"
                  />
                </BlockStack>*/}
              </Card>
            </div>
          )}
          {tagValue === 'Category Wise' && (
            <div style={{ marginTop: '1rem' }}>
              <FormLayout>
                <Select
                  label="Categories"
                  options={categoryOptions}
                  value={categoryValue}
                  onChange={handleCategoryValueChange}
                />
              </FormLayout>
              {/*<div style={{ marginTop: '1rem' }}>
                <BlockStack>
                  <TextField
                    value={categoryLimit}
                    label="Quantity Limit for Category"
                    type="number"
                  />
                </BlockStack>
              </div>*/}
            </div>
          )}
        </Modal.Section>
      </Modal>

      {/* Alert message */}
      {/*exist && (
        <div>
          <p>Record already exists!</p>
          <button onClick={() => handleAlertClose()}>Close</button>
        </div>
      )*/}
      <Modal
        open={alert}
        onClose={toggleAlert}
        title="Record Already Exists"
        primaryAction={{
          content: 'Close',
          onAction: toggleAlert,
        }}
      >
        <Modal.Section>
          <p>A record with the same data already exists.</p>
        </Modal.Section>
      </Modal>

      <Modal
        open={success}
        onClose={toggleSuccess}
        title="Sucess"
        primaryAction={{
          content: 'Close',
          onAction: toggleSuccess,
        }}
      >
        <Modal.Section>
          <p>Sucess</p>
        </Modal.Section>
      </Modal>

      <div style={{ width: '100%', overflow: 'auto' }}>
        <div style={{ marginLeft: '0.5rem' }}>
          <InlineStack gap="500">
            <TextField
              label="Search"
              value={searchValue}
              onChange={setSearchValue}
              prefix={<Icon source={SearchIcon} color="skyDark" />}
            />
          </InlineStack>
        </div>
        <div style={{ float: 'right', padding: '10px' }}>
          <Button onClick={handleAdd}>Add Order Limit</Button>
        </div>
      </div>



      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <IndexTable
                headings={[
                  {
                    title: (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('id')} variant="tertiary">
                          Id
                        </Button>
                        <Button onClick={() => handleSort('id')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ),
                    alignment: "center"
                  },
                  {
                    title: (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('type')} variant="tertiary">
                          Type
                        </Button>
                        <Button onClick={() => handleSort('type')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ),
                    alignment: "center"
                  },
                  {
                    title: (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('name')} variant="tertiary">
                          Name
                        </Button>
                        <Button onClick={() => handleSort('name')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ),
                    alignment: "center"
                  },
                  {
                    title: (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                          Quantity
                        </Button>
                        <Button onClick={() => handleSort('quantityLimit')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ),
                    alignment: "center"
                  },
                  {
                    title: (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('status')} variant="tertiary">
                          Status
                        </Button>
                        <Button onClick={() => handleSort('status')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ),
                    alignment: "center"
                  },
                  {
                    title: (
                      <ButtonGroup>
                        <Button onClick={() => handleSort('createdAt')} variant="tertiary">
                          Created At
                        </Button>
                        <Button onClick={() => handleSort('createdAt')} variant="tertiary">
                          <Icon source={SelectIcon} />
                        </Button>
                      </ButtonGroup>
                    ),
                    alignment: "center"
                  },
                  { title: (<b>Action</b>) },
                ]}
                itemCount={sortedFilteredRows.length}
                selectable={false}
              >
                {/* Render rows with sorted and filtered data */}
                {sortedFilteredRows.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage).map((row, index) => (
                  <IndexTable.Row key={index}>
                    {Object.values(row).map((cell, cellIndex) => (
                      <IndexTable.Cell key={cellIndex}>{cell}</IndexTable.Cell>
                    ))}
                    <IndexTable.Cell>
                      <ButtonGroup gap="200">
                        <Button onClick={() => handleEdit(row.id, row.type)}>
                          <Icon source={EditIcon} tone="base" />
                        </Button>
                        <Button onClick={() => handleDelete(row.id)}>
                          <Icon source={DeleteIcon} tone="base" />
                        </Button>
                      </ButtonGroup>
                    </IndexTable.Cell>
                  </IndexTable.Row>
                ))
                }
              </IndexTable>
              {/* Pagination component */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <Button icon={ChevronLeftIcon} accessibilityLabel="Previous Page" disabled={currentPage === 1} onClick={handlePreviousPage} />
                <span style={{ padding: '0.5rem', margin: '0.5rem' }}> Page {currentPage}</span>
                <Button icon={ChevronRightIcon} accessibilityLabel="Next Page" disabled={currentPage === totalPages} onClick={handleNextPage} />
              </div>
            </Card>
          </Layout.Section>
        </Layout>

      </BlockStack>


    </Page>
  );
}

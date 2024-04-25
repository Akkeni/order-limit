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
  Popover,
  ActionList,
  FormLayout,
  Select,
  TextField,
  Modal,
} from '@shopify/polaris';
import { json, redirect } from '@remix-run/node';
import { useState, useCallback, useEffect } from 'react';
import { PageActions } from '@shopify/polaris';
import { useNavigate, useSubmit, useLoaderData } from '@remix-run/react';
import db from "../db.server";
import { ImageIcon } from '@shopify/polaris-icons';
import { authenticate } from '../shopify.server';
import React from 'react';
//import {getProductTitle} from '../models/Limiter.server';

//fetches the category data
export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  try {
    const orderLimit = await db.order_Limit.findMany();

    const response = await admin.graphql(
      `{
      shop {
       allProductCategories {
         productTaxonomyNode {
           fullName
           name
           id
         }
       }
     }
     }
    `
    );
    const data = await response.json();
    const allProductCategories = data.data.shop.allProductCategories;
    const rows = [];
    for (const limiter of orderLimit) {
      let row = {};

      row.id = limiter.id;

      if (limiter.type === 'store_wise') {
        row.type = 'StoreWise';
        row.name = 'Store Name';
      } else if (limiter.type === 'product_wise') {
        row.type = 'ProductWise';
        let productResponse = await admin.graphql(
          `query Title($id:ID!){
              product(id: $id) {
                title
              }
            }`,
          {
            variables: {
              id: limiter.productId,
            },
          }
        );
        let productData = await productResponse.json();
        let productTitle = productData.data.product.title;
        row.name = productTitle;
      } else {
        row.type = 'CategoryWise';
        let categoryName = allProductCategories.find(
          (category) => category.productTaxonomyNode.id === limiter.categoryId
        )?.productTaxonomyNode.name;
        row.name = categoryName;
      }

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
      graphql: admin.graphql,
    });
  } catch (error) {
    console.error('Error fetching Categories data:', error);
    return json({
      ok: false,
      error: 'Error fetching Categories data',
    });
  }
}

//for storing records into database according to the type
export async function action({ request, params }) {

  try {
    const formData = await request.formData();

    console.log(formData.get('action', formData.get('pk')));
    if(formData.get('action') == 'delete') {
      await db.order_Limit.delete({ 
        where: {
           id: Number(formData.get('pk')),
          } 
        });
      return redirect('/app/');
    }

    if(formData.get('action') === 'update') {
      if(formData.get('choice') === 'Product Wise'){
        const updateLimiter = await db.order_Limit.update({
          where: {
            id: Number(formData.get('pk')),
          },
          data: {
            type: 'product_wise',
            productId: formData.get('id'),
            status: formData.get('status'),
          },
        });
      } else if (formData.get('choice') === 'Category Wise'){
        const updateLimiter = await db.order_Limit.update({
          where: {
            id: Number(formData.get('pk')),
          },
          data: {
            type: 'category_wise',
            categoryId: formData.get('id'),
            status: formData.get('status'),
          },
        });
      }else if (formData.get('choice') === 'Store Wise'){
        const updateLimiter = await db.order_Limit.update({
          where: {
            id: Number(formData.get('pk')),
          },
          data: {
            type: 'store_wise',
            status: formData.get('status'),
          },
        });
      }
      return redirect('/app/');
    }

    if (formData.get('choice') === 'Store Wise') {

      const orderLimit = await db.order_Limit.findFirst({
        where: {
          type: 'store_wise',
        },
      });

      if (orderLimit !== null) {
        return redirect('/app/');
      }

      const data = {
        type: 'store_wise',
        status: formData.get('status'),
      };

      await db.order_Limit.create({ data });
    }

    else if (formData.get('choice') === 'Product Wise') {

      const orderLimit = await db.order_Limit.findFirst({
        where: {
          productId: formData.get('id'),
        }
      });

      if (orderLimit !== null) {
        return redirect('/app/');
      }

      const data = {
        type: 'product_wise',
        productId: formData.get('id'),
        status: formData.get('status'),
      }
      await db.order_Limit.create({ data });
    }

    else if (formData.get('choice') === 'Category Wise') {

      const orderLimit = await db.order_Limit.findFirst({
        where: {
          categoryId: formData.get('id'),
        }
      });

      if (orderLimit !== null) {
        return redirect('/app/');
      }

      const data = {
        type: 'category_wise',
        categoryId: formData.get('id'),
        status: formData.get('status'),
      };

      await db.order_Limit.create({ data });
    }

    return redirect('/app/');

  } catch (error) {
    console.error('Error storing records:', error);
    return json({
      ok: false,
      error: 'Error storing records',
    });
  }
}


export default function Index() {
  const loaderData = useLoaderData();
  const orderLimit = loaderData.orderLimit;
  const graphql = loaderData.graphql;
  const categoryOptions = [];
  const categoryIds = [];
  const allProductCategories = loaderData.data.data.shop.allProductCategories;

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
  const actionRows = rows ? rows.map(row => [
    row.id,
    row.type,
    row.name,
    row.createdAt,
      <ButtonGroup gap="200">
        <Button onClick={() => handleEdit(row.id, row.type)}>Edit</Button>
        <Button onClick={() => handleDelete(row.id)}>Delete</Button>
      </ButtonGroup>
    ]) : [];

  console.log('rows', rows)
  const [modalActive, setModalActive] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [pk, setPk] = useState(0);
  const [tagValue, setTagValue] = useState('Store Wise');
  const [statusValue, setStatusValue] = useState('Active');
  const [categoryValue, setCategoryValue] = useState(categoryOptions[0]);
  const [formState, setFormState] = useState({
    productId: '',
    productVariantId: '',
    productTitle: '',
    productHandle: '',
    productAlt: '',
    productImage: '',
  });
  const navigate = useNavigate();
  const submit = useSubmit();
  const [productTitle, setProductTitle] = useState('');


  console.log(loaderData.orderLimit);
  

  //responsible for opening and closing the Modal
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  const toggleIsUpdate = useCallback(
    () => setIsUpdate((isUpdate) => !isUpdate),
    [],
  );

  async function selectProduct() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select",
    });

    if (products) {
      const { images, id, variants, title, handle } = products[0];
      setFormState({
        ...formState,
        productId: id,
        productVariantId: variants[0].id,
        productTitle: title,
        productHandle: handle,
        productAlt: images[0]?.altText,
        productImage: images[0]?.originalSrc,
      });
    }
    console.log('in selectproduct', formState.productId);

    toggleModalActive();
  }



  const handleDropdown = (value) => {
    if (value == 'Product Wise' && formState.productId === '') {
      console.log('in handledropdown ', formState.productId);
      selectProduct();
      toggleModalActive();
    }
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
    },
    [],
  );

  const handleStatusValueChange = useCallback(
    (value) => {
      setStatusValue(value);
    },
    [],
  );


  const handleAdd = () => {
    setIsUpdate(false);
    toggleModalActive();
  }

  const handleEdit = (id, type) => {
    console.log(id + 'in edit');
    setPk(id);
    setIsUpdate(true);
    toggleModalActive();
  }

  const handleDelete = (id) => {
    console.log(id + 'in delete');
    submit({action: 'delete', pk: id}, {method: 'post'});
  }

  const handleUpdate = () => {
    let id = '';

    if (tagValue === 'Category Wise') {
      const indexId = categoryOptions.indexOf(categoryValue);
      id = categoryIds[indexId];
    } else if (tagValue === 'Product Wise') {
      console.log('in handleSave', formState.productId);
      id = formState.productId;
    }

    //triggers the action function. Makes the post request
    submit({ action: 'update', choice: tagValue, id: id, status: statusValue, pk: pk }, { method: 'post' });
    toggleIsUpdate();
    toggleModalActive();
  }

  const handleSave = () => {
    let id = ''

    if (tagValue === 'Category Wise') {
      const indexId = categoryOptions.indexOf(categoryValue);
      id = categoryIds[indexId];
    } else if (tagValue === 'Product Wise') {
      console.log('in handleSave', formState.productId);
      id = formState.productId;
    }

    //triggers the action function. Makes the post request
    submit({ choice: tagValue, id: id, status: statusValue }, { method: 'post' });
    toggleModalActive();
  }

  return (
    <Page>
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
            </div>
          )}
        </Modal.Section>
      </Modal>

      <div style={{ width: '100%', overflow: 'auto' }}>
        <div style={{ float: 'right', padding: '10px' }}>
          <Button onClick={handleAdd}>Add Order Limit</Button>
        </div>
      </div>

      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <DataTable
                columnContentTypes={[
                  'numeric',
                  'text',
                  'text',
                  'text',
                  'text'
                ]}
                columnWidths={[
                  '1fr',
                  '1fr',
                  '1fr',
                  '1fr',
                  '2fr' // Make the last column span two columns
                ]}
                headings={[
                  'Id',
                  'Type',
                  'Name',
                  'Created Date',
                  'Action',
                ]}
                rows={actionRows}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}

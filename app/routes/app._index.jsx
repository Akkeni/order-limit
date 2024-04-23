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
import {authenticate} from '../shopify.server';

export async function loader({request}) {
  const {admin, session} = await authenticate.admin(request);
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
  console.log(data);
  return json({
    ok: true,
    data,
  });
}

export async function action({ request, params }) {

  console.log('action');
  const formData = await request.formData();
  console.log(formData.get('choice'));

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
      status: 'active',
    };

    await db.order_Limit.create({ data });
  }

  else if (formData.get('choice') === 'Product Wise') {

    const orderLimit = await db.order_Limit.findFirst({
      where: {
        productId: formData.get('id'),
      }
    });

    if(orderLimit !== null) {
      return redirect('/app/');
    }

    const data = {
      type: 'product_wise',
      productId: formData.get('id'),
      status: 'active',
    }
    await db.order_Limit.create({ data });
  }

  else if (formData.get('choice') === 'Category Wise') {

    const orderLimit = await db.order_Limit.findFirst({
      where: {
        categoryId: formData.get('id'),
      }
    });

    if(orderLimit !== null) {
      return redirect('/app/');
    }

    const data = {
      type: 'category_wise',
      categoryId: formData.get('id'),
      status: 'active',
    };

    await db.order_Limit.create({ data });
  }
  return redirect('/app/');
}


export default function Index() {
  const loaderData = useLoaderData();
  const categoryOptions = [];
  const categoryIds = [];
  const allProductCategories = loaderData.data.data.shop.allProductCategories;

  for (const category of allProductCategories) {
    const productTaxonomyNode = category.productTaxonomyNode;
    categoryOptions.push(productTaxonomyNode.name);
    categoryIds.push(productTaxonomyNode.id);
  }

  const rows = [];
  const [modalActive, setModalActive] = useState(false);
  const [tagValue, setTagValue] = useState('Store Wise');
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


  

  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    [],
  );

  async function selectProduct() {
    const products = await window.shopify.resourcePicker({
      type: "product",
      action: "select", // customized action verb, either 'select' or 'add',
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
      //submit({ choice: 'Product Wise', id: id }, { method: 'post' });
    }
    toggleModalActive();
  }



  const handleDropdown = (value) => {
    if (value == 'Product Wise') {
      selectProduct();
      toggleModalActive();
    }
  }

  const handleTagValueChange = useCallback(
    (value) => {
      setTagValue(value);
      handleDropdown(value);
    },
    [],
  );

  const handleCategoryValueChange = useCallback(
    (value) => {
      setCategoryValue(value);
    },
    [],
  );

  const handleSave = () => {
    let id = ''
    if(tagValue === 'Category Wise') {
      const indexId = categoryOptions.indexOf(categoryValue);
      id = categoryIds[indexId];
    } else if(tagValue === 'Product Wise') {
      id = formState.productId;
    }
    submit({ choice: tagValue, id: id }, { method: 'post' });
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
          content: 'save',
          onAction: handleSave,
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
          {tagValue === 'Product Wise' && formState.productId && (    
            <Card>
              <BlockStack gap="500">
                <InlineStack align="space-between">
                {formState.productId ? (
                  <>
                  <Text as={"h2"} variant="headingLg">
                    Product
                  </Text>
                    <Button variant="plain" Primary onClick={() => {selectProduct(formState, setFormState); toggleModalActive();}}>
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
          )}
          {tagValue === 'Category Wise' && (
            <FormLayout>
            <Select
              label="Categories"
              options={categoryOptions}
              value={categoryValue}
              onChange={handleCategoryValueChange}
            />
          </FormLayout>
          )}
        </Modal.Section>
      </Modal>

      <div style={{ width: '100%', overflow: 'auto' }}>
        <div style={{ float: 'right', padding: '10px' }}>
          <Button onClick={toggleModalActive}>Add Order Limit</Button>
        </div>
      </div>

      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <DataTable
                columnContentTypes={[
                  'text',
                  'numeric',
                  'numeric',
                  'numeric',
                  'numeric',
                ]}
                headings={[
                  'Product',
                  'Price',
                  'SKU Number',
                  'Net quantity',
                  'Net sales',
                ]}
                rows={rows}
              />
            </Card>
          </Layout.Section>
          <Layout.Section>
            <PageActions
              primaryAction={{
                content: 'Save',
              }}
            />
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}

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
import { useState, useCallback } from 'react';
import { PageActions } from '@shopify/polaris';
import { useNavigate, useSubmit } from '@remix-run/react';
import db from "../db.server";

export async function loader() {
  return json({
    ok: true,
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
    const data = {
      type: 'product_wise',
      productId: formData.get('id'),
      status: 'active',
    }
    await db.order_Limit.create({ data });
  }
  else if (formData.get('choice') === 'Category Wise') {
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
  const rows = [];
  const [modalActive, setModalActive] = useState(false);
  const [tagValue, setTagValue] = useState('Store Wise');
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
      submit({ choice: 'Product Wise', id: id }, { method: 'post' });
      toggleModalActive();
    }
  }

  async function selectCategory() {
    const collections = await window.shopify.resourcePicker({
      type: "collection",
      action: "select", // customized action verb, either 'select' or 'add',
    });
    if (collections) {
      const { id } = collections[0];
      submit({ choice: 'Category Wise', id: id }, { method: 'post' });
      toggleModalActive();
    }
  }


  const handleDropdown = (value) => {
    if (value == 'Product Wise') {
      selectProduct();
      toggleModalActive();
    }
    else if (value == 'Category Wise') {
      selectCategory();
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



  const handleSave = () => {
    submit({ choice: tagValue }, { method: 'post' });
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
          {tagValue === 'Product Wise' && (
            <Card>
              <BlockStack gap="500">
                <InlineStack align="space-between">
                  <Text as={"h2"} variant="headingLg">
                    Product
                  </Text>
                  {formState.productId ? (
                    <Button variant="plain" Primary onClick={() => selectProduct(formState, setFormState)}>
                      Change product
                    </Button>
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
                ) : (
                  <BlockStack gap="200">
                    <Button onClick={() => selectProduct(formState, setFormState)} id="select-product">
                      Select product
                    </Button>
                  </BlockStack>
                )}
                <Bleed marginInlineStart="200" marginInlineEnd="200">
                  <Divider />
                </Bleed>
              </BlockStack>
            </Card>
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

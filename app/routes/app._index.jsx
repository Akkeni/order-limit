import {
  BlockStack,
  Text,
  Card,
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

    if(orderLimit !== null) {
      return redirect('/app/')
    }

    const data = {
      type: 'store_wise',
      status: 'active',
    };

    await db.order_Limit.create({ data });
  }

  else if(formData.get('choice') === 'Product Wise') {
    const data = {
      type: 'product_wise',
      productId: formData.get('id'),
      status: 'active',
    }
    await db.order_Limit.create({data});
  }
  else if(formData.get('choice') === 'Category Wise') {
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
      submit({choice: 'Product Wise', id: id}, {method: 'post'});
      
    }
  }

  async function selectCategory() {
    const collections = await window.shopify.resourcePicker({
      type: "collection",
      action: "select", // customized action verb, either 'select' or 'add',
    });
    if(collections) {
      const {id} = collections[0];
      submit({choice: 'Category Wise', id: id}, {method: 'post'});
    }
  }


  const handleDropdown = (value) => {
    if (value == 'Product Wise') {
      selectProduct();
      toggleModalActive();
    }
    else if(value == 'Category Wise') {
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

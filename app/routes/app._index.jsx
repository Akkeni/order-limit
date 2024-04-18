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
} from '@shopify/polaris';
import { json } from '@remix-run/node';
import { useState, useCallback } from 'react';
import { PageActions } from '@shopify/polaris';

export async function loader() {
  return json({
    ok: true,
  });
}


export default function Index() {
  const rows = [];
  const [popoverActive, setPopoverActive] = useState(false);
  const [tagValue, setTagValue] = useState('');

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    [],
  );
  const handleActionListClick = () => {
    setPopoverActive(false);
  };
  const handleTagValueChange = useCallback(
    (value) => setTagValue(value),
    [],
  );
  const activator = (
    <Button onClick={togglePopoverActive} disclosure>Filter</Button>
  )


  return (
    <Page>
      <ui-title-bar title="Order Limit">
      <button variant="primary">Add Order Limit</button>
      </ui-title-bar>
      <div style={{ width: '100%', overflow: 'auto' }}>
        <div style={{ float: "right", padding: '10px' }}>
          <Popover
            active={popoverActive}
            activator={activator}
            onClose={togglePopoverActive}
            ariaHaspopup={false}
            sectioned
          >
            <FormLayout>
              <Select label="Limit By" options={['Store Wise', 'Product Wise', 'Category Wise']} value={tagValue}
                onChange={handleTagValueChange} />
            </FormLayout>
          </Popover>
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


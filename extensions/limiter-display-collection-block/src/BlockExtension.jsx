import {
  reactExtension,
  useApi,
  AdminBlock,
  BlockStack,
  Text,
  InlineStack,
  TextField,
  Divider,
  Box,
  NumberField,
  Heading,
  Button,
} from '@shopify/ui-extensions-react/admin';
import { useEffect, useMemo, useState } from "react";
import { getLimiters, updateLimiters } from "./utils";

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
const TARGET = 'admin.collection-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // The useApi hook provides access to several useful APIs like i18n and data.
  const { i18n, data } = useApi(TARGET);
  console.log({ data });

  const [limiters, setLimiters] = useState({
    collectionName: '',
    collectionMin: 0,
    collectionMax: 0
  });
  const [loading, setLoading] = useState(true);

  const collectionId = data.selected[0].id;

  useEffect(() => {
    (async function getCollectionInfo() {
      // Load the product's metafield of type issues
      const collectionData = await getLimiters(collectionId);
      if (collectionData) {
        setLimiters(prevState => ({
          ...prevState,
          collectionName: collectionData?.collectionName ? collectionData?.collectionName : '',
          collectionMin: collectionData?.collectionMin ? Number(collectionData?.collectionMin) : 0,
          collectionMax: collectionData?.collectionMax ? Number(collectionData?.collectionMax) : 0,
        }));
        setLoading(false);
      }
    })();
  }, [collectionId]);

  const handleLimiters = (value, name) => {
    setLimiters(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log('updated limiters ', limiters);
  }

  const handleSave = async () => {
    setLoading(true);
    const result = await updateLimiters(collectionId, limiters);
    if(result?.success) {
      setLoading(false);
    }
  }

  console.log('collectionMin ' + limiters?.collectionMin + 'categoryMax ' + limiters?.collectionMax);


  return (
    // The AdminBlock component provides an API for setting the title of the Block extension wrapper.
    <AdminBlock title="Order Wise Limit app limiters">

      {loading && (
        <Text>
          Loading...
        </Text>
      )}

      { !loading && (
        <Box>
          <BlockStack gap>
            <Heading size="6">
              Collection Name: {limiters?.collectionName}
            </Heading>

            <InlineStack gap>
              <NumberField
                value={limiters.collectionMin}
                label="Collection Min Limit"
                type="number"
                onChange={(value) => { handleLimiters(value, 'collectionMin') }}

              />
              <NumberField
                value={limiters.collectionMax}
                label="Collection Max Limit"
                type="number"
                onChange={(value) => { handleLimiters(value, 'collectionMax') }}

              />
            </InlineStack>
            <InlineStack inlineAlignment="end" gap="none">
              <Button onClick={handleSave} variant='primary'>Save</Button>
            </InlineStack>
            
          </BlockStack>
        </Box>
      )}
    </AdminBlock>
  );
}
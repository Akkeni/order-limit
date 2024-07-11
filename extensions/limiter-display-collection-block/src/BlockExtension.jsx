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
import { getLimiters, updateLimiters, getExistingCollectionLimits } from "./utils";

// The target used here must match the target used in the extension's toml file (./shopify.extension.toml)
const TARGET = 'admin.collection-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // The useApi hook provides access to several useful APIs like i18n and data.
  const { i18n, data } = useApi(TARGET);


  const [limiters, setLimiters] = useState({
    collectionName: '',
    collectionMin: 0,
    collectionMax: 0,
    plan: '',
  });
  const [loading, setLoading] = useState(true);
  const [isAllow, setIsAllow] = useState(false);
  const collectionId = data.selected[0].id;

  const freePlanLimiters = {
    products: 0,
    categories: 0,
    collections: 0,
    vendors: 0,
  };


  useEffect(() => {
    (async function getCollectionInfo() {
      // Load the product's metafield of type issues

      const collectionData = await getLimiters(collectionId);
      if (collectionData) {

        const existingLimiters = collectionData?.freePlanLimiters;

        if (collectionData.plan === false) {
          freePlanLimiters.products = existingLimiters.find((item) => item.typeName == 'products')?.value || 0;
          freePlanLimiters.categories = existingLimiters.find((item) => item.typeName == 'categories')?.value || 0;
          freePlanLimiters.collections = existingLimiters.find((item) => item.typeName == 'collections')?.value || 0;
          freePlanLimiters.vendors = existingLimiters.find((item) => item.typeName == 'vendors')?.value || 0;
        }

        if (freePlanLimiters) {

          const existingCollectionLimit = await getExistingCollectionLimits();
          if (Number(freePlanLimiters.collections) > Object.keys(existingCollectionLimit).length && Number(freePlanLimiters.collections) > 0) {
            setIsAllow(true);
          }
        }

        if (collectionData.plan) {
          setIsAllow(true);
        }

        setLimiters(prevState => ({
          ...prevState,
          collectionName: collectionData?.collectionName ? collectionData?.collectionName : '',
          collectionMin: collectionData?.collectionMin ? Number(collectionData?.collectionMin) : 0,
          collectionMax: collectionData?.collectionMax ? Number(collectionData?.collectionMax) : 0,
          plan: collectionData?.plan ? collectionData?.plan : false
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

  }

  const handleSave = async () => {
    setLoading(true);
    const result = await updateLimiters(collectionId, limiters);
    if (result?.success) {
      setLoading(false);
    }
  }


  return (
    // The AdminBlock component provides an API for setting the title of the Block extension wrapper.
    <AdminBlock title="Order Limit app limiters">

      {loading && (
        <Text>
          Loading...
        </Text>
      )}

      {!loading && !limiters?.plan && !isAllow && (
        <Text as="p" tone="critical">
          You used allowed collection wise limits. To continue please select a plan or set existing limits to 0.
        </Text>
      )}

      {!loading && isAllow && (
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
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
const TARGET = 'admin.product-details.block.render';

export default reactExtension(TARGET, () => <App />);

function App() {
  // The useApi hook provides access to several useful APIs like i18n and data.
  const { i18n, data } = useApi(TARGET);
  const [limiters, setLimiters] = useState({
    productMin: 0,
    productMax: 0,
    vendorName: '',
    vendorMin: 0,
    vendorMax: 0,
    categoryName: '',
    categoryMin: 0,
    categoryMax: 0,
  });

  const [loading, setLoading] = useState(true);
  const productId = data.selected[0].id;
  console.log({ data });

  useEffect(() => {
    (async function getProductInfo() {

      //fetch the product metafields
      const productData = await getLimiters(productId);

      //category limits
      if (productData?.data?.product?.category?.name) {

        //setCategoryName(productData?.data?.product?.category?.name);
        setLimiters(prevState => ({
          ...prevState,
          categoryName: productData?.data?.product?.category?.name
        }));
        console.log('category limit value ', productData?.data?.product?.categoryLimitField?.value);

        if (productData?.data?.product?.categoryLimitField?.value) {

          const [categoryName, categoryMin, categoryMax] = productData?.data?.product?.categoryLimitField?.value.split(',');
          console.log('categoryMin ', categoryMin);
          setLimiters(prevState => ({
            ...prevState,
            categoryMin: categoryMin ? Number(categoryMin) : 0,
            categoryMax: categoryMax ? Number(categoryMax) : 0,
          }));

        }
      }

      //vendor limits
      if (productData?.data?.product?.vendor) {

        setLimiters(prevState => ({
          ...prevState,
          vendorName: productData?.data?.product?.vendor
        }));
        if(productData?.data?.product?.metafield?.value) {
          const [productMin, productMax, vendorName, vendorMin, vendorMax] = productData?.data?.product?.metafield?.value.split(',');
          if (isNaN(vendorName)) {
            setLimiters(prevState => ({
              ...prevState,
              ['vendorMin']: vendorMin,
              ['vendorMax']: vendorMax
            }));
          }
        }
      }

      //product limits
      if (productData?.data?.product?.metafield?.value) {
        const [productMin, productMax, vendorName, vendorMin, vendorMax] = productData?.data?.product?.metafield?.value.split(',');

        setLimiters(prevState => ({
          ...prevState,
          ['productMin']: productMin,
          ['productMax']: productMax
        }));

      }

      setLoading(false);

    })();
  }, [productId]);

  const handleLimiters = (value, name) => {
    setLimiters(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log('updated limiters ', limiters);
  }

  const handleSave = async () => {
    setLoading(true);
    const result = await updateLimiters(productId, limiters);
    if(result?.success) {
      setLoading(false);
    }
  }

  console.log('categoryMin ' + limiters?.categoryMin + 'categoryMax ' + limiters?.categoryMax);


  return (
    // The AdminBlock component provides an API for setting the title of the Block extension wrapper.
    <AdminBlock title="Order Wise Limit app limiters">

      {loading && (
        <Text>
          Loading...
        </Text>
      )}

      {!loading && (
        <BlockStack gap>

          <Box>
            <InlineStack gap>
              <NumberField
                value={limiters?.productMin}
                label="Product Min Limit"
                type="number"
                onChange={(value) => { handleLimiters(value, 'productMin') }}
              />
              <NumberField
                value={limiters?.productMax}
                label="Product Max Limit"
                type="number"
                onChange={(value) => { handleLimiters(value, 'productMax') }}
              />
            </InlineStack>
          </Box>



          {limiters?.categoryName && (
            <>
              <Divider />
              <Box>
                <BlockStack blockGap='small'>
                  <Heading size="6">
                    Category Name: {limiters?.categoryName}
                  </Heading>

                  <InlineStack gap>
                    <NumberField
                      value={limiters.categoryMin}
                      label="Category Min Limit"
                      type="number"
                      onChange={(value) => { handleLimiters(value, 'categoryMin') }}

                    />
                    <NumberField
                      value={limiters.categoryMax}
                      label="Category Max Limit"
                      type="number"
                      onChange={(value) => { handleLimiters(value, 'categoryMax') }}

                    />
                  </InlineStack>
                </BlockStack>
              </Box>
            </>
          )}

          <Divider />

          <Box>
            <BlockStack blockGap='small'>
              <Heading size="6">
                Vendor Name: {limiters?.vendorName}
              </Heading>

              <InlineStack gap>

                <NumberField
                  value={limiters?.vendorMin}
                  label="vendor Min Limit"
                  type="number"
                  onChange={(value) => { handleLimiters(value, 'vendorMin') }}

                />
                <NumberField
                  value={limiters?.vendorMax}
                  label="vendor Max Limit"
                  type="number"
                  onChange={(value) => { handleLimiters(value, 'vendorMax') }}
                />
              </InlineStack>
            </BlockStack>
          </Box>
          <InlineStack inlineAlignment="end" gap="none">
            <Button onClick={handleSave} variant='primary'>Save</Button>
          </InlineStack>
        </BlockStack>
      )}

    </AdminBlock>
  );
}
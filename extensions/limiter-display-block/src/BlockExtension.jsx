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
import { getLimiters, getPlan, updateLimiters, getExistingLimits } from "./utils";


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
    plan: '',
  });

  const [isAllow, setIsAllow] = useState({
    product: false,
    category: false,
    vendor: false
  });

  const freePlanLimiters = {
    products: 0,
    categories: 0,
    collections: 0,
    vendors: 0,
  };

  const [loading, setLoading] = useState(true);
  const productId = data.selected[0].id;



  useEffect(() => {
    (async function getProductInfo() {

      //fetch the product metafields
      const productData = await getLimiters(productId);
      const allPlanDetails = await getPlan();
      const existingLimiters = allPlanDetails.freePlanLimiters;

      if (allPlanDetails.plan === false) {
        freePlanLimiters.products = existingLimiters.find((item) => item.typeName == 'products')?.value || 0;
        freePlanLimiters.categories = existingLimiters.find((item) => item.typeName == 'categories')?.value || 0;
        freePlanLimiters.collections = existingLimiters.find((item) => item.typeName == 'collections')?.value || 0;
        freePlanLimiters.vendors = existingLimiters.find((item) => item.typeName == 'vendors')?.value || 0;
      }
      setLimiters(prevState => ({
        ...prevState,
        plan: allPlanDetails.plan
      }));

      if (!allPlanDetails.plan) {

        const {
          productLimitCounts,
          vendorCounts,
          categoryCounts
        } = await getExistingLimits();

        if (Number(freePlanLimiters.products) > Object.keys(productLimitCounts).length && Number(freePlanLimiters.products) > 0) {
          setIsAllow(prevState => ({
            ...prevState,
            product: true
          }));
        }

        if (Number(freePlanLimiters.categories) > Object.keys(categoryCounts).length && Number(freePlanLimiters.categories) > 0) {
          setIsAllow(prevState => ({
            ...prevState,
            category: true
          }));
        }

        if (Number(freePlanLimiters.vendors) > Object.keys(vendorCounts).length && Number(freePlanLimiters.vendors) > 0) {
          setIsAllow(prevState => ({
            ...prevState,
            vendor: true
          }));
        }
      } else {

        setIsAllow(prevState => ({
          ...prevState,
          product: true,
          category: true,
          vendor: true
        }));

      }



      //category limits
      if (productData?.data?.product?.category?.name) {

        setLimiters(prevState => ({
          ...prevState,
          categoryName: productData?.data?.product?.category?.name
        }));

        if (productData?.data?.product?.categoryLimitField?.value) {

          const [categoryName, categoryMin, categoryMax] = productData?.data?.product?.categoryLimitField?.value.split(',');

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
        if (productData?.data?.product?.metafield?.value) {
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

  }

  const handleSave = async () => {
    setLoading(true);
    const result = await updateLimiters(productId, limiters);
    if (result?.success) {
      setLoading(false);
    }
  }

  return (
    // The AdminBlock component provides an API for setting the title of the Block extension wrapper.
    <AdminBlock title="CartControl: Order Limit app limiters">

      {loading && (
        <Text>
          Loading...
        </Text>
      )}

      {!loading && (
        <BlockStack gap>

          {isAllow.product ? (
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
          ) : (
            <Text>
              You used allowed product wise limits. To continue please select a plan or set existing limits to 0.
            </Text>
          )}

          <Divider />

          {isAllow.vendor ? (
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
          ) : (
            <Text>
              You used allowed vendor wise limits. To continue please select a plan or set existing limits to 0.
            </Text>
          )}

          {isAllow.category ? (
            <>
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
            </>
          ) : (
            <>
              <Divider />
              <Text>
                You used allowed category wise limits. To continue please select a plan or set existing limits to 0.
              </Text>
            </>
          )}


          <InlineStack inlineAlignment="end" gap="none">
            <Button onClick={handleSave} variant='primary'>Save</Button>
          </InlineStack>

        </BlockStack>
      )}

    </AdminBlock>
  );
}
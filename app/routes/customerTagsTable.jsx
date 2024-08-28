import { useState } from "react";
import { Card, IndexTable, FormLayout, TextField, Tooltip, Button, Select, InlineStack } from "@shopify/polaris";
import {  InfoIcon } from '@shopify/polaris-icons';


export const CustomerTagsTable = ({
  allCustomerTags,
  searchValue,
  handleErrorMessages,
  getCustomerTagQuantityLimit,
  handleCustomerTagLimiters,
  localeOptions,
  selectedLocale,
  handleLocaleChange,
  errorMessages
}) => {
  // Filter products based on the search query
  const filteredCustomerTags = allCustomerTags.filter((tag) =>
    tag.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <Card>
        <IndexTable
          headings={[
            {
              title: "Customer Tag",
            },
            {
              title: "Total Amount Minimum",
            },
            {
              title: "Total Amount Maximum",
            },
            {
              title: "Total Quantity Minimum",
            },
            {
              title: "Total Quantity Maximum",
            },
          ]}
          itemCount={allCustomerTags.length}
          selectable={false}
        >
          {filteredCustomerTags.map((customerTag, index) => (
            <>
              <IndexTable.Row key={index}>
                <IndexTable.Cell>{customerTag}</IndexTable.Cell>

                <IndexTable.Cell>
                  <FormLayout>
                    <TextField
                      value={getCustomerTagQuantityLimit(
                        customerTag,
                        "priceMin",
                      )}
                      label="Price Min Limit"
                      type="number"
                      onChange={(value) =>
                        handleCustomerTagLimiters(
                          value,
                          customerTag,
                          "priceMin",
                        )
                      }
                    />
                  </FormLayout>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <FormLayout>
                    <TextField
                      value={getCustomerTagQuantityLimit(
                        customerTag,
                        "priceMax",
                      )}
                      label="Price Max Limit"
                      type="number"
                      onChange={(value) =>
                        handleCustomerTagLimiters(
                          value,
                          customerTag,
                          "priceMax",
                        )
                      }
                    />
                  </FormLayout>
                </IndexTable.Cell>

                <IndexTable.Cell>
                  <FormLayout>
                    <TextField
                      value={getCustomerTagQuantityLimit(customerTag, "shopMin")}
                      label="Store Min Limit"
                      type="number"
                      onChange={(value) =>
                        handleCustomerTagLimiters(value, customerTag, "shopMin")
                      }
                    />
                  </FormLayout>
                </IndexTable.Cell>
                <IndexTable.Cell>
                  <FormLayout>
                    <TextField
                      value={getCustomerTagQuantityLimit(customerTag, "shopMax")}
                      label="Store Max Limit"
                      type="number"
                      onChange={(value) =>
                        handleCustomerTagLimiters(value, customerTag, "shopMax")
                      }
                    />
                  </FormLayout>
                </IndexTable.Cell>
              </IndexTable.Row>
            </>
          ))}
        </IndexTable>
      </Card>

      <br />
      <br />

      <div style={{ width: "100%", overflow: "auto", marginLeft: "0.5rem" }}>
        <div>
          <InlineStack gap="500">
            <div style={{ paddingLeft: "0.5rem" }}>
              <div style={{ display: "flex" }}>
                <label>Select Language</label>
                <Tooltip
                  content={
                    "Select a language and enter the message. If the browsing language differs, English will be used by default"
                  }
                >
                  <Button icon={InfoIcon} variant="plain" />
                </Tooltip>
              </div>
              <FormLayout>
                <Select
                  labelHidden
                  options={localeOptions}
                  value={selectedLocale}
                  onChange={handleLocaleChange}
                />
              </FormLayout>
            </div>
          </InlineStack>
        </div>
      </div>

      <br />

      <Card>
        <TextField
          label="Error Message for Price Minimum limit"
          value={errorMessages.priceMinErrMsg}
          onChange={(value) => {
            handleErrorMessages("priceMinErrMsg", value);
          }}
          placeholder="Minmum amount {priceMin} {currencyCode} is required for checkout."
          helpText="use {priceMin} to include minimum limit"
          autoComplete="off"
        />
        <br />
        <TextField
          label="Error Message for Price Maximum limit"
          value={errorMessages.priceMaxErrMsg}
          onChange={(value) => {
            handleErrorMessages("priceMaxErrMsg", value);
          }}
          placeholder="Cart exceeds amount {priceMax} {currencyCode} please remove some items."
          helpText="use {priceMax} to include maximum limit"
          autoComplete="off"
        />
        <br />
        <TextField
          label="Error Message for Store Minimum limit"
          value={errorMessages.shopMinErrMsg}
          onChange={(value) => {
            handleErrorMessages("shopMinErrMsg", value);
          }}
          placeholder="Minmum {shopMin} products are required for checkout."
          helpText="use {shopMin} to include store minimum limit"
          autoComplete="off"
        />
        <br />
        <TextField
          label="Error Message for Store Maximum limit"
          value={errorMessages.shopMaxErrMsg}
          onChange={(value) => {
            handleErrorMessages("shopMaxErrMsg", value);
          }}
          placeholder="Minmum {shopMin} products are required for checkout."
          helpText="use {shopMin} to include store minimum limit"
          autoComplete="off"
        />
        <br />
      </Card>
    </>
  );
};

//export default CustomerTagsTable;

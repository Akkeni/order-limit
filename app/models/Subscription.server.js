export async function getSubscriptionStatus(graphql) {
  const result = await graphql(
    `
        #graphql
        query Shop {
          app {
            installation {
              launchUrl
              activeSubscriptions {
                id
                name
                createdAt
                returnUrl
                status
                currentPeriodEnd
                trialDays
              }
            }
          }
        }
      `,
    { variables: {} },
  );

  const res = await result.json();
  return res;
}

export async function createSubscriptionMetafield(graphql, value) {
  const appIdQuery = await graphql(`
    #graphql
    query {
      currentAppInstallation {
        id
      }
    }
  `);

  const appIdQueryData = await appIdQuery.json();
  const appInstallationID = appIdQueryData.data.currentAppInstallation.id;

  const appMetafield = await graphql(
    `
      #graphql
      mutation CreateAppDataMetafield($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            id
            namespace
            key
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        metafields: {
          namespace: "hasPlan",
          key: "hasPlan",
          type: "boolean",
          value: value,
          ownerId: appInstallationID,
        },
      },
    },
  );

  const data = await appMetafield.json();
  return;
}

export async function createEndPeriodMetafield(graphql, value) {
  const appIdQuery = await graphql(`
    #graphql
    query {
      currentAppInstallation {
        id
      }
    }
  `);

  console.log('value in create function ', value);

  const appIdQueryData = await appIdQuery.json();
  const appInstallationID = appIdQueryData.data.currentAppInstallation.id;

  const appMetafield = await graphql(
    `
      #graphql
      mutation CreateAppDataMetafield($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            id
            namespace
            key
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        metafields: {
          namespace: "endDate",
          key: "endDate",
          type: "string",
          value: value,
          ownerId: appInstallationID,
        },
      },
    },
  );

  const data = await appMetafield.json();
  return;
}

export async function createPlanNameMetafield(graphql, value) {
  const appIdQuery = await graphql(`
    #graphql
    query {
      currentAppInstallation {
        id
      }
    }
  `);

  console.log('value in create function ', value);

  const appIdQueryData = await appIdQuery.json();
  const appInstallationID = appIdQueryData.data.currentAppInstallation.id;

  await graphql(
    `
      #graphql
      mutation CreateAppDataMetafield($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            id
            namespace
            key
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        metafields: {
          namespace: "planName",
          key: "planName",
          type: "string",
          value: value,
          ownerId: appInstallationID,
        },
      },
    },
  );

  return;
}

export async function deletePlanNameMetafield(graphql) {
  
  const deleteMetafield = async (metafieldId) => {
    if (metafieldId) {
      await graphql(
        `mutation metafieldDelete($input: MetafieldDeleteInput!) {
            metafieldDelete(input: $input) {
              userErrors {
                field
                message
              }
            }
          }`,
        {
          variables: {
            input: {
              id: metafieldId
            }
          }
        }
      );
    }
  };

  const appQueryResponse = await graphql(`query appInstallation {
    currentAppInstallation {
      id
      planNameMetaField: metafield(namespace:"planName", key: "planName") {
        value
        id
      }
    }
  }`);

  const appQeryData = await appQueryResponse.json();
  const id = appQeryData?.data?.currentAppInstallation?.planNameMetaField?.id ? appQeryData?.data?.currentAppInstallation?.planNameMetaField?.id : '';


  if(id){
    await deleteMetafield(id);
  }
  
  return;
}

export async function deleteAppInstallationMetafields(graphql) {

  const deleteMetafield = async (metafieldId) => {
    if (metafieldId) {
      await graphql(
        `mutation metafieldDelete($input: MetafieldDeleteInput!) {
            metafieldDelete(input: $input) {
              userErrors {
                field
                message
              }
            }
          }`,
        {
          variables: {
            input: {
              id: metafieldId
            }
          }
        }
      );
    }
  };

  const appQueryResponse = await graphql(`query appInstallation {
    currentAppInstallation {
      id
      planMetaField: metafield(namespace:"hasPlan", key: "hasPlan") {
        id
        value
      }
      endDateMetaField: metafield(namespace:"endDate", key: "endDate") {
        value
        id
      }
      freePlanLimitersMetaField: metafield(namespace:"freePlanLimiters", key: "freePlanLimiters") {
        id
        value
      }
    }
  }`);

  const appQeryData = await appQueryResponse.json();
  const ids = [
    appQeryData?.data?.currentAppInstallation?.planMetaField?.id,
    appQeryData?.data?.currentAppInstallation?.endDateMetaField?.id,
    appQeryData?.data?.currentAppInstallation?.freePlanLimitersMetaField?.id
  ];

  for (const id of ids) {
    if(id) {
      await deleteMetafield(id);
    }
  }

  return;
}

export async function cancelSubscritpiton(plan, billing, MONTHLY_PLAN, ANNUAL_PLAN) {
  if (plan === "noPlan") {
    return false;
  }


  if (plan === "monthly") {
    const billingCheck = await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({ plan: MONTHLY_PLAN }),
    });

    const subscription = billingCheck.appSubscriptions[0];
    const cancelledSubscription = await billing.cancel({
      subscriptionId: subscription.id,
      isTest: true,
      prorate: false,
    });

    console.log('cancelledSubscription response ', cancelledSubscription);
  } else {
    const billingCheck = await billing.require({
      plans: [ANNUAL_PLAN],
      onFailure: async () => billing.request({ plan: ANNUAL_PLAN }),
    });

    const subscription = billingCheck.appSubscriptions[0];
    const cancelledSubscription = await billing.cancel({
      subscriptionId: subscription.id,
      isTest: true,
      prorate: false,
    });
  }

  return true;
}
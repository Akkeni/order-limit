import { deleteMetafield } from "./orderLimit.server";

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
  try {
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
  } catch (error) {
    console.log('Error while creating end period meta field ', error);
    return;
  }
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
  const ownerId = appQeryData?.data?.currentAppInstallation?.id;

  if (ownerId) {
    await deleteMetafield({ownerId, namespace: "planName", key: "planName"}, graphql);
  }

  return;
}

export async function deleteAppInstallationMetafields(graphql) {
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
  const ownerId = appQeryData?.data?.currentAppInstallation?.id;
  const ids = [
    {ownerId, namespace: "hasPlan", key: "hasPlan"},
    {ownerId, namespace: "endDate", key: "endDate"},
    {ownerId, namespace: "freePlanLimiters", key: "freePlanLimiters"}
  ];

  for (const id of ids) {
    if (id) {
      await deleteMetafield(id, graphql);
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
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


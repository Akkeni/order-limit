import {
    Page,
    Box,
    Button,
    Card,
    CalloutCard,
    Text,
    Grid,
    Divider,
    BlockStack,
    ExceptionList,
    Banner,
    InlineStack,
    Spinner,
    Link,
} from "@shopify/polaris";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";

import {
    CheckCircleIcon
} from '@shopify/polaris-icons'
import { useState } from "react";

export async function loader({ request }) {
    const { admin, billing } = await authenticate.admin(request);

    try {
        // Attempt to check if the shop has an active payment for any plan
        const billingCheck = await billing.require({
            plans: [MONTHLY_PLAN, ANNUAL_PLAN],
            isTest: true,
            // Instead of redirecting on failure, just catch the error
            onFailure: () => {
                throw new Error('No active plan');
            },
        });

        // If the shop has an active subscription, log and return the details
        const subscription = billingCheck.appSubscriptions[0];
        //console.log(`Shop is on ${subscription.name} (id ${subscription.id})`);
        return json({ billing, plan: subscription });

    } catch (error) {
        // If the shop does not have an active plan, return an empty plan object
        if (error.message === 'No active plan') {
            //console.log('Shop does not have any active plans.');
            return json({ billing, plan: { name: "Free Subscription" } });
        }
        // If there is another error, rethrow it
        throw error;
    }
}


let planData = [
    {
        title: "Free",
        description: "Free plan",
        price: "0",
        action: "Subscribe",
        name: "Free Subscription",
        url: "/app",
        features: [
            "Store Wise Limit",
            "Product Wise Limit",
            "Vendor Wise Limit"
        ]
    },
    {
        title: "Monthly",
        description: "Monthly plan",
        price: "5",
        action: "Subscribe",
        name: "Monthly Subscription",
        url: "/app/subscribe/monthly",
        features: [
            "General limits price, weight",
            "Store Wise Limit",
            "Product Wise Limit",
            "Category Wise Limit",
            "Collection Wise Limit",
            "Vendor Wise Limit"
        ]
    },
    {
        title: "Annual",
        description: "Annual plan",
        price: "50",
        name: "Annual Subscription",
        action: "Subscribe",
        url: "/app/subscribe/annualy",
        features: [
            "General limits price, weight",
            "Store Wise Limit",
            "Product Wise Limit",
            "Category Wise Limit",
            "Collection Wise Limit",
            "Vendor Wise Limit"
        ]
    },
]

export default function PricingPage() {
    const { plan } = useLoaderData();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    //console.log('plan', plan);
    if (isLoading) {
        //console.log('isSaving ', isSaving);
        return (
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: "999",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "5px",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                    fontSize: "18px",
                }}>
                    <Spinner accessibilityLabel="Saving" size="large" />
                </div>
            </div>
        );
    }
    return (
        <Page>
            <ui-title-bar title="Pricing" />
            <InlineStack gap="400">
                <Link url='/app' onClick={() => setIsLoading(true)}>Home</Link>
                <Link url='/app/help' onClick={() => setIsLoading(true)}>Help</Link>
                <Link url='/app/setup' onClick={() => setIsLoading(true)}>Setup</Link>
            </InlineStack>

            <br />
            <br />

            {plan.name == "Free Subscription" && (
                <Banner title="Select a plan" status="info">
                    <p>
                        You're currently on free plan. Select a plan.
                    </p>
                </Banner>
            )}

            {plan.name != "Free Subscription" && (
                <CalloutCard
                    title="Cancel your plan"
                    illustration="https://cdn.shopify.com/s/files/1/0583/6465/7734/files/tag.png?v=1705280535"
                    primaryAction={{
                        content: plan.name != "Free Subscription" ? 'Cancel Plan' : 'Select a Plan',
                        url: plan.name === "Monthly Subscription" ? '/app/cancel/monthly' : '/app/cancel/annualy',
                        onAction: () => {setIsLoading(true);}
                    }}
                >
                    {plan.name == "Monthly Subscription" && (
                        <p>
                            You're currently on Monthly plan.
                        </p>
                    )}
                    {plan.name == "Annual Subscription" && (
                        <p>
                            You're currently on Annual plan.
                        </p>
                    )}
                    {plan.name == "Free plan" && (
                        <p>
                            You're currently on Free plan. Select any paid plan to access other limiters.
                        </p>
                    )}
                </CalloutCard>
            )}
            <div style={{ margin: "0.5rem 0" }}>
                <Divider />
            </div>

            <Grid>

                {planData.map((plan_item, index) => (
                    <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
                        <Card background={(plan_item.name == plan.name) ? "bg-surface-success" : "bg-surface"} sectioned>
                            <Box padding="400">
                                <Text as="h3" variant="headingMd">
                                    {plan_item.title}
                                </Text>
                                <Box as="p" variant="bodyMd">
                                    {plan_item.description}
                                    {/* If plan_item is 0, display nothing */}
                                    <br />
                                    <Text as="p" variant="headingLg" fontWeight="bold">
                                        {plan_item.price === "0" ? "" : "$" + plan_item.price}
                                    </Text>
                                </Box>

                                <div style={{ margin: "0.5rem 0" }}>
                                    <Divider />
                                </div>

                                <BlockStack gap={100}>
                                    {plan_item.features.map((feature, index) => (
                                        <ExceptionList
                                            key={index}
                                            items={[
                                                {
                                                    icon: CheckCircleIcon,
                                                    description: feature,
                                                },
                                            ]}
                                        />
                                    ))}
                                </BlockStack>
                                <div style={{ margin: "0.5rem 0" }}>
                                    <Divider />
                                </div>

                                {(plan_item.name != 'Free Subscription') && (
                                    <Button onClick={() => { setIsLoading(true); navigate(plan_item.url); }} disabled={(plan_item.name == plan.name || plan_item.name == 'Free Subscription')}>
                                        {plan_item.action}
                                    </Button>
                                )}

                                {/*plan_item.name == "Monthly subscription" ?
                                    plan.name != "Monthly subscription" ? (
                                        <a href={plan_item.url}>
                                            {plan_item.action}
                                        </a>
                                    ) : (
                                        <Text as="p" variant="bodyMd">
                                            You're currently on this plan
                                        </Text>
                                    )
                                    : null*/}
                            </Box>
                        </Card>
                    </Grid.Cell>
                ))}

            </Grid>

        </Page>
    );
}
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
    Tooltip,
    ButtonGroup,
    Icon
} from "@shopify/polaris";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate, useActionData, useSubmit } from "@remix-run/react";
import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";
import { createPlanNameMetafield, getSubscriptionStatus } from '../models/Subscription.server';
import '../resources/style.css';
import {
    CheckCircleIcon,
    InfoIcon
} from '@shopify/polaris-icons'
import { useState, useEffect, useCallback } from "react";

export async function loader({ request }) {
    const { admin, billing } = await authenticate.admin(request);

    const subscription = await getSubscriptionStatus(admin.graphql);
    

    const activeSubscriptions = subscription.data.app.installation.activeSubscriptions;

    const monthlyPlanAmount = process.env.MONTHLY_PLAN_AMOUNT;
    const annualPlanAmount = process.env.ANNUAL_PLAN_AMOUNT;
    const discountPercentage = process.env.DISCOUNT_PERCENT;
    const freePlanLimiters ={
        freePlanProductLimit: process.env.FREE_PLAN_PRODUCT_LIMIT,
    }
    let expire = 'true';
    let currentDateStr = new Date();
    let endDateStr = '';
    endDateStr = activeSubscriptions[0]?.currentPeriodEnd ? activeSubscriptions[0]?.currentPeriodEnd : '';

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
        return json({ billing, plan: subscription, expire, endDateStr, monthlyPlanAmount, annualPlanAmount, discountPercentage, freePlanLimiters });

    } catch (error) {
        // If the shop does not have an active plan, return an empty plan object
        if (error.message === 'No active plan') {

            currentDateStr = currentDateStr.toISOString();


            const appQueryResponse = await admin.graphql(`query appInstallation {
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
            }
          }`);

            const appQeryData = await appQueryResponse.json();
            endDateStr = appQeryData?.data?.currentAppInstallation?.endDateMetaField ? appQeryData?.data?.currentAppInstallation?.endDateMetaField?.value : '';
            expire = appQeryData?.data?.currentAppInstallation?.planMetaField ? appQeryData?.data?.currentAppInstallation?.planMetaField?.value : 'true';

            if (endDateStr) {

                const regex = /\d{4}-\d{2}-\d{2}/;
                currentDateStr = currentDateStr.match(regex);
                endDateStr = endDateStr.match(regex);
                if (currentDateStr && endDateStr) {
                    currentDateStr = currentDateStr[0];
                    endDateStr = endDateStr[0];
                    const currentDate = new Date(currentDateStr);
                    const endDate = new Date(endDateStr);
                    if (currentDate >= endDate) {
                        expire = "true";
                    } else {
                        expire = "false";
                    }
                }

            } else {
                expire = "true";
            }
            return json({ billing, plan: { name: "Free Subscription" }, expire, endDateStr, monthlyPlanAmount, annualPlanAmount, discountPercentage, freePlanLimiters });
        }
        // If there is another error, rethrow it
        throw error;
    }
}

export async function action({ request }) {
    const { admin, billing } = await authenticate.admin(request);
    const formData = await request.formData();
    await createPlanNameMetafield(admin.graphql, formData.get('planName'));
    return json({
        ok: true
    });
}



export default function PricingPage() {
    const { plan, monthlyPlanAmount, annualPlanAmount, discountPercentage } = useLoaderData();
    const loaderData = useLoaderData();
    const actionData = useActionData();
    const submit = useSubmit();
    const freePlanLimiters = loaderData?.freePlanLimiters;
    const expire = loaderData?.expire;
    const endDate = loaderData?.endDateStr ? loaderData?.endDateStr : '';
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(plan.name != "Free Subscription" ? plan.name : "Annual Subscription");
    const infoIcon = (
        <Icon source={InfoIcon} tone="subdued"  className="icon small-icon"  />
    );




    let planData = [
        {
            title: "Free",
            description:  <>
                    
            <span className="text-with-icon" style={{display: "flex"}}>Free Plan
                <Tooltip 
                    content={`You can set limits for up to ${freePlanLimiters.freePlanProductLimit} products across SKU, product, category, collection, and vendor limits.`}
                    margin="0"
                >
                    {infoIcon}
                </Tooltip>
            </span>
            
        </>,
            price: "0",
            action: "Subscribe",
            name: "Free Subscription",
            url: "/app",
            features: [
                "Product Wise Limit",
               
                "SKU Wise Limit",
                "Category Wise Limit",
                "Collection Wise Limit",
                "Vendor Wise Limit",
            ]
        },
        {
            title: "Monthly",
            description: "Monthly plan",
            price: `${monthlyPlanAmount}`,
            action: "Subscribe",
            name: "Monthly Subscription",
            url: "/app/subscribe/monthly",
            features: [
                "General limits price, weight",
                "Product Wise Limit",
                "SKU Wise Limit",
                "Category Wise Limit",
                "Collection Wise Limit",
                "Vendor Wise Limit",
                "Store Wise Limit",
                "Customer Tag Wise Limit"
            ]
        },
        {
            title: "Annual",
            description: "Annual plan",
            price: `${annualPlanAmount}`,
            name: "Annual Subscription",
            action: "Subscribe",
            url: "/app/subscribe/annualy",
            features: [
                "General limits price, weight",
                "Product Wise Limit",
                "SKU Wise Limit",
                "Category Wise Limit",
                "Collection Wise Limit",
                "Vendor Wise Limit",
                "Store Wise Limit",
                "Customer Tag Wise Limit"
            ]
        },
    ]

    const handleButtonClick = useCallback(
        (index) => {
            if (activeButtonIndex === index) return;
            setActiveButtonIndex(index);
        },
        [activeButtonIndex],
    );

    const handleSubscribe = (url, planName) => {
        if (endDate) {
            submit({ planName: planName }, { method: 'post' });
        } else {
            setIsLoading(true);
            navigate(url);
        }
    }

    useEffect(() => {
        if (actionData?.ok) {
            setSuccess(true);
        }
    }, [actionData]);


    if (isLoading) {

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
            <div className="container pL-1">
                <InlineStack gap="400">
                    <Link url='/app' onClick={() => setIsLoading(true)}>Home</Link>
                    <Link url='/app/help' onClick={() => setIsLoading(true)}>Help</Link>
                    <Link url='/app/setup' onClick={() => setIsLoading(true)}>Setup</Link>
                </InlineStack>

                <br />

                {success && (
                    <>
                        <Banner
                            title="Reminder"
                            tone="info"
                            onDismiss={() => setSuccess(false)}
                        >
                            <p>
                                You will be notified once you are current access to paid features is completed.
                            </p>
                        </Banner>
                        <br />
                    </>
                )}

                {plan.name == "Free Subscription" && expire == 'true' && (
                    <Banner title="Select a plan" status="info">
                        <p>
                            You're currently on free plan. Select a plan.
                        </p>
                    </Banner>
                )}

                {plan.name == "Free Subscription" && expire == 'false' && (
                    <Banner title="Subscripiton end date" status="info">
                        <p>
                            You cancelled the recurring charges. Your access to paid plan features will end on {endDate.slice(0, 10)}, from which 'free plan' will be activated.
                        </p>
                    </Banner>
                )}

                {plan.name != "Free Subscription" && expire === 'true' && (
                    <Tooltip width="wide" preferredPosition="below" content="Clicking on 'Cancel Plan' will cancel the recurring charges. Free plan will be activated after completion of current plan.">
                        <CalloutCard
                            title="Cancel your plan"
                            illustration="https://cdn.shopify.com/s/files/1/0583/6465/7734/files/tag.png?v=1705280535"
                            primaryAction={{
                                content: plan.name != "Free Subscription" ? 'Cancel Plan' : 'Select a Plan',
                                url: plan.name === "Monthly Subscription" ? '/app/cancel/monthly' : '/app/cancel/annualy',
                                onAction: () => { setIsLoading(true); }
                            }}
                        >
                            {plan.name == "Monthly Subscription" && (
                                <p>
                                    You're currently on Monthly plan. It will be renewed on {endDate.slice(0, 10)}
                                </p>
                            )}
                            {plan.name == "Annual Subscription" && (
                                <p>
                                    You're currently on Annual plan. It will be renewed on {endDate.slice(0, 10)}
                                </p>
                            )}
                            {plan.name == "Free plan" && (
                                <p>
                                    You're currently on Free plan. Select any paid plan to access other limiters.
                                </p>
                            )}
                        </CalloutCard>
                    </Tooltip>
                )}

                <div style={{ marginTop: "1rem", overflow: "auto" }}>
                    <div style={{ float: 'right' }}>
                        <ButtonGroup variant="segmented">
                            <Button
                                pressed={activeButtonIndex === "Monthly Subscription"}
                                onClick={() => handleButtonClick("Monthly Subscription")}
                            >
                                Monthly
                            </Button>
                            <Button
                                pressed={activeButtonIndex === "Annual Subscription"}
                                onClick={() => handleButtonClick("Annual Subscription")}
                            >
                                Annual
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>


                <div style={{ margin: "0.5rem 0" }}>
                    <Divider />
                </div>

                <Grid>

                    {planData.map((plan_item, index) => (
                        <>
                            {(activeButtonIndex == plan_item.name || plan_item.name == "Free Subscription") && (
                                <Grid.Cell key={index} columnSpan={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}>
                                    <Card background={(plan_item.name == plan.name && expire == 'true') ? "bg-surface-success" : "bg-surface"} sectioned>
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
                                                {(plan_item.name === "Annual Subscription") &&
                                                    <Text as="span" tone="success">With discount { discountPercentage }%</Text>
                                                }
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
                                                <Tooltip active={plan.name != 'Free Subscription' && plan_item.name != plan.name} preferredPosition="below" content="If you subscribe to new plan, then it will start after current plan ends.">
                                                    <Button onClick={() => { handleSubscribe(plan_item.url, plan_item.name) }} disabled={(plan_item.name == plan.name || plan_item.name == 'Free Subscription')}>
                                                        {plan_item.action}
                                                    </Button>
                                                </Tooltip>
                                            )}

                                        </Box>
                                    </Card>
                                </Grid.Cell>)}
                        </>
                    ))}

                </Grid>
            </div>

        </Page>
    );
}
import { json, redirect } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";
import { getSubscriptionStatus, createEndPeriodMetafield } from '../models/Subscription.server';
import { deleteNonPlanData } from '../models/orderLimit.server';



export const loader = async ({ request, params }) => {
    // The authenticate.admin method returns a CORS method to automatically wrap responses so that extensions, which are hosted on extensions.shopifycdn.com, can access this route.
    const { admin, billing, session } = await authenticate.admin(request);
    let { shop } = session;
    //let myShop = shop.replace(".myshopify.com", "");
    const plan = params.plan;
    try {
        const subscription = await getSubscriptionStatus(admin.graphql);

        const activeSubscriptions = subscription.data.app.installation.activeSubscriptions;


        if (!(activeSubscriptions.length < 1)) {

            const createdAt = new Date(activeSubscriptions[0].createdAt);
            const trialDays = Number(activeSubscriptions[0].trialDays);


            createdAt.setDate(createdAt.getDate() + trialDays);
            const currentDate = new Date();

            console.log('current date ', currentDate);
            console.log('created at + trial ', createdAt);
            //create end date only after trial period ends
            if (currentDate > createdAt) {

                const endPeriodDate = activeSubscriptions[0].currentPeriodEnd;
                console.log('creating end period metafield with date ', endPeriodDate);
                await createEndPeriodMetafield(admin.graphql, endPeriodDate);
            } else {
                await deleteNonPlanData(admin.graphql);
            }
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
            console.log('subuscription to cancel ', subscription);
            const cancelledSubscription = await billing.cancel({
                subscriptionId: subscription.id,
                isTest: true,
                prorate: false,
            });
        }

    } catch(error) {
        console.log("Error while cancelling the subscription ", error);
        // Handle reauth
        const reauthUrl = error?.headers?.get?.('x-shopify-api-request-failure-reauthorize-url');
        console.log('reauth url ', reauthUrl);
        if (reauthUrl) {
        return redirect(reauthUrl);
        }
    }

    return redirect('/app');
}


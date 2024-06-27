import { json, redirect } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";
import { getSubscriptionStatus, createEndPeriodMetafield } from '../models/Subscription.server';



export const loader = async ({ request, params }) => {
    // The authenticate.admin method returns a CORS method to automatically wrap responses so that extensions, which are hosted on extensions.shopifycdn.com, can access this route.
    const { admin, billing, session } = await authenticate.admin(request);
    let { shop } = session;
    //let myShop = shop.replace(".myshopify.com", "");
    const plan = params.plan;

    const subscription = await getSubscriptionStatus(admin.graphql);

    const activeSubscriptions = subscription.data.app.installation.activeSubscriptions;
    console.log('activeSubscriptions ', activeSubscriptions);
    if(!(activeSubscriptions.length < 1)) {
        const endPeriodDate = activeSubscriptions[0].currentPeriodEnd;
        console.log('endDate in cancel ', endPeriodDate);
        await createEndPeriodMetafield(admin.graphql, endPeriodDate);
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

    return redirect('/app');
    /*console.log('plan in app ', params.plan);
    return json({
        success: true,
    });*/
}


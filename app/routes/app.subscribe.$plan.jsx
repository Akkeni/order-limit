import { json, redirect } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";


export const loader = async ({ request, params }) => {
  // The authenticate.admin method returns a CORS method to automatically wrap responses so that extensions, which are hosted on extensions.shopifycdn.com, can access this route.
  const { admin, billing, session } = await authenticate.admin(request);
  let { shop } = session;
  //let myShop = shop.replace(".myshopify.com", "");

  //console.log('plan in app ', params.plan);

  if (params.plan === "monthly") {
    await billing.require({
      plans: [MONTHLY_PLAN],
      isTest: true,
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        returnUrl: `https://${shop}/admin/apps/order-limit-18/app`,
      }),
    });
  } else {
    await billing.require({
      plans: [ANNUAL_PLAN],
      isTest: true,
      onFailure: async () => billing.request({
        plan: ANNUAL_PLAN,
        isTest: true,
        returnUrl: `https://${shop}/admin/apps/order-limit-18/app`,
      }),
    });
  }

  return null;
}

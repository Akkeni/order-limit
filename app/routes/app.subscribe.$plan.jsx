import { json, redirect } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN, ANNUAL_PLAN } from "../shopify.server";


export const loader = async ({ request, params }) => {

  const { admin, billing, session } = await authenticate.admin(request);
  let { shop } = session;


  if (params.plan === "monthly") {
    await billing.require({
      plans: [MONTHLY_PLAN],
      isTest: true,
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        returnUrl: `https://${shop}/admin/apps/order-limit-17/app`,
      }),
    });
  } else {
    await billing.require({
      plans: [ANNUAL_PLAN],
      isTest: true,
      onFailure: async () => billing.request({
        plan: ANNUAL_PLAN,
        isTest: true,
        returnUrl: `https://${shop}/admin/apps/order-limit-17/app`,
      }),
    });
  }

  return null;
}

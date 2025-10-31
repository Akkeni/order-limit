import { authenticate } from "../shopify.server";
import db from "../db.server";
import { createSubscriptionMetafield, deletePlanNameMetafield } from "../models/Subscription.server";
import crypto from "node:crypto";
import { json } from "@remix-run/node";


export const action = async ({ request }) => {

  // The authentication middleware consumes the request body, so we need to clone it
  // before it's consumed. We need the raw payload to validate the webhook signature.
  const reqClone = request.clone()
  const rawPayload = await reqClone.text();

  const { topic, shop, session, admin, payload } = await authenticate.webhook(request);

  if (!admin) {
    // The admin context isn't returned if the webhook fired after a shop was uninstalled.
    throw new Response();
  }

  // Validate the webhook signature
  const signature = request.headers.get("x-shopify-hmac-sha256"); 
  const generatedSignature = crypto
    .createHmac("SHA256", process.env.SHOPIFY_API_SECRET)
    .update(rawPayload)
    .digest("base64");
  if (signature !== generatedSignature) {
    return json({ message: "Invalid signature" }, 401);
  }

  switch (topic) {
    case "APP_UNINSTALLED":
      if (session) {

        const orderLimit = await db.order_Limit.findFirst({
          where: {
            shopName: session.shop
          }
        });

        if (orderLimit) {
          await db.order_Limit.update({
            where: {
              shopName: session.shop
            },
            data: {
              hasToDelete: true
            }
          });

        } else {
          await db.order_Limit.create({
            data: {
              shopName: session.shop
            },
          });
        }

        await db.session.deleteMany({ where: { shop } });
      }
      break;

    case "APP_SUBSCRIPTIONS_UPDATE":
     
      if (payload.app_subscription.status == "ACTIVE") {
        await createSubscriptionMetafield(admin.graphql, "true");
      } else if(payload.app_subscription.status == "DECLINED") {
       
        await deletePlanNameMetafield(admin.graphql);
      } else {
        await createSubscriptionMetafield(admin.graphql, "false");
      }
      break;
      
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
      break;
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }

  throw new Response();
};

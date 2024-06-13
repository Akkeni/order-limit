import { authenticate } from "../shopify.server";
import db from "../db.server";
import { createSubscriptionMetafield } from "../models/Subscription.server";
import { deleteNonPlanData } from '../models/orderLimit.server';

export const action = async ({ request }) => {
  const { topic, shop, session, admin, payload } = await authenticate.webhook(request);

  if (!admin) {
    // The admin context isn't returned if the webhook fired after a shop was uninstalled.
    throw new Response();
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
      //console.log('webhook is triggered ', payload);
      if (payload.app_subscription.status == "ACTIVE") {
        await createSubscriptionMetafield(admin.graphql, "true");
      } else {
        await createSubscriptionMetafield(admin.graphql, "false");
        await deleteNonPlanData(admin.graphql);
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

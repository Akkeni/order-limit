import { authenticate } from "../shopify.server";
import db from "../db.server";

export const action = async ({ request }) => {
  const { topic, shop, session, admin } = await authenticate.webhook(request);

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

        if(orderLimit) {
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

    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }

  throw new Response();
};

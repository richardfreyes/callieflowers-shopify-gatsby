import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import Shopify, { ApiVersion, AuthQuery, DataType } from '@shopify/shopify-api';
import ACTIVE_SHOPIFY_SHOPS from '../order-tagger/index'

const SHOP = "callieflowers.myshopify.com";

export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  try {
    const session = await Shopify.Auth.validateAuthCallback(req, res, req.query as unknown as AuthQuery );
    ACTIVE_SHOPIFY_SHOPS[SHOP] = session.scope;
    console.log('session.accessToken', session.accessToken);
    const currentSession = await Shopify.Utils.loadCurrentSession(req, res);
    const WEBHOOKS_REGISTRY = {
      ORDERS_CREATE: {
        path: "/webhooks",
        accessToken: currentSession.accessToken,
        shop: currentSession.shop,
        webhookHandler: async (topic: string, shop: string, body: any) => {
          // await onAppUninstalled(shop, body);
          let data = JSON.parse(body);
          console.log('data', data)
          console.log('data', data.note_attributes)
          const session = await Shopify.Utils.loadCurrentSession(req, res);
          const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
          let tags = JSON.parse(data.note_attributes[0]?.value.replace(/'/g, '"'));
          await client.put({
            path: `orders/${data.id}`,
            data: { 
              "order": {
                "id": data.id,
                "tags": `${tags[0]}, ${tags[1]}`
              }
            },
            type: DataType.JSON,
          });
        },
      },
    };
    // Add the webhook handlers to the registry
    Shopify.Webhooks.Registry.addHandlers(WEBHOOKS_REGISTRY);
    // const { shop, accessToken } = currentSession;
    const shop = currentSession.shop;
    const accessToken = currentSession.accessToken;
    Shopify.Webhooks.Registry.registerAll({ shop, accessToken });
  } catch (error) {
    console.error('error', error);
  }
  return res.redirect(`/`);
}
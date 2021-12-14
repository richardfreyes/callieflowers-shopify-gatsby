import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import Shopify, { ApiVersion, AuthQuery, DataType } from '@shopify/shopify-api';
import fetch from "node-fetch"

// const { API_KEY, API_SECRET_KEY, SHOP, HOST } = process.env;

// const SHOP = "callieflowers.myshopify.com";
// const API_KEY = "e867fefb13c99154a232fd4e094c0277";
// const API_SECRET_KEY = "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";
// const HOST = "callieflowers.myshopify.com/api/order-tagger";

// Shopify.Context.initialize({
//   API_KEY,
//   API_SECRET_KEY,
//   SCOPES: ['read_products', 'read_orders', 'write_orders'],
//   HOST_NAME: HOST,
//   IS_EMBEDDED_APP: false,
//   API_VERSION: ApiVersion.October21
// });

// export const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};

export default async function handler(req: GatsbyFunctionRequest, res: GatsbyFunctionResponse) {
  res.send("API");
  res.end();
  // if (ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
    // let authRoute = await Shopify.Auth.beginAuth(req, res, SHOP, '/auth/callback', false );
    // return res.redirect(authRoute);
  // } else {
    // res.send("oauth success!");
    // res.end();
  // }
}
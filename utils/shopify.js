import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN,
  domain: `${process.env.DOMAIN}.myshopify.com`,
});

export { client };

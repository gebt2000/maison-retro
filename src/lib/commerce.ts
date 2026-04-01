/**
 * Commerce adapter boundary. Swap `getProducts` / cart / checkout
 * implementations for production:
 * - Shopify Storefront API + cart mutations
 * - Medusa JS client
 * - Stripe Checkout Session + headless CMS for catalog
 */
export type CommerceAdapter = {
  getProducts: () => Promise<unknown[]>;
};

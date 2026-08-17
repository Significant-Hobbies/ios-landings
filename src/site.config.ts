import { catalog, resolveProductId } from "./lib/catalog";
import type { SiteConfig } from "./lib/types";

const envProduct = (import.meta as ImportMeta & { env?: { PRODUCT?: string } }).env
  ?.PRODUCT;

export const productId = resolveProductId(envProduct);
export const site: SiteConfig = catalog[productId];

export const links = {
  home: `${site.url}/`,
  privacy: `${site.url}/privacy/`,
  support: `${site.url}/support/`,
  terms: `${site.url}/terms/`,
  accessibility: `${site.url}/accessibility/`,
  testflight: `${site.url}/testflight/`
};

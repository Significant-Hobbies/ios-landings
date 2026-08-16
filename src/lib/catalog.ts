import { site as anchor } from "../../products/anchor/site.config";
import { site as indulge } from "../../products/indulge/site.config";
import { site as kith } from "../../products/kith/site.config";
import { site as motion } from "../../products/motion/site.config";
import { site as setline } from "../../products/setline/site.config";
import type { SiteConfig } from "./types";

export const catalog = {
  kith,
  setline,
  anchor,
  motion,
  indulge
} as const satisfies Record<string, SiteConfig>;

export type ProductId = keyof typeof catalog;
export const PRODUCT_IDS = Object.keys(catalog) as ProductId[];

export function resolveProductId(raw?: string): ProductId {
  const id = raw?.trim() || "kith";
  if (id in catalog) return id as ProductId;
  throw new Error(`Unknown PRODUCT="${id}". Use: ${PRODUCT_IDS.join(", ")}`);
}

import type { ProductId } from "./catalog";

const clarityProjectIds: Partial<Record<ProductId, string>> = {
  anchor: "y6bwr0anyd",
  calorie: "y6bultfwvf",
  journal: "ybcifeb3uv",
  kith: "y6bus3owf7",
  motion: "y6bvl31bna",
  setline: "y6bunkz9vz"
};

export function clarityProjectIdFor(productId: ProductId): string | undefined {
  return clarityProjectIds[productId];
}

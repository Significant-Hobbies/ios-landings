import { defineConfig } from "astro/config";
import { catalog, resolveProductId } from "./src/lib/catalog.ts";

const productId = resolveProductId(process.env.PRODUCT);
const site = catalog[productId];

export default defineConfig({
  site: site.url,
  output: "static",
  trailingSlash: "ignore",
  publicDir: `./products/${productId}/public`,
  outDir: `./dist/${productId}`,
  build: {
    format: "directory",
    inlineStylesheets: "always"
  },
  vite: {
    define: {
      "import.meta.env.PRODUCT": JSON.stringify(productId)
    },
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" }
  }
});

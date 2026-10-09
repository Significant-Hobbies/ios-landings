import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { catalog, resolveProductId } from "./src/lib/catalog.ts";

const productId = resolveProductId(process.env.PRODUCT);
const site = catalog[productId];
// A product with a SaaS Maker UI-library content file renders its home page
// from that file; every other route keeps the factory layout.
const templateHome = existsSync(new URL(`./products/${productId}/content.json`, import.meta.url));
const home = templateHome ? "./src/components/TemplateHome.astro" : "./src/components/EditorialHome.astro";

export default defineConfig({
  site: site.url,
  output: "static",
  trailingSlash: "ignore",
  publicDir: `./products/${productId}/public`,
  outDir: `./dist/${productId}`,
  integrations: [react()],
  build: {
    format: "directory",
    inlineStylesheets: "always"
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: { "@factory/home": fileURLToPath(new URL(home, import.meta.url)) }
    },
    define: {
      "import.meta.env.PRODUCT": JSON.stringify(productId),
      "import.meta.env.TEMPLATE_HOME": JSON.stringify(templateHome)
    },
    css: { transformer: "lightningcss" },
    build: { cssMinify: "lightningcss" }
  }
});

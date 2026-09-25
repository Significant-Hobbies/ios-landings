import { access, readFile } from "node:fs/promises";
import { imageMetadata } from "astro/assets/utils";
import { appHealthConfigFor } from "../src/lib/app-health.mjs";

const product = process.env.PRODUCT ?? "kith";
const dist = `dist/${product}`;
const clarityProjectIds = {
  anchor: "y6bwr0anyd",
  browserdaddy: "ymdsbwwko3",
  calorie: "y6bultfwvf",
  journal: "ybcifeb3uv",
  kith: "y6bus3owf7",
  motion: "y6bvl31bna",
  performancedaddy: "ymdspsyir7",
  setline: "y6bunkz9vz"
};
const expectedClarityId = clarityProjectIds[product];
const expectedAppHealth = appHealthConfigFor(product);

const requiredFiles = [
  `${dist}/index.html`,
  `${dist}/privacy/index.html`,
  `${dist}/support/index.html`,
  `${dist}/terms/index.html`,
  `${dist}/accessibility/index.html`,
  `${dist}/testflight/index.html`,
  `${dist}/404.html`,
  `${dist}/index.md`,
  `${dist}/privacy/index.md`,
  `${dist}/support/index.md`,
  `${dist}/terms/index.md`,
  `${dist}/accessibility/index.md`,
  `${dist}/testflight/index.md`,
  `${dist}/404.md`,
  `${dist}/llms.txt`,
  `${dist}/api/ai`,
  `${dist}/openapi.json`,
  `${dist}/robots.txt`,
  `${dist}/sitemap.xml`,
  `${dist}/blog/index.html`, `${dist}/blog/index.md`, `${dist}/blog/rss.xml`
];

await Promise.all(requiredFiles.map((file) => access(file)));

const home = await readFile(`${dist}/index.html`, "utf8");
const ai = JSON.parse(await readFile(`${dist}/api/ai`, "utf8"));
const name = ai.product?.name;
if (!name) throw new Error(`${product}: AI product surface is missing a name.`);
if (!home.includes(name)) throw new Error(`${product}: landing does not name the product.`);
const hasInstallCta = home.includes('class="button"') || home.includes('class="store-badge"');
const desktopProducts = ["storagedaddy", "performancedaddy", "browserdaddy", "contextdaddy"];
if (desktopProducts.includes(product)) {
  for (const path of ["release/index.html", "release/index.md"]) await access(`${dist}/${path}`);
  if (!home.includes('data-device="desktop"') || home.includes('class="device-island"')) {
    throw new Error(`${product}: desktop screenshots must not render phone hardware.`);
  }
  if (home.includes('href="/testflight/"') || home.includes("See iPhone and Watch")) {
    throw new Error(`${product}: Mac landing must use its release path, not mobile distribution.`);
  }
  const release = await readFile(`${dist}/release/index.html`, "utf8");
  for (const id of ["storagedaddy", "performancedaddy", "browserdaddy", "contextdaddy"]) {
    const host = { storagedaddy: "storage", performancedaddy: "performance", browserdaddy: "browser", contextdaddy: "context" }[id];
    if (product === id && !home.includes(`href="https://${host}.daddyrad.com/download"`)) {
      throw new Error(`${product}: preserve the existing download service.`);
    }
  }
  if (!ai.surfaces.some((surface) => surface.id === "release")) throw new Error(`${product}: missing agent release surface.`);
}
if (!hasInstallCta) {
  throw new Error(`${product}: landing is missing a gated install or journal CTA.`);
}

if (product === "anchor") {
  await access(`${dist}/downloads/Anchor-1.0.dmg`);
  if (!home.includes('href="https://anchor.significanthobbies.com/downloads/Anchor-1.0.dmg"')) {
    throw new Error("anchor: landing is missing the verified notarized Mac download.");
  }
}

for (const fragment of [
  `<link rel="canonical" href="${ai.url}/">`,
  'property="og:image"',
  'name="twitter:card" content="summary_large_image"'
]) {
  if (!home.includes(fragment)) {
    throw new Error(`${product}: landing metadata is missing: ${fragment}`);
  }
}

if (home.includes("testflight.apple.com")) {
  throw new Error(`${product}: a public TestFlight URL appeared without a verified build-time configuration.`);
}

if (!home.includes("WebSite")) {
  throw new Error(`${product}: landing is missing WebSite structured data.`);
}
if (product === "browserdaddy") {
  if (!home.includes("App artwork") || !home.includes("not a screenshot")) {
    throw new Error("browserdaddy: artwork must not masquerade as product screenshot proof");
  }
  for (const unsupported of ["Real product screen", "View full-size screenshot", "/Users/", "permissions.png"]) {
    if (home.includes(unsupported)) throw new Error(`browserdaddy: unexpected private or screenshot material: ${unsupported}`);
  }
}

if (!home.includes('id="look-inside"') && !home.includes("id='look-inside'")) {
  throw new Error(`${product}: landing is missing the screenshot gallery.`);
}

if (home.includes("Download on the App Store") && !home.includes("https://apps.apple.com/")) {
  throw new Error(`${product}: App Store badge copy appeared without a verified apps.apple.com URL.`);
}

const executableScripts = [...home.matchAll(/<script\b([^>]*)>/gi)].filter((match) => {
  const attrs = match[1] ?? "";
  return !/type=["']application\/ld\+json["']/i.test(attrs);
});
const approvedFooterScripts = [
  "https://sassmaker.com/project-strip.js",
  "https://sassmaker.com/ai-chat-footer.js"
];
const appHealthTracker = "https://health.sassmaker.com/tracker.js";
for (const src of approvedFooterScripts) {
  const matches = executableScripts.filter((match) => {
    const attrs = match[1] ?? "";
    return attrs.includes(`src="${src}"`) || attrs.includes(`src='${src}'`);
  });
  if (matches.length !== 1) {
    throw new Error(`${product}: expected exactly one approved footer loader for ${src}.`);
  }
}

const unexpectedScripts = executableScripts.filter((match) => {
  const attrs = match[1] ?? "";
  const isApprovedFooter = approvedFooterScripts.some((src) =>
    attrs.includes(`src="${src}"`) || attrs.includes(`src='${src}'`)
  );
  const isAppHealth = attrs.includes(`src="${appHealthTracker}"`) ||
    attrs.includes(`src='${appHealthTracker}'`);
  return !isApprovedFooter && !isAppHealth;
});
const appHealthScripts = executableScripts.filter((match) => {
  const attrs = match[1] ?? "";
  return attrs.includes(`src="${appHealthTracker}"`) ||
    attrs.includes(`src='${appHealthTracker}'`);
});
if (expectedAppHealth) {
  if (appHealthScripts.length !== 1) {
    throw new Error(`${product}: expected exactly one App Health tracker.`);
  }
  for (const fragment of [
    `data-key="${expectedAppHealth.publicKey}"`,
    `data-project="${expectedAppHealth.projectId}"`,
    'data-identity="persistent"',
    'data-endpoint="https://ingest.sassmaker.com/v1/browser"'
  ]) {
    if (!home.includes(fragment)) {
      throw new Error(`${product}: App Health output is missing ${fragment}.`);
    }
  }
} else if (appHealthScripts.length !== 0) {
  throw new Error(`${product}: the static landing unexpectedly ships App Health.`);
}
if (expectedClarityId) {
  if (unexpectedScripts.length !== 1) {
    throw new Error(`${product}: expected exactly one inline Clarity loader.`);
  }
  for (const fragment of [
    `const clarityProjectId = "${expectedClarityId}"`,
    "https://www.clarity.ms/tag/",
    `const productId = "${product}"`,
    'window.clarity("set", "project_id", productId)'
  ]) {
    if (!home.includes(fragment)) {
      throw new Error(`${product}: Clarity output is missing ${fragment}.`);
    }
  }
  const privacy = await readFile(`${dist}/privacy/index.html`, "utf8");
  const privacyMarkdown = await readFile(`${dist}/privacy/index.md`, "utf8");
  if (!privacy.includes("Marketing-site analytics") || !privacy.includes("Microsoft Clarity")) {
    throw new Error(`${product}: privacy page does not disclose Clarity website analytics.`);
  }
  if (!privacyMarkdown.includes("Marketing-site analytics") || !privacyMarkdown.includes("Microsoft Clarity")) {
    throw new Error(`${product}: Markdown privacy page does not disclose Clarity website analytics.`);
  }
} else if (unexpectedScripts.length !== 0 || home.includes("www.clarity.ms/tag")) {
  throw new Error(`${product}: the static landing unexpectedly ships client-side JavaScript.`);
}

const localHrefs = [...home.matchAll(/href="(\/[^"]*)"/g)]
  .map((match) => match[1].split("#")[0])
  .filter((href, index, all) => href && all.indexOf(href) === index)
  .filter((href) => href !== "/app" && href !== "/app/");

for (const href of localHrefs) {
  const outputPath = href === "/"
    ? `${dist}/index.html`
    : href.endsWith("/")
      ? `${dist}${href}index.html`
      : `${dist}${href}`;
  await access(outputPath);
}

// All shipped product images must resolve locally, including real desktop captures.
for (const match of home.matchAll(/<img\b[^>]*src="(\/[^"?#]+)"/g)) {
  await access(`${dist}${match[1]}`);
}

for (const match of home.matchAll(/<div class="device-screen">\s*(<img\b[^>]*>)/g)) {
  const attrs = match[1];
  const src = attrs.match(/src="([^"]+)"/)?.[1];
  const width = Number(attrs.match(/width="(\d+)"/)?.[1]);
  const height = Number(attrs.match(/height="(\d+)"/)?.[1]);
  if (!src?.startsWith("/images/")) throw new Error(`${product}: screenshot must use a local asset.`);
  const actual = await imageMetadata(await readFile(`${dist}${src}`), src);
  if (width !== actual.width || height !== actual.height) {
    throw new Error(`${product}: incorrect screenshot dimensions for ${src}: ${width}x${height}, actual ${actual.width}x${actual.height}.`);
  }
}
if (/<figure\b[^>]*class="[^"]*\bdevice (?:hero|gallery|chapter)\b/.test(home)) {
  throw new Error(`${product}: screenshot must not inherit a page-section class.`);
}

const markdown = await readFile(`${dist}/index.md`, "utf8");
if (!markdown.startsWith(`# ${name}`)) {
  throw new Error(`${product}: index.md does not start with the product name.`);
}

for (const surface of ai.surfaces) {
  if (!surface.url || !surface.md) {
    throw new Error(`${product}: agent catalog surface ${surface.id ?? "unknown"} is missing url or md.`);
  }
  const markdownPath = `${dist}${surface.md}`;
  const body = await readFile(markdownPath, "utf8");
  if (!body.includes(name)) {
    throw new Error(`${product}: ${surface.md} does not identify ${name}.`);
  }
}

const others = [
  "Kith",
  "Setline",
  "Anchor",
  "Motion",
  "Indulge",
  "Calorie",
  "Journal",
  "Habits",
  "Live"
].filter((label) => label !== name);
for (const other of others) {
  if (home.includes(`<title>${other} —`)) {
    throw new Error(`${product}: built homepage is titled as ${other}.`);
  }
}

const blog = await readFile(`${dist}/blog/index.html`, "utf8");
const feed = await readFile(`${dist}/blog/rss.xml`, "utf8");
const sitemap = await readFile(`${dist}/sitemap.xml`, "utf8");
if (product === "performancedaddy") {
  const article = await readFile(`${dist}/blog/background-apps/index.html`, "utf8");
  const articleMd = await readFile(`${dist}/blog/background-apps/index.md`, "utf8");
  for (const body of [blog, feed, sitemap]) {
    if (!body.includes("/blog/background-apps/")) throw new Error("Missing article discovery surface");
  }
  for (const fragment of ["BlogPosting", "In this note", 'href="/blog/"', "What is still running"]) {
    if (!article.includes(fragment)) throw new Error(`Missing article feature: ${fragment}`);
  }
  if (!articleMd.includes("PerformanceDaddy")) throw new Error("Missing article Markdown identity");
} else {
  if (blog.includes("/blog/background-apps/") || sitemap.includes("/blog/background-apps/")) {
    throw new Error(`${product}: cross-product blog leakage`);
  }
  try { await access(`${dist}/blog/background-apps/index.html`); throw new Error(`${product}: foreign article emitted`); }
  catch (error) { if (error.code !== "ENOENT") throw error; }
}
if (!feed.includes("<item>") && !blog.includes('content="noindex,follow"')) {
  throw new Error(`${product}: empty journal should not be indexed`);
}
console.log(`Checked ${product}: ${requiredFiles.length} public surfaces and ${localHrefs.length} internal links.`);

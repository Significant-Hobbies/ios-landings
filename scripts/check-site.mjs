import { access, readFile } from "node:fs/promises";

const product = process.env.PRODUCT ?? "kith";
const dist = `dist/${product}`;

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
  `${dist}/sitemap.xml`
];

await Promise.all(requiredFiles.map((file) => access(file)));

const home = await readFile(`${dist}/index.html`, "utf8");
const ai = JSON.parse(await readFile(`${dist}/api/ai`, "utf8"));
const name = ai.product?.name;
if (!name) throw new Error(`${product}: AI product surface is missing a name.`);
if (!home.includes(name)) throw new Error(`${product}: landing does not name the product.`);
const hasInstallCta = home.includes('class="button"') || home.includes('class="store-badge"');
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

if (!home.includes("SoftwareApplication")) {
  throw new Error(`${product}: landing is missing SoftwareApplication structured data.`);
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
  return !approvedFooterScripts.some((src) =>
    attrs.includes(`src="${src}"`) || attrs.includes(`src='${src}'`)
  );
});
if (unexpectedScripts.length !== 0) {
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

console.log(`Checked ${product}: ${requiredFiles.length} public surfaces and ${localHrefs.length} internal links.`);

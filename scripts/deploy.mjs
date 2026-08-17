import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { PRODUCT_IDS, PRODUCT_PAGES, ACCOUNT_ID } from "./pages.mjs";

const args = process.argv.slice(2).filter((arg) => arg !== "--all");
const products = args.length > 0 ? args : PRODUCT_IDS;

for (const product of products) {
  if (!PRODUCT_PAGES[product]) {
    console.error(`Unknown product "${product}". Deployable: ${PRODUCT_IDS.join(", ")}.`);
    process.exit(1);
  }
}

function run(command, commandArgs, options = {}) {
  const result = spawnSync(command, commandArgs, { stdio: "inherit", ...options });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  return result;
}

function capture(command, commandArgs) {
  const result = spawnSync(command, commandArgs, { encoding: "utf8" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
  return (result.stdout || "").trim();
}

function wrangler(wranglerArgs) {
  run("pnpm", ["exec", "wrangler", ...wranglerArgs]);
}

function wranglerJson(wranglerArgs) {
  const result = spawnSync("pnpm", ["exec", "wrangler", ...wranglerArgs], {
    encoding: "utf8"
  });
  if (result.status !== 0) {
    process.stderr.write(result.stderr || "");
    process.exit(result.status ?? 1);
  }
  const start = result.stdout.indexOf("[");
  const end = result.stdout.lastIndexOf("]");
  if (start === -1 || end === -1) {
    throw new Error("wrangler did not return JSON.");
  }
  return JSON.parse(result.stdout.slice(start, end + 1));
}

function oauthToken() {
  const config = readFileSync(
    `${homedir()}/Library/Preferences/.wrangler/config/default.toml`,
    "utf8"
  );
  const match = config.match(/^oauth_token\s*=\s*"([^"]+)"/m);
  if (!match) {
    throw new Error("No wrangler OAuth token on this machine.");
  }
  return match[1];
}

async function attachDomain(project, domain) {
  const token = oauthToken();
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/pages/projects/${project}/domains`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: domain })
  });
  const body = await response.json();
  if (body.success) {
    console.log(`Attached ${domain} → ${project}`);
    return;
  }
  const errors = JSON.stringify(body.errors || body);
  if (/already exists|already been added|duplicate/i.test(errors)) {
    console.log(`${domain} already on ${project}`);
    return;
  }
  throw new Error(`Could not attach ${domain} to ${project}: ${errors}`);
}

const existing = new Set(
  wranglerJson(["pages", "project", "list", "--json"]).map(
    (row) => row.name || row["Project Name"]
  )
);
const sha = capture("git", ["rev-parse", "HEAD"]);
const message = capture("git", ["log", "-1", "--pretty=%s"]);

for (const product of products) {
  const { project, domain } = PRODUCT_PAGES[product];
  console.log(`\n=== ${product} → Pages ${project} (${domain}) ===`);
  run("pnpm", ["exec", "astro", "build"], {
    env: { ...process.env, PRODUCT: product }
  });

  if (!existing.has(project)) {
    console.log(`Creating Pages project ${project}`);
    wrangler(["pages", "project", "create", project, "--production-branch", "main"]);
    existing.add(project);
  }

  wrangler([
    "pages",
    "deploy",
    `dist/${product}`,
    "--project-name",
    project,
    "--branch",
    "main",
    "--commit-hash",
    sha,
    "--commit-message",
    message
  ]);

  await attachDomain(project, domain);
}

console.log("\nDeployed:", products.join(", "));

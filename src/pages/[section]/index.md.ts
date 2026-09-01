import { clarityProjectIdFor } from "../../lib/clarity";
import { productId, site } from "../../site.config";

const sections = ["privacy", "support", "terms", "accessibility", "testflight"] as const;
type Section = (typeof sections)[number];

export const prerender = true;

export function getStaticPaths() {
  return sections.map((section) => ({ params: { section } }));
}

export function GET({ params }: { params: { section: string } }) {
  if (!sections.includes(params.section as Section)) {
    return new Response("Not found\n", { status: 404 });
  }

  const section = params.section as Section;
  const page = site.legal[section];
  const lines = [
    "---",
    `title: ${JSON.stringify(`${page.title} — ${site.name}`)}`,
    `description: ${JSON.stringify(page.lede)}`,
    `canonical: ${site.url}/${section}/`,
    `product: ${JSON.stringify(site.name)}`,
    `status: ${JSON.stringify(site.status)}`,
    `last_updated: ${site.lastUpdated}`,
    "---",
    "",
    `# ${page.title}`,
    "",
    page.lede,
    ""
  ];

  if (section === "testflight") {
    const testflight = site.legal.testflight;
    lines.push(
      "## Current access",
      "",
      site.betaNote,
      "",
      "## What to test",
      "",
      testflight.testing,
      "",
      "## Not included",
      "",
      testflight.notIncluded,
      ""
    );
  }

  if (section === "privacy" && clarityProjectIdFor(productId)) {
    lines.push(
      "## Marketing-site analytics",
      "",
      "This static marketing site uses Microsoft Clarity to understand aggregate page use, heatmaps, and session replays. Clarity may process interaction and device data under Microsoft's privacy terms; sensitive page content is masked. This tracking is limited to the website and is not included in the native app.",
      ""
    );
  }

  for (const entry of page.sections) {
    lines.push(`## ${entry.title}`, "", entry.body, "");
  }

  lines.push(
    "## Product boundaries",
    "",
    ...site.boundaries.map((boundary) => `- ${boundary}`),
    "",
    `Canonical HTML: ${site.url}/${section}/`,
    ""
  );

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      link: `<${site.url}/${section}/>; rel="canonical"`
    }
  });
}

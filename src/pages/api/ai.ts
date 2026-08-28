import { links, site } from "../../site.config";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify({
    name: site.name,
    version: "1",
    url: site.url,
    llms: `${site.url}/llms.txt`,
    llmsFull: null,
    sitemap: `${site.url}/sitemap.xml`,
    markdown: { suffix: ".md", negotiation: false },
    openapi: `${site.url}/openapi.json`,
    surfaces: [
      { id: "home", url: "/", md: "/index.md", kind: "static" },
      { id: "privacy", url: "/privacy/", md: "/privacy/index.md", kind: "static" },
      { id: "support", url: "/support/", md: "/support/index.md", kind: "static" },
      { id: "terms", url: "/terms/", md: "/terms/index.md", kind: "static" },
      { id: "accessibility", url: "/accessibility/", md: "/accessibility/index.md", kind: "static" },
      { id: "testflight", url: "/testflight/", md: "/testflight/index.md", kind: "static" }
    ],
    auth: { public: true, notes: "Public discovery requires no account. Product account behavior is described in the privacy page and product boundaries." },
    product: {
      name: site.name,
      tagline: site.tagline,
      summary: site.summary,
      status: site.status,
      platforms: site.platforms,
      capabilities: site.capabilities,
      boundaries: site.boundaries,
      links
    }
  }, null, 2), {
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

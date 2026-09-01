# iOS landings — PROJECT STATUS

Last updated: 2026-08-31

## Why / What

One Astro codebase that builds a separate static site for each
Significant Hobbies iOS-first app. Each product keeps its own domain,
privacy URL, support URL, tokens, and screenshots.

In scope: the shared page engine, six maintained product configs, two retired
compatibility configs, screenshot trees, Apple-gated CTAs, and agent surfaces.

Out of scope: a combined multi-app homepage, App Store badges without a
live listing, blogs, and Pace / Significant Hobbies marketing.

## Dependencies

### External

- Astro 7 static output and lightningcss
- Apple marketing rules for privacy, support, TestFlight, and App Store
  badge use

### Internal

- Copy and screenshots originate in the product repos
- Fleet catalogs this repo; product domains stay on the product rows

## Timeline

- 2026-09-01 — Added Journal's dedicated Microsoft Clarity project through the
  shared factory after confirming the product is a private writing/reflection
  app, not a health service. Its HTML and Markdown privacy surfaces disclose
  website analytics; Habits and Indulge remain script-free. The existing
  Anchor, Calorie, Kith, Motion, and Setline projects remain independently
  wired. No site was deployed in this source change.

- 2026-08-31 — Published Anchor Mac `1.0 (20)` from landing source commit
  `4eaadf2` to Pages deployment `e6c41d03`. The custom domain and download
  return 200, the homepage identifies build 20, and the 20,718,422-byte public
  DMG has SHA-256
  `cbc431905f3a22ed85aad56a5ba489631dabd47be364f2288e394076ebeed781`,
  byte-for-byte matching the notarized, stapled, Gatekeeper-approved Developer
  ID artifact. The isolated Anchor check and both pull-request and post-merge CI
  runs passed.

- 2026-08-28 — Published Anchor `1.0 (17)` from isolated release commit
  `b010889` and deployed that exact source to the `anchor-landing-ejy` Pages
  project. The custom domain and download both return 200. The fresh public DMG
  is 20,473,219 bytes with SHA-256
  `dcab7bbf132ad1b7d40e96284eacace97c46bfc8ea93d8af8b5fafc8e941bd5f`,
  byte-for-byte matching the accepted, stapled, Gatekeeper-approved Developer ID
  artifact. `PRODUCT=anchor pnpm check:one` passes with zero Astro diagnostics,
  19 required surfaces, and eight checked links.

- 2026-08-28 — Released the proof-led shared landing overhaul across all eight
  product builds. The engine now produces HTML and Markdown versions of every
  public surface, stronger agent metadata, explicit maintained-successor CTAs,
  real product evidence, and refreshed Anchor, Calorie, Journal, Kith, and
  Setline presentations. `pnpm check` passes with zero Astro diagnostics and all
  required routes for every product. Exact-source CI passed for `4766470`.
  Anchor Pages deployment `07b153d3` is live on the custom domain with the exact
  Apple-notarized 1.0 (14) Mac beta and a same-origin download gate. A fresh
  public download returned 20,470,704 bytes with SHA-256
  `ad7cccda712aa6eb05306868fe224d428e3e5b7ab5ba68bee5a87f7aa4d13b8f`,
  byte-for-byte matching the stapled release artifact.

- 2026-08-24 — Changed the Habits and Indulge source trees into explicit
  compatibility pages after Anchor became their maintained successor. Both now
  direct people to Anchor and state that no data migration or deletion occurred.
  Their Pages projects and domains remain intact; this source change was not
  deployed.

- 2026-08-22 — Restored Anchor's full privacy and support copy from the retired
  `anchor/landing` tree. The template legal pages had dropped the CloudKit
  private-database, Apple-Intelligence-with-local-fallback, local MCP server,
  export, deletion and children disclosures; privacy went 185 → 637 words and
  support 165 → 531. Anchor is mid App Store submission with CloudKit sync and
  an MCP server, so those were material omissions rather than a shorter house
  style. The other six products still carry the thin template — worth the same
  pass before each submission.
- 2026-08-21 — Redeployed Journal, Kith, Setline, Habits, and Anchor from the
  current shared factory after the complete eight-product landing check passed.
  All five custom domains return 200; Calorie remains on its Worker and Live
  remains on the Significant Hobbies Worker.
- 2026-08-21 — Calorie became a native-only product landing; the retired web
  journal is no longer linked and the internal TestFlight beta remains
  accurately described without inventing a public invitation URL.
- 2026-08-20 — Added Journal and Habits with real product screenshots, honest
  native-preparation status, and direct-upload Pages targets. Live keeps the
  existing cinematic Significant Hobbies landing rather than joining this
  factory.
- 2026-08-17 — Cloudflare Pages for Kith, Setline, Anchor, Motion, and
  Indulge. Calorie stays on the Calorie Worker.
- 2026-08-17 — cinematic product room: phone sits in the headline;
  CSS scroll/view timelines recede the artifact and film the gallery
- 2026-08-17 — one product-room homepage: full-height token sky, stacked
  real screens, same page dyed by each config
- 2026-08-17 — hero phone sheen and float, breathing lanterns, gallery
  hover lift; all CSS, gated by reduced motion
- 2026-08-17 — raised the shared engine: light tokens map correctly,
  screens sit in one device frame, hero shows status and platforms
- 2026-08-17 — first factory: Kith, Setline, Anchor, Motion, and
  Indulge as `PRODUCT=` builds. Not deployed.

## Products

- Cloudflare Pages: `kith`, `setline`, `motion`, `indulge`, `anchor-landing`,
  `journal`, `habits`
- Public hosts: `kith.significanthobbies.com`,
  `setline.significanthobbies.com`, `anchor.significanthobbies.com`,
  `motion.significanthobbies.com`, `indulge.significanthobbies.com`,
  `journal.significanthobbies.com`, `habits.significanthobbies.com`
- Local trees also at `dist/<id>`, including Calorie for its Worker-hosted
  native product landing

## Features (shipped)

- Shared Astro engine from the Fleet iOS landing template
- Per-product `site.config.ts` plus screenshots
- Gated TestFlight and official App Store badge rules
- `llms.txt`, `/index.md`, `/api/ai`, robots, and sitemap on every build
- Indulge on the shared template (static site, no analytics script)
- Shared `Phone` frame, mapped product tokens for light and dark, and
  status/platform line in the hero
- Journal configuration with real screenshots and no invented App Store or
  TestFlight claims
- Habits and Indulge compatibility configurations that point to Anchor without
  pretending a separate native release remains planned
- Native-only Calorie landing with an honest internal-beta status and no web
  journal CTA
- Per-product Clarity project selection for Anchor, Calorie, Kith, Motion, and
  Setline, with matching privacy disclosures and no analytics on the other
  factory products
- CSS-only hero sheen and float, breathing lanterns, gallery hover lift
- Cloudflare Pages deploy for Kith, Setline, Anchor, Motion, and Indulge

## Work queue

https://github.com/Significant-Hobbies/ios-landings/issues

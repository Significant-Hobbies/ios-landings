# iOS landings — PROJECT STATUS

Last updated: 2026-08-20

## Why / What

One Astro codebase that builds a separate static site for each
Significant Hobbies iOS-first app. Each product keeps its own domain,
privacy URL, support URL, tokens, and screenshots.

In scope: the shared page engine, eight product configs, screenshot
trees, Apple-gated CTAs, and agent surfaces.

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
- Journal and Habits configurations with real screenshots and no invented
  App Store or TestFlight claims
- Native-only Calorie landing with an honest internal-beta status and no web
  journal CTA
- CSS-only hero sheen and float, breathing lanterns, gallery hover lift
- Cloudflare Pages deploy for Kith, Setline, Anchor, Motion, and Indulge

## Work queue

https://github.com/Significant-Hobbies/ios-landings/issues

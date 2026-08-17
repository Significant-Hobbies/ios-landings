# iOS landings — PROJECT STATUS

Last updated: 2026-08-17

## Why / What

One Astro codebase that builds a separate static site for each
Significant Hobbies iOS-first app. Each product keeps its own domain,
privacy URL, support URL, tokens, and screenshots.

In scope: the shared page engine, five product configs, screenshot
trees, Apple-gated CTAs, and agent surfaces.

Out of scope: a combined multi-app homepage, App Store badges without a
live listing, deploys, blogs, and Pace / Significant Hobbies marketing.

## Dependencies

### External

- Astro 7 static output and lightningcss
- Apple marketing rules for privacy, support, TestFlight, and App Store
  badge use

### Internal

- Copy and screenshots originate in the product repos
- Fleet catalogs this repo; product domains stay on the product rows

## Timeline

- 2026-08-17 — Calorie added as a web-app product; CTA opens `/app/`
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

- Local static trees at `dist/kith`, `dist/setline`, `dist/anchor`,
  `dist/motion`, `dist/indulge`, and `dist/calorie`
- Intended public hosts remain the product domains
  (`kith.significanthobbies.com` and the same pattern for the others)

## Features (shipped)

- Shared Astro engine from the Fleet iOS landing template
- Per-product `site.config.ts` plus screenshots
- Gated TestFlight and official App Store badge rules
- `llms.txt`, `/index.md`, `/api/ai`, robots, and sitemap on every build
- Indulge on the shared template (static site, no analytics script)
- Shared `Phone` frame, mapped product tokens for light and dark, and
  status/platform line in the hero
- CSS-only hero sheen and float, breathing lanterns, gallery hover lift

## Work queue

https://github.com/Significant-Hobbies/ios-landings/issues

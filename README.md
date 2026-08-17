# iOS landings

One Astro app. Separate static sites. Significant Hobbies product marketing.

| Product | `PRODUCT=` | Intended host | Primary action |
|---|---|---|---|
| Kith | `kith` | https://kith.significanthobbies.com | TestFlight when verified |
| Setline | `setline` | https://setline.significanthobbies.com | TestFlight when verified |
| Anchor | `anchor` | https://anchor.significanthobbies.com | TestFlight when verified |
| Motion | `motion` | https://motion.significanthobbies.com | TestFlight when verified |
| Indulge | `indulge` | https://indulge.significanthobbies.com | TestFlight when verified |
| Calorie | `calorie` | https://calorie.significanthobbies.com | Opens `/app/` |

A product is a `site.config.ts` plus screenshots in
`products/<id>/public`. The shared engine lives in `src/`.

```bash
pnpm install
PRODUCT=kith pnpm dev
pnpm check          # typecheck, build all five, verify each dist/
```

Preview one built tree with `PRODUCT=<id> pnpm preview` after a build.

## Rules

- One page design, one product per domain. Not a combined storefront.
- Privacy and support pages are first-class. App Store listings need both.
- No invented App Store badge or Smart App Banner.
- TestFlight links must be `https://testflight.apple.com/…`.
- Screenshots must be the real app.

Blogs can be added later as a shared route with optional per-product
collections. That folder does not exist yet.

Calorie’s journal stays at `/app/` on the same host. This factory only
builds the front door. The live Worker still serves the SPA at `/`
until that cutover is explicitly deployed.

Significant Hobbies and Pace keep their own marketing surfaces.

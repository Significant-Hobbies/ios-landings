# iOS landings

One Astro app. Five static sites. Significant Hobbies iOS marketing.

| Product | `PRODUCT=` | Intended host |
|---|---|---|
| Kith | `kith` | https://kith.significanthobbies.com |
| Setline | `setline` | https://setline.significanthobbies.com |
| Anchor | `anchor` | https://anchor.significanthobbies.com |
| Motion | `motion` | https://motion.significanthobbies.com |
| Indulge | `indulge` | https://indulge.significanthobbies.com |

A product is a `site.config.ts` plus screenshots in
`products/<id>/public`. The shared engine lives in `src/`.

```bash
pnpm install
PRODUCT=kith pnpm dev
pnpm check          # typecheck, build all five, verify each dist/
```

Preview one built tree with `PRODUCT=<id> pnpm preview` after a build.

## Rules

- Five sites, not one storefront.
- Privacy and support pages are first-class. App Store listings need both.
- No invented App Store badge or Smart App Banner.
- TestFlight links must be `https://testflight.apple.com/…`.
- Screenshots must be the real app.

Blogs can be added later as a shared route with optional per-product
collections. That folder does not exist yet.

Calorie, Significant Hobbies, and Pace keep their own marketing
surfaces. They are not products here.

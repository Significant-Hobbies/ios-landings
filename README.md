# iOS landings

One Astro app. Separate static sites. Significant Hobbies product marketing.

| Product | `PRODUCT=` | Host | Pages project | Primary action |
|---|---|---|---|---|
| Kith | `kith` | https://kith.significanthobbies.com | `kith` | TestFlight when verified |
| Setline | `setline` | https://setline.significanthobbies.com | `setline` | TestFlight when verified |
| Anchor | `anchor` | https://anchor.significanthobbies.com | `anchor-landing` | TestFlight when verified |
| Motion | `motion` | https://motion.significanthobbies.com | `motion` | TestFlight when verified |
| Indulge | `indulge` | https://indulge.significanthobbies.com | `indulge` | TestFlight when verified |
| Calorie | `calorie` | https://calorie.significanthobbies.com | Calorie Worker | Opens `/app/` |

A product is a `site.config.ts` plus screenshots in
`products/<id>/public`. The shared engine lives in `src/`.

```bash
pnpm install
PRODUCT=kith pnpm dev
pnpm check          # typecheck, build all five, verify each dist/
```

Preview one built tree with `PRODUCT=<id> pnpm preview` after a build.

```bash
pnpm run deploy          # kith, setline, anchor, motion, indulge
pnpm run deploy:kith     # one product
```

Each command builds that product and uploads `dist/<id>` to its Cloudflare
Pages project. Calorie is not in this deploy.

## Rules

- One page design, one product per domain. Not a combined storefront.
- Privacy and support pages are first-class. App Store listings need both.
- No invented App Store badge or Smart App Banner.
- TestFlight links must be `https://testflight.apple.com/…`.
- Screenshots must be the real app.

Blogs can be added later as a shared route with optional per-product
collections. That folder does not exist yet.

Calorie’s journal stays at `/app/` on the same host. Sync a public
snapshot into the Calorie repo with
`./scripts/sync-calorie-marketing.sh`. The live Worker is not switched
until an explicit Calorie deploy.

Significant Hobbies and Pace keep their own marketing surfaces.

# iOS landings — agent instructions

- Read `PROJECT_STATUS.md` before broad work.
- This repo is the marketing factory for focused Significant Hobbies apps.
  It is not the apps themselves.
- One Astro codebase. `PRODUCT=kith|setline|anchor|motion|indulge|calorie|journal|habits`
  selects `products/<id>/site.config.ts` and `products/<id>/public`.
- Calorie is a native-app landing. Its internal TestFlight build has no public
  invitation URL, so its CTA stays on the honest beta-status page.
- Build output is `dist/<id>`. Never merge the five sites into one
  homepage.
- Do not invent App Store badges, Smart App Banners, or TestFlight URLs.
  Only a live `apps.apple.com` or `testflight.apple.com` link is allowed.
- Product apps stay independently buildable in their own repos. Do not
  make those repos import this one at runtime.
- Run `pnpm check` after engine or product-config changes.
- Deploy only the product trees listed in `scripts/pages.mjs` with
  `pnpm run deploy`. Calorie stays on its existing Worker. Do not deploy unless
  explicitly asked.

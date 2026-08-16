# iOS landings — agent instructions

- Read `PROJECT_STATUS.md` before broad work.
- This repo is the marketing factory for five Significant Hobbies iOS
  apps. It is not the apps themselves.
- One Astro codebase. `PRODUCT=kith|setline|anchor|motion|indulge`
  selects `products/<id>/site.config.ts` and `products/<id>/public`.
- Build output is `dist/<id>`. Never merge the five sites into one
  homepage.
- Do not invent App Store badges, Smart App Banners, or TestFlight URLs.
  Only a live `apps.apple.com` or `testflight.apple.com` link is allowed.
- Product apps stay independently buildable in their own repos. Do not
  make those repos import this one at runtime.
- Run `pnpm check` after engine or product-config changes.
- Do not deploy unless explicitly asked.

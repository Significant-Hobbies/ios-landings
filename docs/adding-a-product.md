# One template, many products

Reuse the approved Editorial page in this repository. Do not fork its Astro
markup or create per-product CSS. Each build remains one product per domain.

## Product inputs

- `products/<id>/site.config.ts`: copy, semantic colors, availability, legal
  disclosures and links. Use `SiteConfig` from `src/lib/types.ts` for the contract.
- `products/<id>/public/`: the product's icon and actual screenshots.
- `products/<id>/blog/*.md`: optional notes; see [blogs](blogs.md).

Use Kith as the light/phone example and PerformanceDaddy as the dark/Mac example.
Replace all borrowed identity, copy, links and assets before qualifying a product.
Do not reuse another product's privacy claims or analytics identity.

## Register and check

1. Add the typed config import and catalog entry in `src/lib/catalog.ts`.
2. Add its ID to `scripts/build-all.mjs`, `scripts/check-all.mjs` and the CI
   product matrix so it cannot silently miss shared regression checks.
3. Leave `scripts/pages.mjs` unchanged: deployment registration is a separate,
   explicitly authorized operation.
4. Run the focused build, then the entire factory check:

```sh
PRODUCT=performancedaddy pnpm check:one
pnpm check
PRODUCT=performancedaddy pnpm preview
```

Substitute the new ID. No command above deploys.

## Visual and content contract

Keep the shared compact split layout, quiet type and captions below screenshots.
Product tokens choose light or dark; they do not select a different template.
Use `device: "desktop"` for Mac screenshots. Source dimensions are read from
the real assets; do not crop screenshots to fit a phone or manufacture proof.
Inspect home, release/beta, privacy, support and any article at 390/768/1440px.

Homepage composition lives in `src/pages/index.astro` and `src/styles/editorial.css`.
Header, footer, buttons and legal pages share `src/layouts/SiteLayout.astro` and
`src/styles/global.css`. Journals use the shared `src/pages/blog/` routes and
`src/styles/blog.css`. Fix these once to update every product.

Keep availability honest: missing public downloads lead to release/beta status,
never a fabricated store link. A ready landing does not mean the native app is
signed, notarized, released, or downloadable.

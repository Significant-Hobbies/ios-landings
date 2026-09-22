# Design

One landing page. Product config authors it. Separate domains, one system.

Shared chrome, action styling and legal/release pages are owned by `global.css`.
`editorial.css` owns only homepage composition and evidence motion; blog routes
do not import landing styles. See `docs/adding-a-product.md` for reuse boundaries.

## World

A quiet editorial spread, approved as direction A on 2026-09-19: compact split
composition, restrained typography, fine rules and the product’s own tokens.
Real screenshots lead the evidence; captions sit below rather than over images.
There is no generic orb field and no horizontal screenshot carousel.

Mac-only products preserve this system with a desktop capture instead of phone
hardware. Black/mint Daddy tokens and the products' own icons provide identity.
Screenshots preserve their aspect ratio and link to full-size originals. Release
status and direct Mac downloads replace mobile-distribution wording.

Light or dark comes from the product. Do not invert a light product.

## First viewport

Mobile first. The promise, plain-language explanation, CTA, and real phone all
arrive in one readable column. Wider screens become a two-part editorial spread:
copy on the left and an uncropped product capture on the right. The optional product
illustration supports the phone; it never replaces real product evidence.

## Tokens

`--paper`, `--field`, `--ink`, `--accent`, lantern colors, and
`--ink-on-accent` from `site.tokens`.

Display and body use the system sans-serif stack. Tracking never tighter than
`-0.04em`. Hero display stays at or below 5.2rem. Small labels use readable ink,
not an unqualified accent. Action colors are contrast-checked in both states.

## Motion

Copy and evidence have a brief one-time entrance. No looping float or sheen.
Reduced Motion keeps the complete still composition. No landing client JavaScript.

## Journal

Each product owns its Markdown notes. A ruled index leads to a readable article
column with a desktop contents rail, metadata and explicit paths back to the
product. Empty journals are noindex; drafts and future posts stay out of every
public representation. See `docs/blogs.md` for authoring.

## Doodle rule

Product-owned illustration is optional and comes from config. Use one scene in
the hero, plus at most one hand-drawn underline or note per region. Doodles add
personality and explain the product’s mental model; they are never interactive,
never the sole carrier of meaning, and never allowed to crowd the real screens.

## Anti-references

- A five-app storefront
- Sectioned SaaS template chrome
- Unofficial App Store badges
- Mocked screens
- Client JavaScript on the landing

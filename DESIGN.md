# Design

Shared iOS landing engine. Product tokens override surfaces; this file
owns structure and craft.

## World

A quiet marketing page that behaves like an Apple product sheet: one
headline, one phone, then the real screens. Atmosphere is token-colored
lanterns, not furniture or illustration.

Light or dark comes from the product config. Do not invert a light
product to look “more tech.”

## Tokens

Set on `<html>` from `site.tokens` and mapped to `--paper`, `--field`,
`--ink`, `--accent`, lantern colors, and `--ink-on-accent`.

Display: SF Pro Rounded / ui-rounded. Body: SF Pro Text. Tracking never
tighter than `-0.04em`. Display size stays under 6rem.

## Layout

- Hero: copy + one device. Status and platforms sit under the lede.
- Look inside: horizontal snap gallery of real screens in device frames.
- Tension: the product’s one-line objection, then the reply.
- Chapters: one surface at a time, alternating device side.
- Fit: two statements — who it is for, who it is not.
- Privacy, FAQ, founder note, closing CTA.

Do not turn the page into a card grid.

## Device

Screens live in a single `Phone` frame: black bezel, island, side
buttons, no fake home indicator chrome. Tilt is decorative and must
collapse under reduced motion.

## Motion

The phone is a lantern. One authored moment: a glass sheen across the
hero device, then a slow float. Background lanterns breathe out of
phase. Gallery phones lift on hover. Nothing else enters on scroll.

One ease (`--ease-out`). No client JavaScript. Reduced motion removes
loops, sheen, tilt, and hover lift.

## Anti-references

- Unofficial App Store badges
- Mocked marketing UI instead of real captures
- A five-app storefront
- PostHog or other executable scripts on the landing
- Generic “powerful / seamless / robust” chrome

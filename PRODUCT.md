# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Someone who found one Significant Hobbies personal app and needs to decide
whether it is for them, whether it is private, and how to open the web app,
join a TestFlight, or open the App Store listing.

The same page set is reused for Kith, Setline, Anchor, Motion, Indulge,
Calorie, Journal, and Habits. Each visitor sees one product.

## Product Purpose

Render a finished, Apple-compliant marketing site for one focused app
from a config file and real screenshots. Success is a visitor who
understands the job, sees the real screens, and can reach privacy,
support, and the gated install path.

## Positioning

One shared page engine, separate product sites. Domain, tokens, copy, and
screenshots come from `products/<id>/`. The Significant Hobbies Hub is a
separate read-only application surface, not another copy of this landing.

## Operating Context

Static Astro 7. `PRODUCT=` selects the config. Output is `dist/<id>`.
Product app repos stay independently buildable. Deploys are manual.

## Capabilities and Constraints

- Routes: `/`, `/privacy/`, `/support/`, `/terms/`, `/accessibility/`,
  `/testflight/`, `/index.md`, `/llms.txt`, `/api/ai`
- No invented App Store badge, Smart App Banner, or TestFlight URL
- No executable client JavaScript on the landing
- Screenshots must be the real app
- Product copy, legal text, and tokens live in each product config

## Brand Commitments

Each product keeps its own name, mark, palette, and voice. The engine
supplies structure, device framing, and Apple/SEO gates — not a single
house color.

## Evidence on Hand

Real device screenshots and marks under `products/<id>/public/`. No
customer testimonials. Do not invent reviews, user counts, or store
availability.

## Product Principles

- One product per domain
- Show the real phone before explaining it
- Privacy and support are first-class, not footer afterthoughts
- Config and screenshots are the only product-specific inputs
- Honest about beta status

## Accessibility & Inclusion

VoiceOver-readable structure, 44px targets, visible focus, and
`prefers-reduced-motion` that removes decorative tilt. Color is never
the only signal.

# Design: The Living Memory Book

Owner selected direction C on 2 October 2026. Tracking: https://github.com/Significant-Hobbies/ios-landings/issues/30. The approved study is `artifacts/design/uplift/c-memory.png`; it establishes material and composition, while real app captures and semantic HTML supply production truth.

## World

One product per domain, a shared engine with product-owned identity. The system is a physical collection of useful context: paper spreads, a prominent product artifact, carefully placed images, margin notes and confident sans typography. Kith uses coral bookcloth, ivory paper, warm photographic moments and indigo writing. Other apps retain their palettes and subject matter. Mac tools use wide captures or their own approved artwork; they do not borrow Kith's personal photography or phone hardware.

Shared navigation, actions, footer and legal/release pages are owned by `global.css`. Homepage composition and material motion belong to `landing.css`. Product copy, colors and optional `story` assets live in `products/<id>/site.config.ts`; raster ingredients live in that product's public tree. No per-product page fork or stylesheet is needed.

## First viewport and layout

On desktop, a clear product promise and action occupy the left of an asymmetric spread. The exact original product screen sits upright on a large material stage to the right; a small photographic keepsake overlaps the stage's margin without covering text or the app. The primary action and availability precede decorative annotations in reading order.

At tablet widths the same two-part structure tightens. On phones the promise and action arrive first, followed immediately by the product stage. Photography becomes a small corner detail. Full-width scene, alternating evidence spreads, a quiet reading passage and a decisive closing give the scroll varied density. The notebook scene stacks live copy above its complete image on phones, preserving believable object scale. Captions stay outside screenshots. Original screen aspect ratios and full-size access are preserved.

## Color and materials

The factory retains `site.tokens` as the semantic color source. Optional story ink is an explicit product-owned campaign color, never a global overwrite of other product identities. Paper, field, text, soft text, accent and action contrast have separate roles. Dark products keep their dark tokens; marketing imagery never mechanically inverts an app's screens.

Texture comes from high-resolution product-owned raster ingredients, not synthetic CSS noise. Physical coral cloth, ivory sheets, soft afternoon shadows and image fragments carry Kith's depth. The owner rejected the first stock-like café photograph and disconnected material collage. Kith now uses an unposed coastal-walk snapshot and the same coastal setting inside its notebook scene; a landscape print, restrained rotation and quiet paper texture connect them. Avoid posed smiling faces, giant coffee cups, competing lighting, thick photograph mats and opaque text patches over photography. Other products without story images use their field surface and authentic app artifact. Illustrative photos are identified as artwork and never imply customers or testimonials.

## Typography and shape

Display and body use the installed system sans stacks, with confident 650–760 display weight and tracking no tighter than -0.04em. Desktop hero type stays at or below 6rem; body copy uses generous line height and readable measures. Small labels use sentence case and readable contrast. Editorial margin notes may use a system cursive fallback, but facts, controls and body copy remain plain sans text.

Navigation is open and direct. Actions have a rounded physical-ticket form, minimum 48px height, visible focus and explicit hover/active feedback. Photo borders resemble paper; screens retain the existing real-device component. FAQ uses the existing native `details`/`summary` behavior. Legal pages extend the reading grammar without decorative photo interruptions.

## Authored motion

The opening is one bounded material sequence: the photographic keepsake settles onto the spread while the product artifact arrives. It completes within 800ms and never delays reading or actions. Where CSS view timelines are supported, the wide notebook scene gently opens through scroll; the fallback is the complete still scene. Image and action feedback are brief. There is no looping float, sheen, scroll hijacking or new landing JavaScript.

Reduced Motion retains every layer in its final position, disables material choreography and scroll transforms, and preserves functional focus/disclosure feedback. No effect hides content in the default unanimated state.

## Complete path and constraints

Product evaluation leads to truthful beta/release/download gates, plain-language privacy and support. Consent and analytics identifiers remain unchanged. Blog routes keep their existing reader-focused layout and do not import homepage styles. Retired Journal and Habits are retained source history and never deployment targets.

No invented App Store badges, native availability, testimonials, customer counts or screenshots. No Kith artwork on unrelated products. No core text rasterized into scene imagery. No new runtime dependency solely for decoration.

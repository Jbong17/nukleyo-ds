# Nukleyo Decision Science — Letterhead

Print-ready letterhead in the **Theme 2 — The Decision Engine** voice
(cream stock, navy, teal rule, one gold accent).

## Use it

Open `letterhead.html` in a browser → **Cmd-P** → *Save as PDF*.

> **Turn on "Background graphics"** in the print dialog (Chrome: *More settings ▸
> Background graphics*), or the cream stock and the teal/gold rule drop out and you
> get a white page.

- **A4** by default. For **US Letter**: change `<html>` to `<html class="us">`.
- Page 2 is a **continuation sheet** (reduced lockup). Duplicate that
  `<section class="sheet cont">` per extra page, or delete it for a one-page letter.
- Verified: prints to exactly A4 (596×843pt), 2 pages, backgrounds intact, 0 errors.

## The logo — done

`assets/logo.png` is the Theme 2 lockup, extracted from the supplied 4-up grid:

- cropped the **top-left** tile (navy/teal/gold art on near-white),
- **alpha-keyed** the background with a feathered threshold on *distance from the
  background colour* — deliberately **not** a luminance key, which drags the gold
  (`#BD9C59`) down to ~66% opacity and washes it out,
- **inset 10px before cropping**: rows 624–626 of the tile bleed in from the teal
  tile below (`#E7EDED`) and survive the key as a full-width line across the mark,
- trimmed to the art: **435×340**, corners fully transparent.

`assets/logo-reverse.png` is the same treatment on the navy tile → white art, for
dark surfaces.

**Resolution ceiling:** the grid is 1254×1254, so each tile is 627×627 and the art
is 435×340. At the 30mm masthead size that's ≈290dpi — fine for print, just under
the 300dpi ideal. **An SVG export would be sharper** and is a straight drop-in:
save it as `assets/logo.svg` and change the two `src=` references.

> For the record: every *other* logo file on this machine (`Nukleyo DS Logo.png`,
> `NDS Logo clear background.png`, …) is the **old circular mark** with an opaque
> baked-in background despite the filenames — none are usable.

## Palette — sampled, not guessed

Measured from the brand assets themselves: the three colour tiles of the logo grid
are the brand's own swatches, and the sheet's page background is the stock.

| Variable | Value | Sampled from |
|---|---|---|
| `--ndsl-cream` | `#F9F8F6` | brand sheet page background |
| `--ndsl-navy`  | `#00172E` | the navy lockup tile |
| `--ndsl-teal`  | `#035059` | the teal lockup tile |
| `--ndsl-gold`  | `#BD9C59` | the "decision" arrow — **once per page** |
| `--ndsl-gray`  | `#5A6672` | derived (navy, desaturated) for meta text |

The earlier by-eye estimates were badly off — navy was guessed `#1B2A38` vs the real
`#00172E`, teal `#2E6B5E` vs `#035059`. Don't eyeball brand colour off a screenshot.

## Type

- **Display / wordmark** — Cormorant Garamond 400/600 (closest free match to the
  Theme 2 classical serif). Vendored in `fonts/`.
- **Body** — IBM Plex Sans 400/500/600, reused from the design system.

Self-contained: fonts are local, nothing loads from the network.

## Relationship to the design system

This is **standalone on purpose** — it doesn't import `tokens.css`. Theme 2 is a
**third palette**, distinct from both DS themes (Stage: black/Poppins; Scholarly:
`#F6F9FB`/IBM Plex Serif/teal `#0E7C86`). Wiring it into the DS before Theme 2 is
confirmed as the brand would mean re-basing the scholarly tokens on a logo concept
that is still labelled "THEME 2".

Once Theme 2 is final, the next step is promoting this into a `Letterhead` component
so Claude Design can generate on-brand letters directly.

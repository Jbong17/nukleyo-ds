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

## Drop your logo in  ← the one thing outstanding

Save the Theme 2 lockup as:

```
letterhead/assets/logo.svg      (SVG preferred — scales + recolors)
```

That's it. The placeholder lockup hides itself automatically (`onerror`), and the
layout is unchanged — the slot is already sized (22mm tall on page 1, 11mm on
continuation pages).

Using a PNG instead? Name it `logo.png` and change the two `src="assets/logo.svg"`
references. Export at **2000px+ wide with a real transparent background**.

> Every logo PNG currently on this machine (`Nukleyo DS Logo.png`,
> `NDS Logo clear background.png`, …) is the **old circular mark**, and despite the
> filenames the background is **baked in opaque** — none are usable here.

## Correct the palette  ← estimated, not sampled

The five hexes at the top of `letterhead.html` were read **by eye** from the Theme 2
sheet. Correct them and everything follows — they're the only colour source:

| Variable | Current guess | Role |
|---|---|---|
| `--ndsl-cream` | `#F7F5F0` | page stock |
| `--ndsl-navy`  | `#1B2A38` | primary text, wordmark |
| `--ndsl-teal`  | `#2E6B5E` | accent rule, tagline |
| `--ndsl-gold`  | `#B08D57` | the "decision" accent — **once per page** |
| `--ndsl-gray`  | `#6B7680` | meta / muted |

If the logo arrives as **SVG**, the exact brand hexes can be read straight out of it
and these guesses replaced with real values.

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

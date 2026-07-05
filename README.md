# Nukleyo Design System

A design language for **Jerald B. Bongalos / Nukleyo Decision Science** — built for
work at the intersection of **data science** and **education**.

## The idea

A dense navy *nucleus* (rigor, structure, authority) with a teal **analytical
signal** and an amber **spark of insight**. Cool, disciplined, and above all
legible — the visual equivalent of a well-reasoned result you can teach from.

- **Evidence-first.** Tabular numerals everywhere numbers appear, so columns and
  decimals align the way a statistician expects.
- **Scholarly voice.** A serif display face (IBM Plex Serif) carries headings and
  hero numbers; a clean sans (IBM Plex Sans) carries the interface; a mono
  (IBM Plex Mono) carries data and code.
- **Restrained.** Flat surfaces, hairline borders, one accent per view. The data
  is the decoration.

## What's here

| File | Purpose |
|------|---------|
| `tokens.css` | Source of truth — every color, type ramp, space, radius, and shadow as CSS custom properties. |
| `tokens.js`  | JS mirror of the tokens for charts, theming, and docs. |
| `components/` | React components that consume the tokens (`Button`, `Card`, `StatTile`, `DataTable`, `Callout`, `Field`, `Tag`, `Badge`, `CitationBlock`, `BrandLockup`, `ChartFrame`). |
| `style-guide.html` | A standalone visual specification — open it in a browser to see the whole system. |

## Palette

- **Navy** `#0E2F4C` — primary / structure
- **Teal** `#0E7C86` — accent / analysis
- **Amber** `#E4A44C` — highlight / insight
- **Coral** `#D75A4A` — emphasis / caution
- **Verdant** `#2F9E6B` — positive / organic

Data-viz categorical order (never cycled): navy, teal, amber, coral, slate-blue,
verdant, plum, clay. Sequential ramps use a single teal hue; diverging uses
coral ↔ teal with a neutral gray midpoint.

## Type

- Display / headings / hero numbers — **IBM Plex Serif**
- Interface / body — **IBM Plex Sans**
- Data / code / figures — **IBM Plex Mono**

Load the families:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Serif:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

## Using it with Claude Design

Because the system already lives in code, there's nothing to set up.

```bash
cd path/to/nukleyo-ds
claude
/design-sync
```

`/design-sync` reads `tokens.css` / `tokens.js` and the React components in
`components/` directly. When it finishes, the system appears under
**Design systems** for everyone in your org.

## Using the tokens directly

```jsx
import "./tokens.css";
import { Button, StatTile, Callout, BrandLockup } from "./components";

<BrandLockup />
<StatTile label="Model AUC" value="0.94" delta={{ value: "+0.06", dir: "up" }} note="vs. baseline" />
<Callout kind="method">Non-parametric first: Wilcoxon signed-rank for small n.</Callout>
<Button variant="accent">Run analysis</Button>
```

All components style from CSS variables, so retheming is a matter of editing
`tokens.css` — no component edits required.

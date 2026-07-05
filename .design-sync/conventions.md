# Building with Nukleyo DS

Nukleyo Decision Science is a **data-science × education** brand: a dense navy *nucleus*
(rigor, structure) with a **teal** analytical signal and an **amber** spark of insight.
Evidence-first and scholarly — flat surfaces, hairline borders, **one accent per view**,
and tabular figures wherever numbers appear.

## Setup — load the stylesheet, no provider needed

Import `styles.css` **once** at the app root. It defines every `--nk-*` token (via
`_ds_bundle.css`) and loads the IBM Plex fonts (`fonts/`). Components style themselves inline
from those tokens, so there is **no theme provider or React context to wrap** — but a component
rendered on a page that hasn't loaded `styles.css` falls back to browser default fonts/colors.

For a dark surface (app chrome, a hero band), set `data-nk-theme="dark"` on a container — the
neutral + navy/teal tokens remap inside it. It's opt-in; the default is the light theme.

## The styling idiom — component props + CSS variables

There are **no utility classes** and **no style-system props**. The design language is carried
two ways:

1. **Component props — pick the variant, don't restyle.**
   `Button variant="primary|accent|outline|ghost|subtle" size="sm|md|lg"`,
   `Tag tone="navy|teal|amber|coral|verdant|neutral"`, `Badge status="info|success|warning|danger"`,
   `Callout kind="note|method|caution|result"`, `Card eyebrow= title= accent=`,
   `StatTile label= value= delta={{ value, dir }}`, `DataTable columns={[{ numeric: true }]}`.
   Use at most one `primary`/`accent` Button per view; everything else is `outline`/`ghost`.

2. **`var(--nk-*)` tokens for your own layout glue** (wrappers, grids, spacing) — never raw hex/px:
   - **Color:** `--nk-navy` (primary), `--nk-teal` (accent), `--nk-amber` (highlight), `--nk-coral`,
     `--nk-verdant`. Text: `--nk-ink` / `--nk-graphite` / `--nk-slate`. Surfaces: `--nk-white` /
     `--nk-paper` / `--nk-mist`. Semantic: `--nk-info|success|warning|danger` (+ matching `-bg` tints).
   - **Data-viz** (assign by entity, never cycle a rainbow): categorical `--nk-viz-1` … `--nk-viz-8`;
     sequential teal ramp `--nk-seq-1` … `--nk-seq-7`; diverging `--nk-div-neg|mid|pos`.
   - **Type:** `--nk-font-display` (IBM Plex Serif — headings + hero numbers), `--nk-font-sans`
     (IBM Plex Sans — UI/body), `--nk-font-mono` (IBM Plex Mono — data/figures/code). Sizes
     `--nk-fs-display` … `--nk-fs-caption`; weights `--nk-fw-regular|medium|semi|bold`;
     line-heights `--nk-lh-tight|snug|body`.
   - **Space** `--nk-space-1` … `--nk-space-16` (4px base); **radius** `--nk-radius-sm|--nk-radius|--nk-radius-lg|--nk-radius-pill`;
     **border** `--nk-border`; **elevation** `--nk-shadow-sm|--nk-shadow|--nk-shadow-lg`.
   - **Numbers:** put `font-variant-numeric: var(--nk-num)` (tabular + lining) on any figure or
     column so decimals align — it's a brand rule, not a preference.

## Where the truth lives

Read `styles.css` and its `@import`ed files for the full token set, and each component's
`<Name>.d.ts` (prop contract) + `<Name>.prompt.md` before composing it.

## Idiomatic snippet

```jsx
// DS components for the parts; --nk-* tokens for your own layout.
<div style={{ display: "grid", gap: "var(--nk-space-5)", fontFamily: "var(--nk-font-sans)" }}>
  <StatTile label="Model AUC" value="0.94" delta={{ value: "+0.06", dir: "up" }} note="vs. baseline" />
  <Callout kind="method">Non-parametric first: Wilcoxon signed-rank for small n.</Callout>
  <Button variant="accent">Run analysis</Button>
</div>
```

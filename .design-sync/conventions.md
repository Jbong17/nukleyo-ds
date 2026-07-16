# Building with Nukleyo DS

Nukleyo Decision Science is a **data-science × education** brand: a dense navy *nucleus*
(rigor, structure) with a **teal** analytical signal and an **amber** spark of insight.
The default voice is **Stage** — a black stage, Poppins, and a yellow spotlight, built to
teach and present. The quiet **Scholarly** document voice (navy/serif on white) is opt-in
per subtree. Evidence-first throughout: **one accent per view**, and tabular figures
wherever numbers appear.

## Setup — load the stylesheet, no provider needed

Import `styles.css` **once** at the app root. It defines every `--nk-*` token (via
`_ds_bundle.css`), loads the Poppins + IBM Plex fonts (`fonts/`), and **paints the page**
(`body { background: var(--nk-paper); color: var(--nk-ink) }`). Components style themselves
inline from those tokens, so there is **no theme provider or React context to wrap**.

Because the default theme's text tokens are **light**, any container where you paint your own
background must use `var(--nk-paper)` (the stage) or `var(--nk-white)` (a card panel) — never
a raw hex or an unpainted white surface, or light text lands on light background.

## Themes — Stage by default, Scholarly opt-in

`:root` **is** the Stage theme. Opt into the document voice on any subtree:

```jsx
<article data-nk-theme="scholarly">…</article>   {/* navy + IBM Plex Serif on white */}
<section data-nk-theme="stage">…</section>       {/* a Stage island inside a Scholarly page */}
```

Both themes remap the **same semantic tokens**, so components just work in either — keep using
`--nk-navy` / `--nk-teal` / `--nk-ink` and let the theme do the remap. Never hard-code stage hex.
There is **no `dark` theme** — Stage is already black.

## The deck voice — this is the DEFAULT, and it is not optional

This DS exists to build **teaching decks**. **Tokens alone are not the brand.** Black background +
Poppins gets you *generic dark*; it is **off-brand**. The signature lives in the stage classes below,
and **a slide that uses none of them has failed** — even when every colour came from a token.
A bare white `<h1>` on black is the single most common way to get this wrong.

When you build a slide, deck, presentation, or section header:

- **Spotlight the headline. Always.** Every slide title puts its load-bearing word(s) in
  `.nk-spotlight` (yellow, underlined). Never ship a bare white headline.
- **Section/topic labels are chips, not plain text.** A topic label is a bare `.nk-chip` (slate);
  a recurring banner ("Review", "Results", "Method") is `.nk-chip--green`.
- **Sub-headings are blue** — `color: var(--nk-stage-blue)` — not white.
- **One hot word per line, max.** `.nk-em` (yellow) for a key term; `.nk-highlight` (orange bar)
  for the single word a slide turns on. Never both in one line.
- **Term + definition:** the term in `.nk-em`, the definition in plain `--nk-ink` beneath it.
- **Numbered process:** a `.nk-step` dot paired with a bare `.nk-chip` label, one row per step.
- **Bright positive / organic display words** go `.nk-em--lime` ("AGRICULTURE", "Food Crops").
- **Cutout images, logos, specimens** get `.nk-glow`.
- **Red is the alarm** (`.nk-em--red`): a "VS" contrast, a named threat, a one-word shock headline.

### Title-slide recipe — copy this shape

```jsx
<section style={{ padding: "var(--nk-space-16)" }}>
  <span className="nk-chip nk-chip--green">Module 1</span>
  <h1 style={{ fontSize: "var(--nk-fs-display)", lineHeight: "var(--nk-lh-tight)",
               fontFamily: "var(--nk-font-display)", margin: "var(--nk-space-6) 0" }}>
    Nuclear Science in <span className="nk-spotlight">Agriculture</span>
    {" "}& the <span className="nk-spotlight">Environment</span>
  </h1>
  <p style={{ color: "var(--nk-stage-blue)", fontSize: "var(--nk-fs-lead)" }}>
    Nuclear Forensics and AI
  </p>
  <p style={{ color: "var(--nk-stage-muted)", fontSize: "var(--nk-fs-sm)" }}>
    Jerald B. Bongalos · DOST-NRCP
  </p>
</section>
```

### Content-slide recipe

```jsx
<section style={{ padding: "var(--nk-space-12)" }}>
  <span className="nk-chip nk-chip--green">Review</span>
  <h2 style={{ fontSize: "var(--nk-fs-h1)" }}>
    <span className="nk-spotlight">Radioactivity</span>
  </h2>
  <p><span className="nk-em">Spontaneous emission</span> of radiation from
     <span className="nk-highlight">unstable</span> atomic nuclei.</p>
</section>
```

## The styling idiom — component props, tokens, and the stage classes

There are **no style-system props**. The design language is carried three ways:

1. **Component props — pick the variant, don't restyle.**
   `Button variant="primary|accent|outline|ghost|subtle" size="sm|md|lg"`,
   `Tag tone="navy|teal|amber|coral|verdant|neutral"`, `Badge status="info|success|warning|danger"`,
   `Callout kind="note|method|caution|result"`, `Card eyebrow= title= footer= accent=`,
   `StatTile label= value= unit= delta={{ value, dir }}`, `DataTable columns={[{ numeric: true }]}`,
   `Field label= help=`, `CitationBlock doi=`, `ChartFrame figureNumber= title= source=`,
   `BrandLockup compact`. Use at most one `primary`/`accent` Button per view.

2. **`var(--nk-*)` tokens for your own layout glue** — never raw hex/px:
   - **Color:** `--nk-navy` (primary), `--nk-teal` (accent), `--nk-amber` (highlight), `--nk-coral`,
     `--nk-verdant`. Text: `--nk-ink` / `--nk-graphite` / `--nk-slate`. Surfaces: `--nk-paper` (page)
     / `--nk-white` (card) / `--nk-mist` / `--nk-abyss`. Semantic: `--nk-info|success|warning|danger`
     (+ matching `-bg` tints).
   - **Data-viz** (assign by entity, never cycle a rainbow): categorical `--nk-viz-1` … `--nk-viz-8`;
     sequential ramp `--nk-seq-1` … `--nk-seq-7`; diverging `--nk-div-neg|mid|pos`.
   - **Stage palette** (fixed in every theme, e.g. slide charts): `--nk-stage-black`,
     `--nk-stage-yellow`, `--nk-stage-blue`, `--nk-stage-green`, `--nk-stage-lime`, `--nk-stage-red`,
     `--nk-stage-orange`, `--nk-stage-turquoise`, `--nk-stage-gray`, `--nk-stage-muted`.
   - **Type:** `--nk-font-display` + `--nk-font-sans` (both Poppins by default via `--nk-font-stage`;
     Scholarly remaps display → `--nk-font-serif`), `--nk-font-mono` (IBM Plex Mono — data/figures,
     in **both** themes). Sizes `--nk-fs-display|h1|h2|h3|h4|lead|body|sm|caption|overline|data`;
     weights `--nk-fw-light|regular|medium|semi|bold`; line-heights `--nk-lh-tight|snug|body`.
   - **Space** `--nk-space-1` … `--nk-space-16` (4px base); **radius** `--nk-radius-sm|--nk-radius|--nk-radius-lg|--nk-radius-pill`;
     **border** `--nk-border`; **elevation** `--nk-shadow-sm|--nk-shadow|--nk-shadow-lg`; **focus** `--nk-ring`.
   - **Numbers:** put `font-variant-numeric: var(--nk-num)` (tabular + lining) on any figure or
     column so decimals align — it's a brand rule, not a preference.

3. **Stage utility classes** — the signature deck moves, global in every theme. This is the whole
   class vocabulary; there are no other `.nk-*` classes and no utility system:
   | Class | Use |
   |---|---|
   | `.nk-spotlight` | title-slide headline word: huge, yellow, underlined |
   | `.nk-em` (`--lime`, `--blue`, `--orange`, `--red`) | mid-sentence keyword: bolder, 1.2em, colored. `--red` is the alarm voice (a "VS" contrast, a named threat, a one-word shock headline) — it outranks yellow, so use it sparingly |
   | `.nk-highlight` | solid orange block carrying a white keyword |
   | `.nk-chip` (`--green`, `--turquoise`, `--brown`, `--blue`) | rounded pill label for sections/steps/banners. Bare `.nk-chip` is the neutral slate topic pill (the default). `--blue` is the **data chip** for a specimen/isotope/sample id (e.g. `Cobalt-60`) and carries black text |
   | `.nk-step` | small yellow dot with a black number, for process diagrams — pair it with a bare `.nk-chip` as the step label |
   | `.nk-glow` (`--blue`, `--lime`, `--yellow`, `--red`) | the cutout halo: lifts a transparent-PNG subject (specimen, device, fruit) off the black stage. Put it on the `<img>`/`<svg>` itself — it follows the alpha channel, so a wrapper with a background boxes it. Defaults to turquoise. A stage move only; on a light surface it reads as smudge |

## Where the truth lives

Read `styles.css` and its `@import`ed files for the full token set, and each component's
`<Name>.d.ts` (prop contract) + `<Name>.prompt.md` before composing it.

## Idiomatic snippet

```jsx
// DS components for the parts; --nk-* tokens for your own layout. Stage is the default.
<section style={{ display: "grid", gap: "var(--nk-space-5)", padding: "var(--nk-space-10)" }}>
  <h2><span className="nk-spotlight">Retrieval practice</span> moves the needle</h2>
  <StatTile label="Effect size" value="0.42" unit="SD" delta={{ value: "+0.11", dir: "up" }} note="95% CI 0.28–0.56" />
  <Callout kind="result">Effect survives instructor fixed effects (p = 0.004).</Callout>
  <Button variant="accent">Run analysis</Button>
</section>
```

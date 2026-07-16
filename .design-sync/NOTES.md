# Nukleyo DS — design-sync notes

Repo-specific gotchas for future syncs. Append whenever something is learned.

## Repo shape
- **No build, no Storybook.** Source-only React repo: raw `.jsx` in `components/`,
  `tokens.css` (CSS custom properties) + `tokens.js` (JS mirror).
- Runs in the converter's **package shape, no-dist path** via `--entry ./components/index.js`.
- `components/index.js` re-exports every component as a **named** export. This is essential:
  7 of 11 components are `export default`, and the converter's synth-entry (`export *`) would
  DROP defaults. So we pin `cfg.entry` at `index.js` and enumerate all 11 in
  `componentSrcMap` (with no `.d.ts`, discovery is otherwise empty).

## Toolchain (this machine had NONE of it)
- **Node.js was not installed.** Installed self-contained Node 20 LTS into `~/.local`
  (symlinked into `~/.local/bin`, already on PATH). Delete `~/.local/node-v20.*` to remove.
- Converter deps in `.ds-sync/node_modules` (esbuild, ts-morph, @types/react).
- **React 18** installed at repo root `./node_modules` (react/react-dom/@types/react) so
  `vendorReact` finds the UMD build and ts-morph resolves `@types/react`. `--node-modules ./node_modules`.
  Its parent (repo root) is the font-containment `workspaceRoot` (no `.git` here → stops at $HOME).
- **Playwright/chromium cache lives at `~/Library/Caches/ms-playwright`** on this machine (macOS —
  NOT `~/.cache/ms-playwright`, which the skill checks first and which does not exist here).
  Cached build: `chromium-1228`; the playwright package is in `.ds-sync/node_modules`.

## Themes (rewritten 2026-07-16 by commit a784d53 — read this before touching previews)
- **Stage is the DEFAULT theme.** `tokens.css` selector is `:root, [data-nk-theme="stage"]`:
  black stage (`--nk-paper: #000`), `--nk-ink: #FFFFFF`, Poppins display+sans, projector type
  scale (`--nk-fs-body: 1.25rem`).
- **Scholarly is opt-in** (`[data-nk-theme="scholarly"]`) — the old navy/serif-on-white document
  voice, `--nk-fs-body: 1rem`.
- **There is no `dark` theme any more** — a784d53 deleted it. Anything still saying
  `data-nk-theme="dark"` is stale (it silently matches nothing and inherits Stage).
- The `.nk-*` utility classes (`.nk-spotlight`, `.nk-em`, `.nk-highlight`, `.nk-chip`, `.nk-step`)
  lost their `[data-nk-theme="stage"]` prefix in a784d53 — they are now **global in every theme**.

## Styling / fonts
- All component styling is **inline styles reading `var(--nk-*)`** — there is NO component CSS.
  `tokens.css` is mapped via `cfg.cssEntry` → becomes `_ds_bundle.css`, reachable from
  `styles.css`'s @import closure so designs get the tokens.
- **`tokens.css` now paints the page** — `body { background: var(--nk-paper); color: var(--nk-ink) }`,
  added **this run (2026-07-16) with the user's approval**. Why it exists: the Stage default makes
  the text tokens light, but tokens.css previously never touched `body`, so any design that didn't
  paint its own background rendered **white-on-white**. Under Scholarly this was harmless (dark text
  on an accidental white page still read), which is why it only surfaced after the flip.
  **Do not remove it** without re-solving that problem.
- IBM Plex (latin subset, SIL OFL) + **Poppins** (latin, weights 400/500/600/700/800) are vendored in
  `.design-sync/fonts/`, wired via `cfg.extraFonts`. Poppins is required by the Stage default.
  Italic serif NOT shipped — `ChartFrame`'s figure title is `font-style: italic` and renders
  browser-synthesized oblique (accepted).

## Previews — the Stage wrapper is load-bearing
- **Every `.design-sync/previews/<Name>.tsx` wraps its stories in a local `Stage` helper** that paints
  `background: var(--nk-paper)`. This is NOT decoration. The preview card harness hard-codes
  `body{margin:0;padding:24px;background:#fff}` in its own `<style>` **after** the stylesheet links,
  so it overrides the `body` rule from tokens.css. Without the wrapper the cards render the Stage's
  light text on the harness's white body — i.e. invisible.
- `lib/emit.mjs` owns that harness and is **not forkable** (it defines the output contract), so the
  wrapper is the correct fix, and it is honest: it's how a real Nukleyo stage page renders
  (cf. `style-guide-stage.html`, which paints `body{background:#000}` by hand).
- `BrandLockup.OnScholarly` deliberately wraps in `data-nk-theme="scholarly"` instead — it's the one
  card that exercises the opt-in light theme (was `OnDark` before a784d53 deleted that theme).

## Upload
- **Re-synced 2026-07-16** to pinned project `45e5d00b-02d7-42d9-a487-c1fd26621aad`
  ("Nukleyo Design System") — **atomic path** (pinned before run, non-empty target), anchor healthy.
  79 files uploaded, 11 components, 23 cells all graded good.
- **Orphan cleanup, this run (user-approved):** deleted the 30 remaining old-converter files —
  `tokens/tokens.css`, `tokens/tokens.js`, `guidelines/*.html` (16), `assets/fonts/**` (11),
  `readme.md`. They had become **actively contradictory** after the theme flip (the old `tokens.css`
  still declared a light `:root` and the dead `dark` theme). Nothing imports them — `styles.css`'s
  closure is only `fonts/fonts.css` + `_ds_bundle.css` — but a design agent browsing files could have
  read stale values. Verified safe first: every template's `ds-base.js` loads **only** `styles.css`
  + `_ds_bundle.js` from the project root, and `deck-stage.js` has zero references to the deleted paths.
- **Left untouched (the user's own work):** `templates/` (3 decks), `ui_kits/report`, `uploads/`,
  `SKILL.md`, `style-guide.html`. `_ds_manifest.json` / `_adherence.oxlintrc.json` regenerate server-side.

## Verification state (this run)
- All **11 components authored** (`.design-sync/previews/*.tsx`), **23 cells graded good**.
  `.d.ts` prop contracts are **hand-written** in `cfg.dtsPropsFor` (the JS source is untyped, so
  ts-morph extracts nothing) — keep them in sync if a component's props change.
- Render check clean (11/11), no `[FONT_MISSING]`, no warn lines at all on the final driver run.
- **Known render warns:** none.
- `cfg.overrides` → `cardMode: "column"` for **`Button`** (added this run — Stage's larger type scale
  pushed Variants/Sizes/WithIcon past a grid cell), `DataTable`, `StatTile`.

## Re-sync risks (what a future sync should watch)
- **The Stage wrapper in previews is invisible to every automated gate.** A preview authored without
  it renders light-on-light, and the render check will still pass: the root is non-empty, the PNG is
  >5KB, and the text nodes exist — they're just unreadable. **Only eyeballing the sheet catches this.**
  If you add a component, copy the `Stage` helper from any existing preview.
- **`tokens.css`'s `body` rule is load-bearing** (see Styling/fonts). Removing it silently breaks every
  design that doesn't paint its own background. It now also sets `font-family`/`font-size`/
  `line-height` — **2026-07-17 found it was setting colours only**, so every unstyled `<p>` in every
  generated design had been rendering in **Times at 16px** on the black stage. Nothing caught it:
  the Poppins tokens were all correct, the fonts were vendored, validate was green — the tokens just
  weren't *applied*. When auditing typography, probe **computed** `fontFamily` on a `<p>` you did NOT
  style; a test page that sets `body{font-family}` itself will hide the bug (that's how it survived).
- **Tokens propagate to existing designs; markup does not.** A token edit re-themes every already-
  generated design on next render (they resolve `var(--nk-*)` live). But the signature lives in
  `.nk-*` **classes** = markup, which only a *new* design can contain. So a theme change makes old
  decks change colour while still looking off-brand — that is expected, not a bug. Never judge a
  token/header change by reopening an old design; generate a new one.
- **`conventions.md` must be prescriptive, not a reference table.** Listing the stage classes made the
  agent treat them as optional and it shipped plain white `<h1>`s (correct tokens, zero signature).
  The "deck voice" section that makes the moves mandatory is the thing that actually changes output —
  if deck fidelity regresses, suspect that section was softened before suspecting the CSS.
- **The `.nk-*` stage utility classes have ZERO automated coverage.** No component preview uses
  `.nk-spotlight` / `.nk-em` / `.nk-highlight` / `.nk-chip` / `.nk-step` / `.nk-glow`, so validate,
  the render check, and every grade can pass green while one of them is broken or silently dropped.
  They reach users only through the design agent (via `conventions.md`) and `templates/`. Verify by
  hand: point a page at `ds-bundle/styles.css`, exercise each class, and assert **computed** styles
  (`background` / `color` / `filter`) in headless chromium — "it rendered" proves nothing when the
  failure mode is a class that doesn't exist. 2026-07-17 did this after adding `--red`/`--blue`/glow.
- **Grades don't clear on a theme/token change.** `renderHashes` track component *sources*, so the
  a784d53 flip re-rendered every card completely differently while the driver reported all 11
  `unchanged` with `styling: true`. A styling-only diff on this repo means **look at the contact
  sheet** before trusting carried-forward grades.
- **`componentSrcMap` must stay complete.** With no `.d.ts`, discovery is empty — every component is
  enumerated there. Add a new `components/*.jsx` → add it here, plus a `cfg.dtsPropsFor` entry and a
  `.design-sync/previews/<Name>.tsx`, or it won't sync.
- **`cfg.entry` must point at `components/index.js`** (named re-exports). Do not let it fall back to
  synth-entry — that drops the 7 default-exported components.
- **Fonts are latin-only.** Non-latin text falls back; serif italic is synthesized (ChartFrame caption).
  Poppins was network-fetched (Google Fonts v24) but the woff2 are committed — no re-fetch needed.
- **`conventions.md` is current as of a784d53** — it documents Stage-as-default, the Scholarly opt-in,
  the paint-the-stage rule, and the global `.nk-*` class vocabulary. Every name in it was verified
  against the built `_ds_bundle.css` this run. Re-validate it whenever tokens.css changes shape.
- **Toolchain is local & un-pinned:** Node 20 in `~/.local`, converter deps in `.ds-sync/`, React 18 +
  playwright/chromium. A fresh clone re-installs all of it (`.ds-sync/`, `node_modules/`, browser
  cache are gitignored).

# Nukleyo DS — design-sync notes

Repo-specific gotchas for future syncs. Append whenever something is learned.

## Repo shape
- **No build, no package.json (originally), no Storybook.** Source-only React repo: raw
  `.jsx` in `components/`, `tokens.css` (CSS custom properties) + `tokens.js` (JS mirror).
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

## Styling / fonts
- All component styling is **inline styles reading `var(--nk-*)`** — there is NO component CSS.
  `tokens.css` (the `:root { --nk-* }` block) is mapped via `cfg.cssEntry` → becomes `_ds_bundle.css`,
  reachable from `styles.css`'s @import closure so designs get the tokens.
- `tokens.css` references IBM Plex families but ships **no `@font-face`**. We vendor **IBM Plex
  (latin subset, SIL OFL)** woff2 in `.design-sync/fonts/` + author `ibm-plex.css`, wired via
  `cfg.extraFonts`. Weights: Sans 300/400/500/600/700, Serif 400/500/600, Mono 400/500.
  Italic serif NOT shipped — `ChartFrame` figure title uses `font-style: italic` and will render
  browser-synthesized oblique (acceptable; add serif-italic-400 if fidelity demands).
- **Poppins (latin, SIL OFL) vendored 2026-07-16** in `.design-sync/fonts/` (weights 400/500/600/
  700/800) + `poppins.css`, wired via `cfg.extraFonts`. Needed by the **Stage theme**
  (`--nk-font-stage`, `data-nk-theme="stage"`) added in commit c39a571 — validate flagged
  `[FONT_MISSING] Poppins` before vendoring. Fetched from Google Fonts (v24 woff2). Fallback is
  IBM Plex Sans (shipped). No italic/other weights.

## Upload
- **Uploaded 2026-07-16** to existing project `45e5d00b-02d7-42d9-a487-c1fd26621aad`
  ("Nukleyo Design System"), now pinned as `cfg.projectId`. The prior NOTES said "never
  uploaded / no projectId" — but the remote already held an OLD-converter sync of this DS
  (flat `components/<group>/<Name>.*` + `<group>.card.html`, fonts under `assets/fonts/`),
  plus the user's own work (`templates/` decks, `ui_kits/report`, `uploads/`, `SKILL.md`,
  `style-guide.html`, `guidelines/*.html`, `tokens/`). The config's projectId had simply been
  lost — this run was effectively a re-sync with a missing anchor (no `_ds_sync.json` remote).
- **Atomic path** (non-empty target, not pinned-before-run). No remote anchor, so deletes were
  hand-derived from `list_files`: deleted ONLY the old flat-layout component files
  (`components/{actions,brand,data,display,forms}/**`, ~39 files) because the new build writes
  the nested layout `components/general/<Name>/<Name>.*` and stale old cards would double-index.
  **Everything else was left untouched** — the user's decks/uploads/ui_kits, and harmless DS
  orphans (old `tokens/`, `assets/fonts/`, `guidelines/*.html`, `readme.md`) that don't collide
  with new paths. `_ds_manifest.json` / `_adherence.oxlintrc.json` are regenerated server-side.

## Verification state (this run)
- All **11 components authored** (`.design-sync/previews/*.tsx`) and graded **good** (23 cells).
  `.d.ts` prop contracts are **hand-written** in `cfg.dtsPropsFor` (the JS source is untyped, so
  ts-morph extracts nothing) — keep them in sync if a component's props change.
- Render check clean (11/11), no `[FONT_MISSING]`, no `[GRID_OVERFLOW]`.
- **Known render warns:** none.
- `cfg.overrides`: `DataTable` and `StatTile` use `cardMode: "column"` (both are wider than a grid cell).

## Re-sync risks (what a future sync should watch)
- **`componentSrcMap` must stay complete.** With no `.d.ts`, component discovery is empty — every
  component is enumerated in `componentSrcMap`. **Add a new `components/*.jsx` → add it here** (and
  a matching `cfg.dtsPropsFor` entry + a `.design-sync/previews/<Name>.tsx`), or it won't sync.
- **`cfg.entry` must point at `components/index.js`** (named re-exports). Do not let it fall back to
  synth-entry — that drops the 7 default-exported components.
- **Fonts:** IBM Plex is vendored **latin subset only** (`.design-sync/fonts/`). Non-latin text
  renders in a fallback; serif *italic* is synthesized (ChartFrame caption). Extend the set by
  re-running the font fetch if the brand needs more coverage.
- **Toolchain is local & un-pinned:** Node 20 in `~/.local`, converter deps in `.ds-sync/`, React 18
  + Playwright/Chromium installed this run. A fresh clone re-installs all of it (`.ds-sync/`,
  `node_modules/`, browser cache are gitignored).
- **Conventions header lags the Stage theme.** `.design-sync/conventions.md` documents the light
  theme + `data-nk-theme="dark"` but NOT `data-nk-theme="stage"` (Poppins). All names it DOES
  cite still verify against the build (no drift). Proposed addition for a future edit: a short
  Stage-theme section so the design agent can use the presentation mode. Content belongs to its
  author — not rewritten automatically.
- **Poppins is latin-only + network-fetched** (Google Fonts v24). A fresh clone has the woff2
  committed under `.design-sync/fonts/`, so no re-fetch needed unless weights/coverage change.
- **Remote holds old-layout orphans** (`guidelines/*.html`, `tokens/`, `assets/fonts/`,
  `readme.md`, `style-guide.html`) from the pre-nested converter sync. Left in place deliberately
  (non-colliding; possibly referenced by the user's decks). A future anchored re-sync's diff will
  NOT see them (the anchor only records this run's files) — they persist harmlessly. Delete by
  hand only if a pristine project is wanted.
- **This IS now a git repo** (commits present). Durable design-sync inputs are committed; machine
  state is gitignored.

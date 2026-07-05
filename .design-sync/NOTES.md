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

## Upload
- This first build was produced **locally with no upload** — the running session had no Claude
  Design authorization (`/design-login` needs an interactive terminal). `ds-bundle/` is
  ready to upload; re-run `/design-sync` from an interactive `claude` terminal to create the
  project and push. No `projectId` recorded yet.

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
- **Not a git repo.** The skill's commit/PR steps don't apply until `git init`. `.gitignore` is in place.

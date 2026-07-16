// ============================================================================
// NUKLEYO DESIGN SYSTEM — tokens.js
// JS mirror of tokens.css for programmatic access (charts, theming, docs).
// Keep in sync with tokens.css — the CSS file is the runtime source of truth.
//
// DEFAULT THEME = STAGE. The top-level `color`, `font`, `fontSize`, and
// `vizCategorical` exports below hold the STAGE values (black stage, Poppins,
// yellow spotlight) — the same look every design gets by default. The quiet
// document theme is exported separately as `scholarly` (opt-in).
// ============================================================================

// --- DEFAULT (STAGE) --------------------------------------------------------
export const color = {
  abyss:   "#000000",
  navy:    "#38B6FF",   // structural headings pop blue on black
  navy600: "#6FCBFF",
  teal:    "#0CC0DF",
  teal400: "#55D4EA",
  amber:   "#FFDE59",   // the spotlight
  coral:   "#FF3131",
  verdant: "#00BF63",

  ink:      "#FFFFFF",
  graphite: "#DDE5E9",
  slate:    "#B8C4CA",
  silver:   "#4A565C",
  mist:     "#22282B",
  paper:    "#000000",
  white:    "#0D1214",
};

export const semantic = {
  info:    color.teal,
  success: color.verdant,
  warning: color.amber,
  danger:  color.coral,
  bg: {
    info:    "#0B2733",
    success: "#0A2C1D",
    warning: "#332B0D",
    danger:  "#330F0C",
    navy:    "#0E2233",
    teal:    "#0B2A30",
  },
};

// Fixed categorical order — assign by entity, never by rank; never cycle a rainbow.
export const vizCategorical = [
  "#FFDE59", "#38B6FF", "#00BF63", "#FF914D",
  "#FF3131", "#0CC0DF", "#7ED957", "#B8C4CA",
];

export const vizSequential = [
  "#E1F1F2", "#A9DBDD", "#6FC2C6", "#35A2A8",
  "#0E7C86", "#0A5A62", "#06393E",
];

export const vizDiverging = { neg: "#FF3131", mid: "#22282B", pos: "#00BF63" };

export const font = {
  display: '"Poppins", "IBM Plex Sans", system-ui, -apple-system, sans-serif',
  sans:    '"Poppins", "IBM Plex Sans", system-ui, -apple-system, sans-serif',
  mono:    '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace',
};

export const fontSize = {
  display: "4.25rem", h1: "3rem", h2: "2.125rem", h3: "1.5rem",
  h4: "1.0625rem", lead: "1.375rem", body: "1.25rem", sm: "0.875rem",
  caption: "0.8125rem", overline: "0.75rem", data: "0.9375rem",
};

export const weight = { light: 400, regular: 400, medium: 500, semi: 600, bold: 700 };

export const space = {
  1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem",
  6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem",
};

export const radius = { sm: "6px", md: "10px", lg: "14px", pill: "999px" };

export const shadow = {
  sm: "none",
  md: "none",
  lg: "0 0 40px rgba(255,222,89,0.10)",
};

// --- Stage raw hues + signature-move helpers --------------------------------
export const stage = {
  bg:        "#000000",
  surface:   "#0D1214",
  text:      "#FFFFFF",
  muted:     "#B8C4CA",
  yellow:    "#FFDE59",
  blue:      "#38B6FF",
  green:     "#00BF63",
  lime:      "#7ED957",
  red:       "#FF3131",
  orange:    "#FF914D",
  turquoise: "#0CC0DF",
  gray:      "#717D82",
  font: '"Poppins", "IBM Plex Sans", system-ui, -apple-system, sans-serif',
  vizCategorical: [
    "#FFDE59", "#38B6FF", "#00BF63", "#FF914D",
    "#FF3131", "#0CC0DF", "#7ED957", "#B8C4CA",
  ],
};

// ----------------------------------------------------------------------------
// SCHOLARLY THEME (opt-in) — the quiet document voice for reports & memos.
// Mirrors the [data-nk-theme="scholarly"] block in tokens.css.
// ----------------------------------------------------------------------------
export const scholarly = {
  color: {
    abyss: "#071B2E", navy: "#0E2F4C", navy600: "#164A73",
    teal: "#0E7C86", teal400: "#3AA9AC", amber: "#E4A44C",
    coral: "#D75A4A", verdant: "#2F9E6B",
    ink: "#0F1E2A", graphite: "#33475A", slate: "#5E7180",
    silver: "#AEBDC7", mist: "#E7EDF1", paper: "#F6F9FB", white: "#FFFFFF",
  },
  font: {
    display: '"IBM Plex Serif", Georgia, "Times New Roman", serif',
    sans:    '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    mono:    '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace',
  },
  vizCategorical: [
    "#0E2F4C", "#0E7C86", "#E4A44C", "#D75A4A",
    "#5B7DA6", "#2F9E6B", "#7A5C9E", "#B4794A",
  ],
};

export default {
  color, semantic, vizCategorical, vizSequential, vizDiverging,
  font, fontSize, weight, space, radius, shadow, stage, scholarly,
};

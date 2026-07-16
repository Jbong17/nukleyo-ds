// ============================================================================
// NUKLEYO DESIGN SYSTEM — tokens.js
// JS mirror of tokens.css for programmatic access (charts, theming, docs).
// Keep in sync with tokens.css — the CSS file is the runtime source of truth.
// ============================================================================

export const color = {
  abyss:   "#071B2E",
  navy:    "#0E2F4C",
  navy600: "#164A73",
  teal:    "#0E7C86",
  teal400: "#3AA9AC",
  amber:   "#E4A44C",
  coral:   "#D75A4A",
  verdant: "#2F9E6B",

  ink:      "#0F1E2A",
  graphite: "#33475A",
  slate:    "#5E7180",
  silver:   "#AEBDC7",
  mist:     "#E7EDF1",
  paper:    "#F6F9FB",
  white:    "#FFFFFF",
};

export const semantic = {
  info:    color.teal,
  success: color.verdant,
  warning: color.amber,
  danger:  color.coral,
  bg: {
    info:    "#E1F1F2",
    success: "#E4F3EC",
    warning: "#FBF0DE",
    danger:  "#FBE8E4",
    navy:    "#E9EEF3",
    teal:    "#E1F1F2",
  },
};

// Fixed categorical order — assign by entity, never by rank; never cycle a rainbow.
export const vizCategorical = [
  "#0E2F4C", "#0E7C86", "#E4A44C", "#D75A4A",
  "#5B7DA6", "#2F9E6B", "#7A5C9E", "#B4794A",
];

export const vizSequential = [
  "#E1F1F2", "#A9DBDD", "#6FC2C6", "#35A2A8",
  "#0E7C86", "#0A5A62", "#06393E",
];

export const vizDiverging = { neg: "#D75A4A", mid: "#EEF2F4", pos: "#0E7C86" };

export const font = {
  display: '"IBM Plex Serif", Georgia, "Times New Roman", serif',
  sans:    '"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  mono:    '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace',
};

export const fontSize = {
  display: "3rem", h1: "2.125rem", h2: "1.625rem", h3: "1.25rem",
  h4: "1.0625rem", lead: "1.125rem", body: "1rem", sm: "0.875rem",
  caption: "0.8125rem", overline: "0.75rem", data: "0.9375rem",
};

export const weight = { light: 300, regular: 400, medium: 500, semi: 600, bold: 700 };

export const space = {
  1: "0.25rem", 2: "0.5rem", 3: "0.75rem", 4: "1rem", 5: "1.25rem",
  6: "1.5rem", 8: "2rem", 10: "2.5rem", 12: "3rem", 16: "4rem",
};

export const radius = { sm: "6px", md: "10px", lg: "14px", pill: "999px" };

export const shadow = {
  sm: "0 1px 2px rgba(11,30,50,0.06)",
  md: "0 1px 2px rgba(11,30,50,0.05), 0 6px 16px rgba(11,30,50,0.07)",
  lg: "0 2px 6px rgba(11,30,50,0.06), 0 18px 40px rgba(11,30,50,0.10)",
};


// ----------------------------------------------------------------------------
// STAGE THEME — presentation / teaching mode (black stage, Poppins, spotlight)
// Mirrors the [data-nk-theme="stage"] block in tokens.css.
// ----------------------------------------------------------------------------
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
  // categorical order tuned for black backgrounds
  vizCategorical: [
    "#FFDE59", "#38B6FF", "#00BF63", "#FF914D",
    "#FF3131", "#0CC0DF", "#7ED957", "#B8C4CA",
  ],
};

export default { stage, color, semantic, vizCategorical, vizSequential, vizDiverging, font, fontSize, weight, space, radius, shadow };

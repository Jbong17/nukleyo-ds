import React from "react";

/**
 * Tag — a discipline / topic pill (e.g. "Data Science", "Biology Education").
 * tone: "navy" | "teal" | "amber" | "coral" | "verdant" | "neutral"
 */
const TONES = {
  navy:    { bg: "var(--nk-navy-bg)",    fg: "var(--nk-navy)" },
  teal:    { bg: "var(--nk-teal-bg)",    fg: "#0A5A62" },
  amber:   { bg: "var(--nk-warning-bg)", fg: "#8A5A12" },
  coral:   { bg: "var(--nk-danger-bg)",  fg: "#9A2E22" },
  verdant: { bg: "var(--nk-success-bg)", fg: "#1B6B47" },
  neutral: { bg: "var(--nk-mist)",       fg: "var(--nk-graphite)" },
};

export function Tag({ children, tone = "neutral", style = {} }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-caption)",
      fontWeight: "var(--nk-fw-medium)", letterSpacing: "0.01em",
      padding: "3px 10px", borderRadius: "var(--nk-radius-pill)",
      background: t.bg, color: t.fg, ...style,
    }}>{children}</span>
  );
}

/**
 * Badge — a status marker with a dot. status: "info"|"success"|"warning"|"danger"
 */
const STATUS = {
  info:    { c: "var(--nk-info)",    bg: "var(--nk-info-bg)",    fg: "#0A5A62" },
  success: { c: "var(--nk-success)", bg: "var(--nk-success-bg)", fg: "#1B6B47" },
  warning: { c: "var(--nk-warning)", bg: "var(--nk-warning-bg)", fg: "#8A5A12" },
  danger:  { c: "var(--nk-danger)",  bg: "var(--nk-danger-bg)",  fg: "#9A2E22" },
};

export function Badge({ children, status = "info", style = {} }) {
  const s = STATUS[status] || STATUS.info;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-caption)",
      fontWeight: "var(--nk-fw-medium)", padding: "3px 10px 3px 8px",
      borderRadius: "var(--nk-radius-pill)", background: s.bg, color: s.fg, ...style,
    }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: s.c }} />
      {children}
    </span>
  );
}

export default Tag;

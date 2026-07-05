import React from "react";

/**
 * Callout — a pedagogical aside. The teaching voice of the system.
 * kind: "note" (teal) | "method" (navy) | "caution" (amber) | "result" (verdant)
 */
const KIND = {
  note:    { bar: "var(--nk-teal)",    bg: "var(--nk-info-bg)",    fg: "#0A5A62", label: "Note" },
  method:  { bar: "var(--nk-navy)",    bg: "var(--nk-navy-bg)",    fg: "var(--nk-navy)", label: "Method" },
  caution: { bar: "var(--nk-amber)",   bg: "var(--nk-warning-bg)", fg: "#8A5A12", label: "Caution" },
  result:  { bar: "var(--nk-verdant)", bg: "var(--nk-success-bg)", fg: "#1B6B47", label: "Result" },
};

export default function Callout({ children, kind = "note", title = null, style = {} }) {
  const k = KIND[kind] || KIND.note;
  return (
    <div style={{
      background: k.bg, borderLeft: `3px solid ${k.bar}`, borderRadius: "0 var(--nk-radius) var(--nk-radius) 0",
      padding: "var(--nk-space-4) var(--nk-space-5)", ...style,
    }}>
      <div style={{
        fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-overline)",
        letterSpacing: "var(--nk-track-over)", textTransform: "uppercase",
        fontWeight: "var(--nk-fw-semi)", color: k.fg, marginBottom: 6,
      }}>{title || k.label}</div>
      <div style={{
        fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-sm)",
        lineHeight: "var(--nk-lh-body)", color: "var(--nk-graphite)",
      }}>{children}</div>
    </div>
  );
}

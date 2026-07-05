import React from "react";

/**
 * Card — the base bounded surface. Flat, hairline border, soft shadow.
 * accent: optional left rule color (e.g. "var(--nk-teal)") for categorization.
 */
export default function Card({ children, title, eyebrow, footer, accent = null, style = {} }) {
  return (
    <div style={{
      background: "var(--nk-white)", border: "var(--nk-border)",
      borderLeft: accent ? `3px solid ${accent}` : "var(--nk-border)",
      borderRadius: accent ? "0 var(--nk-radius-lg) var(--nk-radius-lg) 0" : "var(--nk-radius-lg)",
      boxShadow: "var(--nk-shadow-sm)", overflow: "hidden", ...style,
    }}>
      {(title || eyebrow) && (
        <div style={{ padding: "var(--nk-space-5) var(--nk-space-5) var(--nk-space-3)" }}>
          {eyebrow && (
            <div style={{
              fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-overline)",
              letterSpacing: "var(--nk-track-over)", textTransform: "uppercase",
              color: "var(--nk-teal)", fontWeight: "var(--nk-fw-semi)", marginBottom: 6,
            }}>{eyebrow}</div>
          )}
          {title && (
            <h3 style={{
              margin: 0, fontFamily: "var(--nk-font-display)", fontSize: "var(--nk-fs-h3)",
              fontWeight: "var(--nk-fw-medium)", color: "var(--nk-ink)", lineHeight: "var(--nk-lh-snug)",
            }}>{title}</h3>
          )}
        </div>
      )}
      <div style={{
        padding: (title || eyebrow) ? "0 var(--nk-space-5) var(--nk-space-5)" : "var(--nk-space-5)",
        fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-body)",
        color: "var(--nk-graphite)", lineHeight: "var(--nk-lh-body)",
      }}>{children}</div>
      {footer && (
        <div style={{
          padding: "var(--nk-space-3) var(--nk-space-5)", borderTop: "var(--nk-border)",
          background: "var(--nk-paper)", fontFamily: "var(--nk-font-sans)",
          fontSize: "var(--nk-fs-sm)", color: "var(--nk-slate)",
        }}>{footer}</div>
      )}
    </div>
  );
}

import React from "react";

/**
 * ChartFrame — a publication-grade wrapper for a figure.
 * Enforces the "Figure N. Caption." convention and a consistent chrome.
 * Drop any chart (Recharts, Chart.js, SVG) as children.
 */
export default function ChartFrame({ figureNumber, title, source, children, style = {} }) {
  return (
    <figure style={{
      margin: 0, background: "var(--nk-white)", border: "var(--nk-border)",
      borderRadius: "var(--nk-radius-lg)", padding: "var(--nk-space-5)", ...style,
    }}>
      {title && (
        <figcaption style={{
          fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-sm)",
          color: "var(--nk-ink)", marginBottom: "var(--nk-space-4)", lineHeight: "var(--nk-lh-snug)",
        }}>
          {figureNumber != null && (
            <span style={{ fontWeight: "var(--nk-fw-semi)", color: "var(--nk-navy)" }}>
              Figure {figureNumber}.{" "}
            </span>
          )}
          <span style={{ fontStyle: "italic", color: "var(--nk-graphite)" }}>{title}</span>
        </figcaption>
      )}
      <div>{children}</div>
      {source && (
        <div style={{
          marginTop: "var(--nk-space-3)", fontFamily: "var(--nk-font-sans)",
          fontSize: "var(--nk-fs-caption)", color: "var(--nk-slate)",
        }}>Source. {source}</div>
      )}
    </figure>
  );
}

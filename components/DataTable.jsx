import React from "react";

/**
 * DataTable — a compact results table.
 * columns: [{ key, label, align, numeric }]
 * rows:    array of objects keyed by column.key
 * Numeric cells render in mono with tabular figures so decimals align.
 */
export default function DataTable({ columns = [], rows = [], caption = null, style = {} }) {
  return (
    <div style={{ overflowX: "auto", ...style }}>
      <table style={{
        width: "100%", borderCollapse: "collapse", fontFamily: "var(--nk-font-sans)",
        fontSize: "var(--nk-fs-sm)", color: "var(--nk-graphite)",
      }}>
        {caption && (
          <caption style={{
            captionSide: "top", textAlign: "left", padding: "0 0 10px",
            fontSize: "var(--nk-fs-caption)", color: "var(--nk-slate)",
            fontVariantNumeric: "tabular-nums",
          }}>{caption}</caption>
        )}
        <thead>
          <tr style={{ borderBottom: "2px solid var(--nk-navy)" }}>
            {columns.map((c) => (
              <th key={c.key} style={{
                textAlign: c.align || (c.numeric ? "right" : "left"),
                padding: "8px 12px", fontSize: "var(--nk-fs-overline)",
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "var(--nk-navy)", fontWeight: "var(--nk-fw-semi)", whiteSpace: "nowrap",
              }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "var(--nk-border)" }}>
              {columns.map((c) => (
                <td key={c.key} style={{
                  textAlign: c.align || (c.numeric ? "right" : "left"),
                  padding: "9px 12px",
                  fontFamily: c.numeric ? "var(--nk-font-mono)" : "var(--nk-font-sans)",
                  fontVariantNumeric: c.numeric ? "tabular-nums lining-nums" : "normal",
                  color: c.numeric ? "var(--nk-ink)" : "var(--nk-graphite)",
                }}>{r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

/**
 * StatTile — a single headline figure (the data-scientist's hero number).
 * The value uses the serif display face + tabular figures for gravitas + alignment.
 * delta: { value: "+12.4%", dir: "up" | "down" | "flat" }
 */
const DELTA = {
  up:   { color: "var(--nk-verdant)", mark: "▲" },
  down: { color: "var(--nk-coral)",   mark: "▼" },
  flat: { color: "var(--nk-slate)",   mark: "—" },
};

export default function StatTile({ label, value, unit = "", delta = null, note = "", style = {} }) {
  const d = delta ? (DELTA[delta.dir] || DELTA.flat) : null;
  return (
    <div style={{
      background: "var(--nk-white)", border: "var(--nk-border)",
      borderRadius: "var(--nk-radius-lg)", padding: "var(--nk-space-5)", ...style,
    }}>
      <div style={{
        fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-overline)",
        letterSpacing: "var(--nk-track-over)", textTransform: "uppercase",
        color: "var(--nk-slate)", fontWeight: "var(--nk-fw-semi)", marginBottom: 10,
      }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{
          fontFamily: "var(--nk-font-display)", fontSize: "2.75rem", lineHeight: 1,
          fontWeight: "var(--nk-fw-medium)", color: "var(--nk-ink)",
          fontVariantNumeric: "tabular-nums lining-nums",
        }}>{value}</span>
        {unit && <span style={{ fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-body)", color: "var(--nk-slate)" }}>{unit}</span>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
        {d && (
          <span style={{
            fontFamily: "var(--nk-font-mono)", fontSize: "var(--nk-fs-caption)",
            color: d.color, fontWeight: "var(--nk-fw-medium)",
            fontVariantNumeric: "tabular-nums",
          }}>{d.mark} {delta.value}</span>
        )}
        {note && <span style={{ fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-caption)", color: "var(--nk-slate)" }}>{note}</span>}
      </div>
    </div>
  );
}

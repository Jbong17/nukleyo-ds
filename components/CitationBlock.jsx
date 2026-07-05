import React from "react";

/**
 * CitationBlock — an APA-style reference rendered as a hanging-indent block.
 * A signature component for an academic/consulting brand.
 */
export function CitationBlock({ children, doi = null, style = {} }) {
  return (
    <div style={{
      fontFamily: "var(--nk-font-display)", fontSize: "var(--nk-fs-sm)",
      lineHeight: "var(--nk-lh-body)", color: "var(--nk-graphite)",
      paddingLeft: "1.75em", textIndent: "-1.75em", ...style,
    }}>
      {children}
      {doi && (
        <a href={`https://doi.org/${doi}`} style={{ color: "var(--nk-teal)", textDecoration: "none" }}>
          {" "}https://doi.org/{doi}
        </a>
      )}
    </div>
  );
}

/**
 * BrandLockup — the nucleus mark + wordmark + role line.
 */
export function BrandLockup({ compact = false, style = {} }) {
  const mark = (
    <svg width={compact ? 30 : 40} height={compact ? 30 : 40} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" fill="none" stroke="var(--nk-mist)" strokeWidth="1" />
      <ellipse cx="20" cy="20" rx="17" ry="7" fill="none" stroke="var(--nk-teal)" strokeWidth="1.5"
        transform="rotate(30 20 20)" />
      <ellipse cx="20" cy="20" rx="17" ry="7" fill="none" stroke="var(--nk-navy)" strokeWidth="1.5"
        transform="rotate(-30 20 20)" />
      <circle cx="20" cy="20" r="4.5" fill="var(--nk-amber)" />
    </svg>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, ...style }}>
      {mark}
      <div style={{ lineHeight: 1.15 }}>
        <div style={{
          fontFamily: "var(--nk-font-display)", fontSize: compact ? "var(--nk-fs-h4)" : "var(--nk-fs-h3)",
          fontWeight: "var(--nk-fw-semi)", color: "var(--nk-ink)", letterSpacing: "var(--nk-track-tight)",
        }}>Nukleyo <span style={{ color: "var(--nk-teal)" }}>Decision Science</span></div>
        {!compact && (
          <div style={{
            fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-caption)",
            letterSpacing: "0.04em", color: "var(--nk-slate)", marginTop: 3,
          }}>Jerald B. Bongalos · Data Science · Education</div>
        )}
      </div>
    </div>
  );
}

export default CitationBlock;

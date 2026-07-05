import React from "react";

/**
 * Button — the primary action control.
 * variant: "primary" (navy) | "accent" (teal) | "outline" | "ghost" | "subtle"
 * size:    "sm" | "md" | "lg"
 * Use at most one primary/accent per view; everything else is outline/ghost.
 */
const SIZES = {
  sm: { padding: "6px 12px", fontSize: "var(--nk-fs-sm)", height: 32 },
  md: { padding: "9px 16px", fontSize: "var(--nk-fs-body)", height: 40 },
  lg: { padding: "12px 22px", fontSize: "var(--nk-fs-lead)", height: 48 },
};

const VARIANTS = {
  primary: { background: "var(--nk-navy)", color: "var(--nk-white)", border: "1px solid var(--nk-navy)" },
  accent:  { background: "var(--nk-teal)", color: "var(--nk-white)", border: "1px solid var(--nk-teal)" },
  outline: { background: "transparent", color: "var(--nk-navy)", border: "1px solid var(--nk-silver)" },
  ghost:   { background: "transparent", color: "var(--nk-navy)", border: "1px solid transparent" },
  subtle:  { background: "var(--nk-navy-bg)", color: "var(--nk-navy)", border: "1px solid transparent" },
};

export default function Button({
  children, variant = "outline", size = "md", icon = null, disabled = false, style = {}, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.outline;
  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8, justifyContent: "center",
        fontFamily: "var(--nk-font-sans)", fontWeight: "var(--nk-fw-medium)",
        letterSpacing: "0.01em", lineHeight: 1, cursor: disabled ? "not-allowed" : "pointer",
        borderRadius: "var(--nk-radius)", transition: "filter var(--nk-dur) var(--nk-ease), box-shadow var(--nk-dur)",
        opacity: disabled ? 0.5 : 1, padding: s.padding, fontSize: s.fontSize, ...v, ...style,
      }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = "brightness(1.06)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

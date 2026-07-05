import React, { useState } from "react";

/**
 * Field — a labeled input. Consistent 40px control height, teal focus ring.
 */
export default function Field({
  label, help, placeholder = "", type = "text", value, onChange, style = {}, ...rest
}) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: "block", fontFamily: "var(--nk-font-sans)", ...style }}>
      {label && (
        <span style={{
          display: "block", fontSize: "var(--nk-fs-sm)", fontWeight: "var(--nk-fw-medium)",
          color: "var(--nk-ink)", marginBottom: 6,
        }}>{label}</span>
      )}
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: "100%", height: 40, boxSizing: "border-box", padding: "0 12px",
          fontFamily: "var(--nk-font-sans)", fontSize: "var(--nk-fs-body)",
          color: "var(--nk-ink)", background: "var(--nk-white)",
          border: `1px solid ${focus ? "var(--nk-teal)" : "var(--nk-silver)"}`,
          borderRadius: "var(--nk-radius)", outline: "none",
          boxShadow: focus ? "var(--nk-ring)" : "none",
          transition: "border-color var(--nk-dur), box-shadow var(--nk-dur)",
        }}
        {...rest}
      />
      {help && (
        <span style={{
          display: "block", marginTop: 6, fontSize: "var(--nk-fs-caption)", color: "var(--nk-slate)",
        }}>{help}</span>
      )}
    </label>
  );
}

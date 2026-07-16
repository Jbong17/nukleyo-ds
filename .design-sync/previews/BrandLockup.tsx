import { BrandLockup } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Full = () => (
  <Stage>
    <BrandLockup />
  </Stage>
);

export const Compact = () => (
  <Stage>
    <BrandLockup compact />
  </Stage>
);

// The lockup on the opt-in document voice — --nk-paper remaps to the pale surface.
export const OnScholarly = () => (
  <div data-nk-theme="scholarly" style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)' }}>
    <BrandLockup />
  </div>
);

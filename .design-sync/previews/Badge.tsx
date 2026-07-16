import { Badge } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Statuses = () => (
  <Stage style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <Badge status="info">Preprint</Badge>
    <Badge status="success">Converged</Badge>
    <Badge status="warning">Underpowered</Badge>
    <Badge status="danger">Failed check</Badge>
  </Stage>
);

export const InlineWithText = () => (
  <Stage style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--nk-font-sans)', fontSize: 'var(--nk-fs-sm)', color: 'var(--nk-graphite)' }}>
    <span>Pipeline run #418</span>
    <Badge status="success">Passing</Badge>
  </Stage>
);

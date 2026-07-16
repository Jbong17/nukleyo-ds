import { Button } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Variants = () => (
  <Stage style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">Run analysis</Button>
    <Button variant="accent">Fit model</Button>
    <Button variant="outline">Export CSV</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="subtle">Details</Button>
  </Stage>
);

export const Sizes = () => (
  <Stage style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </Stage>
);

export const WithIcon = () => (
  <Stage style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="accent" icon={<span aria-hidden>&#9656;</span>}>Run notebook</Button>
    <Button variant="outline" icon={<span aria-hidden>&#8595;</span>}>Download</Button>
  </Stage>
);

export const Disabled = () => (
  <Stage style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" disabled>Running&#8230;</Button>
    <Button variant="outline" disabled>Unavailable</Button>
  </Stage>
);

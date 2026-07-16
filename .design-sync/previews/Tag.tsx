import { Tag } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Tones = () => (
  <Stage style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Tag tone="navy">Data Science</Tag>
    <Tag tone="teal">Causal Inference</Tag>
    <Tag tone="amber">Bayesian</Tag>
    <Tag tone="coral">Peer Review</Tag>
    <Tag tone="verdant">Reproducible</Tag>
    <Tag tone="neutral">Draft</Tag>
  </Stage>
);

export const TopicRow = () => (
  <Stage style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Tag tone="navy">Biology Education</Tag>
    <Tag tone="teal">Survival Analysis</Tag>
    <Tag tone="teal">Regression</Tag>
    <Tag tone="neutral">n = 248</Tag>
  </Stage>
);

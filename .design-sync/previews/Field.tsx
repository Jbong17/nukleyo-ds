import { Field } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Basic = () => (
  <Stage style={{ maxWidth: 360 }}>
    <Field label="Dataset name" placeholder="e.g. enrollment_2024.csv" help="CSV or Parquet, UTF-8." />
  </Stage>
);

export const Stacked = () => (
  <Stage style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
    <Field label="Significance level (&#945;)" placeholder="0.05" />
    <Field label="Bootstrap resamples" placeholder="10000" help="Higher is smoother but slower." />
  </Stage>
);

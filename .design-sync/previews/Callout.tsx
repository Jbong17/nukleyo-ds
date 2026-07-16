import { Callout } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Kinds = () => (
  <Stage style={{ display: 'grid', gap: 12, maxWidth: 600 }}>
    <Callout kind="note">Tabular numerals are on wherever numbers appear, so decimals align down a column.</Callout>
    <Callout kind="method">Non-parametric first: Wilcoxon signed-rank for small n, bootstrap CIs at 10k resamples.</Callout>
    <Callout kind="caution">This estimate is unadjusted for clustering by classroom &#8212; treat the interval as optimistic.</Callout>
    <Callout kind="result">The intervention effect survives instructor fixed effects (p = 0.004).</Callout>
  </Stage>
);

export const CustomTitle = () => (
  <Stage style={{ maxWidth: 600 }}>
    <Callout kind="method" title="Pre-registration">
      Primary outcome and analysis plan were registered on OSF before any data were collected.
    </Callout>
  </Stage>
);

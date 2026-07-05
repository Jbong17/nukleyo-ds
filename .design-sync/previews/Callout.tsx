import { Callout } from 'nukleyo-ds';

export const Kinds = () => (
  <div style={{ display: 'grid', gap: 12, maxWidth: 600 }}>
    <Callout kind="note">Tabular numerals are on wherever numbers appear, so decimals align down a column.</Callout>
    <Callout kind="method">Non-parametric first: Wilcoxon signed-rank for small n, bootstrap CIs at 10k resamples.</Callout>
    <Callout kind="caution">This estimate is unadjusted for clustering by classroom &#8212; treat the interval as optimistic.</Callout>
    <Callout kind="result">The intervention effect survives instructor fixed effects (p = 0.004).</Callout>
  </div>
);

export const CustomTitle = () => (
  <div style={{ maxWidth: 600 }}>
    <Callout kind="method" title="Pre-registration">
      Primary outcome and analysis plan were registered on OSF before any data were collected.
    </Callout>
  </div>
);

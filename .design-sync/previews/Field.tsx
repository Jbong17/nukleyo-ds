import { Field } from 'nukleyo-ds';

export const Basic = () => (
  <div style={{ maxWidth: 360 }}>
    <Field label="Dataset name" placeholder="e.g. enrollment_2024.csv" help="CSV or Parquet, UTF-8." />
  </div>
);

export const Stacked = () => (
  <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
    <Field label="Significance level (&#945;)" placeholder="0.05" />
    <Field label="Bootstrap resamples" placeholder="10000" help="Higher is smoother but slower." />
  </div>
);

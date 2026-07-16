import { DataTable } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

const columns = [
  { key: 'model', label: 'Model' },
  { key: 'auc', label: 'AUC', numeric: true },
  { key: 'f1', label: 'F1', numeric: true },
  { key: 'n', label: 'n', numeric: true },
];

const rows = [
  { model: 'Logistic regression', auc: '0.881', f1: '0.79', n: '12,400' },
  { model: 'Random forest', auc: '0.926', f1: '0.84', n: '12,400' },
  { model: 'Gradient boosting', auc: '0.941', f1: '0.86', n: '12,400' },
];

export const Results = () => (
  <Stage>
    <DataTable
      caption="Table 1. Discrimination on the 2024 held-out cohort."
      columns={columns}
      rows={rows}
    />
  </Stage>
);

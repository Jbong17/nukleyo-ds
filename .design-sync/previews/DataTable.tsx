import { DataTable } from 'nukleyo-ds';

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
  <DataTable
    caption="Table 1. Discrimination on the 2024 held-out cohort."
    columns={columns}
    rows={rows}
  />
);

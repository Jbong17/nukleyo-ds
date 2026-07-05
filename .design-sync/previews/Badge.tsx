import { Badge } from 'nukleyo-ds';

export const Statuses = () => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <Badge status="info">Preprint</Badge>
    <Badge status="success">Converged</Badge>
    <Badge status="warning">Underpowered</Badge>
    <Badge status="danger">Failed check</Badge>
  </div>
);

export const InlineWithText = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--nk-font-sans)', fontSize: 'var(--nk-fs-sm)', color: 'var(--nk-graphite)' }}>
    <span>Pipeline run #418</span>
    <Badge status="success">Passing</Badge>
  </div>
);

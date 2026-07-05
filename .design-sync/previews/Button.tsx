import { Button } from 'nukleyo-ds';

export const Variants = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">Run analysis</Button>
    <Button variant="accent">Fit model</Button>
    <Button variant="outline">Export CSV</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="subtle">Details</Button>
  </div>
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
);

export const WithIcon = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="accent" icon={<span aria-hidden>&#9656;</span>}>Run notebook</Button>
    <Button variant="outline" icon={<span aria-hidden>&#8595;</span>}>Download</Button>
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
    <Button variant="primary" disabled>Running&#8230;</Button>
    <Button variant="outline" disabled>Unavailable</Button>
  </div>
);

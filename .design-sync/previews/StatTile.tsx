import { StatTile } from 'nukleyo-ds';

export const Single = () => (
  <div style={{ maxWidth: 260 }}>
    <StatTile label="Model AUC" value="0.94" delta={{ value: '+0.06', dir: 'up' }} note="vs. baseline" />
  </div>
);

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(170px, 1fr))', gap: 16 }}>
    <StatTile label="Effect size" value="0.42" unit="SD" delta={{ value: '+0.11', dir: 'up' }} note="95% CI 0.28&#8211;0.56" />
    <StatTile label="Dropout" value="7.3" unit="%" delta={{ value: '-1.2 pp', dir: 'down' }} note="term over term" />
    <StatTile label="Reliability" value="0.88" delta={{ value: '0.00', dir: 'flat' }} note="Cronbach&#8217;s &#945;" />
  </div>
);

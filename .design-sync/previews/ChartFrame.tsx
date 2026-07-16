import { ChartFrame } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

const Bars = () => {
  const data = [
    { label: 'Logistic', v: 0.881 },
    { label: 'Forest', v: 0.926 },
    { label: 'Boosting', v: 0.941 },
  ];
  const colors = ['var(--nk-viz-1)', 'var(--nk-viz-2)', 'var(--nk-viz-3)'];
  return (
    <svg viewBox="0 0 320 165" width="100%" role="img" aria-label="AUC by model">
      {data.map((d, i) => {
        const h = (d.v - 0.7) / 0.3 * 120;
        const x = 34 + i * 95;
        return (
          <g key={d.label}>
            <rect x={x} y={140 - h} width={56} height={h} fill={colors[i]} rx={2} />
            <text x={x + 28} y={135 - h} textAnchor="middle" fontSize="10"
              fontFamily="var(--nk-font-mono)" fill="var(--nk-graphite)">{d.v.toFixed(3)}</text>
            <text x={x + 28} y={156} textAnchor="middle" fontSize="10"
              fontFamily="var(--nk-font-sans)" fill="var(--nk-slate)">{d.label}</text>
          </g>
        );
      })}
    </svg>
  );
};

export const WithChart = () => (
  <Stage style={{ maxWidth: 420 }}>
    <ChartFrame
      figureNumber={2}
      title="Model discrimination (AUC) on the 2024 held-out cohort."
      source="Nukleyo Decision Science, 2024."
    >
      <Bars />
    </ChartFrame>
  </Stage>
);

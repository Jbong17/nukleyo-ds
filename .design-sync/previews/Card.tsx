import { Card } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const Basic = () => (
  <Stage style={{ maxWidth: 380 }}>
    <Card title="Model summary" eyebrow="Gradient Boosting">
      Trained on 12,400 encounters with 5-fold cross-validation. Early stopping at
      340 rounds; calibration checked against a held-out 2024 cohort.
    </Card>
  </Stage>
);

export const WithFooter = () => (
  <Stage style={{ maxWidth: 380 }}>
    <Card title="Enrollment cohort" eyebrow="Study 21-B" footer="Updated 3 days ago &#183; J. B. Bongalos">
      248 students across 6 sections. Outcome: post-course concept-inventory gain,
      adjusted for prior GPA.
    </Card>
  </Stage>
);

export const Accented = () => (
  <Stage style={{ maxWidth: 380 }}>
    <Card title="Key finding" accent="var(--nk-teal)">
      The intervention raised mean concept-inventory scores by 0.42 SD
      (95% CI 0.28&#8211;0.56), robust to instructor fixed effects.
    </Card>
  </Stage>
);

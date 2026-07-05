import { Card } from 'nukleyo-ds';

export const Basic = () => (
  <div style={{ maxWidth: 380 }}>
    <Card title="Model summary" eyebrow="Gradient Boosting">
      Trained on 12,400 encounters with 5-fold cross-validation. Early stopping at
      340 rounds; calibration checked against a held-out 2024 cohort.
    </Card>
  </div>
);

export const WithFooter = () => (
  <div style={{ maxWidth: 380 }}>
    <Card title="Enrollment cohort" eyebrow="Study 21-B" footer="Updated 3 days ago &#183; J. B. Bongalos">
      248 students across 6 sections. Outcome: post-course concept-inventory gain,
      adjusted for prior GPA.
    </Card>
  </div>
);

export const Accented = () => (
  <div style={{ maxWidth: 380 }}>
    <Card title="Key finding" accent="var(--nk-teal)">
      The intervention raised mean concept-inventory scores by 0.42 SD
      (95% CI 0.28&#8211;0.56), robust to instructor fixed effects.
    </Card>
  </div>
);

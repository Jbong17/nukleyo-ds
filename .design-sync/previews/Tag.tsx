import { Tag } from 'nukleyo-ds';

export const Tones = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Tag tone="navy">Data Science</Tag>
    <Tag tone="teal">Causal Inference</Tag>
    <Tag tone="amber">Bayesian</Tag>
    <Tag tone="coral">Peer Review</Tag>
    <Tag tone="verdant">Reproducible</Tag>
    <Tag tone="neutral">Draft</Tag>
  </div>
);

export const TopicRow = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Tag tone="navy">Biology Education</Tag>
    <Tag tone="teal">Survival Analysis</Tag>
    <Tag tone="teal">Regression</Tag>
    <Tag tone="neutral">n = 248</Tag>
  </div>
);

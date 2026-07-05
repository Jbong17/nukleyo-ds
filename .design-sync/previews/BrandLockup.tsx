import { BrandLockup } from 'nukleyo-ds';

export const Full = () => <BrandLockup />;

export const Compact = () => <BrandLockup compact />;

export const OnDark = () => (
  <div data-nk-theme="dark" style={{ background: 'var(--nk-abyss)', padding: 28, borderRadius: 12 }}>
    <BrandLockup />
  </div>
);

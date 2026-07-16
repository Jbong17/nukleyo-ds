import { CitationBlock } from 'nukleyo-ds';

// The card harness paints its own white body, so each story paints the stage
// (--nk-paper) itself — the default theme's text tokens are light.
const Stage = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: 'var(--nk-paper)', padding: 'var(--nk-space-6)', borderRadius: 'var(--nk-radius)', ...style }}>
    {children}
  </div>
);

export const References = () => (
  <Stage style={{ display: 'grid', gap: 14, maxWidth: 640 }}>
    <CitationBlock doi="10.1037/edu0000567">
      Bongalos, J. B. (2024). Retrieval practice and concept-inventory gains in
      introductory biology: A cluster-randomized trial. <em>Journal of Educational
      Psychology, 116</em>(4), 512&#8211;529.
    </CitationBlock>
    <CitationBlock>
      Gelman, A., &amp; Hill, J. (2007). <em>Data analysis using regression and
      multilevel/hierarchical models.</em> Cambridge University Press.
    </CitationBlock>
  </Stage>
);

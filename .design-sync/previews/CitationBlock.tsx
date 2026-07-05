import { CitationBlock } from 'nukleyo-ds';

export const References = () => (
  <div style={{ display: 'grid', gap: 14, maxWidth: 640 }}>
    <CitationBlock doi="10.1037/edu0000567">
      Bongalos, J. B. (2024). Retrieval practice and concept-inventory gains in
      introductory biology: A cluster-randomized trial. <em>Journal of Educational
      Psychology, 116</em>(4), 512&#8211;529.
    </CitationBlock>
    <CitationBlock>
      Gelman, A., &amp; Hill, J. (2007). <em>Data analysis using regression and
      multilevel/hierarchical models.</em> Cambridge University Press.
    </CitationBlock>
  </div>
);

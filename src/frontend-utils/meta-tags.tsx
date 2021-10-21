const metaDescription =
  'Carlo Gino Catapang. Web Developer, Software Developer, Software Engineer, Frontend Engineer. React, JavaScript, TypeScript expert. Husband and Father.';

export const commonMetaTags = (slug = '') => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content="/assets/logo.png" />
    <meta name="twitter:description" content={metaDescription} />
    <meta name="twitter:title" content="Carlo Gino Catapang" />
    <meta property="og:url" content={`https://carlogino.cc${slug}`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Carlo Gino Catapang" />
    <meta property="og:description" content={metaDescription} />
    <meta property="og:image" content="/assets/preview.png" />
  </>
);

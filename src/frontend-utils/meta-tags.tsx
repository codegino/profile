import type {Metadata} from 'next';

const metaDescription = (pageName: string) =>
  `Carlo Gino Catapang | Code Gino | ${pageName}, Web Developer, Software Engineer, Frontend Engineer. React, JavaScript, TypeScript expert. Husband & Father`;

export const commonMetaTags = (
  pageName: string,
  slug = '/',
  previewImg = 'preview.png',
) => (
  <>
    <meta
      name="twitter:image"
      content={`https://carlogino.com/assets/${previewImg}`}
    />
    <meta name="twitter:description" content={metaDescription(pageName)} />
    <meta name="twitter:title" content="Carlo Gino Catapang" />
    <meta property="og:url" content={`https://carlogino.com${slug}`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Carlo Gino Catapang" />
    <meta property="og:description" content={metaDescription(pageName)} />
    <meta
      property="og:image"
      content={`https://carlogino.com/assets/${previewImg}`}
    />
    <meta name="description" content={metaDescription(pageName)} />
    <link rel="canonical" href={`https://carlogino.com${slug}`} />
    <link rel="icon" href="/favicon.ico" />
    {/* For PWA */}
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/assets/logo.png"></link>
  </>
);

export const newCommonMetaTags = (
  pageName: string,
  slug = '/',
  previewImg = 'preview.png',
): Metadata => {
  return {
    twitter: {
      images: `https://carlogino.com/assets/${previewImg}`,
      title: 'Carlo Gino Catapang',
      description: metaDescription(pageName),
      creator: '@codegino',
      site: '@codegino',
    },
    openGraph: {
      url: `https://carlogino.com${slug}`,
      type: 'website',
      title: 'Carlo Gino Catapang',
      description: metaDescription(pageName),
      images: {
        url: `https://carlogino.com/assets/${previewImg}`,
      },
    },
    description: metaDescription(pageName),
    alternates: {
      canonical: `https://carlogino.com${slug}`,
    },
    manifest: '/manifest.json',
    icons: {
      apple: '/assets/logo.png',
      icon: '/favicon.ico',
    },
  };
};

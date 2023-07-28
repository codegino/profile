import type {Metadata} from 'next';

const metaDescription = (pageName: string) =>
  `Carlo Gino Catapang | Code Gino | ${pageName}, Web Developer, Software Engineer, Frontend Engineer. React, JavaScript, TypeScript expert. Husband & Father`;

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

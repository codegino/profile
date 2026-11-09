import type {Metadata} from 'next';

export const SITE_URL = 'https://carlogino.com';

const metaDescription = (pageName: string) =>
  `Carlo Gino Catapang | Code Gino | ${pageName}, Web Developer, Software Engineer, Frontend Engineer. React, JavaScript, TypeScript expert. Husband & Father`;

export const newCommonMetaTags = (
  pageName: string,
  slug = '/',
  previewImg = 'preview.png',
): Metadata => {
  return {
    twitter: {
      images: `${SITE_URL}/assets/${previewImg}`,
      title: 'Carlo Gino Catapang',
      description: metaDescription(pageName),
      creator: '@codegino',
      site: '@codegino',
    },
    openGraph: {
      url: `${SITE_URL}${slug}`,
      type: 'website',
      title: 'Carlo Gino Catapang',
      description: metaDescription(pageName),
      images: {
        url: `${SITE_URL}/assets/${previewImg}`,
      },
    },
    description: metaDescription(pageName),
    alternates: {
      canonical: `${SITE_URL}${slug}`,
    },
    manifest: '/manifest.json',
    icons: {
      apple: '/assets/logo.png',
      icon: '/favicon.ico',
    },
  };
};

import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/sv/', '/en/'],
    },
    sitemap: 'https://carlogino.com/sitemap.xml',
  };
}

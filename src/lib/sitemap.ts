import fs from 'fs';

type SiteMapUrl = {
  slug: string;
  lastMod: string;
  priority: number;
  changeFrequency:
    | 'never'
    | 'yearly'
    | 'monthly'
    | 'weekly'
    | 'daily'
    | 'hourly'
    | 'always';
};

const staticPages: SiteMapUrl[] = [
  {
    slug: '',
    lastMod: '2021-11-14',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
];

const ROOT_URL = 'https://codegino.com';

async function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${staticPages
    .map(sitemap => {
      return `
        <url>
          <loc>${ROOT_URL}${sitemap.slug}</loc>
          <priority>${sitemap.priority}</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

export default generateSitemap;

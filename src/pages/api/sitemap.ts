import {NextApiHandler} from 'next';

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
    lastMod: '2021-10-11',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
  {
    slug: '/about',
    lastMod: '2021-10-11',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
  {
    slug: '/resume',
    lastMod: '2021-10-11',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog',
    lastMod: '2021-10-11',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
];

const ROOT_URL = 'https://www.carlogino.cc';

const sitemap: NextApiHandler = async (_, res) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(sitemap => {
          return `
            <url>
              <loc>${ROOT_URL}${sitemap.slug}</loc>
              <lastmod>${sitemap.lastMod}</lastmod>
              <changefreq>${sitemap.changeFrequency}</changefreq>
              <priority>${sitemap.priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
};

export default sitemap;

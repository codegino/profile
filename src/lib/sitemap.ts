import fs from 'fs';
import path from 'path';
import {BlogMetadata} from '../models/blog';

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

const generateBlogSiteMapData = (): SiteMapUrl[] => {
  const postsDirectory = path.join(process.cwd(), 'src/pages/blog');
  const blogDirectories = fs
    .readdirSync(postsDirectory)
    .filter(filename => !filename.includes('index.tsx')); // exclude this file

  const blogsSitemaps: SiteMapUrl[] = blogDirectories.map(directory => {
    const mdxContent = require(`../pages/blog/${directory}/index.mdx`);

    const meta: BlogMetadata = mdxContent?.meta ?? {};

    return {
      slug: directory,
      changeFrequency: 'monthly',
      lastMod: meta.date,
      priority: 1,
    };
  });

  return blogsSitemaps;
};

const ROOT_URL = 'https://www.carlogino.cc';

async function generateSitemap() {
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
  ${generateBlogSiteMapData()
    .map(sitemap => {
      return `
        <url>
          <loc>${ROOT_URL}/blog/${sitemap.slug}</loc>
          <lastmod>${sitemap.lastMod}</lastmod>
          <changefreq>${sitemap.changeFrequency}</changefreq>
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

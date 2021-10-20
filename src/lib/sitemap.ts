import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import {BlogMetadata} from '../models/blog';
import {BLOGS_PATH, getAllBlogsPaths} from '../utils/mdxUtils';

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
    lastMod: '2021-10-14',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
  {
    slug: '/about',
    lastMod: '2021-10-14',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
  {
    slug: '/resume',
    lastMod: '2021-10-14',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog',
    lastMod: '2021-10-14',
    priority: 1.0,
    changeFrequency: 'monthly',
  },
];

const generateBlogSiteMapData = async (): Promise<SiteMapUrl[]> => {
  const blogsSitemaps = await getAllBlogsPaths();

  return blogsSitemaps.map(directory => {
    const postFilePath = path.join(BLOGS_PATH, `${directory}`);

    const source = fs.readFileSync(postFilePath);

    const {data} = matter(source);

    const meta = data as BlogMetadata;

    return {
      slug: directory.replace('.mdx', ''),
      changeFrequency: 'monthly',
      lastMod: meta.date,
      priority: 1,
    };
  });
};

const ROOT_URL = 'https://carlogino.cc';

async function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.carlogino.cc</loc>
  </url>
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
  ${(await generateBlogSiteMapData())
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

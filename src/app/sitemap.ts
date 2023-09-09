import type {MetadataRoute} from 'next';
import {getBlogsMetadata, getNovelsMetadata} from '../utils/mdx.utils';

const ROOT_URL = 'https://carlogino.com';

const staticPages: MetadataRoute.Sitemap = [
  {
    url: `${ROOT_URL}/`,
    lastModified: '2021-12-29',
  },
  {
    url: `${ROOT_URL}/nft`,
    lastModified: '2021-12-29',
  },
  {
    url: `${ROOT_URL}/about`,
    lastModified: '2021-12-29',
  },
  {
    url: `${ROOT_URL}/resume`,
    lastModified: '2021-12-29',
  },
  {
    url: `${ROOT_URL}/blog`,
    lastModified: '2021-12-29',
  },
  {
    url: `${ROOT_URL}/novel`,
    lastModified: '2021-12-29',
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogsMetadata = await getBlogsMetadata();
  const blogsSitemaps: MetadataRoute.Sitemap = blogsMetadata.map(meta => ({
    url: `${ROOT_URL}/blog/${meta.slug}`,
    lastModified: meta.dateUpdated,
  }));

  const novelsMetadata = await getNovelsMetadata();
  const novelsSitemaps: MetadataRoute.Sitemap = novelsMetadata.map(meta => ({
    url: `${ROOT_URL}/novel/${meta.slug}`,
    lastModified: meta.dateUpdated,
  }));

  return [...staticPages, ...blogsSitemaps, ...novelsSitemaps];
}

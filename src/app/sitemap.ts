import type {MetadataRoute} from 'next';
import {getBlogsMetadata} from '../utils/mdx.utils';

const ROOT_URL = 'https://carlogino.com';

const staticPages: MetadataRoute.Sitemap = [
  // {
  //   url: `${ROOT_URL}/`,
  //   lastModified: '2021-12-29',
  // },
  // {
  //   url: `${ROOT_URL}/about`,
  //   lastModified: '2021-12-29',
  // },
  // {
  //   url: `${ROOT_URL}/resume`,
  //   lastModified: '2021-12-29',
  // },
  // {
  //   url: `${ROOT_URL}/blog`,
  //   lastModified: '2021-12-29',
  // },
  // {
  //   url: `${ROOT_URL}/words`,
  //   lastModified: '2021-12-29',
  // },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogsMetadata = await getBlogsMetadata();

  const blogsSitemaps: MetadataRoute.Sitemap = blogsMetadata.map(meta => ({
    url: `${ROOT_URL}/blog/${meta.slug}`,
    lastModified: meta.dateUpdated,
  }));

  return [...staticPages, ...blogsSitemaps];
}

import {blogAssets} from '@/data/blog-asset';

export function getBlogAssetUrlFromApiTable(slug: string) {
  return blogAssets[slug];
}

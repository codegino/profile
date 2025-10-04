import { createClient } from 'contentful';
import { blurImage } from './image-blur.utils';
import { getImageUrl } from './get-image';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getBlurringImage(key: string, prefix = "static") {
  const url = getImageUrl(key, prefix)

  if (!url) {
    throw new Error('Asset not found. Check contentful sdk.');
  }

  return await blurImage(url)
}

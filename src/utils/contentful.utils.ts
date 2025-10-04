import { blurImage } from './image-blur.utils';
import { getImageUrl } from './get-image';


export async function getBlurringImage(key: string, prefix = "static") {
  const url = getImageUrl(key, prefix)

  if (!url) {
    throw new Error('Asset not found. Check contentful sdk.');
  }

  return await blurImage(url)
}

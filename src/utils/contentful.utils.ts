import {createClient} from 'contentful';
import {blurImage} from './image-blur.utils';

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getBlurringImage(key: string) {
  const asset = await client.getAsset(key);

  return await blurImage(`https:${asset.fields.file.url}`);
}

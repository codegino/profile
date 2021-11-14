import {getPlaiceholder} from 'plaiceholder';

type OPTIMIZE_LEVEL = 4 | 8 | 16 | 32 | 64;

export const blurImage = async (
  uri: string,
  optimizeLevel: OPTIMIZE_LEVEL = 4,
) => {
  return await getPlaiceholder(uri, {
    size: optimizeLevel,
  });
};

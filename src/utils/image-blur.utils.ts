import {getPlaiceholder} from 'plaiceholder';

type OPTIMIZE_LEVEL = 4 | 8 | 16 | 32 | 64;

export const blurImage = async (
  uri: string,
  optimizeLevel: OPTIMIZE_LEVEL = 4,
) => {
  const buffer = await fetch(uri).then(async res =>
    Buffer.from(await res.arrayBuffer()),
  );

  const placeholder = await getPlaiceholder(buffer, {
    size: optimizeLevel,
  });

  const {
    metadata: {height, width},
  } = placeholder;

  const img = {
    height,
    width,
    src: uri,
  };

  return {
    ...placeholder,
    img,
  };
};

export type BlurImageType = Awaited<ReturnType<typeof blurImage>>;

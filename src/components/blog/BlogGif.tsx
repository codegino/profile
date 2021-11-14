import React from 'react';
import Image, {ImageProps} from 'next/image';

const BlogGif = ({width = 800, height = 600, ...props}: ImageProps) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      padding: '0 1rem',
    }}
  >
    <Image
      {...props}
      layout="responsive"
      width={width}
      height={height}
      alt="GIF"
      placeholder="blur"
      blurDataURL="/assets/blog-placeholder.jpeg"
    />
  </div>
);

export default BlogGif;

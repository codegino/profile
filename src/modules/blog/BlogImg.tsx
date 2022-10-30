import Image from 'next/legacy/image';
import type {ImageProps} from 'next/legacy/image';

const BlogImg = ({
  width = 1100,
  height = 600,
  objectFit = 'contain',
  layout = 'responsive',
  ...props
}: ImageProps) => (
  <div className="w-full h-full px-8">
    <Image
      {...props}
      layout={layout}
      width={width}
      height={height}
      alt="GIF"
      title="GIF"
      placeholder="blur"
      objectPosition="center"
      objectFit={objectFit}
      blurDataURL="/assets/blog-placeholder.jpeg"
    />
  </div>
);

export default BlogImg;

import Image, {type ImageProps} from 'next/image';

const BlogImg = ({width = 1100, height = 600, ...props}: ImageProps) => (
  <div className="w-full h-full px-8">
    <Image
      {...props}
      width={width}
      height={height}
      alt="GIF"
      title="GIF"
      placeholder="blur"
      className="object-contain object-center"
      blurDataURL="/assets/blog-placeholder.jpeg"
    />
  </div>
);

export default BlogImg;

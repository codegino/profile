import Image, {type ImageProps} from 'next/image';

const BlogImg = ({width = 1100, height = 600, ...props}: ImageProps) => (
  <div className="size-full px-8">
    <Image
      {...props}
      width={width}
      height={height}
      alt={props.alt || 'An image of a blog post'}
      title={props.title || 'An image of a blog post'}
      placeholder="blur"
      className="object-contain object-center"
      blurDataURL="/assets/blog-placeholder.jpeg"
    />
  </div>
);

export default BlogImg;

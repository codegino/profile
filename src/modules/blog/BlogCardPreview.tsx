import Image from 'next/image';
import NextLink from '../../components/basic/NextLink';
import type {IBlogMetadata} from '../../models/blog';

type Props = {
  blog: IBlogMetadata;
};

export const BlogCardPreview = ({blog}: Props) => {
  return (
    <div className="w-full overflow-hidden shadow-sm hover:shadow-md hover:shadow-dark shadow-dark rounded-2xl bg-light pb-1 md:max-w-4xl">
      <NextLink href={`/blog/${blog.slug}`} aria-label={blog.title}>
        <article className="text-center">
          <Image
            src={blog.bannerId}
            alt={blog.bannerDescription}
            title={blog.bannerDescription}
            layout="responsive"
            height={670}
            width={1200}
            objectFit="cover"
            placeholder="blur"
            blurDataURL="/assets/blog-placeholder.jpeg"
          />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p className="mt-2 text-dark">
            <i>{blog.date}</i>
          </p>
        </article>
      </NextLink>
    </div>
  );
};

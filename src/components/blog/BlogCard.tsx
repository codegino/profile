import React from 'react';
import Image from 'next/image';
import type {IBlogMetadata} from '../../models/blog';
import NextLink from '../basic/NextLink';

type Props = {
  blog: IBlogMetadata;
};

const BlogCard: React.FC<Props> = ({blog}) => {
  return (
    <article
      className="
      rounded-xl w-full py-4 px-8 flex items-center justify-between
      shadow-sm hover:shadow-md hover:shadow-dark shadow-dark mb-5 last:mb-0 max-w-blog-card-sm md:max-w-blog-card-md
      lg:max-w-blog-card-lg xl:max-w-blog-card-xl
    "
    >
      <NextLink href={`/blog/${blog.slug}`} aria-label={blog.title}>
        <h2>{blog.title}</h2>
        <h3>{blog.description}</h3>
        <p>{blog.date}</p>
        {blog.tags && blog.tags.length ? (
          <div className="mt-4 flex gap-2 flex-wrap">
            {blog.tags.map(tag => (
              <span
                className="inline-block bg-light border-light py-2 px-4 rounded-xl"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </NextLink>
      <div
        className="relative rounded-2xl overflow-hidden
        h-80 w-60 min-w-blog-image-sm md:min-w-blog-image-md
      "
      >
        <Image
          src={blog.bannerId}
          alt={blog.bannerDescription}
          title={blog.bannerDescription}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/assets/blog-placeholder.jpeg"
        />
      </div>
    </article>
  );
};

export default BlogCard;

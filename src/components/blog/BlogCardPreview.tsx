import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type {IBlogMetadata} from '../../models/blog';

type Props = {
  blog: IBlogMetadata;
};

export const BlogCardPreview = ({blog}: Props) => {
  return (
    <section className="w-full overflow-hidden shadow-md rounded-2xl bg-light pb-1 md:max-w-6xl">
      <Link href={`/blog/${blog.slug}`}>
        <a aria-label={blog.title}>
          <article className="text-center">
            <Image
              src={blog.bannerId}
              alt={blog.description}
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
        </a>
      </Link>
    </section>
  );
};

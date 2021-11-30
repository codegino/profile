import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import type {IBlogMetadata} from '../../models/blog';
import {mediaQuery} from '../../utils/media-query';

type Props = {
  blog: IBlogMetadata;
};

export const BlogCardPreview = ({blog}: Props) => {
  return (
    <Container>
      <Link href={`/blog/${blog.slug}`}>
        <a>
          <CardContent>
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
            <p className="blog-date">
              <i>{blog.date}</i>
            </p>
          </CardContent>
        </a>
      </Link>
    </Container>
  );
};

const CardContent = styled.article`
  text-align: center;

  .blog-date {
    margin-top: var(--spacing-small);
    color: var(--color-dark);
  }

  h2,
  p {
    padding: 0 var(--spacing-very-small);
  }
`;

const Container = styled.section`
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  background-color: var(--color-light);
  padding-bottom: var(--spacing-small);
  border: 1px solid var(--color-light-dark);

  ${mediaQuery(
    600,
    `
  max-width: 50rem;
  `,
  )};
`;

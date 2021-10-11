import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {BlogMetadata} from '../../models/blog';
import {mediaQuery} from '../../utils/media-query';

const BlogCard: React.FC<BlogMetadata> = blog => {
  return (
    <Container>
      <Link href={`/blog/${blog.slug}`}>
        <a aria-label={blog.title}>
          <h2>{blog.title}</h2>
          <h3>{blog.date}</h3>
        </a>
      </Link>
    </Container>
  );
};

const Container = styled.article`
  border: 1px solid var(--color-dark);
  padding: var(--padding-small) var(--padding-medium);
  min-width: 20rem;
  max-width: 20rem;
  border-radius: 3px;
  overflow: hidden;

  :not(:last-child) {
    margin-bottom: var(--margin-small);
  }

  ${mediaQuery(500, `min-width: 30rem; max-width: 30rem;`)}
  ${mediaQuery(700, `min-width: 35rem; max-width: 35rem;`)}
  ${mediaQuery(900, `min-width: 40rem; max-width: 40rem;`)}
  ${mediaQuery(1200, `min-width: 45rem; max-width: 45rem;`)}
`;

export default BlogCard;

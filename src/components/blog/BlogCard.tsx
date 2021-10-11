import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {BlogMetadata} from '../../models/blog';

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
  min-width: 30rem;
  border-radius: 3px;

  :not(:last-child) {
    margin-bottom: var(--margin-small);
  }
`;

export default BlogCard;

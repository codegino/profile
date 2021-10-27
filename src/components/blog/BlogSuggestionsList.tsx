import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {IBlogMetadata} from '../../models/blog';
import {mediaQuery} from '../../utils/media-query';
import {BlogCardPreview} from './BlogCardPreview';

type Props = {
  blogs: IBlogMetadata[];
};

const BlogSuggestionsList = ({blogs}: Props) => {
  return (
    <Container id="blogs-list">
      <h2 className="blogs-list__label">
        Recent&nbsp;
        <Link href="/blog">
          <a aria-label="Blogs List">Blogs</a>
        </Link>
      </h2>
      <BlogsContainer>
        {blogs.map(blog => (
          <BlogCardPreview blog={blog} key={blog.slug} />
        ))}
      </BlogsContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  padding: var(--padding-big) 0;

  .blogs-list__label {
    margin-bottom: var(--margin-medium);
    position: relative;
    top: -2rem;
    font-size: 4rem;

    > a {
      color: var(--color-primary-dark);
      font-size: 1em;
    }
  }
`;

const BlogsContainer = styled.section`
  display: grid;
  width: 100vw;
  overflow-x: auto;
  padding: 0 var(--padding-very-small);
  grid-template-columns: 1fr;
  max-width: 100rem;
  column-gap: 2rem;
  row-gap: 1.5rem;

  ${mediaQuery(
    600,
    `
      grid-template-columns: 1fr 1fr;

    `,
  )}
`;

export default BlogSuggestionsList;

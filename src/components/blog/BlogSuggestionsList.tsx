import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {underlineOnHover} from '../../frontend-utils/animation-effects';
import type {IBlogMetadata} from '../../models/blog';
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

      <form action="https://sendfox.com/codegino">
        <SubscribeButton>Subscribe to my Newsletter</SubscribeButton>
      </form>
    </Container>
  );
};

const SubscribeButton = styled.button`
  cursor: pointer;
  border-radius: 10px;
  margin-top: var(--spacing-medium);
  padding: 2rem;
  background-color: var(--color-primary-dark);
  outline: none;
  border: 1px solid var(--color-primary-light);
  color: var(--color-light);
  font-weight: bold;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  padding: var(--spacing-big) 0;

  .blogs-list__label {
    margin-bottom: var(--spacing-medium);
    position: relative;
    top: -2rem;
    font-size: 4rem;

    > a {
      color: var(--color-primary-dark);
      font-size: 1em;

      ${underlineOnHover('var(--color-primary-dark)')}
    }
  }
`;

const BlogsContainer = styled.section`
  display: grid;
  overflow-x: auto;
  padding: 0 var(--spacing-small);
  grid-template-columns: 1fr;
  max-width: 80rem;
  column-gap: var(--spacing-medium);
  row-gap: var(--spacing-medium);

  ${mediaQuery(
    600,
    `
      grid-template-columns: 1fr 1fr;
    `,
  )}
`;

export default BlogSuggestionsList;

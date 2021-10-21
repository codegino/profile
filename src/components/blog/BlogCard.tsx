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
          <h3>{blog.description}</h3>
          <p>{blog.date}</p>
          <TagContainer>
            {blog.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagContainer>
        </a>
      </Link>
    </Container>
  );
};

const Container = styled.article`
  border: 1px solid var(--color-light);
  padding: var(--padding-small) var(--padding-medium);
  width: 100%;
  border-radius: 3px;
  overflow: hidden;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 1px 2px 0px var(--color-dark);
  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 2px 4px 0px var(--color-dark);
  }

  :not(:last-child) {
    margin-bottom: var(--margin-small);
  }

  ${mediaQuery(500, `min-width: 50rem; max-width: 45rem;`)}
  ${mediaQuery(700, `min-width: 60rem; max-width: 60rem;`)}
  ${mediaQuery(900, `min-width: 65rem; max-width: 65rem;`)}
  ${mediaQuery(1200, `min-width: 70rem; max-width: 70rem;`)}
`;

const TagContainer = styled.section`
  margin-top: var(--margin-small);
`;

const Tag = styled.span`
  display: inline-block;
  background: var(--color-light);
  border: 1px solid var(--color-light-dark);
  padding: var(--padding-very-small) var(--padding-small);
  border-radius: 0.5rem;

  :not(:first-of-type) {
    margin: 0 var(--margin-very-small);
  }
`;

export default BlogCard;

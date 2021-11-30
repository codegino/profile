import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import type {IBlogMetadata} from '../../models/blog';
import {mediaQuery} from '../../utils/media-query';

type Props = {
  blog: IBlogMetadata;
};

const BlogCard: React.FC<Props> = ({blog}) => {
  return (
    <Container>
      <Link href={`/blog/${blog.slug}`}>
        <a aria-label={blog.title}>
          <h2>{blog.title}</h2>
          <h3>{blog.description}</h3>
          <p>{blog.date}</p>
          {blog.tags && blog.tags.length ? (
            <TagContainer>
              {blog.tags.map(tag => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </TagContainer>
          ) : null}
        </a>
      </Link>
      <ImageContainer>
        <Image
          src={blog.bannerId}
          alt={blog.description}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/assets/blog-placeholder.jpeg"
        />
      </ImageContainer>
    </Container>
  );
};

const ImageContainer = styled.div`
  position: relative;
  max-height: 22rem;
  min-height: 22rem;
  max-width: 10rem;
  min-width: 10rem;
  border-radius: 1rem;
  overflow: hidden;

  ${mediaQuery(
    350,
    `
    max-height: 18rem;
    min-height: 18rem;
    max-width: 10rem;
    min-width: 10rem;
  `,
  )}

  ${mediaQuery(
    400,
    `
    max-width: 14rem;
    min-width: 14rem;
  `,
  )}

  ${mediaQuery(
    500,
    `
    max-height: 17rem;
    max-width: 24rem;
    min-width: 24rem;
    min-height: 17rem;
  `,
  )}
`;

const Container = styled.article`
  border: 1px solid var(--color-light);
  padding: var(--spacing-small) var(--spacing-medium);
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Add shadows to create the "card" effect */
  box-shadow: 0 1px 2px 0px var(--color-dark);
  transition: 0.3s;

  /* On mouse-over, add a deeper shadow */
  &:hover {
    box-shadow: 0 2px 4px 0px var(--color-dark);
  }

  :not(:last-child) {
    margin-bottom: var(--spacing-small);
  }

  ${mediaQuery(500, `min-width: 50rem; max-width: 45rem;`)}
  ${mediaQuery(700, `min-width: 60rem; max-width: 60rem;`)}
  ${mediaQuery(900, `min-width: 65rem; max-width: 75rem;`)}
  ${mediaQuery(1200, `min-width: 70rem; max-width: 80rem;`)}
`;

const TagContainer = styled.section`
  margin-top: var(--spacing-small);
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-block;
  background: var(--color-light);
  border: 1px solid var(--color-light-dark);
  padding: var(--spacing-very-small) var(--spacing-small);
  border-radius: 0.5rem;
`;

export default BlogCard;

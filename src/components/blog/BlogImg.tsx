import React from 'react';
import styled from '@emotion/styled';
import Image, {ImageProps} from 'next/image';

const BlogImg = ({
  width = 1100,
  height = 600,
  objectFit = 'contain',
  layout = 'responsive',
  ...props
}: ImageProps) => (
  <Container>
    <Image
      {...props}
      layout={layout}
      width={width}
      height={height}
      alt="GIF"
      placeholder="blur"
      objectPosition="center"
      objectFit={objectFit}
      blurDataURL="/assets/blog-placeholder.jpeg"
    />
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 var(--spacing-medium);
`;

export default BlogImg;

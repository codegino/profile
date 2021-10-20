import React from 'react';
import styled from '@emotion/styled';

const BlogParagraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Paragraph {...props} />
);

const Paragraph = styled.p`
  font-size: 1.8rem;

  > code {
    background-color: var(--color-light);
    padding: 0 var(--padding-very-small);
    font-family: monospace;
  }
`;

export default BlogParagraph;

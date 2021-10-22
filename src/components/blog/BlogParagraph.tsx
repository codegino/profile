import React from 'react';
import styled from '@emotion/styled';

const BlogParagraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Paragraph {...props} />
);

const Paragraph = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;

  > code {
    background-color: var(--color-light);
    padding: 0 var(--padding-very-small);
    border: 1px solid var(--color-light-dark);
    border-radius: 2px;
    font-family: monospace;
  }
`;

export default BlogParagraph;

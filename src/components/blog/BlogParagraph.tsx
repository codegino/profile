import React from 'react';
import styled from '@emotion/styled';

const BlogParagraph = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <Paragraph {...props} />
);

const Paragraph = styled.p`
  line-height: 1.5;
  margin-left: var(--margin-small);

  > code {
    background-color: var(--color-light);
    padding: 0 var(--padding-very-small);
    border: 1px solid var(--color-light-dark);
    border-radius: 2px;
    font-family: monospace;
  }
`;

export default BlogParagraph;

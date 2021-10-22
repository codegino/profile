import React from 'react';
import styled from '@emotion/styled';

const BlogListElement = (props: React.HTMLAttributes<HTMLLIElement>) => (
  <List {...props} />
);

const List = styled.li`
  line-height: 1.5;

  > code {
    background-color: var(--color-light);
    padding: 0 var(--padding-very-small);
    border: 1px solid var(--color-light-dark);
    border-radius: 2px;
    font-family: monospace;
  }
`;

export default BlogListElement;

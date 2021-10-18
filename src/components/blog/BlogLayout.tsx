import React from 'react';
import styled from '@emotion/styled';
import {MDXEmbedProvider} from 'mdx-embed';
import {mediaQuery} from '../../utils/media-query';

const Layout: React.FC = props => {
  return (
    <MDXEmbedProvider>
      <Container {...props}></Container>
    </MDXEmbedProvider>
  );
};

const Container = styled.main`
  margin: auto;
  padding: var(--padding-very-small);
  margin-bottom: var(--margin-medium);
  max-width: 50rem;

  display: flex;
  flex-direction: column;

  ${mediaQuery(450, `padding: var(--padding-small);`)}
`;

export default Layout;

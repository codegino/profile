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
  max-width: 80rem;

  display: flex;
  flex-direction: column;

  ${mediaQuery(450, `padding: var(--padding-small);`)}

  > p {
    padding: 0 var(--padding-small);
    font-size: 1.6rem;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    code {
      font-size: 1em;
      background-color: var(--color-light);
      padding: 0 var(--padding-very-small);
      border: 1px solid var(--color-light-dark);
      border-radius: 2px;
      font-family: monospace;
    }

    em {
      font-size: 1em;
    }
  }
`;

export default Layout;

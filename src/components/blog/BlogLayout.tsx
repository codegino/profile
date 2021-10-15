import React from 'react';
import styled from '@emotion/styled';
import {MDXProvider} from '@mdx-js/react';
import {MDXEmbedProvider} from 'mdx-embed';
import {CodePen, Tweet, Flickr} from 'mdx-embed';
import CodeBlock from './CodeBlock';

const components = {
  code: CodeBlock,
  CodePen,
  Tweet,
  Flickr,
};

const Layout: React.FC = props => {
  return (
    <Container>
      <MDXProvider components={components}>
        <MDXEmbedProvider>
          <main {...props}></main>
        </MDXEmbedProvider>
      </MDXProvider>
    </Container>
  );
};

const Container = styled.section`
  margin: auto;
  padding: 2rem;
  max-width: 50rem;
`;

export default Layout;

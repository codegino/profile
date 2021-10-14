import React from 'react';
import styled from '@emotion/styled';
import {MDXProvider} from '@mdx-js/react';
import CodeBlock, {CodeBlockProps} from './CodeBlock';

const components: {
  [key: string]: React.FC<CodeBlockProps>;
} = {
  pre: props => <div {...props} />,
  code: CodeBlock,
};

const Layout: React.FC = props => {
  return (
    <Container>
      <MDXProvider components={components}>
        <main {...props}></main>
      </MDXProvider>
    </Container>
  );
};

const Container = styled.section`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  max-width: 50rem;
`;

export default Layout;

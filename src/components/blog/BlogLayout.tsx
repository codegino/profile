import React from 'react';
import styled from '@emotion/styled';
import {mediaQuery} from '../../utils/media-query';

const Layout: React.FC = props => {
  return <Container {...props}></Container>;
};

const Container = styled.main`
  margin: auto;
  padding: var(--spacing-very-small);
  margin-bottom: var(--spacing-medium);
  max-width: 80rem;

  display: flex;
  flex-direction: column;

  > pre {
    margin: var(--spacing-small) 0;
  }

  ${mediaQuery(450, `padding: var(--spacing-small);`)}

  > ul, ol {
    margin: 0;
  }

  > p {
    padding: 0 var(--spacing-small);
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
      padding: 0 var(--spacing-very-small);
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

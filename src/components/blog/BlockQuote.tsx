import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const BlockQuote: FunctionComponent = props => {
  return <Container {...props} />;
};

const Container = styled.blockquote`
  background-color: var(--color-light);
  margin: 0;
  padding: var(--spacing-small);
  margin: var(--spacing-small) 0;
  font-family: Georgia, 'Times New Roman';
  font-size: 1rem;
  border-left: 5px solid var(--color-primary-light);
  border-bottom: 0.5px solid var(--color-primary-light);
  box-sizing: border-box;
`;

export default BlockQuote;

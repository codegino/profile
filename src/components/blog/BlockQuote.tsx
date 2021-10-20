import React, {FunctionComponent} from 'react';
import styled from '@emotion/styled';

const BlockQuote: FunctionComponent = props => {
  return <Container {...props} />;
};

const Container = styled.blockquote`
  background-color: var(--color-light);
  margin: 0;
  padding: var(--padding-small);
  margin: var(--margin-small) 0;
  font-family: Georgia, 'Times New Roman';
  border-radius: 4px;
  font-size: 1rem;
  box-shadow: 1px 1px 1px var(--color-light-dark);
`;

export default BlockQuote;

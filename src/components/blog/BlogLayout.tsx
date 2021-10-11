import React from 'react';
import styled from '@emotion/styled';

const Layout: React.FC = ({children}) => {
  return <Container>{children}</Container>;
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

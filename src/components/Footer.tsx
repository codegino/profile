import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark);
  color: var(--color-light);
`;

export default function Footer() {
  return <FooterContainer>All rights reserved</FooterContainer>;
}

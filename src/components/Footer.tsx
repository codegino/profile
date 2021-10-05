import React from 'react';
import styled from '@emotion/styled';
import {mediaQuery} from '../utils/media-query';
import SocialMedia from './social/SocialMedia';

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LegalLabel>All rights reserved</LegalLabel>
        <SocialMedia />
      </ContentWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: var(--color-dark);
  color: var(--color-light);
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  max-width: 50rem;
  width: 100%;

  ${mediaQuery(
    900,
    `
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
  `,
  )}
`;

const LegalLabel = styled.div`
  margin-top: var(--margin-very-small);
`;

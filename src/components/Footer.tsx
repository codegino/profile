import React from 'react';
import styled from '@emotion/styled';
import {mediaQuery} from '../utils/media-query';
import SocialMedia from './social/SocialMedia';

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LegalLabel>
          <p>All rights reserved</p>
          <p>© Carlo Gino Catapang 2021</p>
        </LegalLabel>
        <SocialMedia />
      </ContentWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 6rem;
  background-color: var(--color-dark);
  color: var(--color-light);
  display: flex;
  justify-content: center;

  ${mediaQuery(900, `height: 5rem;`)}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  max-width: 50rem;
  width: 100%;
  text-align: center;

  ${mediaQuery(
    900,
    `
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: left;
  `,
  )}
`;

const LegalLabel = styled.div`
  margin: var(--margin-very-small);
`;

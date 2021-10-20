import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {mediaQuery} from '../utils/media-query';
import SocialMedia from './social/SocialMedia';

export default function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LegalLabel>
          <Link href="/sitemap.xml">
            <a aria-label="Sitemap">Sitemap</a>
          </Link>
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
  height: 12rem;
  background-color: var(--color-dark);
  color: var(--color-light);
  display: flex;
  justify-content: center;
  overflow: hidden;

  ${mediaQuery(900, `height: 8rem;`)}
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  max-width: 70rem;
  width: 100%;
  text-align: center;

  a:hover {
    text-decoration: underline;
  }

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

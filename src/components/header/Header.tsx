import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import {underlineOnHover} from '../../frontend-utils/animation-effects';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  return (
    <Container>
      <LogoContainer>
        <MyLogo className="logo">
          <Link href="/">
            <a aria-label="My Logo">
              <Image
                priority
                src="/assets/logo.svg"
                height={26}
                width={26}
                alt="My logo"
              />
            </a>
          </Link>
        </MyLogo>

        <Link href="/">
          <a aria-label="Carlo Gino">
            <h1>Carlo Gino</h1>
          </a>
        </Link>
      </LogoContainer>
      <WideScreenContentImpl />
      <SmallScreenContent />
    </Container>
  );
}

const Container = styled.header`
  height: 50px;
  min-height: 50px;
  width: 100%;
  z-index: 1;
  display: block;
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0 var(--padding-small);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  min-width: 13.5rem;

  h1 {
    margin-left: var(--margin-very-small);
    font-size: 1.9rem;

    ${underlineOnHover()}
  }
`;

const MyLogo = styled.div`
  border-radius: 50%;
  height: 27px;
  width: 27px;
  padding: 2px;
  transition: all 0.5s;
  background-color: white; // This needs to be white, not a variable
  border-radius: 50%;
  box-shadow: 0 0 1px 1px var(--color-dark-dark);
  z-index: 100;
  margin-right: var(--margin-very-small);

  &:hover {
    box-shadow: 0 0 10px 3px var(--color-primary-accent);
    animation: rotateClockwise 2s infinite;
  }
`;

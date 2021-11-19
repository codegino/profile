import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {underlineOnHover} from '../../frontend-utils/animation-effects';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  const router = useRouter();

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
            <h1 className={router.asPath === '/' ? 'active' : ''}>Code Gino</h1>
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
  border-bottom: 1px solid var(--color-dark);
  background-color: #000000;
  color: #ffffff;
  padding: 0 var(--padding-small);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  min-width: 15rem;

  h1 {
    margin-left: 0.7rem;
    font-size: 2.2rem;
    font-family: Roboto;
    font-weight: bold;

    ${underlineOnHover()}

    &.active {
      border-bottom: 2px solid var(--color-primary-light);
    }
  }
`;

const MyLogo = styled.div`
  border-radius: 50%;
  max-width: 27px;
  min-width: 27px;
  max-height: 27px;
  min-height: 27px;
  padding: 2px;
  transition: all 0.5s;
  background-color: #ffffff; // This needs to be white, not a variable
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #ffffff;
  z-index: 100;
  margin-right: var(--margin-very-small);

  &:hover {
    box-shadow: 0 0 10px 3px var(--color-primary);
  }
`;

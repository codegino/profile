import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {underlineOnHover} from '../../frontend-utils/animation-effects';
import {TopLeftShape} from '../extras/TopLeftShape';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  const router = useRouter();

  return (
    <header className="h-20 relative bg-black flex items-center overflow-hidden py-0 px-2 text-white">
      <TopLeftShape />
      <section className="flex items-center min-w-max mr-6">
        <MyLogo className="w-12 h-12 rounded-full bg-white p-0.5 mr-0 text-center">
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
          <a aria-label="Code Gino">
            <H1
              className={
                'ml-4 text-4xl font-bold' +
                (router.asPath === '/' ? ' active' : '')
              }
            >
              Code Gino
            </H1>
          </a>
        </Link>
      </section>
      <WideScreenContentImpl />
      <SmallScreenContent />
    </header>
  );
}

const H1 = styled.h1`
  ${underlineOnHover()}

  &.active {
    border-bottom: 2px solid var(--color-primary-light);
  }
`;

const MyLogo = styled.div`
  &:hover {
    box-shadow: 0 0 10px 3px var(--color-primary);
  }
`;

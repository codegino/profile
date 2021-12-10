import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import tw from 'twin.macro';
import {TopLeftShape} from '../extras/TopLeftShape';
import SmallScreenContent from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';

export default function Header() {
  const router = useRouter();

  return (
    <Container>
      <TopLeftShape />
      <Content>
        <LogoContainer>
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
        </LogoContainer>

        <Link href="/">
          <a aria-label="Code Gino">
            <BrandName
              className="underline-on-hover"
              active={router.asPath === '/'}
            >
              Code Gino
            </BrandName>
          </a>
        </Link>
      </Content>
      <WideScreenContentImpl />
      <SmallScreenContent />
    </Container>
  );
}

const Container = tw.header`h-20 relative bg-gray-900 flex items-center overflow-hidden py-0 px-2`;

const Content = tw.section`flex items-center min-w-max mr-6`;

const BrandName = styled.span<{active: boolean}>(({active}) => [
  tw`ml-4 text-4xl font-bold`,
  active && tw`border-b-2 border-primary-light`,
]);

const LogoContainer = tw.div`w-12 h-12 rounded-full bg-white p-0.5 mr-0 text-center`;

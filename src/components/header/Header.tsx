import React from 'react';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {useMediaQuery} from 'react-responsive';

const WideScreenContent = dynamic(() => import('./WideScreenContent'), {
  ssr: false,
});
const SmallScreenContent = dynamic(() => import('./SmallScreenContent'), {
  ssr: false,
});

export default function Header() {
  const isMediumDevice = useMediaQuery({
    query: '(min-width: 700px)',
  });

  return (
    <Container>
      <div>
        <StyledImage className="logo">
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
        </StyledImage>
      </div>
      {isMediumDevice ? <WideScreenContent /> : <SmallScreenContent />}
    </Container>
  );
}

const Container = styled.header`
  height: 50px;
  min-height: 50px;
  width: 100%;
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0 var(--padding-small);
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const StyledImage = styled.div`
  border-radius: 50%;
  height: 27px;
  width: 27px;
  padding: 2px;
  transition: all 0.5s;
  background-color: var(--color-light-light);
  border-radius: 50%;
  border: 1px solid var(--color-light);
  box-shadow: 0 0 1px 1px var(--color-dark-dark);
  z-index: 100;
  margin-right: var(--margin-small);

  &:hover {
    box-shadow: 0 0 10px 3px var(--color-primary-accent);
    animation: rotateClockwise 2s infinite;
  }
`;

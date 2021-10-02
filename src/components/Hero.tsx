import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import {Fade} from 'react-awesome-reveal';

export default function Hero() {
  return (
    <HeroContainer>
      <Image src="/assets/hero-placeholder.jpg" alt="me" layout="fill" />
      <LeftMessageContainer cascade duration={1500} triggerOnce={true}>
        <p>Hi</p>
        <p>I am Carlo Gino Catapang</p>
        <p>Welcome to my page!</p>
      </LeftMessageContainer>
    </HeroContainer>
  );
}

const LeftMessageContainer = styled(Fade)`
  position: relative;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  display: flex;
  flex-direction: column;

  p {
    color: white;
    font-size: 2em;
  }
`;

const HeroContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

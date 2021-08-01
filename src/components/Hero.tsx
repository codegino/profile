import React from 'react';
import {Fade, Bounce} from 'react-awesome-reveal';
import Image from 'next/image';
import styled from '@emotion/styled';

export default function Hero() {
  return (
    <HeroContainer>
      <Bounce style={{height: '300px', width: '100%'}}>
        <Image src="/assets/hero-placeholder.png" alt="me" layout="fill" />
      </Bounce>
      <MessageContainer top={0} left={0}>
        <Fade cascade duration={1500}>
          <p>I enter first...</p>
          <p>...then comes my turn...</p>
          <p>...and finally you see me!</p>
        </Fade>
      </MessageContainer>
      <MessageContainer top={0} right={0}>
        <Fade cascade delay={2000}>
          <p>I enter first...</p>
          <p>...then comes my turn...</p>
          <p>...and finally you see me!</p>
        </Fade>
      </MessageContainer>
    </HeroContainer>
  );
}

const MessageContainer = styled(Fade)<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>`
  position: absolute;
  top: ${prop => prop.top};
  right: ${prop => prop.right};
  left: ${prop => prop.left};
  bottom: ${prop => prop.bottom};
  z-index: 1;
`;

const HeroContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

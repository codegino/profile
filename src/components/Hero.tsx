import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade} from 'react-awesome-reveal';
import {BlurredImage} from './BlurredImage';

export default function Hero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  return (
    <HeroContainer>
      <BlurredImage
        alt="Hero photo"
        img={img}
        svg={svg}
        layout="fill"
        height={undefined}
        width={undefined}
      />
      <LeftMessageContainer>
        <Message cascade duration={1500} triggerOnce={true} delay={500}>
          <p>Hi!</p>
          <h1>I am Carlo Gino Catapang</h1>
          <p>Welcome to my page!</p>
        </Message>
      </LeftMessageContainer>
    </HeroContainer>
  );
}

const LeftMessageContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const Message = styled(Fade)`
  p,
  h1 {
    color: white;
    font-size: 2em;
  }
`;

const HeroContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

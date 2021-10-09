import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
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
  top: 0.25rem;
  left: 0.5rem;

  ${mediaQuery(
    500,
    `
    top: 0.5rem;
    left: 1rem;
  `,
  )}

  ${mediaQuery(
    700,
    `
  top: 1rem;
  left: 1.5rem;
  `,
  )}
`;

const Message = styled(Fade)`
  p,
  h1 {
    color: white;
    font-size: 2em;
  }
`;

const HeroContainer = styled.div`
  height: 70vh;
  overflow: hidden;
  position: relative;

  ${mediaQuery(450, 'height: 80vh;')}

  ${mediaQuery(900, 'height: 100vh;')}
`;

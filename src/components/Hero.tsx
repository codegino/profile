import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Zoom, Fade} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {BlurredImage} from './BlurredImage';
import {GuideArrow} from './GuideArrow';

export default function Hero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#greetings');

  return (
    <HeroContainer>
      <Overlay />
      <BlurredImage
        alt="Hero photo"
        img={img}
        svg={svg}
        layout="fill"
        height={undefined}
        width={undefined}
        blurLevel={80}
        objectFit="cover"
        objectPosition="left"
      />
      <LeftMessageContainer>
        <Message cascade duration={1500} triggerOnce={true} delay={200}>
          <h1>I&lsquo;m Carlo Gino Catapang</h1>
          <p>Welcome to my page!</p>
        </Message>
      </LeftMessageContainer>
      <GuideArrowContainer triggerOnce delay={1900}>
        <GuideArrow onClick={scrollToContent} />
      </GuideArrowContainer>
    </HeroContainer>
  );
}

const GuideArrowContainer = styled(Zoom)`
  position: absolute;
  z-index: 1;
  bottom: 8vh;
`;

const LeftMessageContainer = styled.div`
  position: absolute;
  display: block;
  z-index: 2;
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
  h1,
  p {
    color: var(--color-light-light);
    text-shadow: 1px 1px 2px var(--color-dark-dark);
    z-index: 2;
    font-size: 2em;
    text-align: left;
  }

  p {
    font-size: 1.75em;
  }

  ${mediaQuery(500, 'font-size: 1.5em;')}
  ${mediaQuery(800, 'font-size: 2em;')}
`;

const Overlay = styled.div`
  height: 95vh;
  width: 100vw;
  position: absolute;
  display: block;
  z-index: 1;
  background-image: linear-gradient(
    to bottom,
    var(--color-dark-dark),
    var(--color-dark),
    var(--color-light),
    var(--color-light-light)
  );
  opacity: 0.4;
  top: 0;
  right: 0;
`;

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 95vh;
  margin: auto;
  display: flex;
  justify-content: center;
`;

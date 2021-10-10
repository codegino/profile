import React from 'react';
import styled from '@emotion/styled';
import {BsChevronDoubleDown} from '@react-icons/all-files/bs/BsChevronDoubleDown';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade, Zoom} from 'react-awesome-reveal';
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
          <h1>I am Carlo Gino Catapang</h1>
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
  bottom: 3vh;
`;

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
    font-size: 1.5em;
  }

  ${mediaQuery(500, 'font-size: 1.5em;')}
  ${mediaQuery(800, 'font-size: 2em;')}
`;

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 95vh;
  margin: auto;
  display: flex;
  justify-content: center;
`;

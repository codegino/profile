import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Zoom, Fade} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {BlurringImage} from './BlurringImage';
import {GuideArrow} from './GuideArrow';
import {BottomLeftShape} from './extras/BottomLeftShape';
import {BottomRightShape} from './extras/BottomRightShape';
import {TopLeftShape} from './extras/TopLeftShape';

export default function Hero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#greetings');

  return (
    <HeroContainer>
      <BlurringImage
        alt="Hero photo"
        img={img}
        svg={svg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      <MessageContainer>
        <Message cascade duration={1500} triggerOnce={true} delay={200}>
          <h2>Hello World</h2>
          <p>Welcome to my page!</p>
        </Message>
      </MessageContainer>
      <GuideArrowContainer triggerOnce delay={1900}>
        <GuideArrow onClick={scrollToContent} />
      </GuideArrowContainer>
      <BottomRightShape />
    </HeroContainer>
  );
}

const GuideArrowContainer = styled(Zoom)`
  position: absolute;
  z-index: 1;
  bottom: 8vh;
`;

const MessageContainer = styled.div`
  display: block;
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  top: -2rem;

  ${mediaQuery(1200, 'margin-left: 2%; top: -2.5%;')}
`;

const Message = styled(Fade)`
  h2,
  p {
    color: #ffffff;
    text-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
    font-size: 4em;
    text-align: center;
  }

  p {
    font-size: 2em;
  }
`;

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 95vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

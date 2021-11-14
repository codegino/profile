import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade, Zoom} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {BlurredImage} from './BlurringImage';
import {GuideArrow} from './GuideArrow';

const quote = ['With great power', 'comes great', 'responsibility', '- Batman'];

export default function AboutMeHero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  const {scrollToContent} = useScrollToView('#about-me-details');

  return (
    <Container>
      <Overlay />
      <BlurredImage
        alt="Hero photo"
        img={img}
        svg={svg}
        layout="fill"
        objectFit="cover"
        objectPosition="right"
        priority={true}
      />
      <MessageContainer>
        <Message cascade={true} duration={1500} triggerOnce={true}>
          {quote.map((word, i) => (
            <p key={`${word}-${i}`}>{word}</p>
          ))}
        </Message>
      </MessageContainer>
      <GuideArrowContainer triggerOnce delay={2800}>
        <GuideArrow onClick={scrollToContent} />
      </GuideArrowContainer>
    </Container>
  );
}

const GuideArrowContainer = styled(Zoom)`
  position: absolute;
  bottom: 8vh;
  z-index: 1;
`;

const Container = styled.div`
  overflow: hidden;
  position: relative;
  height: 95vh;
  margin: auto;
  display: flex;
  justify-content: center;
`;

const MessageContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 60rem;
  top: 1rem;
  right: 1rem;
  text-align: right;

  ${mediaQuery(550, 'top: 2.0rem; left: 2.0rem; text-align: left;')}
  ${mediaQuery(900, 'top: 2.5rem; left: 2.5rem;')}
  ${mediaQuery(1200, 'top: 3rem; left: 3rem;')}
`;

const Message = styled(Fade)`
  z-index: 2;
  p {
    color: var(--color-light-light);
    text-shadow: 1px 1px 2px var(--color-dark-dark);
    margin-right: 0.5rem;
    font-size: 2.25em;
    z-index: 2;

    ${mediaQuery(500, 'font-size: 2.5rem;')}

    ${mediaQuery(600, 'font-size: 3rem;')}

    ${mediaQuery(800, 'font-size: 4.5rem;')}

    ${mediaQuery(1200, 'font-size: 6rem;')}
  }
`;

const Overlay = styled.div`
  height: 95vh;
  width: 100vw;
  position: absolute;
  display: block;
  z-index: 1;
  opacity: 0.7;
  top: 0;
  right: 0;

  background-image: linear-gradient(
    to right,
    var(--color-light-light),
    var(--color-light),
    var(--color-dark),
    var(--color-dark-dark)
  );

  ${mediaQuery(
    550,
    `
    background-image: linear-gradient(
      to left,
      var(--color-light-light),
      var(--color-light),
      var(--color-dark),
      var(--color-dark-dark)
    );
  `,
  )}
`;

import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade, Zoom} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {BlurredImage} from './BlurredImage';
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
        height={undefined}
        width={undefined}
        blurLevel={80}
        objectFit="cover"
        objectPosition="right"
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
  max-width: 40rem;
  top: 1rem;
  right: 1rem;
  text-align: right;

  ${mediaQuery(550, 'top: 1.0rem; left: 1.0rem; text-align: left;')}
  ${mediaQuery(900, 'top: 1.5rem; left: 1.5rem; font-size: 1.4em;')}
  ${mediaQuery(1200, 'top: 2rem; left: 2.5rem; font-size: 1.3em;')}
`;

const Message = styled(Fade)`
  z-index: 2;
  p {
    color: var(--color-light-light);
    text-shadow: 1px 1px 2px var(--color-dark-dark);
    margin-right: 0.5rem;
    font-size: 2.25em;
    z-index: 2;

    ${mediaQuery(500, 'font-size: 2.5em;')}

    ${mediaQuery(600, 'font-size: 3em;')}

    ${mediaQuery(800, 'font-size: 3.5em;')}

    ${mediaQuery(1200, 'font-size: 4em;')}
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

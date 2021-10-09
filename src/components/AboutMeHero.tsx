import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
import {BlurredImage} from './BlurredImage';

const quote = ['With great power', 'comes great', 'responsibility', '- Batman'];

export default function AboutMeHero({
  img,
  svg,
}: Pick<IGetPlaiceholderReturn, 'svg' | 'img'>) {
  return (
    <Container>
      <BlurredImage
        alt="Hero photo"
        img={img}
        svg={svg}
        layout="responsive"
        height={400}
        width={800}
        objectPosition="center"
      />
      <MessageContainer>
        <Message cascade={true} duration={2000} triggerOnce={true}>
          {quote.map((word, i) => (
            <p key={`${word}-${i}`}>{word}</p>
          ))}
        </Message>
      </MessageContainer>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
`;

const MessageContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 40rem;

  ${mediaQuery(900, 'top: 1.5rem; left: 1.5rem;')}
  ${mediaQuery(1200, 'top: 2rem; left: 2.5rem;')}
`;

const Message = styled(Fade)`
  p {
    color: white;
    margin-right: 0.5rem;
    font-size: 1.5em;

    ${mediaQuery(500, 'font-size: 2em;')}

    ${mediaQuery(600, 'font-size: 2.5em;')}

    ${mediaQuery(800, 'font-size: 3em;')}

    ${mediaQuery(1200, 'font-size: 4em;')}
  }
`;

import React from 'react';
import styled from '@emotion/styled';
import {IGetPlaiceholderReturn} from 'plaiceholder';
import {Fade} from 'react-awesome-reveal';
import {mediaQuery} from '../utils/media-query';
import {BlurredImage} from './BlurredImage';

const quote = [
  'Everybody is a genius.',
  'But if you judge a fish',
  'by its ability to climb a tree,',
  'it will live its whole life',
  'believing that it is stupid.',
  '-Albert Einstein',
];

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
        layout="fill"
        height={undefined}
        width={undefined}
      />
      <MessageContainer>
        <Message cascade={true} duration={2000} triggerOnce={true}>
          {quote.map((word, i) => (
            <p key={`${word}-${i}`}>{word}&nbsp;</p>
          ))}
        </Message>
      </MessageContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  overflow: hidden;
  position: relative;

  ${mediaQuery(600, 'height: 70vh;')}
  ${mediaQuery(900, 'height: 80vh;')}
  ${mediaQuery(1200, 'height: 100vh;')}
`;

const MessageContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 30rem;
`;

const Message = styled(Fade)`
  p {
    color: white;
    margin-right: 0.5rem;
    font-size: 1.5em;

    ${mediaQuery(600, 'font-size: 2em;')}
  }
`;

import React, {useState} from 'react';
import styled from '@emotion/styled';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import {Zoom} from 'react-awesome-reveal';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import {mediaQuery} from '../utils/media-query';

export default function Greetings() {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <Zoom onVisibilityChange={e => setIsTyping(e)} triggerOnce>
      <Container>
        <Terminal>
          <TerminalHeader>
            <div className="action action__close" />
            <div className="action action__minimize" />
            <div className="action action__maximize" />
            <div className="terminal-title">Greetings</div>
            <BsTerminalFill />
          </TerminalHeader>
          <TerminalContent>
            {isTyping ? (
              <Typist avgTypingDelay={50}>
                <BsChevronRight />
                <Typist.Delay ms={1200} />
                Hi! How are you?
                <br />
                <BsChevronRight />
                <Typist.Delay ms={500} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={500} />
                This is Carlo Gino, your
                <Typist.Delay ms={200} /> Web
                <Typist.Delay ms={500} /> developer
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={14} /> Software developer
                <Typist.Delay ms={1200} />
                <Typist.Backspace count={9} /> ENGINEER
                <Typist.Delay ms={200} />
                <br />
                <BsChevronRight />
                who will make your software problems go away
                <Typist.Delay ms={1500} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={300} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={500} />
                Got any ideas for a personal,
                <Typist.Delay ms={300} /> business,
                <Typist.Delay ms={300} /> and other uses?
                <br />
                <BsChevronRight />
                <Typist.Delay ms={500} />
                Let&lsquo;s make them come to existense!
                <br />
                <BsChevronRight />
                <Typist.Delay ms={500} />
                We&lsquo;ll create something marvelous together.
                <br />
                <BsChevronRight />
                <Typist.Delay ms={300} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={300} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={300} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={300} />
                <br />
                <BsChevronRight />
                <Typist.Delay ms={1000} />
                Scroll down to know more about me
              </Typist>
            ) : null}
          </TerminalContent>
        </Terminal>
      </Container>
    </Zoom>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--padding-small) 0;
  overflow: hidden;
  background-color: var(--color-light-dark);

  ${mediaQuery(
    600,
    `
  padding: var(--padding-medium) 0;
  `,
  )}
`;

const TerminalContent = styled.div`
  background-color: black;
  height: 100%;
  padding: var(--padding-small) var(--padding-very-small);
  border: 1px solid var(--color-light);

  color: white;
  #060202 .cursor {
    color: green;
    width: 10em;
    font-size: 1.1em;
    font-weight: bold;
  }
`;

const TerminalHeader = styled.div`
  background-color: var(--color-light);
  position: relative;
  height: 2rem;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;

  .terminal-title {
    position: absolute;
    width: 100%;
    justify-self: center;
    text-align: center;
  }

  .action {
    height: 12px;
    width: 12px;
    border-radius: 50%;

    &__close {
      background-color: red;
    }

    &__minimize {
      background-color: #b9c127;
    }

    &__maximize {
      background-color: #0aa10a;
    }

    &:not(:last-child) {
      margin-right: 6px;
    }
  }
`;

const Terminal = styled.div`
  box-sizing: border-box;
  min-height: 15rem;
  min-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  font-size: 0.8em;

  ${mediaQuery(
    400,
    `
   min-height: 18rem;
   min-width: 100%;
   font-size: 0.8em;
  `,
  )}

  ${mediaQuery(
    600,
    `
   min-height: 20rem;
   min-width: 90%;
   font-size: 1em;
  `,
  )}

  ${mediaQuery(
    900,
    `
   min-height: 20rem;
   min-width: 35rem;
   font-size: 1em;
  `,
  )}
`;

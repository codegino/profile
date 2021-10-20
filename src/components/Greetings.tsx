import React, {useState} from 'react';
import styled from '@emotion/styled';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import {Zoom} from 'react-awesome-reveal';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import {mediaQuery} from '../utils/media-query';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';

export default function Greetings() {
  const [isTyping, setIsTyping] = useState(false);
  const {scrollToContent} = useScrollToView('#resume-summary');
  const [isGuideVisible, setIsGuideVisible] = useState(false);

  return (
    <Container id="greetings">
      <Zoom onVisibilityChange={e => setIsTyping(e)} triggerOnce>
        <InnerContainer>
          <Terminal>
            <TerminalHeader>
              <div className="action action__close" />
              <div className="action action__minimize" />
              <div className="action action__maximize" />
              <div className="terminal-title">Greetings.sh</div>
              <BsTerminalFill />
            </TerminalHeader>
            <TerminalContent>
              {isTyping ? (
                <Typist
                  avgTypingDelay={35}
                  onTypingDone={() => setIsGuideVisible(true)}
                >
                  <BsChevronRight />
                  <Typist.Delay ms={1200} />
                  Hi! How are you?
                  <br />
                  <BsChevronRight />
                  <Typist.Delay ms={500} />
                  <br />
                  <BsChevronRight />
                  <Typist.Delay ms={500} />
                  This is Carlo Gino, your Web
                  <Typist.Delay ms={500} /> developer
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={14} /> Software developer
                  <Typist.Delay ms={1200} />
                  <Typist.Backspace count={18} />{' '}
                  <span
                    style={{
                      color: 'var(--color-primary-light)',
                      fontWeight: 'bold',
                    }}
                  >
                    SOFTWARE ENGINEER
                  </span>
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
                  <Typist.Delay ms={300} /> or other uses?
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
                  Scroll down to know more about me...
                </Typist>
              ) : null}
            </TerminalContent>
          </Terminal>
        </InnerContainer>
      </Zoom>
      <Background />
      {isGuideVisible ? (
        <GuideArrowContainer triggerOnce>
          <GuideArrow onClick={scrollToContent} />
        </GuideArrowContainer>
      ) : null}
    </Container>
  );
}
const GuideArrowContainer = styled(Zoom)`
  position: absolute;
  bottom: 8vh;
`;

const Background = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-image: linear-gradient(
    to right,
    var(--color-light),
    var(--color-light-dark)
  );
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
`;

const TerminalContent = styled.div`
  height: 100%;
  padding: var(--padding-small) var(--padding-very-small);
  border: 1px solid var(--color-light);
  font-family: monospace;

  background-color: var(--color-dark-dark);
  color: var(--color-light-light);
  .cursor {
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
    font-family: monospace;
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
  height: 16rem;
  min-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  font-size: 0.8em;
  position: relative;
  top: -5rem;

  ${mediaQuery(
    400,
    `
   height: 18rem;
   min-width: 100%;
   font-size: 0.8em;
  `,
  )}

  ${mediaQuery(
    600,
    `
   height: 20rem;
   min-width: 90%;
   font-size: 1em;
  `,
  )}

  ${mediaQuery(
    750,
    `
   min-width: 70%;
  `,
  )}


  ${mediaQuery(
    900,
    `
   min-width: 35rem;
   font-size: 1em;
  `,
  )}
`;

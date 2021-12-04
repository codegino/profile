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
                  <StyledBsChevronRight />
                  <Typist.Delay ms={1200} />
                  <span>Hi! How are you?</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>This is Carlo Gino, your Web</span>
                  <Typist.Delay ms={500} />
                  <span> developer</span>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={14} />
                  <span> Software developer</span>
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
                  <StyledBsChevronRight />
                  <span>who will make your software problems go away</span>
                  <Typist.Delay ms={1500} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>Got any ideas for a personal,</span>
                  <Typist.Delay ms={300} />
                  <span> business,</span>
                  <Typist.Delay ms={300} />
                  <span> or other uses?</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>Let&lsquo;s make them come to existense!</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <span>We&lsquo;ll create something marvelous together.</span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={1000} />
                  <span>Scroll down to know more about me...</span>
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

const StyledBsChevronRight = styled(BsChevronRight)`
  font-size: 0.8rem;

  ${mediaQuery(600, `font-size: 1.1rem;`)}
  ${mediaQuery(900, `font-size: 1.2rem;`)}
  ${mediaQuery(900, `font-size: 1.3rem;`)}
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
  padding: var(--spacing-small) var(--spacing-very-small);
  border: 1px solid var(--color-light);
  font-family: monospace;

  background-color: var(--color-dark-dark);
  color: var(--color-light-light);

  span {
    font-size: 1.2rem;

    ${mediaQuery(600, `font-size: 1.5rem;`)}
    ${mediaQuery(900, `font-size: 1.7rem;`)}
    ${mediaQuery(900, `font-size: 1.8rem;`)}
  }

  .cursor {
    color: green;
    width: 10em;
    font-size: 1.1rem;
    font-weight: bold;
  }
`;

const TerminalHeader = styled.div`
  background-color: var(--color-light);
  position: relative;
  height: 2.5rem;
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
  height: 30rem;
  min-width: 100%;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  position: relative;
  top: -5rem;
  line-height: 1;

  ${mediaQuery(
    400,
    `
   height: 31rem;
   min-width: 100%;
  line-height: 1.2;
  `,
  )}

  ${mediaQuery(
    600,
    `
   height: 35rem;
   min-width: 90%;
  line-height: 1.3;
  `,
  )}

  ${mediaQuery(
    750,
    `
   height: 32rem;
   min-width: 70%;
  `,
  )}


  ${mediaQuery(
    900,
    `
   height: 35rem;
   min-width: 70rem;
  `,
  )}
`;

import {useState} from 'react';
import type {FunctionComponent} from 'react';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import clsx from 'clsx';
import Zoom from 'react-reveal/Zoom';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';

const GreetingsContent: FunctionComponent<{className?: string}> = () => {
  const [isTyping, setIsTyping] = useState(false);
  const {scrollToContent} = useScrollToView('#resume-summary');
  const [isGuideVisible, setIsGuideVisible] = useState(false);

  return (
    <>
      <Zoom onReveal={() => setIsTyping(true)}>
        <div className="flex justify-center items-center h-screen w-screen relative lg:max-w-[30rem]">
          <div
            className="
            w-full m-2 sm:m-0 sm:w-[95%] lg:w-[45rem]
            rounded-lg overflow-hidden text-[7px]
          "
          >
            <div className="bg-light relative min-h-[2rem] h-8 flex items-center pl-2">
              <div className="min-h-[0.75rem] min-w-[0.75rem] rounded-full mr-2 bg-red-500" />
              <div className="min-h-[0.75rem] min-w-[0.75rem] rounded-full mr-2 bg-yellow-300" />
              <div className="min-h-[0.75rem] min-w-[0.75rem] rounded-full mr-3 bg-green-600" />
              <BsTerminalFill size={18} />
              <div className="relative md:absolute w-full justify-self-center text-center text-base font-mono">
                Greetings.sh
              </div>
            </div>
            <div
              className="h-[25rem] xs:h-[20rem] sm:max-h-[18rem]
            py-1 px-1 font-mono bg-dark text-light text-[8px] leading-[1.2]"
            >
              {isTyping ? (
                <Typist
                  avgTypingDelay={20}
                  onTypingDone={() => setIsGuideVisible(true)}
                >
                  <StyledBsChevronRight />
                  <Typist.Delay ms={1200} />
                  <Span>Hi! How are you?</Span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <Span>This is Carlo Gino, your Web</Span>
                  <Typist.Delay ms={500} />
                  <Span> developer</Span>
                  <Typist.Delay ms={1000} />
                  <Typist.Backspace count={14} />
                  <Span> Software developer</Span>
                  <Typist.Delay ms={1200} />
                  <Typist.Backspace count={18} />{' '}
                  <Span className="font-bold text-primary-light">
                    SOFTWARE ENGINEER
                  </Span>
                  <Typist.Delay ms={200} />
                  <br />
                  <StyledBsChevronRight />
                  <Span>who will make your software problems go away</Span>
                  <Typist.Delay ms={1500} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={300} />
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <Span>Got any ideas for a personal,</Span>
                  <Typist.Delay ms={300} />
                  <Span> business,</Span>
                  <Typist.Delay ms={300} />
                  <Span> or other uses?</Span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <Span>Let&lsquo;s make them come to existense!</Span>
                  <br />
                  <StyledBsChevronRight />
                  <Typist.Delay ms={500} />
                  <Span>We&lsquo;ll create something marvelous together.</Span>
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
                  <Span>Scroll down to know more about me...</Span>
                </Typist>
              ) : null}
            </div>
          </div>
        </div>
      </Zoom>
      {isGuideVisible ? (
        <Zoom>
          <div className="relative bottom-[8.5vh]">
            <GuideArrow onClick={scrollToContent} />
          </div>
        </Zoom>
      ) : null}
    </>
  );
};

const StyledBsChevronRight = () => {
  return (
    <BsChevronRight className="text-[0.8rem] xs:text-xs sm:text-sm md:text-base text-primary-light" />
  );
};

const Span: FunctionComponent<{className?: string}> = props => {
  return (
    <span
      {...props}
      className={clsx(
        'text-[0.9rem] xs:text-sm sm:text-sm  md:text-base',
        props.className,
      )}
    />
  );
};

export default GreetingsContent;

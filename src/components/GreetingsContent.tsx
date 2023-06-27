'use client';
import {useState} from 'react';
import type {FunctionComponent} from 'react';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import clsx from 'clsx';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {useTranslation} from '../app/i18n/client';
import {useParams} from 'next/navigation';

const GreetingsContent: FunctionComponent<{className?: string}> = () => {
  // Changed to true because react-reveal was removed temporarily
  const [isTyping, setIsTyping] = useState(true);
  const {scrollToContent} = useScrollToView('#resume-summary');
  const [isGuideVisible, setIsGuideVisible] = useState(false);

  const locale = useParams()?.lng;
  const {t} = useTranslation(locale, 'home');

  return (
    <>
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
              {t('greetings.filename')}
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
                <Span>{t('greetings.1')}</Span>
                <br />
                <StyledBsChevronRight />
                <Typist.Delay ms={500} />
                <br />
                <StyledBsChevronRight />
                <Typist.Delay ms={500} />
                <Span>{t('greetings.2')}</Span>
                <Typist.Delay ms={500} />
                <Span>{t('greetings.3')}</Span>
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={Number(t('greetings.del1'))} />
                <Span>{t('greetings.4')}</Span>
                <Typist.Delay ms={1200} />
                <Typist.Backspace count={Number(t('greetings.del2'))} />
                <Span className="font-bold text-primary-light">
                  {t('greetings.5')}
                </Span>
                <Typist.Delay ms={200} />
                <br />
                <StyledBsChevronRight />
                <Span>{t('greetings.6')}</Span>
                <Typist.Delay ms={1500} />
                <br />
                <StyledBsChevronRight />
                <Typist.Delay ms={300} />
                <br />
                <StyledBsChevronRight />
                <Typist.Delay ms={500} />
                <Span>{t('greetings.7')}</Span>
                <Typist.Delay ms={300} />
                <Span>{t('greetings.8')}</Span>
                <Typist.Delay ms={300} />
                <Span>{t('greetings.9')}</Span>
                <br />
                <StyledBsChevronRight />
                <Typist.Delay ms={500} />
                <Span>{t('greetings.10')}</Span>
                <br />
                <StyledBsChevronRight />
                <Typist.Delay ms={500} />
                <Span>{t('greetings.11')}</Span>
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
                <Span>{t('greetings.12')}.</Span>
              </Typist>
            ) : null}
          </div>
        </div>
      </div>
      {isGuideVisible ? (
        <div className="relative bottom-[8.5vh]">
          <GuideArrow onClick={scrollToContent} />
        </div>
      ) : null}
    </>
  );
};

const StyledBsChevronRight = () => {
  return (
    <BsChevronRight className="text-[0.8rem] xs:text-xs sm:text-sm md:text-base text-primary-light" />
  );
};

const Span: FunctionComponent<{
  className?: string;
  children: React.ReactNode;
}> = props => {
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

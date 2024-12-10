'use client';
import {useState} from 'react';
import type {FC, FunctionComponent} from 'react';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import clsx from 'clsx';
import Typist from 'react-typist';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import {GuideArrow} from './GuideArrow';
import {useTranslation} from '@/app/i18n/client';

const GreetingsContent: FC = () => {
  const {scrollToContent} = useScrollToView('#resume-summary');
  const [isGuideVisible, setIsGuideVisible] = useState(false);

  const {t} = useTranslation('home');

  return (
    <>
      <div className="relative flex h-screen w-screen items-center justify-center pb-[25vh] md:max-w-[40rem]">
        <div
          className="
            m-2 w-full overflow-hidden rounded-lg text-[7px] ring-2
            ring-black/90 @container dark:ring-zinc-500/90  sm:m-0 sm:w-[95%] lg:w-[50rem]
          "
        >
          <div className="relative flex h-8 min-h-8 items-center border-b border-black/20 bg-zinc-100 pl-2 dark:border-white/20 dark:bg-neutral-700">
            <div className="mr-2 min-h-3 min-w-3 rounded-full bg-red-500" />
            <div className="mr-2 min-h-3 min-w-3 rounded-full bg-yellow-300" />
            <div className="mr-3 min-h-3 min-w-3 rounded-full bg-green-600" />
            <BsTerminalFill size={18} />
            <div className="relative w-full justify-self-center text-center font-mono text-base md:absolute">
              {t('greetings.filename')}
            </div>
          </div>
          <div
            className="h-[21rem] bg-neutral-100 p-1
            font-mono text-[8px] leading-[1.2] text-neutral-900 @sm:h-80 @md:h-[19rem] dark:bg-neutral-800 dark:text-neutral-50"
          >
            <Typist
              avgTypingDelay={10}
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
              <Span className="font-bold text-primary-500 dark:text-primary-100">
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
              {/* <Typist.Delay ms={500} /> */}
              <Span>{t('greetings.7')}</Span>
              <Typist.Delay ms={300} />
              <Span>{t('greetings.8')}</Span>
              <Typist.Delay ms={300} />
              <Span>{t('greetings.9')}</Span>
              <br />
              <StyledBsChevronRight />
              {/* <Typist.Delay ms={500} /> */}
              <Span>{t('greetings.10')}</Span>
              <br />
              <StyledBsChevronRight />
              {/* <Typist.Delay ms={500} /> */}
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
          </div>
        </div>
      </div>
      {isGuideVisible ? (
        <div className="absolute bottom-[10vh]">
          <GuideArrow onClick={scrollToContent} />
        </div>
      ) : null}
    </>
  );
};

const StyledBsChevronRight = () => {
  return (
    <BsChevronRight className="text-[0.8rem] text-primary-700 dark:text-primary-100 xs:text-xs sm:text-sm md:text-base" />
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

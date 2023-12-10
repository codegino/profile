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
      <div className="flex justify-center items-center h-screen w-screen relative md:max-w-[40rem] pb-[25vh]">
        <div
          className="
            @container w-full m-2 sm:m-0 sm:w-[95%] lg:w-[50rem]
            rounded-lg overflow-hidden text-[7px]  ring-black/90 dark:ring-zinc-500/90 ring-2
          "
        >
          <div className="bg-zinc-100 dark:bg-neutral-700 relative min-h-[2rem] h-8 flex items-center pl-2 border-b border-black/20 dark:border-white/20">
            <div className="min-h-[0.75rem] min-w-[0.75rem] rounded-full mr-2 bg-red-500" />
            <div className="min-h-[0.75rem] min-w-[0.75rem] rounded-full mr-2 bg-yellow-300" />
            <div className="min-h-[0.75rem] min-w-[0.75rem] rounded-full mr-3 bg-green-600" />
            <BsTerminalFill size={18} />
            <div className="relative md:absolute w-full justify-self-center text-center text-base font-mono">
              {t('greetings.filename')}
            </div>
          </div>
          <div
            className="h-[21rem] @sm:h-[20rem] @md:h-[19rem]
            py-1 px-1 font-mono bg-neutral-100 dark:bg-neutral-800 text-[8px] leading-[1.2] text-neutral-900 dark:text-neutral-50"
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
    <BsChevronRight className="text-[0.8rem] xs:text-xs sm:text-sm md:text-base text-primary-700 dark:text-primary-100" />
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

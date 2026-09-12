'use client';
import {useCallback, useMemo, useState} from 'react';
import type {FC, FunctionComponent} from 'react';
import {BsChevronRight} from '@react-icons/all-files/bs/BsChevronRight';
import {BsTerminalFill} from '@react-icons/all-files/bs/BsTerminalFill';
import clsx from 'clsx';
import {useScrollToView} from '../utils/scroll-to-view-hook';
import type {TypewriterChunk, TypewriterStep} from '../utils/typewriter-hook';
import {useTypewriter} from '../utils/typewriter-hook';
import {GuideArrow} from './GuideArrow';
import {useTranslation} from '@/app/i18n/client';

type TypedLine = {
  hasPrompt: boolean;
  texts: Extract<TypewriterChunk, {kind: 'text'}>[];
};

const GreetingsContent: FC = () => {
  const {scrollToContent} = useScrollToView('#resume-summary');
  const [isGuideVisible, setIsGuideVisible] = useState(false);

  const {t} = useTranslation('home');

  const steps = useMemo<TypewriterStep[]>(
    () => [
      {kind: 'prompt'},
      {kind: 'delay', ms: 1200},
      {kind: 'text', value: t('greetings.1')},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 500},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 500},
      {kind: 'text', value: t('greetings.2')},
      {kind: 'delay', ms: 500},
      {kind: 'text', value: t('greetings.3')},
      {kind: 'delay', ms: 1000},
      {kind: 'backspace', count: Number(t('greetings.del1'))},
      {kind: 'text', value: t('greetings.4')},
      {kind: 'delay', ms: 1200},
      {kind: 'backspace', count: Number(t('greetings.del2'))},
      {
        kind: 'text',
        value: t('greetings.5'),
        className: 'font-bold text-primary-500 dark:text-primary-100',
      },
      {kind: 'delay', ms: 200},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'text', value: t('greetings.6')},
      {kind: 'delay', ms: 1500},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 300},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'text', value: t('greetings.7')},
      {kind: 'delay', ms: 300},
      {kind: 'text', value: t('greetings.8')},
      {kind: 'delay', ms: 300},
      {kind: 'text', value: t('greetings.9')},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'text', value: t('greetings.10')},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'text', value: t('greetings.11')},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 300},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 300},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 300},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 300},
      {kind: 'break'},
      {kind: 'prompt'},
      {kind: 'delay', ms: 1000},
      {kind: 'text', value: `${t('greetings.12')}.`},
    ],
    [t],
  );

  const onDone = useCallback(() => setIsGuideVisible(true), []);
  const {chunks} = useTypewriter(steps, {charDelay: 10, onDone});

  const lines = useMemo(
    () =>
      chunks.reduce<TypedLine[]>(
        (grouped, chunk) => {
          if (chunk.kind === 'break') {
            return [...grouped, {hasPrompt: false, texts: []}];
          }

          const current = grouped.at(-1)!;
          const updated =
            chunk.kind === 'prompt'
              ? {...current, hasPrompt: true}
              : {...current, texts: [...current.texts, chunk]};

          return [...grouped.slice(0, -1), updated];
        },
        [{hasPrompt: false, texts: []}],
      ),
    [chunks],
  );

  return (
    <>
      <div className="relative flex h-screen w-screen items-center justify-center pb-[25vh] md:max-w-160">
        <div
          className="
            m-2 w-full overflow-hidden rounded-lg text-[7px] ring-2
            ring-black/90 @container dark:ring-zinc-500/90  sm:m-0 sm:w-[95%] lg:w-200
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
            className="h-84 bg-neutral-100 p-1
            font-mono text-[8px] leading-[1.2] text-neutral-900 @sm:h-80 @md:h-76 dark:bg-neutral-800 dark:text-neutral-50"
          >
            {lines.map((line, lineIndex) => (
              <div key={lineIndex} className="flex items-center">
                {line.hasPrompt ? <StyledBsChevronRight /> : null}
                {/* Text stays in a single inline flow so spaces between chunks survive. */}
                <div className="min-w-0">
                  {line.texts.map((chunk, index) => (
                    <Span key={index} className={chunk.className}>
                      {chunk.value}
                    </Span>
                  ))}
                  {lineIndex === lines.length - 1 ? (
                    <Span className="animate-blink">|</Span>
                  ) : null}
                </div>
              </div>
            ))}
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
    <BsChevronRight className="shrink-0 text-[0.8rem] text-primary-700 dark:text-primary-100 xs:text-xs sm:text-sm md:text-base" />
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

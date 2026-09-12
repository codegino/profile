'use client';
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';

export type TypewriterStep =
  | {kind: 'text'; value: string; className?: string}
  | {kind: 'delay'; ms: number}
  | {kind: 'backspace'; count: number}
  | {kind: 'break'}
  | {kind: 'prompt'};

export type TypewriterChunk =
  | {kind: 'text'; value: string; className?: string}
  | {kind: 'break'}
  | {kind: 'prompt'};

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const appendChar = (
  chunks: TypewriterChunk[],
  char: string,
  className?: string,
): TypewriterChunk[] => {
  const last = chunks.at(-1);

  if (last?.kind === 'text' && last.className === className) {
    return [...chunks.slice(0, -1), {...last, value: last.value + char}];
  }

  return [...chunks, {kind: 'text', value: char, className}];
};

const removeChars = (
  chunks: TypewriterChunk[],
  count: number,
): TypewriterChunk[] => {
  const next = [...chunks];
  let remaining = count;

  while (remaining > 0) {
    const last = next.at(-1);

    // Stop at structural chunks so a backspace never eats a line break.
    if (last?.kind !== 'text') {
      break;
    }

    const removable = Math.min(remaining, last.value.length);
    const value = last.value.slice(0, last.value.length - removable);
    remaining -= removable;

    if (value) {
      next[next.length - 1] = {...last, value};
    } else {
      next.pop();
    }
  }

  return next;
};

const toFinalChunks = (steps: TypewriterStep[]): TypewriterChunk[] =>
  steps.reduce<TypewriterChunk[]>((chunks, step) => {
    switch (step.kind) {
      case 'text':
        return appendChar(chunks, step.value, step.className);
      case 'backspace':
        return removeChars(chunks, step.count);
      case 'delay':
        return chunks;
      default:
        return [...chunks, step];
    }
  }, []);

const subscribeToReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener('change', onChange);

  return () => query.removeEventListener('change', onChange);
};

const useReducedMotion = () =>
  useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );

export const useTypewriter = (
  steps: TypewriterStep[],
  {charDelay = 10, onDone}: {charDelay?: number; onDone?: () => void} = {},
) => {
  const reducedMotion = useReducedMotion();
  const [typedChunks, setTypedChunks] = useState<TypewriterChunk[]>([]);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onDoneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let isCancelled = false;
    // Kept outside of state so a restart always begins from an empty transcript.
    let chunks: TypewriterChunk[] = [];

    const run = async () => {
      for (const step of steps) {
        switch (step.kind) {
          case 'delay':
            await sleep(step.ms);
            break;
          case 'text':
            for (const char of step.value) {
              await sleep(charDelay);

              if (isCancelled) {
                return;
              }

              chunks = appendChar(chunks, char, step.className);
              setTypedChunks(chunks);
            }
            break;
          case 'backspace':
            for (let i = 0; i < step.count; i++) {
              await sleep(charDelay);

              if (isCancelled) {
                return;
              }

              chunks = removeChars(chunks, 1);
              setTypedChunks(chunks);
            }
            break;
          default:
            chunks = [...chunks, step];
            setTypedChunks(chunks);
        }

        if (isCancelled) {
          return;
        }
      }

      setIsTypingDone(true);
    };

    run();

    return () => {
      isCancelled = true;
    };
  }, [steps, charDelay, reducedMotion]);

  const finalChunks = useMemo(() => toFinalChunks(steps), [steps]);
  const isDone = reducedMotion || isTypingDone;

  useEffect(() => {
    if (isDone) {
      onDoneRef.current?.();
    }
  }, [isDone]);

  return {chunks: reducedMotion ? finalChunks : typedChunks, isDone};
};

import {useEffect, useRef} from 'react';

export const useScrollToView = (querySelector: string) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    ref.current = document.querySelector(querySelector);
  }, [querySelector]);

  const scrollToContent = () => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return {scrollToContent};
};

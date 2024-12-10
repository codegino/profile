import type {MouseEventHandler} from 'react';
import {BsChevronDoubleDown} from '@react-icons/all-files/bs/BsChevronDoubleDown';

type Props = {
  onClick: MouseEventHandler;
};

export const GuideArrow = ({onClick}: Props) => {
  return (
    <div className="flex size-16 animate-bounce cursor-pointer items-center justify-center rounded-full bg-primary-600 text-3xl text-neutral-200">
      <BsChevronDoubleDown
        size={37}
        className="guide-arrow"
        onClick={onClick}
      />
    </div>
  );
};

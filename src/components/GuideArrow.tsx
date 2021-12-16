import {MouseEventHandler} from 'react';
import {BsChevronDoubleDown} from '@react-icons/all-files/bs/BsChevronDoubleDown';

type Props = {
  onClick: MouseEventHandler;
};

export const GuideArrow = ({onClick}: Props) => {
  return (
    <div className="pulsing cursor-pointer bg-primary-light rounded-full flex justify-center items-center h-16 w-16 text-3xl">
      <BsChevronDoubleDown
        size={37}
        className="guide-arrow"
        onClick={onClick}
      />
    </div>
  );
};

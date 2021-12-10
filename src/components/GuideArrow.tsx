import {MouseEventHandler} from 'react';
import {BsChevronDoubleDown} from '@react-icons/all-files/bs/BsChevronDoubleDown';

type Props = {
  onClick: MouseEventHandler;
};

export const GuideArrow = ({onClick}: Props) => {
  return (
    <div className="pulsing cursor-pointer bg-primary-light rounded-full py-4 px-7 text-5xl">
      <BsChevronDoubleDown
        size={17}
        className="guide-arrow"
        onClick={onClick}
      />
    </div>
  );
};

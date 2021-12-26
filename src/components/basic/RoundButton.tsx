import React, {FunctionComponent} from 'react';
import clsx from 'clsx';

const RoundButton: FunctionComponent<{
  onClick?: () => void;
  className?: string;
}> = ({onClick = () => {}, className, children}) => {
  return (
    <div
      className={clsx(
        'shadow-lg rounded-full box-content cursor-pointer',
        'h-10 w-10 flex items-center justify-center bg-white',
        className,
      )}
      onClick={onClick}
      role="presentation"
    >
      {children}
    </div>
  );
};

export default RoundButton;

import React, {FunctionComponent} from 'react';
import clsx from 'clsx';

const RoundButton: FunctionComponent<{
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}> = ({onClick = () => {}, className, children}) => {
  return (
    <div
      className={clsx(
        'box-content cursor-pointer rounded-full shadow-lg',
        'flex size-10 items-center justify-center bg-white',
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

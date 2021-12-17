import type {FunctionComponent} from 'react';
import {BsMoon} from '@react-icons/all-files/bs/BsMoon';
import {BsSun} from '@react-icons/all-files/bs/BsSun';
import clsx from 'clsx';

const DarkModeToggle: FunctionComponent<{
  onChange: (isDarkMode: boolean) => void;
  checked: boolean;
  size: number;
  className?: string;
}> = ({checked, onChange, className}) => {
  return (
    <div
      onClick={() => onChange(!checked)}
      role="presentation"
      className={clsx(
        'cursor-pointer rounded-full bg-white h-9 w-9 flex items-center justify-center',
        {
          'bg-gray-700 shadow-md shadow-gray-100': checked,
        },
        {
          'bg-blue-50 shadow-md shadow-yellow-300': !checked,
        },
        className,
      )}
    >
      {checked ? (
        <BsMoon fill="white" size={29} />
      ) : (
        <BsSun fill="orange" size={28} />
      )}
    </div>
  );
};

export default DarkModeToggle;

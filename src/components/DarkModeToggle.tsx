import type {FunctionComponent} from 'react';
import {BsMoon} from '@react-icons/all-files/bs/BsMoon';
import {BsSun} from '@react-icons/all-files/bs/BsSun';
import clsx from 'clsx';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle: FunctionComponent<{
  className?: string;
}> = ({className}) => {
  const {value: isDarkMode, toggle} = useDarkMode();

  return (
    <div
      onClick={toggle}
      role="presentation"
      className={clsx(
        'cursor-pointer rounded-full bg-white h-9 w-9 flex items-center justify-center',
        {
          'bg-gray-700 shadow-md shadow-gray-100': isDarkMode,
        },
        {
          'bg-blue-50 shadow-md shadow-yellow-300': !isDarkMode,
        },
        className,
      )}
    >
      {isDarkMode ? (
        <BsMoon
          fill="white"
          size={28}
          style={{
            borderRadius: '50%',
            width: '100%',
            height: '100%',
            padding: 1,
            backgroundColor: '#1a202c',
          }}
        />
      ) : (
        <BsSun fill="orange" size={28} />
      )}
    </div>
  );
};

export default DarkModeToggle;

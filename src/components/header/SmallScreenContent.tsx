import {useState, useRef, FunctionComponent} from 'react';
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

const SmallScreenSidebar = dynamic(() => import('./SmallScreenSidebar'), {
  ssr: false,
});

export const SmallScreenContent: FunctionComponent<{
  className?: string;
  floating?: boolean;
}> = ({className, floating}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={clsx('relative w-full text-right block', className)}>
      {floating && !isOpen ? (
        <div className="fixed top-3 right-3 z-50 shadow-lg fill-dark bg-light rounded-full box-content border-8 border-light animate-spin-fast">
          <AiOutlineMenu
            size={30}
            onClick={sidebarOpen}
            className={clsx('cursor-pointer')}
          />
        </div>
      ) : (
        <AiOutlineMenu
          size={30}
          onClick={sidebarOpen}
          className={clsx('cursor-pointer')}
        />
      )}
      <SmallScreenSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

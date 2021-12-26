import {useState, useRef, FunctionComponent} from 'react';
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

const SmallScreenSidebar = dynamic(() => import('./SmallScreenSidebar'), {
  ssr: false,
});

export const SmallScreenContent: FunctionComponent<{
  className?: string;
}> = ({className}) => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className={clsx('relative w-full text-right block ', className)}>
      <AiOutlineMenu
        size={30}
        onClick={sidebarOpen}
        className={clsx('cursor-pointer')}
      />
      <SmallScreenSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

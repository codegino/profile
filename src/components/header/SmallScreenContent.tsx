import {useState, FunctionComponent} from 'react';
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Logo from './Logo';

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
      {floating && !isOpen && (
        <Logo
          onClick={sidebarOpen}
          className={clsx('fixed top-3 left-[17px] z-50 animate-spin-fast')}
        />
      )}
      <AiOutlineMenu
        size={30}
        onClick={sidebarOpen}
        className="cursor-pointer"
      />
      <SmallScreenSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

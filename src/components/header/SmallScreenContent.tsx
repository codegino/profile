import {useState, useRef} from 'react';
import {AiOutlineMenu} from '@react-icons/all-files/ai/AiOutlineMenu';
import dynamic from 'next/dynamic';

const SmallScreenSidebar = dynamic(() => import('./SmallScreenSidebar'), {
  ssr: false,
});

export default function SmallScreenContent() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative w-full text-right block lg:hidden z-20">
      <AiOutlineMenu
        size={30}
        onClick={sidebarOpen}
        className="cursor-pointer"
      />
      <SmallScreenSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

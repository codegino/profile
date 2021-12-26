import {FunctionComponent, useState} from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import {InView} from 'react-intersection-observer';
import {TopLeftShape} from '../extras/TopLeftShape';
import Logo from './Logo';
import {LogoWrapper} from './LogoWrapper';
import WideScreenContentImpl from './WideScreenContent';
import {HeaderProvider, useHeader} from './header-context';
import {useScrollDirection} from './use-scroll-direction';

const SmallScreenSidebar = dynamic(() => import('./SmallScreenSidebar'), {
  ssr: false,
});

const FloatingLogo: FunctionComponent = () => {
  const {showSidebar, isSidebarVisible} = useHeader();

  return !isSidebarVisible ? (
    <Logo
      onClick={showSidebar}
      className={'fixed top-3 left-[17px] z-[100] animate-spin-fast'}
    />
  ) : null;
};

export default function Header() {
  const [inView, setInView] = useState(false);
  const {direction} = useScrollDirection();

  return (
    <HeaderProvider>
      <InView
        as="header"
        onChange={setInView}
        className="h-16 min-h-[4rem] relative bg-black flex items-center py-0 px-2 text-white"
      >
        <TopLeftShape />
        <LogoWrapper />
        <WideScreenContentImpl />
        {!inView && direction !== 'down' && (
          <>
            <FloatingLogo />
          </>
        )}
        {direction !== 'down' && <SmallScreenSidebar />}
      </InView>
    </HeaderProvider>
  );
}

'use client';
import {FunctionComponent, useState} from 'react';
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
      className={'fixed left-[17px] top-3 z-[100] animate-spin-fast'}
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
        className="relative flex h-16 min-h-16 items-center bg-neutral-900 px-2 py-0"
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

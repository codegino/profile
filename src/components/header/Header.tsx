import {FunctionComponent, useState} from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/router';
import {InView} from 'react-intersection-observer';
import NextLink from '../basic/NextLink';
import {TopLeftShape} from '../extras/TopLeftShape';
import Logo from './Logo';
import {SmallScreenContent} from './SmallScreenContent';
import WideScreenContentImpl from './WideScreenContent';
import {HeaderProvider, useHeader} from './header-context';
import {useScrollDirection} from './use-scroll-direction';

const LogoWrapper: FunctionComponent<{className?: string}> = () => {
  const router = useRouter();
  const {showSidebar} = useHeader();

  return (
    <div className="flex items-center min-w-max ml-2.5 mr-6">
      <Logo
        className="bg-white text-black rounded-full lg:hidden"
        onClick={showSidebar}
      />
      <Logo className="bg-white text-black rounded-full hidden lg:flex" />

      <NextLink href="/" aria-label="Code Gino">
        <span
          className={clsx('underline-on-hover ml-2 text-2xl font-bold', {
            'text-white border-b-2 border-b-primary-600': router.asPath === '/',
          })}
        >
          Code Gino
        </span>
      </NextLink>
    </div>
  );
};

const FloatingLogo: FunctionComponent = () => {
  const {showSidebar} = useHeader();

  return (
    <Logo
      onClick={showSidebar}
      className={clsx('fixed top-3 left-[17px] z-50 animate-spin-fast')}
    />
  );
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
        <SmallScreenContent className="lg:hidden pr-3" />
        {!inView && direction !== 'down' && (
          <>
            <FloatingLogo />
            <SmallScreenContent />
          </>
        )}
      </InView>
    </HeaderProvider>
  );
}

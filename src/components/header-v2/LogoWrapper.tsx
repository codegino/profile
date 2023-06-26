import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import NextLink from '../basic/NextLink';
import Logo from './Logo';
import {useHeader} from './header-context';

export const LogoWrapper: FunctionComponent<{className?: string}> = ({
  className,
}) => {
  const {showSidebar, isSidebarVisible} = useHeader();
  const path = usePathname();

  return (
    <div className={clsx('flex items-center min-w-max ml-2.5 mr-6', className)}>
      <div className="h-10 w-10 relative left-[-1px] z-50 lg:hidden ">
        {!isSidebarVisible && (
          <Logo className="animate-spin-fast" onClick={showSidebar} />
        )}
      </div>
      <Logo className="hidden lg:flex relative left-[-1px]  cursor-default" />

      <NextLink href="/" aria-label="Code Gino">
        <span
          className={clsx('underline-on-hover ml-2 text-2xl font-bold', {
            'text-white border-b-2 border-b-primary-600': path === '/',
          })}
        >
          Code Gino
        </span>
      </NextLink>
    </div>
  );
};

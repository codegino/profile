import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import {usePathname, useParams} from 'next/navigation';
import NextLink from '../basic/NextLink';
import Logo from './Logo';
import {useHeader} from './header-context';
import {twMerge} from 'tailwind-merge';

export const LogoWrapper: FunctionComponent<{className?: string}> = ({
  className,
}) => {
  const {showSidebar, isSidebarVisible} = useHeader();
  const path = usePathname();
  const lang = useParams()?.lang;

  return (
    <div className={clsx('flex items-center min-w-max ml-2.5 mr-6', className)}>
      <div className="h-10 w-10 relative left-[-1px] z-50 lg:hidden ">
        {!isSidebarVisible && (
          <Logo className="animate-spin-fast" onClick={showSidebar} />
        )}
      </div>
      <Logo className="hidden lg:flex relative left-[-1px]  cursor-default" />

      <NextLink href={`/${lang}`} aria-label="Code Gino">
        <span
          className={twMerge(
            'underline-on-hover ml-2 text-2xl font-bold text-white ',
            path === '/' && 'text-primary-400',
          )}
        >
          Code Gino
        </span>
      </NextLink>
    </div>
  );
};

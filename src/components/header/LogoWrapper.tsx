import type {FunctionComponent} from 'react';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import NextLink from '../basic/NextLink';
import Logo from './Logo';
import {useHeader} from './header-context';
import {twMerge} from 'tailwind-merge';

export const LogoWrapper: FunctionComponent<{className?: string}> = ({
  className,
}) => {
  const {showSidebar, isSidebarVisible} = useHeader();
  const path = usePathname();

  return (
    <div className={clsx('ml-2.5 mr-6 flex min-w-max items-center', className)}>
      <div className="relative -left-px z-50 size-10 lg:hidden ">
        {!isSidebarVisible && (
          <Logo className="animate-spin-fast" onClick={showSidebar} />
        )}
      </div>
      <Logo className="relative -left-px hidden cursor-default  lg:flex" />

      <NextLink href="/" aria-label="Code Gino">
        <span
          className={twMerge(
            'underline-on-hover ml-2 text-2xl font-bold text-neutral-50',
            path === '/' && 'text-primary-400',
          )}
        >
          Code Gino
        </span>
      </NextLink>
    </div>
  );
};

import {FunctionComponent} from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import Logo from './Logo';
import {useHeader} from './header-context';

const SmallScreenSidebar = dynamic(() => import('./SmallScreenSidebar'), {
  ssr: false,
});

export const SmallScreenContent: FunctionComponent<{
  className?: string;
}> = ({className}) => {
  return (
    <div className={clsx('relative w-full text-right block', className)}>
      <SmallScreenSidebar />
    </div>
  );
};

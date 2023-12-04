import type {FunctionComponent, ReactNode} from 'react';
import clsx from 'clsx';
import {BottomLeftShape} from './extras/BottomLeftShape';
import {BottomRightShape} from './extras/BottomRightShape';
import {TopLeftShape} from './extras/TopLeftShape';
import {TopRightShape} from './extras/TopRightShape';

export const FullScreenWrapper: FunctionComponent<{
  tr?: boolean;
  tl?: boolean;
  bl?: boolean;
  br?: boolean;
  id?: string;
  children: ReactNode;
  className?: string;
}> = ({children, tr, bl, br, tl, className, ...props}) => {
  const classNames =
    'min-h-screen min-w-full flex flex-col justify-center relative overflow-hidden bg-blue-500';

  return (
    <div className={clsx(classNames, className)} {...props}>
      {tr && <TopRightShape />}
      {bl && <BottomLeftShape />}
      {tl && <TopLeftShape />}
      {br && <BottomRightShape />}
      {children}
    </div>
  );
};

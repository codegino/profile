import {BottomLeftShape} from './extras/BottomLeftShape';
import {BottomRightShape} from './extras/BottomRightShape';
import {TopLeftShape} from './extras/TopLeftShape';
import {TopRightShape} from './extras/TopRightShape';

export const FullScreenWrapper: React.FC<{
  tr?: boolean;
  tl?: boolean;
  bl?: boolean;
  br?: boolean;
  id?: string;
  children: any;
  className?: string;
}> = ({children, tr, bl, br, tl, className, ...props}) => {
  let classNames =
    'min-h-screen min-w-full flex flex-col justify-center relative overflow-hidden';

  if (className) {
    classNames += ` ${className}`;
  }
  return (
    <section className={classNames} {...props}>
      {tr && <TopRightShape />}
      {bl && <BottomLeftShape />}
      {tl && <TopLeftShape />}
      {br && <BottomRightShape />}
      {children}
    </section>
  );
};

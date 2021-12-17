import type {FunctionComponent} from 'react';

export const CornerShape: FunctionComponent<{className?: any}> = ({
  className,
  ...props
}) => {
  let classNames = 'absolute h-5 w-5 z-10';

  if (className) {
    classNames += ` ${className}`;
  }

  return <div {...props} className={classNames} />;
};

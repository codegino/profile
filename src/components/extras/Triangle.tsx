export const CornerShape: React.FC<{className?: any}> = ({
  className,
  ...props
}) => {
  let classNames = 'absolute h-8 w-8 z-10';

  if (className) {
    classNames += ` ${className}`;
  }

  return <div {...props} className={classNames} />;
};

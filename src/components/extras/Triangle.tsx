export const CornerShape: React.FC<{className?: any}> = ({
  className,
  ...props
}) => {
  let classNames = 'absolute h-5 w-5 z-10';

  if (className) {
    classNames += ` ${className}`;
  }

  return <div {...props} className={classNames} />;
};

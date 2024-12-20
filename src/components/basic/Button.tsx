import { forwardRef, type JSX } from 'react';

const Button = forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({className = '', ...props}, ref) => {
    let classNames =
      'py-3 px-2 rounded-xl bg-primary-900 text-neutral-50 hover:bg-primary-800 text-light hover:shadow-sm hover:shadow-dark';

    if (className) {
      classNames += ` ${className}`;
    }

    return <button {...props} ref={ref} className={classNames} />;
  },
);

Button.displayName = 'Button';

export default Button;

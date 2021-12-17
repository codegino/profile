import {forwardRef} from 'react';

const Button = forwardRef<HTMLButtonElement, JSX.IntrinsicElements['button']>(
  ({className = '', ...props}, ref) => {
    let classNames =
      'py-3 px-2 border rounded-xl bg-primary-dark hover:bg-primary-800 text-light';

    if (className) {
      classNames += ` ${className}`;
    }

    return <button {...props} ref={ref} className={classNames} />;
  },
);

Button.displayName = 'Button';

export default Button;

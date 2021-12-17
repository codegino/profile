import {forwardRef} from 'react';

const Input = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  ({color, className = '', ...props}, ref) => (
    <input
      {...props}
      ref={ref}
      className={`text-black p-4 w-full rounded-xl shadow-sm shadow-dark ${
        className ? ` ${className}` : ''
      }`}
    />
  ),
);

Input.displayName = 'Input';

export default Input;

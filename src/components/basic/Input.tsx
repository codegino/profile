import {forwardRef} from 'react';

const Input = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  ({color, className = '', ...props}, ref) => (
    <input
      {...props}
      ref={ref}
      className={`text-neutral-900 py-3 px-4 text-normal w-full rounded-xl ring-1 ring-neutral-700 ${
        className ? ` ${className}` : ''
      }`}
    />
  ),
);

Input.displayName = 'Input';

export default Input;

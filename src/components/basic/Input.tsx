import { forwardRef, type JSX } from 'react';

const Input = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
  ({color, className = '', ...props}, ref) => (
    <input
      {...props}
      ref={ref}
      className={`text-normal w-full rounded-xl px-4 py-3 ring-1 ring-neutral-700 ${
        className ? ` ${className}` : ''
      }`}
    />
  ),
);

Input.displayName = 'Input';

export default Input;

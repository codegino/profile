import React from 'react';

const Input = React.forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input']
>(({color, className = '', ...props}, ref) => (
  <input
    {...props}
    ref={ref}
    className={`text-black p-4 w-full rounded-xl shadow-sm${
      className ? ` ${className}` : ''
    }`}
  />
));

Input.displayName = 'Input';

export default Input;

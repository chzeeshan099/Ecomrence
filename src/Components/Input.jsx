import React, { forwardRef } from 'react';

const Input = forwardRef(({ placeholder, width, ...props }, ref) => {
  return (
    <input
      placeholder={placeholder}
      style={{ width: width }}
      className='p-2 rounded border-1'
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;

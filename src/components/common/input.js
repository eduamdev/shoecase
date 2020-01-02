import React from 'react';

const Input = ({
  name,
  className = 'w-full px-4 py-3 border outline-none text-sm tracking-wider lg:tracking-widest mb-10 rounded-sm border-gray-300',
  ...rest
}) => {
  return <input name={name} className={className} {...rest} type='text' />;
};

export default Input;

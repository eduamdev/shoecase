import React from 'react';
import Input from './common/input';

const InputWithLabel = ({ label, name, ...rest }) => {
  return (
    <>
      <label
        htmlFor={name}
        className='block w-full text-left text-xs lg:text-sm capitalize mb-1 lg:mb-2'
      >
        {label}
      </label>
      <Input name={name} {...rest} type='text' />
    </>
  );
};

export default InputWithLabel;

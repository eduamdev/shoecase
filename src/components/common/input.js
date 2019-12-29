import React from 'react';

const Input = ({
  name,
  label,
  placeholder,
  classes = 'w-full px-4 py-3 border border-gray-300 outline-none text-sm tracking-widest mb-10 rounded-sm'
}) => {
  return (
    <>
      <label
        className='block w-full text-left text-xs lg:text-sm capitalize mb-1 lg:mb-2'
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        class={classes}
        placeholder={placeholder}
        type='text'
      />
    </>
  );
};

export default Input;

import React from 'react';

const Input = ({ name, label, placeholder, dark = false }) => {
  return (
    <>
      {label && (
        <label
          className='block w-full text-left text-xs lg:text-sm capitalize mb-1 lg:mb-2'
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        class={
          dark
            ? 'w-full px-4 py-3 bg-gray-900 text-gray-400 border-none outline-none text-sm tracking-wider lg:tracking-widest tracking-widest rounded-sm'
            : 'w-full px-4 py-3 border border-gray-300 outline-none text-sm tracking-wider lg:tracking-widest mb-10 rounded-sm'
        }
        placeholder={placeholder}
        type='text'
      />
    </>
  );
};

export default Input;

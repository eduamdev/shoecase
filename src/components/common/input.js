import React from 'react';

const Input = ({ name, label, placeholder, dark = false }) => {
  const defaultClasses =
    'w-full px-4 py-3 border outline-none text-sm tracking-wider lg:tracking-widest mb-10 rounded-sm';

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
        className={
          dark
            ? `${defaultClasses} border-gray-900 bg-gray-900 text-gray-400`
            : `${defaultClasses} border-gray-300`
        }
        placeholder={placeholder}
        type='text'
      />
    </>
  );
};

export default Input;

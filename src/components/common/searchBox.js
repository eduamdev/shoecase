import React from 'react';

const SearchBox = ({ value, placeholder }) => {
  return (
    <input
      type='text'
      name='query'
      className='ml-8 w-full border-none bg-transparent outline-none text-sm tracking-wide'
      placeholder={placeholder}
      value={value}
    ></input>
  );
};

export default SearchBox;

import React from 'react';

const SearchBox = ({ children, ...rest }) => {
  return (
    <div className='flex items-center w-full md:w-56 lg:w-84 xl:w-108 h-8 lg:h-10 relative bg-gray-200 py-2 px-4 rounded md:mr-8'>
      <input
        type='text'
        className='ml-8 w-full border-none bg-transparent outline-none text-sm tracking-wide'
        {...rest}
      ></input>
      {children}
    </div>
  );
};

export default SearchBox;

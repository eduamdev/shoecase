import React from 'react';
import Input from './common/input';

const SearchBox = ({ icon, ...rest }) => {
  return (
    <div className='relative flex items-center w-full md:w-56 lg:w-84 xl:w-108 h-10 bg-gray-200 py-2 px-4 rounded md:mr-8'>
      {icon}
      <Input
        type='text'
        className='placeholder-italic ml-8 w-full border-none bg-transparent outline-none text-xs lg:text-sm tracking-widest lg:tracking-wider'
        {...rest}
      ></Input>
    </div>
  );
};

export default SearchBox;

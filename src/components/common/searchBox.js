import React from 'react';
import Icon from './icon';

const SearchBox = ({ value, placeholder }) => {
  return (
    <div className='flex items-center w-full md:w-56 lg:w-84 xl:w-108 h-8 lg:h-10 relative bg-gray-200 py-2 px-4 rounded-sm md:mr-8'>
      <input
        type='text'
        name='query'
        className='ml-8 w-full border-none bg-transparent outline-none text-sm tracking-wide'
        placeholder={placeholder}
        value={value}
      ></input>
      <Icon type='magnifier' classes='h-4 w-4 absolute'></Icon>
    </div>
  );
};

export default SearchBox;

import React from 'react';
import Input from './common/input';

const NewsletterInput = ({ name, ...rest }) => {
  return (
    <>
      <Input
        name={name}
        className='font-sans w-full px-4 py-3 border outline-none text-sm tracking-wider lg:tracking-widest mb-10 rounded-sm border-gray-900 bg-gray-900 text-gray-400'
        {...rest}
        type='text'
      />
    </>
  );
};

export default NewsletterInput;

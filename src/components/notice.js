import React from 'react';

const Notice = ({ text, children, hide }) => {
  return (
    <div
      className={`relative text-center w-full px-4 md:px-6 lg:px-12 bg-red-100 border-b border-gray-300 py-2 z-30 ${
        hide ? 'hidden' : ''
      }`}
    >
      <div className='relative'>
        <i className='text-xs text-gray-800 font-light tracking-widest'>
          {text}
        </i>
        {children}
      </div>
    </div>
  );
};

export default Notice;

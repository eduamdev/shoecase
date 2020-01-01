import React from 'react';

const BadgeCounter = ({ count, ...rest }) => {
  return (
    <span className='absolute top-0 rounded-full bg-gray-900 text-white w-4 h-4 border-1 border-white ml-4 mt-2 text-xxs text-center' {...rest}>
      {count}
    </span>
  );
};

export default BadgeCounter;

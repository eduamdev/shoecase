import React from 'react';
import Button from './common/button';

const MainButton = ({ children, hoverable, ...rest }) => {
  return (
    <Button
      className={`w-full bg-black tracking-wider font-light text-sm text-white text-center py-4 rounded-sm ${
        hoverable ? `hover:bg-gray-300 hover:text-black` : ''
      }`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MainButton;

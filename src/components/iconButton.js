import React from 'react';
import Button from './common/button';

const IconButton = ({ icon, children, focusable = false, ...rest }) => {
  return (
    <Button
      className={`relative p-2 outline-none focus:outline-none active:outline-none ${
        focusable ? 'focus:shadow-outline' : ''
      }`}
      {...rest}
    >
      {icon}
      {children}
    </Button>
  );
};

export default IconButton;

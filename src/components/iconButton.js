import React from 'react';
import Button from './common/button';

const IconButton = ({
  icon,
  position,
  children,
  focusable = false,
  ...rest
}) => {
  return (
    <Button
      className={`p-2 outline-none focus:outline-none active:outline-none ${
        position ? position : 'relative'
      } ${focusable ? 'focus:shadow-outline' : ''} `}
      {...rest}
    >
      {icon}
      {children}
    </Button>
  );
};

export default IconButton;

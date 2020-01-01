import React from 'react';

const Button = ({ type = 'button', children, ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;

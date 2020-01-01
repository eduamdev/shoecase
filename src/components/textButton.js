import React from 'react';
import Button from './common/button';

const TextButton = ({ text, ...rest }) => {
  return <Button {...rest}>{text}</Button>;
};

export default TextButton;

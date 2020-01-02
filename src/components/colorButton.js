import React from 'react';
import Button from './common/button';

const ColorButton = ({ color, ...rest }) => {
  const colors = {
    red: 'bg-red-400',
    black: 'bg-black',
    white: 'bg-gray-100'
  };

  const className = `w-8 h-8 border border-gray-400 mr-3 active:outline-none focus:outline-none focus:shadow-outline active:shadow-outline hover:shadow-outline ${colors[color]}`;

  return colors[color] ? (
    <Button className={className} {...rest}></Button>
  ) : null;
};

export default ColorButton;

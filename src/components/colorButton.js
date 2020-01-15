import React from 'react';
import Button from './common/button';

const ColorButton = ({ color, selected = false, ...rest }) => {
  const colors = {
    brown: 'bg-orange-900',
    black: 'bg-black',
    white: 'bg-gray-100'
  };

  const className = `w-8 h-8 lg:w-10 lg:h-10 border-4 border-gray-300 md:border-gray-200 mr-3 active:outline-none focus:outline-none hover-custom-outline ${colors[color]}`;

  return colors[color] ? (
    <Button
      className={`${className} ${selected ? 'custom-outline' : ''}`}
      {...rest}
    ></Button>
  ) : null;
};

export default ColorButton;

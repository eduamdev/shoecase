import React from 'react';

const Button = ({
  category,
  type = 'button',
  bgColor,
  children,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
  ...rest
}) => {
  const classes = {
    default:
      'active:shadow-outline focus:outline-none focus:shadow-outline p-2',
    reset:
      'text-sm md:text-base font-sans tracking-wider underline mr-6 md:m-0',
    color:
      'w-8 h-8 border border-gray-400 mr-3 active:outline-none focus:outline-none focus:shadow-outline active:shadow-outline hover:shadow-outline',
    block: 'w-full h-full focus:outline-none text-left'
  };

  const colors = {
    red: 'bg-red-400',
    black: 'bg-black',
    white: 'bg-gray-100'
  };

  const categories = {
    color: () => `${classes.color} ${colors[bgColor]}`,
    reset: () => `${classes.default} ${classes.reset}`,
    block: () => classes.block,
    default: () => classes.default
  };

  if (bgColor && !colors.hasOwnProperty(bgColor)) return null;

  return (
    <button
      {...rest}
      className={(categories[category] || categories['default'])()}
      type={type}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export default Button;

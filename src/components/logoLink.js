import React from 'react';
import { Link } from 'react-router-dom';

const LogoLink = ({ children, ...rest }) => {
  return (
    <Link
      className='font-bold uppercase text-center tracking-wider md:text-xl md:mr-20'
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LogoLink;

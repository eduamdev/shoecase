import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({ url, icon, focusable = false, children, ...rest }) => {
  return (
    <Link
      to={url}
      className={`p-2 outline-none focus:outline-none active:outline-none ${
        focusable ? 'focus:shadow-outline' : ''
      }`}
      {...rest}
    >
      {icon}
      {children}
    </Link>
  );
};

export default IconLink;

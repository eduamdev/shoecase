import React from 'react';

const AnchorLink = ({ url, children, ...rest }) => (
  <a
    href={url}
    rel='noreferrer noopener nofollow'
    className=' font-normal tracking-wider underline hover:no-underline'
    {...rest}
  >
    {children}
  </a>
);

export default AnchorLink;

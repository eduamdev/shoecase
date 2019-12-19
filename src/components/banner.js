import React from 'react';
import banner from '../images/banner.jpg';

const Banner = () => {
  return (
    <img
      className='w-full h-56 object-cover'
      src={banner}
      alt='grey sneakers on black banner'
    />
  );
};

export default Banner;

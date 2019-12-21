import React from 'react';
import banner from '../images/banner.jpg';

const Banner = () => {
  return (
    <img
      className='w-full h-56 md:h-84 object-cover lg:h-108'
      src={banner}
      alt='grey sneakers on black banner'
    />
  );
};

export default Banner;

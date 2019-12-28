import React from 'react';
import Image from './common/image';

const Banner = () => {
  return (
    <Image
      slug='banner'
      alt='white sneakers on a black background'
      classes='w-full h-56 md:h-84 object-cover lg:h-108'
    />
  );
};

export default Banner;

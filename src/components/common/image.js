import React from 'react';
import Img from 'react-image';
import batcombeLord from '../../images/products/batcombe-lord.jpg';
import callaRose from '../../images/products/calla-rose.webp';
import milaMyth from '../../images/products/mila-myth.webp';

const Image = ({ slug, alt }) => {
  const images = {
    'calla-rose': () => (
      <Img
        className='w-full max-w-md mx-auto md:h-auto object-cover lg:px-10'
        src={callaRose}
        alt={alt}
      />
    ),
    'batcombe-lord': () => (
      <Img
        className='w-full max-w-md mx-auto md:h-auto object-cover lg:px-10'
        src={batcombeLord}
        alt={alt}
      />
    ),
    'mila-myth': () => (
      <Img
        className='w-full max-w-md mx-auto md:h-auto object-cover lg:px-10'
        src={milaMyth}
        alt={alt}
      />
    ),
    default: () => null
  };
  return (images[slug] || images['default'])();
};

export default Image;

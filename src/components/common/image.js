import React from 'react';
import Img from 'react-image';
import batcombeLord from '../../images/products/batcombe-lord.jpg';
import callaRose from '../../images/products/calla-rose.webp';
import milaMyth from '../../images/products/mila-myth.webp';

const Image = ({
  slug,
  alt,
  classes = 'w-full max-w-md mx-auto md:h-auto object-cover lg:px-10',
  noClass = false
}) => {
  const images = {
    'calla-rose': () => (
      <Img className={noClass ? '' : classes} src={callaRose} alt={alt} />
    ),
    'batcombe-lord': () => (
      <Img className={noClass ? '' : classes} src={batcombeLord} alt={alt} />
    ),
    'mila-myth': () => (
      <Img className={noClass ? '' : classes} src={milaMyth} alt={alt} />
    ),
    default: () => null
  };
  return (images[slug] || images['default'])();
};

export default Image;

import React from 'react';
import Img from 'react-image';
import banner from '../../images/banner.jpg';
import benefit1 from '../../images/comfort.jpg';
import benefit2 from '../../images/waterproof.jpg';
import benefit3 from '../../images/light-weight.jpg';
import benefit4 from '../../images/customizable.jpg';
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
    banner: () => (
      <Img className={noClass ? '' : classes} src={banner} alt={alt} />
    ),
    benefit1: () => (
      <Img className={noClass ? '' : classes} src={benefit1} alt={alt} />
    ),
    benefit2: () => (
      <Img className={noClass ? '' : classes} src={benefit2} alt={alt} />
    ),
    benefit3: () => (
      <Img className={noClass ? '' : classes} src={benefit3} alt={alt} />
    ),
    benefit4: () => (
      <Img className={noClass ? '' : classes} src={benefit4} alt={alt} />
    ),
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

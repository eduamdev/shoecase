import React from 'react';
import Img from 'react-image';
import banner from '../../images/banner.jpg';
import feature1 from '../../images/comfort.jpg';
import feature2 from '../../images/waterproof.jpg';
import feature3 from '../../images/light-weight.jpg';
import feature4 from '../../images/customizable.jpg';
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
    feature1: () => (
      <Img className={noClass ? '' : classes} src={feature1} alt={alt} />
    ),
    feature2: () => (
      <Img className={noClass ? '' : classes} src={feature2} alt={alt} />
    ),
    feature3: () => (
      <Img className={noClass ? '' : classes} src={feature3} alt={alt} />
    ),
    feature4: () => (
      <Img className={noClass ? '' : classes} src={feature4} alt={alt} />
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

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
  classes = 'w-full max-w-md mx-auto md:h-auto object-cover lg:px-10',
  noClass = false,
  ...rest
}) => {
  const images = {
    banner: () => (
      <Img className={noClass ? '' : classes} src={banner} {...rest} />
    ),
    comfort: () => (
      <Img className={noClass ? '' : classes} src={feature1} {...rest} />
    ),
    waterproof: () => (
      <Img className={noClass ? '' : classes} src={feature2} {...rest} />
    ),
    'light-weight': () => (
      <Img className={noClass ? '' : classes} src={feature3} {...rest} />
    ),
    customizable: () => (
      <Img className={noClass ? '' : classes} src={feature4} {...rest} />
    ),
    'calla-rose': () => (
      <Img className={noClass ? '' : classes} src={callaRose} {...rest} />
    ),
    'batcombe-lord': () => (
      <Img className={noClass ? '' : classes} src={batcombeLord} {...rest} />
    ),
    'mila-myth': () => (
      <Img className={noClass ? '' : classes} src={milaMyth} {...rest} />
    ),
    default: () => null
  };
  return (images[slug] || images['default'])();
};

export default Image;

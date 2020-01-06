import React from 'react';
import Img from 'react-image';
import banner from '../../assets/images/banner.jpg';
import noResults from '../../assets/images/no-results.jpg';
import feature1 from '../../assets/images/comfort.jpg';
import feature2 from '../../assets/images/waterproof.jpg';
import feature3 from '../../assets/images/light-weight.jpg';
import feature4 from '../../assets/images/customizable.jpg';
import batcombeLord from '../../assets/images/products/batcombe-lord.jpg';
import callaRose from '../../assets/images/products/calla-rose.webp';
import milaMyth from '../../assets/images/products/mila-myth.webp';

const Image = ({ name, className, type, ...rest }) => {
  const classNames = {
    banner: 'w-full h-56 md:h-84 object-cover lg:h-108',
    feature: 'w-full h-56 lg:h-72 object-cover rounded-sm',
    featureAlt:
      'w-full h-72 md:h-108 md:pr-40 lg:h-160 lg:p-0 object-cover relative rounded-sm',
    shoppingBag: 'h-24 object-cover',
    cart: 'w-24 lg:w-16 object-cover',
    product: 'w-full max-w-md mx-auto md:h-auto object-cover lg:px-10',
    singleProduct: 'max-w-full w-full'
  };

  const images = {
    banner: (
      <Img
        name={name}
        className={classNames[type] || className}
        src={banner}
        {...rest}
      />
    ),
    "no-results": (
      <Img
        name={name}
        className={classNames[type] || className}
        src={noResults}
        {...rest}
      />
    ),
    comfort: (
      <Img
        name={name}
        className={classNames[type] || className}
        src={feature1}
        {...rest}
      />
    ),
    waterproof: (
      <Img
        name={name}
        className={classNames[type] || className}
        src={feature2}
        {...rest}
      />
    ),
    'light-weight': (
      <Img
        name={name}
        className={classNames[type] || className}
        src={feature3}
        {...rest}
      />
    ),
    customizable: (
      <Img
        name={name}
        className={classNames[type] || className}
        src={feature4}
        {...rest}
      />
    ),
    'calla-rose': (
      <Img
        name={name}
        className={classNames[type] || className}
        src={callaRose}
        {...rest}
      />
    ),
    'batcombe-lord': (
      <Img
        name={name}
        className={classNames[type] || className}
        src={batcombeLord}
        {...rest}
      />
    ),
    'mila-myth': (
      <Img
        name={name}
        className={classNames[type] || className}
        src={milaMyth}
        {...rest}
      />
    )
  };
  return images[name] || null;
};

export default Image;

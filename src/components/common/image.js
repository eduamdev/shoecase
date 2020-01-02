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

const Image = ({ name, type, ...rest }) => {
  const classNames = {
    banner: 'w-full h-56 md:h-84 object-cover lg:h-108',
    feature: 'w-full h-56 lg:h-72 object-cover rounded-sm',
    featureAlt:
      'w-full h-72 md:h-108 md:pr-40 lg:h-160 lg:p-0 object-cover relative rounded-sm',
    shoppingBag: '',
    cart: 'w-24 lg:w-16 object-cover',
    product: 'w-full max-w-md mx-auto md:h-auto object-cover lg:px-10',
    singleProduct: 'max-w-full w-full'
  };

  const images = {
    banner: (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={banner}
        {...rest}
      />
    ),
    comfort: (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={feature1}
        {...rest}
      />
    ),
    waterproof: (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={feature2}
        {...rest}
      />
    ),
    'light-weight': (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={feature3}
        {...rest}
      />
    ),
    customizable: (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={feature4}
        {...rest}
      />
    ),
    'calla-rose': (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={callaRose}
        {...rest}
      />
    ),
    'batcombe-lord': (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={batcombeLord}
        {...rest}
      />
    ),
    'mila-myth': (
      <Img
        name={name}
        className={classNames[type] || ''}
        src={milaMyth}
        {...rest}
      />
    )
  };
  return images[name] || null;
};

export default Image;

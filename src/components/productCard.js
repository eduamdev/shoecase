import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

const ProductCard = ({ url, image, alt, title, text }) => {
  return (
    <article className='w-1/2 lg:w-1/3 border border-gray-300'>
      <Link to={url}>
        <div className='h-full w-full border-4 xl:border-8 border-transparent hover:border-gray-200 p-6 lg:p-12'>
          <Img
            className='w-full max-w-md mx-auto md:h-auto object-cover lg:px-10'
            src={image}
            alt={alt}
          />
          <h2 className='pt-4 md:pt-8 md:pt-10 font-bold  uppercase md:text-xl xl:text-2xl tracking-wide'>
            {title}
          </h2>
          <p className='pb-4 font-light tracking-wide text-base xl:text-xl leading-loose'>
            {text}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;

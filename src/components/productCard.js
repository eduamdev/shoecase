import React from 'react';
import { Link } from 'react-router-dom';
import Image from './common/image';

const ProductCard = ({ url, image, name, price }) => {
  return (
    <article className='w-1/2 lg:w-1/3 border border-gray-300'>
      <Link to={url}>
        <div className='h-full w-full border-4 xl:border-8 border-transparent hover:border-gray-200 py-6 lg:py-12 px-4 md:px-6 lg:px-12'>
          <Image slug={image.name} alt={image.alt} />
          <span className='block mt-4 lg:mt-0 md:pt-8 md:pt-10 font-medium uppercase text-sm md:text-base xl:text-lg tracking-wide'>
            {name}
          </span>
          <span className='pb-4 font-light tracking-wide text-sm md:text-base xl:text-lg leading-loose'>
            {price}
          </span>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;

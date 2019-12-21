import React from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

const ProductCard = ({ url, image, alt, title, text }) => {
  return (
    <article className='w-1/2 border-r border-b border-gray-300'>
      <Link to={url}>
        <div className='h-full w-full border-4 border-transparent hover:border-gray-200 py-10'>
          <Img className='w-full h-48 object-cover' src={image} alt={alt} />
          <h2 className='px-4 pt-4 font-bold uppercase tracking-wide'>
            {title}
          </h2>
          <p className='font-light font-sm tracking-wide px-4 leading-loose'>
            {text}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;

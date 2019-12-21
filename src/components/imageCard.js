import React from 'react';
import Img from 'react-image';

const ImageCard = ({ image, alt, title, text }) => {
  return (
    <article className='w-full md:w-1/3 md:border-r border-b border-gray-300 p-6 md:py-12 md:px-8 lg:p-12'>
      <Img
        className='w-full h-40 md:h-56 xl:h-72 object-cover rounded-sm'
        src={image}
        alt={alt}
      />
      <h2 className='pt-4 md:pt-8 md:pt-10 font-bold  uppercase md:text-xl xl:text-2xl tracking-wide'>
        {title}
      </h2>
      <p className='pb-4 font-light tracking-wide text-base xl:text-xl leading-loose'>
        {text}
      </p>
    </article>
  );
};

export default ImageCard;

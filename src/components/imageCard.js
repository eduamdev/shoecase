import React from 'react';
import Img from 'react-image';

const ImageCard = ({ image, alt, title, text }) => {
  return (
    <article className='w-full md:w-1/3 md:border-r border-b border-gray-300 p-6 md:p-12'>
      <Img
        className='w-full h-40 md:h-56 xl:h-64 object-cover rounded-sm'
        src={image}
        alt={alt}
      />
      <p className='pt-4 font-bold uppercase leading-loose lg:text-2xl lg:tracking-wide'>
        {title}
      </p>
      <p className=' text-sm tracking-wide lg:text-base font-light'>{text}</p>
    </article>
  );
};

export default ImageCard;

import React from 'react';
import Image from './common/image';

const ImageCard = ({ image, title, content }) => {
  return (
    <article className='w-full md:w-1/3 md:border-r border-b border-gray-300 py-6 md:py-12 lg:py-12 px-4 md:px-6 lg:px-12'>
      <Image
        slug={image.name}
        alt={image.alt}
        classes='w-full h-56 lg:h-72 object-cover rounded-sm'
      />
      <h2 className='pt-4 md:pt-8 md:pt-10 font-bold  uppercase md:text-xl xl:text-2xl tracking-wide'>
        {title}
      </h2>
      <span className='font-light tracking-wide text-base xl:text-xl leading-loose'>
        {content}
      </span>
    </article>
  );
};

export default ImageCard;

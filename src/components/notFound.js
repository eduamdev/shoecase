import React from 'react';

const NotFound = () => {
  return (
    <section className='bg-gray-200 w-full py-10 md:py-20'>
      <article
        className='bg-white mx-auto px-4 md:px-10 py-12 md:py-24 '
        style={{ maxWidth: '80%' }}
      >
        <h1 className='text-center font-bold text-6xl md:text-8xl lg:text-10xl uppercase tracking-wide'>
          404
        </h1>
        <h2 className='text-center font-bold uppercase text-xl lg:text-3xl tracking-wide mb-4'>
          page not found
        </h2>
        <p className='text-center text-sm tracking-wide leading-loose max-w-2xl mx-auto mb-4'>
          We apologize but we cannot find the page you are looking for. Please
          contact our Client Services team or navigate to another page. Thank
          you.
        </p>
      </article>
    </section>
  );
};

export default NotFound;

import React from 'react';
import ProductFilter from './productFilter';
import ProductCard from './productCard';
import batcombeLord from '../images/products/batcombe-lord.jpg';
import orsonHarbour from '../images/products/orson-harbour.webp';

const Products = ({ genre }) => {
  return (
    <>
      <section className='flex flex-wrap items-center justify-center w-full h-12 md:h-auto py-2 md:py-4 px-4 lg:px-6 xl:px-8 border-b border-gray-300'>
        <h1 className='text-center tracking-wide text-gray-800 font-bold uppercase md:text-xl lg:font-extrabold xl:text-2xl'>
          {genre}
        </h1>
      </section>
      <ProductFilter></ProductFilter>
      <section className='flex flex-wrap w-full'>
        <ProductCard
          url='/men/batcombe-lord'
          image={batcombeLord}
          alt='shoes'
          title='Batcombe Lord'
          text='$145'
        ></ProductCard>
        <ProductCard
          url='/men/orson-harbour'
          image={orsonHarbour}
          alt='shoes'
          title='orson harbour'
          text='$115'
        ></ProductCard>
        <ProductCard
          url='/men/batcombe-lord'
          image={batcombeLord}
          alt='shoes'
          title='Batcombe Lord'
          text='$145'
        ></ProductCard>
        <ProductCard
          url='/men/orson-harbour'
          image={orsonHarbour}
          alt='shoes'
          title='orson harbour'
          text='$115'
        ></ProductCard>
      </section>
    </>
  );
};

export default Products;

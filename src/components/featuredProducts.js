import React from 'react';
import ProductCard from './productCard';
import shoe1 from '../images/products/batcombe-lord.jpg';
import shoe2 from '../images/products/calla-rose.webp';

const FeaturedProducts = () => {
  return (
    <section className='flex flex-wrap w-full'>
      <div className='w-full border border-gray-300 p-8'>
        <h2 className='py-4  xl:py-10 font-bold text-lg  uppercase md:text-2xl xl:text-3xl tracking-wide text-center'>
          featured products
        </h2>
      </div>
      <ProductCard
        url='/men/batcombe-lord'
        image={shoe1}
        alt='shoes'
        title='Batcombe Lord'
        text='$145'
      ></ProductCard>
      <ProductCard
        url='/men/orson-harbour'
        image={shoe2}
        alt='shoes'
        title='orson harbour'
        text='$115'
      ></ProductCard>
    </section>
  );
};

export default FeaturedProducts;

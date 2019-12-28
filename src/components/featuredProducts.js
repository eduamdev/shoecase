import React from 'react';
import ProductCard from './productCard';
import { getProducts } from '../services/fakeProductService';

const FeaturedProducts = () => {
  const products = getProducts();

  return (
    <section className='flex flex-wrap w-full'>
      <div className='w-full border border-gray-300 p-8'>
        <h2 className='py-4  xl:py-10 font-bold text-lg  uppercase md:text-2xl xl:text-3xl tracking-wide text-center'>
          featured products
        </h2>
      </div>
      {products &&
        products
          .filter(p => p.featured)
          .map(product => (
            <ProductCard
              key={product._id}
              url={`${product.genre}/${product.slug}`}
              slug={product.slug}
              alt={product.description}
              name={product.name}
              price={`$${product.price}`}
            ></ProductCard>
          ))}
    </section>
  );
};

export default FeaturedProducts;

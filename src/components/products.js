import React, { useState, useEffect } from 'react';
import ProductFilter from './productFilter';
import ProductCard from './productCard';
import { getProducts } from '../services/fakeProductService';

const Products = ({ genre, areFiltersShowing, handleFiltersClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <section className='relative bg-white flex flex-wrap items-center justify-center w-full h-12 md:h-auto py-2 md:py-4 px-4 lg:px-6 xl:px-8 border-b border-gray-300 z-20'>
        <h1 className='text-center tracking-wide text-gray-800 font-bold uppercase md:text-xl lg:font-extrabold xl:text-2xl'>
          {genre}
        </h1>
      </section>
      <ProductFilter
        areFiltersShowing={areFiltersShowing}
        handleFiltersClick={handleFiltersClick}
      ></ProductFilter>
      <section className='flex flex-wrap w-full'>
        {products &&
          products
            .filter(p => p.genre === genre)
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
    </>
  );
};

export default Products;

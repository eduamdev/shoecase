import React, { useState, useEffect } from 'react';
import ProductCard from './productCard';
import { getProducts } from '../services/fakeProductService';

const FeaturedProducts = ({ title }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <section className='flex flex-wrap w-full'>
      <div className='w-full border border-gray-300 pt-10 lg:pt-16 pb-2 lg:pb-4'>
        <h2 className='py-4  lg:pt-8 font-bold text-lg  uppercase md:text-2xl xl:text-3xl tracking-wide text-center'>
          {title}
        </h2>
      </div>
      {products &&
        products
          .filter(p => p.featured)
          .map(product => (
            <ProductCard
              key={product._id}
              url={`/products/${product.slug}`}
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

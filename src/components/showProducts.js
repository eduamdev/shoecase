import React from 'react';
import ProductCard from './productCard';
import { NumberUtils } from '../utils';

const ShowProducts = ({ products }) => {
  return products.map(p => (
    <ProductCard
      key={p._id}
      url={`/products/${p.slug}`}
      image={{ name: p.slug, alt: p.description }}
      name={p.name}
      price={`$${NumberUtils.formatCurrency(p.price, 2)}`}
    ></ProductCard>
  ));
};

export default ShowProducts;

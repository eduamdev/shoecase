import React from 'react';
import ProductCard from './productCard';
import NoResultsFound from './noResultsFound';
import { NumberUtils, ArrayUtils } from '../utils';
import { useFiltersState } from '../context/filtersContext';

const ShowProducts = ({ products }) => {
  const {
    categories,
    colors,
    areCategoriesSelected,
    areColorsSelected
  } = useFiltersState();

  const getSelectedColors = () =>
    colors.filter(c => c.selected).map(c => c._id);
  const getSelectedCategories = () =>
    categories.filter(c => c.selected).map(c => c._id);

  let filteredProducts = products;

  if (areColorsSelected) {
    // only colors selected
    filteredProducts = products.filter(p =>
      getSelectedColors().includes(p.color._id)
    );

    if (areCategoriesSelected) {
      // colors and categories selected
      filteredProducts = filteredProducts.filter(p =>
        getSelectedCategories().includes(p.category._id)
      );
    }
  }

  if (areCategoriesSelected) {
    // only categories selected
    filteredProducts = products.filter(p =>
      getSelectedCategories().includes(p.category._id)
    );

    if (areColorsSelected) {
      // categories and colors selected
      filteredProducts = filteredProducts.filter(p =>
        getSelectedColors().includes(p.color._id)
      );
    }
  }

  return ArrayUtils.isArrayEmpty(filteredProducts) ? (
    <NoResultsFound></NoResultsFound>
  ) : (
    filteredProducts.map(p => (
      <ProductCard
        key={p._id}
        url={`/products/${p.slug}`}
        image={{ name: p.slug, alt: p.description }}
        name={p.name}
        price={`$${NumberUtils.formatCurrency(p.price, 2)}`}
      ></ProductCard>
    ))
  );
};

export default ShowProducts;

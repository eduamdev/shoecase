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

  let filteredProducts = products;

  if (areColorsSelected) {
    const selectedColors = colors.filter(c => c.selected).map(c => c._id);
    filteredProducts = products.filter(p =>
      selectedColors.includes(p.color._id)
    );

    if (areCategoriesSelected) {
      console.log('AND categories selected');
      const selectedCategories = categories
        .filter(c => c.selected)
        .map(c => c._id);
      console.log(selectedCategories);
      filteredProducts = filteredProducts.filter(p =>
        selectedCategories.includes(p.category._id)
      );
    }
  }

  if (areCategoriesSelected) {
    console.log('first categories selected');
    const selectedCategories = categories
      .filter(c => c.selected)
      .map(c => c._id);
    console.log(selectedCategories);
    filteredProducts = products.filter(p =>
      selectedCategories.includes(p.category._id)
    );

    console.log(filteredProducts);

    if (areColorsSelected) {
      const selectedColors = colors.filter(c => c.selected).map(c => c._id);
      filteredProducts = filteredProducts.filter(p =>
        selectedColors.includes(p.color._id)
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

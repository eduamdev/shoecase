import React, { useState, useEffect } from 'react';
import ProductFilters from '../components/productFilters';
import NoResultsFound from '../components/noResultsFound';
import ShowProducts from '../components/showProducts';
import { getProducts } from '../services/fakeProductService';
import { filterProducts } from '../helpers/productsHelper';
import { useFiltersState } from '../context/filtersContext';
import { ArrayUtils } from '../utils';

const Products = ({ match, genre, areFiltersShowing, handleFiltersClick }) => {
  const [products, setProducts] = useState([]);
  let filteredProducts = [];
  let areProductsFilteredByGenre = false;
  let areProductsFilteredBySearch = false;

  useEffect(() => {
    setProducts(getProducts());
  }, []);

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

  function getFilterProducts(products) {
    if (ArrayUtils.isArrayEmpty(products)) {
      return products;
    }

    let filtered = products;

    if (areColorsSelected) {
      // only colors selected
      filtered = filtered.filter(p =>
        getSelectedColors().includes(p.color._id)
      );

      if (areCategoriesSelected) {
        // colors and categories selected
        filtered = filtered.filter(p =>
          getSelectedCategories().includes(p.category._id)
        );
      }
    }

    if (areCategoriesSelected) {
      // only categories selected
      filtered = filtered.filter(p =>
        getSelectedCategories().includes(p.category._id)
      );

      if (areColorsSelected) {
        // categories and colors selected
        filtered = filtered.filter(p =>
          getSelectedColors().includes(p.color._id)
        );
      }
    }

    return filtered;
  }

  if (products.length > 0) {
    const search = match.params.query;
    let filtered = products;

    if (search) {
      areProductsFilteredByGenre = false;
      areProductsFilteredBySearch = true;

      filtered = filterProducts('search', search, filtered);
    } else if (genre) {
      areProductsFilteredByGenre = true;
      areProductsFilteredBySearch = false;

      filtered = filterProducts('genre', genre, filtered);
    }

    filtered = getFilterProducts(filtered);
    filteredProducts = filtered ? filtered : [];
  }

  return (
    <>
      {areProductsFilteredByGenre && (
        <section className='relative bg-white flex flex-wrap items-center justify-center w-full h-12 md:h-16 px-4 lg:px-6 lg:px-12 border-b border-gray-300 z-20'>
          <h1 className='text-center tracking-wide text-gray-800 font-bold uppercase md:text-xl lg:font-extrabold xl:text-2xl'>
            {genre}
          </h1>
        </section>
      )}
      {areProductsFilteredBySearch && (
        <div className='relative bg-white flex flex-wrap items-center justify-start w-full h-12 md:h-16 px-4 lg:px-6 lg:px-12 border-b border-gray-300 z-20'>
          <h2 className='text-left capitalize font-bold md:text-lg tracking-wide'>
            {filteredProducts.length} Search Results "{match.params.query}"
          </h2>
        </div>
      )}
      {(areProductsFilteredByGenre || filteredProducts.length > 0) && (
        <ProductFilters
          genre={genre}
          count={filteredProducts.length}
          areFiltersShowing={areFiltersShowing}
          handleFiltersClick={handleFiltersClick}
        ></ProductFilters>
      )}

      <section className='bg-white flex flex-wrap w-full'>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          <ShowProducts products={filteredProducts}></ShowProducts>
        ) : (
          <NoResultsFound></NoResultsFound>
        )}
      </section>
    </>
  );
};

export default Products;

import React, { useState, useEffect } from 'react';
import Button from './common/button';
import Icon from './common/icon';
import { getCategories } from '../services/fakeCategoryService';
import { getColors } from '../services/fakeColorService';

const ProductFilter = ({ areFiltersShowing, handleFiltersClick }) => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState('');

  useEffect(() => {
    const fetchData = () => {
      setColors(getColors());
      setCategories(getCategories());
    };

    fetchData();
  }, []);

  function handleColorMouseEnter(e) {
    setCurrentColor(e.currentTarget.name);
  }

  function handleColorMouseLeave() {
    setCurrentColor('');
  }

  const btnFilterClasses = areFiltersShowing
    ? 'flex flex-wrap items-center justify-end w-full h-full border-b-2 outline-none focus:outline-none border-black py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-12'
    : 'flex flex-wrap items-center justify-end w-full h-full border-b-2 outline-none focus:outline-none border-transparent  py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-12';

  return (
    <>
      <section
        className={`relative bg-white w-full h-12 border-b border-gray-300 md:h-auto z-20`}
      >
        <div className='flex flex-wrap items-center justify-between w-full h-full '>
          <h2 className='text-left capitalize font-bold pl-4 md:pl-6 lg:pl-12 md:text-lg tracking-wide'>
            All shoes{' '}
            <span className='text-xs lg:text-sm font-light tracking-wider lg:ml-2 text-gray-800'>
              ( 4 Products)
            </span>
          </h2>
          <div className='h-full border-l border-gray-300'>
            <button onClick={handleFiltersClick} className={btnFilterClasses}>
              <Icon type='filter' classes='h-4 w-4 mr-2 lg:mr-3'></Icon>
              <span className='text-sm lg:text-base tracking-wide'>
                Filters
              </span>
            </button>
          </div>
        </div>
      </section>

      {areFiltersShowing && (
        <>
          {/* Small devices */}
          <section className='relative bg-white w-full h-full border-b border-gray-300 md:hidden z-20'>
            <div className='w-full h-12 px-4'>
              <div className='flex flex-wrap items-center justify-between w-full h-12 border-b border-gray-300'>
                <h2 className='text-left text-sm uppercase tracking-wide font-bold'>
                  categories
                </h2>
                <div className='flex flex-wrap items-center'>
                  <Button category='reset' type='reset'>
                    Reset
                  </Button>
                  <Button>
                    <Icon
                      type='plus'
                      classes='h-4 w-4 text-gray-800 fill-current'
                    ></Icon>
                  </Button>
                </div>
              </div>
            </div>
            <div className='w-full px-4 bg-gray-200'>
              <ul className='w-full py-4'>
                {categories &&
                  categories.map(category => (
                    <li
                      key={category._id}
                      className='flex flex-wrap items-center  w-full h-12 text-left text-sm capitalize font-light tracking-wide'
                    >
                      {category.name}
                    </li>
                  ))}
              </ul>
            </div>
            <div className='w-full h-12 px-4'>
              <div className='flex flex-wrap items-center justify-between w-full h-12'>
                <h2 className='text-left text-sm uppercase tracking-wide font-bold'>
                  colors
                </h2>
                <div className='flex flex-wrap items-center'>
                  <Button category='reset' type='reset'>
                    Reset
                  </Button>
                  <Button>
                    <Icon
                      type='minus'
                      classes='h-4 w-4 text-gray-800 fill-current'
                    ></Icon>
                  </Button>
                </div>
              </div>
            </div>
            <div className='w-full px-4 bg-gray-200 '>
              <div className='flex flex-wrap items-center w-full h-24'>
                {colors &&
                  colors.map(color => {
                    let { _id, name } = color;
                    name = name
                      .toString()
                      .toLowerCase()
                      .trim();

                    return (
                      <Button
                        key={_id}
                        category='color'
                        bgColor={name}
                      ></Button>
                    );
                  })}
              </div>
            </div>
          </section>

          {/* Medium+ devices */}
          <section className='relative bg-white hidden md:flex flex-wrap w-full h-full border border-gray-300 z-20'>
            <div className='w-1/2 border-r border-gray-300 py-2 md:py-6 lg:py-8'>
              <div className='flex flex-wrap justify-between w-full px-4 md:px-6 lg:px-12'>
                <h2 className='font-bold tracking-wide uppercase'>
                  categories
                </h2>
                <Button category='reset' type='reset'>
                  Reset
                </Button>
              </div>
              <div className='w-full px-4 md:px-6 lg:px-12 mt-6'>
                <ul>
                  {categories &&
                    categories.map(category => (
                      <li key={category._id} className='leading-loose mb-3'>
                        {category.name}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className='w-1/2 py-2 md:py-6 lg:py-8 px-4 md:px-6 lg:px-12'>
              <div className='flex flex-wrap justify-between w-full '>
                <h2 className='font-bold tracking-wide uppercase'>colors</h2>
                <Button category='reset' type='reset'>
                  Reset
                </Button>
              </div>
              <span className='block mt-8 h-6 capitalize text-sm tracking-wide text-gray-800 font-semibold'>
                {currentColor}
              </span>
              <div className='mt-2'>
                {colors &&
                  colors.map(color => {
                    let { _id, name } = color;
                    name = name
                      .toString()
                      .toLowerCase()
                      .trim();

                    return (
                      <Button
                        key={_id}
                        name={name}
                        category='color'
                        bgColor={name}
                        handleMouseEnter={handleColorMouseEnter}
                        handleMouseLeave={handleColorMouseLeave}
                      ></Button>
                    );
                  })}
              </div>
            </div>
            <button
              onClick={handleFiltersClick}
              className='close-filters flex flex-wrap items-center w-full border border-gray-300 py-2 md:py-4 focus:outline-none active:outline-none'
            >
              <div className='w-32 m-auto'>
                <Icon
                  type='arrowUp'
                  classes='h-4 w-4 text-gray-800 fill-current inline mr-4'
                ></Icon>{' '}
                <span className='close-filters__label leading-loose text-center capitalize inline'>
                  hide filters
                </span>
              </div>
            </button>
          </section>
        </>
      )}
    </>
  );
};

export default ProductFilter;

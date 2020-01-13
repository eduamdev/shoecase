import React, { useState } from 'react';
import Button from './common/button';
import Icon from './common/icon';
import ColorButton from './colorButton';
import TextButton from './textButton';
import IconButton from './iconButton';
import { useFilters } from '../context/filtersContext';

const ProductFilters = ({
  genre,
  count,
  areFiltersShowing,
  handleFiltersClick
}) => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isColorsOpen, setColorsOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState('');
  const [
    { categories, colors, areCategoriesSelected, areColorsSelected },
    filtersDispatch
  ] = useFilters();

  function handleMouseEnter(e) {
    setCurrentColor(e.currentTarget.name);
  }

  function handleMouseLeave() {
    setCurrentColor('');
  }

  function toggleCategories() {
    setCategoriesOpen(!isCategoriesOpen);
  }

  function toggleColors() {
    setColorsOpen(!isColorsOpen);
  }

  return (
    <>
      <section
        className={`relative bg-white w-full h-12 border-b border-gray-300 md:h-auto z-20`}
      >
        <div className='flex flex-wrap items-center justify-between w-full h-full '>
          <h2
            className={`text-left capitalize font-bold pl-4 md:pl-6 lg:pl-12 md:text-lg tracking-wide ${
              genre ? '' : 'invisible'
            }`}
          >
            All shoes{' '}
            <span className='text-xs lg:text-sm font-light tracking-wider lg:ml-2 text-gray-800 capitalize'>
              ( {count} {count === 1 ? `product` : `products`})
            </span>
          </h2>
          <div className='h-full border-l border-gray-300'>
            <Button
              onClick={handleFiltersClick}
              className={`flex flex-wrap items-center justify-end w-full h-full border-b-2 outline-none focus:outline-none ${
                areFiltersShowing
                  ? 'border-black py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-12'
                  : 'border-transparent hover:border-gray-400 py-2 md:py-4 lg:py-6 px-4 md:px-6 lg:px-12'
              } `}
            >
              <Icon type='filter' className='h-4 w-4 mr-2 lg:mr-3'></Icon>
              <span className='text-sm lg:text-base tracking-wide'>
                Filters
              </span>
            </Button>
          </div>
        </div>
      </section>
      {!areFiltersShowing && (areCategoriesSelected || areColorsSelected) && (
        <section className='relative bg-white hidden md:block w-full h-full border-b border-gray-300 z-20'>
          <div className='flex flex-wrap justify-between items-center px-4 md:px-6 lg:px-12 py-4'>
            <ul className='flex flex-wrap'>
              {[...categories, ...colors].map(
                c =>
                  c.selected && (
                    <li key={c._id} className='mr-4'>
                      <Button
                        className='flex flex-wrap items-center w-full bg-black tracking-wider font-light text-sm text-white text-center py-3 px-4 rounded-sm hover:bg-gray-300 hover:text-black capitalize'
                        onClick={() =>
                          filtersDispatch({
                            type: 'TOGGLE_FILTER',
                            payload: {
                              id: c._id
                            }
                          })
                        }
                      >
                        {c.name}
                        <Icon
                          type='close'
                          className='ml-2 h-3 w-3 fill-current'
                        ></Icon>
                      </Button>
                    </li>
                  )
              )}
            </ul>
            <TextButton
              text='reset all'
              type='reset'
              className='text-sm md:text-base font-sans tracking-wider underline mr-6 md:m-0 active:shadow-outline focus:outline-none focus:shadow-outline p-2 md:p-0 capitalize'
              onClick={() =>
                filtersDispatch({
                  type: 'RESET_ALL_FILTERS'
                })
              }
            ></TextButton>
          </div>
        </section>
      )}

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
                  {areCategoriesSelected && (
                    <TextButton
                      text='reset'
                      type='reset'
                      className='text-sm md:text-base font-sans tracking-wider underline mr-6 md:m-0 active:shadow-outline focus:outline-none focus:shadow-outline p-2 md:p-0 capitalize'
                      onClick={() =>
                        filtersDispatch({
                          type: 'RESET_CATEGORIES'
                        })
                      }
                    ></TextButton>
                  )}
                  <IconButton
                    onClick={toggleCategories}
                    focusable
                    icon={
                      <Icon
                        type={isCategoriesOpen ? 'minus' : 'plus'}
                        className='h-4 w-4 text-gray-800 fill-current'
                      />
                    }
                  ></IconButton>
                </div>
              </div>
            </div>
            {isCategoriesOpen && (
              <div className='w-full px-4 bg-gray-200'>
                <ul className='w-full py-4'>
                  {categories &&
                    categories.map(category => (
                      <li
                        key={category._id}
                        className='flex flex-wrap items-center  w-full h-12 text-left text-sm capitalize font-light tracking-wide'
                      >
                        {category.selected ? (
                          <Button
                            className='flex flex-wrap items-center bg-black tracking-wider font-light text-sm text-white text-center py-2 px-4 rounded-sm hover:bg-gray-300 hover:text-black capitalize'
                            onClick={() =>
                              filtersDispatch({
                                type: 'TOGGLE_CATEGORY',
                                payload: {
                                  id: category._id
                                }
                              })
                            }
                          >
                            {category.name}
                            <Icon
                              type='close'
                              className='ml-2 h-3 w-3 fill-current'
                            ></Icon>
                          </Button>
                        ) : (
                          <Button
                            className='w-full h-full focus:outline-none text-left'
                            onClick={() =>
                              filtersDispatch({
                                type: 'TOGGLE_CATEGORY',
                                payload: {
                                  id: category._id
                                }
                              })
                            }
                          >
                            {category.name}
                          </Button>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            )}
            <div className='w-full h-12 px-4'>
              <div className='flex flex-wrap items-center justify-between w-full h-12'>
                <h2 className='text-left text-sm uppercase tracking-wide font-bold'>
                  colors
                </h2>
                <div className='flex flex-wrap items-center'>
                  {areColorsSelected && (
                    <TextButton
                      text='reset'
                      type='reset'
                      className='text-sm md:text-base font-sans tracking-wider underline mr-6 md:m-0 active:shadow-outline focus:outline-none focus:shadow-outline p-2 md:p-0 capitalize'
                      onClick={() =>
                        filtersDispatch({
                          type: 'RESET_COLORS'
                        })
                      }
                    ></TextButton>
                  )}
                  <IconButton
                    onClick={toggleColors}
                    focusable
                    icon={
                      <Icon
                        type={isColorsOpen ? 'minus' : 'plus'}
                        className='h-4 w-4 text-gray-800 fill-current'
                      />
                    }
                  ></IconButton>
                </div>
              </div>
            </div>
            {isColorsOpen && (
              <div className='w-full px-4 bg-gray-200 '>
                <div className='flex flex-wrap items-center w-full h-24'>
                  {colors &&
                    colors.map(color => {
                      return (
                        <ColorButton
                          key={color._id}
                          selected={color.selected}
                          color={color.name
                            .toString()
                            .trim()
                            .toLowerCase()}
                          onClick={() =>
                            filtersDispatch({
                              type: 'TOGGLE_COLOR',
                              payload: {
                                id: color._id
                              }
                            })
                          }
                        ></ColorButton>
                      );
                    })}
                </div>
              </div>
            )}
          </section>

          {/* Medium+ devices */}
          <section className='relative bg-white hidden md:flex flex-wrap w-full h-full border border-gray-300 z-20'>
            <div className='w-1/2 border-r border-gray-300 py-2 md:py-6 lg:py-8'>
              <div className='flex flex-wrap justify-between w-full px-4 md:px-6 lg:px-12'>
                <h2 className='font-bold tracking-wide uppercase'>
                  categories
                </h2>
                {areCategoriesSelected && (
                  <TextButton
                    text='reset'
                    type='reset'
                    className='text-sm md:text-base font-sans tracking-wider underline mr-6 md:m-0 active:shadow-outline focus:outline-none focus:shadow-outline p-2 md:p-0 capitalize'
                    onClick={() =>
                      filtersDispatch({
                        type: 'RESET_CATEGORIES'
                      })
                    }
                  ></TextButton>
                )}
              </div>
              <div className='w-full px-4 md:px-6 lg:px-12 mt-6'>
                <ul>
                  {categories &&
                    categories.map(category => (
                      <li key={category._id} className='leading-loose mb-1'>
                        {category.selected ? (
                          <Button
                            className='flex flex-wrap items-center bg-black tracking-wider font-light text-sm text-white text-center py-2 px-4 rounded-sm hover:bg-gray-300 hover:text-black capitalize'
                            onClick={() =>
                              filtersDispatch({
                                type: 'TOGGLE_CATEGORY',
                                payload: {
                                  id: category._id
                                }
                              })
                            }
                          >
                            {category.name}
                            <Icon
                              type='close'
                              className='ml-2 h-3 w-3 fill-current'
                            ></Icon>
                          </Button>
                        ) : (
                          <Button
                            className='w-full h-full focus:outline-none text-left py-2'
                            onClick={() =>
                              filtersDispatch({
                                type: 'TOGGLE_CATEGORY',
                                payload: {
                                  id: category._id
                                }
                              })
                            }
                          >
                            {category.name}
                          </Button>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className='w-1/2 py-2 md:py-6 lg:py-8 px-4 md:px-6 lg:px-12'>
              <div className='flex flex-wrap justify-between w-full '>
                <h2 className='font-bold tracking-wide uppercase'>colors</h2>
                {areColorsSelected && (
                  <TextButton
                    text='reset'
                    type='reset'
                    className='text-sm md:text-base font-sans tracking-wider underline mr-6 md:m-0 active:shadow-outline focus:outline-none focus:shadow-outline p-2 md:p-0 capitalize'
                    onClick={() =>
                      filtersDispatch({
                        type: 'RESET_COLORS'
                      })
                    }
                  ></TextButton>
                )}
              </div>
              <span className='block mt-8 h-6 capitalize text-sm tracking-wide text-gray-800 font-semibold'>
                {currentColor}
              </span>
              <div className='mt-2'>
                {colors &&
                  colors.map(color => {
                    return (
                      <ColorButton
                        key={color._id}
                        selected={color.selected}
                        name={color.name
                          .toString()
                          .trim()
                          .toLowerCase()}
                        color={color.name
                          .toString()
                          .trim()
                          .toLowerCase()}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={() =>
                          filtersDispatch({
                            type: 'TOGGLE_COLOR',
                            payload: {
                              id: color._id
                            }
                          })
                        }
                      ></ColorButton>
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
                  className='h-4 w-4 text-gray-800 fill-current inline mr-4'
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

export default ProductFilters;

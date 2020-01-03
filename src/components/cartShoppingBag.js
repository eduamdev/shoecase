import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from './common/icon';
import Image from './common/image';
import IconButton from './iconButton';
import ProductQuantity from './productQuantity';
import { NumberUtils } from '../utils';

const CartShoppingBag = ({
  products,
  totalProducts,
  totalPrice,
  cartDispatch
}) => {
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(e) {
    const currValue = e.target.value;
    const re = /^[0-9\b]+$/;

    if (currValue === '') setQuantity(1);
    if (re.test(currValue)) {
      if (currValue > 0) setQuantity(Number.parseInt(currValue, 10));
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  function handleDecrement() {
    if (quantity >= 2) setQuantity(quantity - 1);
  }

  return (
    <>
      <h2 className='text-xl  lg:text-2xl font-bold uppercase tracking-wide mb-4 lg:mb-8'>
        your shopping bag{' '}
        <span className='font-light text-sm text-gray-800 ml-2 md:hidden'>
          ({totalProducts})
        </span>
        <span className='font-light text-sm text-gray-800 ml-2 lowercase hidden md:inline-block'>
          ({totalProducts} {totalProducts === 1 ? 'product' : 'products'})
        </span>
      </h2>

      {totalProducts === 0 ? (
        <>
          <span className='block font-light mb-12 text-sm tracking-wider'>
            Your shopping bag is empty
          </span>
          <div className='lg:float-right'>
            <Link to='/women'>
              <button className='w-full px-10 py-3 lg:py-4 border border-black uppercase hover:border-transparent hover:bg-gray-400 tracking-wider mb-10'>
                start shopping
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          {products &&
            products.map((product, index) => {
              return (
                <Fragment key={index}>
                  {/* Small */}
                  <article className='w-full bg-white rounded-sm mb-12 lg:hidden'>
                    <div className='py-10 px-4 md:px-6 lg:px-12 border-b border-gray-300'>
                      <div className='flex flex-wrap w-full'>
                        <div className='w-1/2 md:w-auto'>
                          <Image name={product.slug} type='cart'></Image>
                        </div>
                        <div className='w-1/2 md:ml-32'>
                          <div className='flex content-between flex-wrap h-full'>
                            <h3 className='w-full uppercase font-medium md:text-lg tracking-wide'>
                              {product.name}
                            </h3>
                            <IconButton
                              className='border py-2 px-4 border-gray-300 rounded-sm'
                              onClick={() =>
                                cartDispatch({
                                  type: 'REMOVE_PRODUCT_FROM_CART',
                                  product
                                })
                              }
                              icon={<Icon type='trashCan' />}
                            />
                          </div>
                        </div>
                      </div>
                      <span className='block font-light text-xs text-gray-800 tracking-wide leading-relaxed my-4'>
                        Reference: {product.sku}
                      </span>
                      <span className='block text-sm tracking-wide leading-relaxed '>
                        Color: {product.color.name}
                      </span>
                    </div>
                    <div className='flex flex-wrap items-center justify-between py-6 px-4 md:px-6 lg:px-12'>
                      <div className='border border-black'>
                        <ProductQuantity
                          quantity={quantity}
                          handleQuantityChange={handleQuantityChange}
                          handleIncrement={handleIncrement}
                          handleDecrement={handleDecrement}
                        ></ProductQuantity>
                      </div>
                      <span className='font-medium'>
                        $ {NumberUtils.formatCurrency(product.price, 2)}
                      </span>
                    </div>
                  </article>

                  {/* Large sizes */}
                  <article className='w-full bg-white rounded-sm mb-12 lg:p-10 hidden lg:block px-4 md:px-6 lg:px-12 lg:shadow'>
                    <div className='flex flex-wrap items-start justify-between'>
                      <div>
                        <Image name={product.slug} type='cart'></Image>
                      </div>
                      <div className='w-2/6'>
                        <h3 className='w-full uppercase text-lg tracking-wide font-semibold'>
                          {product.name}
                        </h3>
                        <p className='w-full font-light text-sm text-gray-800 tracking-wide leading-relaxed my-4'>
                          Reference: {product.sku}
                        </p>
                        <p className='w-full text-sm tracking-wide leading-relaxed'>
                          Color: {product.color.name}
                        </p>
                        <button className='border py-2 px-4 border-gray-300 rounded-sm mt-8'>
                          <Icon
                            onClick={() =>
                              cartDispatch({
                                type: 'REMOVE_PRODUCT_FROM_CART',
                                product
                              })
                            }
                            type='trashCan'
                          ></Icon>
                        </button>
                      </div>
                      <div>
                        <div className='border border-black'>
                          <ProductQuantity
                            quantity={quantity}
                            handleQuantityChange={handleQuantityChange}
                            handleIncrement={handleIncrement}
                            handleDecrement={handleDecrement}
                          ></ProductQuantity>
                        </div>
                      </div>
                      <div className='font-medium '>
                        $ {NumberUtils.formatCurrency(product.price, 2)}
                      </div>
                    </div>
                  </article>
                </Fragment>
              );
            })}

          <article className='w-full bg-white rounded-sm px-4 md:px-6 lg:px-12 py-10 lg:py-10 lg:shadow'>
            <div className='flex flex-wrap items-center justify-between  tracking-wide leading-loose'>
              <div className='w-1/2 text-left text-sm md:text-base capitalize mb-4 lg:mb-6'>
                subtotal :
              </div>
              <div className='w-1/2 text-right text-sm md:text-base mb-4 lg:mb-6'>
                $ {NumberUtils.formatCurrency(totalPrice, 2)}
              </div>
              <div className='w-1/2 text-left text-sm md:text-base capitalize mb-4 lg:mb-6'>
                shipping :
              </div>
              <div className='w-1/2 text-right text-sm md:text-base mb-4 lg:mb-6'>
                $0.00
              </div>
              <div className='w-1/2 text-left font-bold capitalize text-lg md:text-xl'>
                total :
              </div>
              <div className='w-1/2 text-right font-bold text-lg md:text-xl'>
                {NumberUtils.formatCurrency(totalPrice, 2)}
              </div>
            </div>
          </article>
        </>
      )}
    </>
  );
};

export default CartShoppingBag;

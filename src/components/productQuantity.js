import React from 'react';
import Button from './common/button';
import Input from './common/input';

const ProductQuantity = ({ product, cartDispatch }) => {
  return (
    <>
      <Button
        className='px-4 py-2 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none'
        onClick={() =>
          cartDispatch({
            type: 'SUBTRACT_PRODUCT_FROM_CART',
            payload: product
          })
        }
      >
        -
      </Button>
      <Input
        className='w-12 px-2 py-2 focus:outline-none border-r border-l border-transparent focus:border-gray-400'
        type='text'
        value={product.quantity}
        onChange={() =>
          cartDispatch({
            type: 'ON_CHANGE_PRODUCT_QUANTITY_FROM_CART',
            payload: product
          })
        }
      />
      <Button
        className='px-4 py-2 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none'
        onClick={() =>
          cartDispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: product
          })
        }
      >
        +
      </Button>
    </>
  );
};

export default ProductQuantity;

import React from 'react';
import Button from './common/button';
import Input from './common/input';

const ProductQuantity = ({
  quantity,
  handleQuantityChange,
  handleIncrement,
  handleDecrement
}) => {
  return (
    <>
      <Button
        className='px-4 py-2 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none'
        onClick={handleDecrement}
      >
        -
      </Button>
      <Input
        className='w-12 px-2 py-2 focus:outline-none border-r border-l border-transparent focus:border-gray-400'
        type='text'
        value={quantity}
        onChange={handleQuantityChange}
      />
      <Button
        className='px-4 py-2 hover:bg-gray-200 focus:bg-gray-300 focus:outline-none'
        onClick={handleIncrement}
      >
        +
      </Button>
    </>
  );
};

export default ProductQuantity;

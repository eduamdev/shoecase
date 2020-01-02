import React from 'react';

const ProductQuantity = ({
  quantity,
  handleQuantityChange,
  handleIncrement,
  handleDecrement
}) => {
  return (
    <>
      <button className='bg-gray-100 px-4 py-2' onClick={handleDecrement}>
        -
      </button>
      <input
        className='w-12 px-2 py-2'
        type='text'
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button className='bg-gray-100 px-4 py-2' onClick={handleIncrement}>
        +
      </button>
    </>
  );
};

export default ProductQuantity;

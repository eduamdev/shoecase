import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      let newProducts = [];

      if (state.products && state.products.length > 0) {
        if (state.products.some(p => p._id === action.product._id)) {
          // Product already exist in cart, increment quantity
          const product = state.products.find(
            p => p._id === action.product._id
          );
          const rest = state.products.filter(p => p._id !== action.product._id);
          product.quantity++;

          newProducts = [...rest, product];
        } else {
          // Product doesnt exist in cart, add
          newProducts = [...state.products, action.product];
        }
      } else {
        newProducts.push(action.product);
      }

      const newTotalPrice =
        newProducts.length > 0
          ? newProducts.reduce(
              (accumulator, currentValue) =>
                parseFloat(accumulator) +
                parseFloat(currentValue.price) *
                  parseInt(currentValue.quantity),
              0
            )
          : 0;

      const newTotalProducts = state.totalProducts
        ? parseInt(state.totalProducts) + 1
        : 1;

      return {
        products: newProducts,
        totalProducts: newTotalProducts,
        totalPrice: newTotalPrice
      };
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      let newProducts = [];

      console.log(action.product);

      if (state.products && state.products.length > 1) {
        newProducts = state.products.filter(p => p._id !== action.product._id);
      } else {
        newProducts = [];
      }

      console.log(newProducts);

      const newTotalPrice =
        newProducts.length > 0
          ? newProducts.reduce(
              (accumulator, currentValue) =>
                parseFloat(accumulator) +
                parseFloat(currentValue.price) *
                  parseInt(currentValue.quantity),
              0
            )
          : 0;

      const newTotalProducts = state.totalProducts
        ? parseInt(state.totalProducts) - 1
        : 0;

      return {
        products: newProducts,
        totalProducts: newTotalProducts,
        totalPrice: newTotalPrice
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

function useCartState() {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
}

function useCart() {
  return [useCartState(), useCartDispatch()];
}

export { CartProvider, useCart };

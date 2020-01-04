import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
  isCartEmpty: true
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      let newState = { ...state };

      if (newState.isCartEmpty) {
        newState.products.push(action.payload);
      } else {
        if (newState.products.find(p => p._id === action.payload._id)) {
          // Product already exist in cart, increment quantity
          newState.products.find(p => p._id === action.payload._id).quantity++;
        } else {
          // Product doesnt exist in cart, add
          newState.products.push(action.payload);
        }
      }

      newState.isCartEmpty =
        Array.isArray(newState.products) && newState.products.length === 0;

      newState.totalProducts = newState.isCartEmpty
        ? 1
        : newState.products.reduce(
            (accumulator, currentValue) =>
              parseInt(accumulator) + parseInt(currentValue.quantity),
            0
          );

      newState.totalPrice = newState.isCartEmpty
        ? 0
        : newState.products.reduce(
            (accumulator, currentValue) =>
              parseFloat(accumulator) +
              parseFloat(currentValue.price) * parseInt(currentValue.quantity),
            0
          );

      return newState;
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      let newState = { ...state };

      newState.products = newState.products.filter(
        p => p._id !== action.payload._id
      );

      newState.isCartEmpty =
        Array.isArray(newState.products) && newState.products.length === 0;

      newState.totalProducts = newState.isCartEmpty
        ? 0
        : newState.products.reduce(
            (accumulator, currentValue) =>
              parseInt(accumulator) + parseInt(currentValue.quantity),
            0
          );

      newState.totalPrice = newState.isCartEmpty
        ? 0
        : newState.products.reduce(
            (accumulator, currentValue) =>
              parseFloat(accumulator) +
              parseFloat(currentValue.price) * parseInt(currentValue.quantity),
            0
          );

      return newState;
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

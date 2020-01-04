import React, { createContext, useContext, useReducer } from 'react';
import { RegExpUtils } from '../utils';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  products: [],
  totalProducts: 0,
  totalPrice: 0,
  isCartEmpty: true
};

const checkCart = state =>
  Array.isArray(state.products) && state.products.length === 0;

const getTotalPrice = (state, initialValue = 0) =>
  state.isCartEmpty
    ? initialValue
    : state.products.reduce(
        (accumulator, currentValue) =>
          parseFloat(accumulator) +
          parseFloat(currentValue.price) * parseInt(currentValue.quantity),
        0
      );

const getTotalProducts = (state, initialValue = 0) =>
  state.isCartEmpty
    ? initialValue
    : state.products.reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator) + parseInt(currentValue.quantity),
        0
      );

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      let newState = { ...state };

      if (newState.products.find(p => p._id === action.payload._id)) {
        // Product already exist in cart, increment quantity
        ++newState.products.find(p => p._id === action.payload._id).quantity;
      } else {
        // Product doesnt exist in cart, add
        newState.products.push(action.payload);
      }

      newState.isCartEmpty = checkCart(newState);
      newState.totalProducts = getTotalProducts(newState);
      newState.totalPrice = getTotalPrice(newState);

      return newState;
    }
    case 'SUBTRACT_PRODUCT_FROM_CART': {
      const newState = { ...state };

      // determine if product exists
      if (newState.products.find(p => p._id === action.payload._id)) {
        // retrieve item
        const item = state.products.find(i => i._id === action.payload._id);

        // if quantity is less than 2, do nothing
        if (item.quantity >= 2)
          --newState.products.find(p => p._id === action.payload._id).quantity;

        newState.isCartEmpty = checkCart(newState);
        newState.totalProducts = getTotalProducts(newState);
        newState.totalPrice = getTotalPrice(newState);

        return newState;
      }

      // if not valid product return previous state
      return state;
    }
    case 'ON_CHANGE_PRODUCT_QUANTITY_FROM_CART': {
      const newState = { ...state };

      // determine if product exists
      if (newState.products.find(p => p._id === action.payload._id)) {
        const index = newState.products.findIndex(
          p => p._id === action.payload._id
        );

        const newQuantity = action.payload.newQuantity;

        if (newQuantity === '') newState.products[index].quantity = 1;
        if (RegExpUtils.onlyContainsNumbers(newQuantity) && newQuantity > 0)
          newState.products[index].quantity = parseInt(newQuantity);

        newState.isCartEmpty = checkCart(newState);
        newState.totalProducts = getTotalProducts(newState);
        newState.totalPrice = getTotalPrice(newState);

        return newState;
      }

      // if not valid product return previous state
      return state;
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      let newState = { ...state };

      newState.products = newState.products.filter(
        p => p._id !== action.payload._id
      );

      newState.isCartEmpty = checkCart(newState);
      newState.totalProducts = getTotalProducts(newState);
      newState.totalPrice = getTotalPrice(newState);

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

export { CartProvider, useCart, useCartState, useCartDispatch };

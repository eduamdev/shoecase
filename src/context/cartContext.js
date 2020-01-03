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
      return {
        products: [
          {
            _id: '5b21ca3eeb7f6fbccd471815',
            sku: '1A586V',
            name: 'calla rose',
            slug: 'calla-rose',
            color: {
              _id: '5b21ca3eeb7f6fbccd471818',
              name: 'Black'
            },
            price: 2470,
            quantity: 1
          }
        ],
        totalProducts: 1,
        totalPrice: 2470
      };
    }
    case 'REMOVE_PRODUCT_FROM_CART': {
      return { products: [], totalProducts: 0, totalPrice: 0 };
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

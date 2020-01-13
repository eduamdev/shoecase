import React, { createContext, useContext, useReducer } from 'react';
import { getCategories } from '../services/fakeCategoryService';
import { getColors } from '../services/fakeColorService';

const FiltersStateContext = createContext();
const FiltersDispatchContext = createContext();

const initialState = {
  colors: getColors(),
  categories: getCategories(),
  areCategoriesSelected: false,
  areColorsSelected: false
};

function filtersReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_COLOR': {
      const newState = { ...state };

      console.log('toggle color: ', action.payload.id);

      // Check if color exist
      if (newState.colors.find(f => f._id === action.payload.id)) {
        const index = newState.colors.findIndex(
          f => f._id === action.payload.id
        );

        newState.colors[index].selected = !newState.colors[index].selected;

        return newState;
      }

      // return previous state
      return state;
    }

    case 'TOGGLE_CATEGORY': {
      const newState = { ...state };

      console.log('toggle category: ', action.payload.id);

      return newState;
    }

    case 'RESET_CATEGORIES': {
      const newState = { ...state };

      console.log('reseting categories...');
      return newState;
    }

    case 'RESET_COLORS': {
      const newState = { ...state };

      console.log('reseting colors...');
      return newState;
    }

    case 'RESET_ALL_FILTERS':
      break;

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);
  return (
    <FiltersStateContext.Provider value={state}>
      <FiltersDispatchContext.Provider value={dispatch}>
        {children}
      </FiltersDispatchContext.Provider>
    </FiltersStateContext.Provider>
  );
};

function useFiltersState() {
  const context = useContext(FiltersStateContext);
  if (context === undefined) {
    throw new Error('useFiltersState must be used within a FiltersProvider');
  }
  return context;
}

function useFiltersDispatch() {
  const context = useContext(FiltersDispatchContext);
  if (context === undefined) {
    throw new Error('useFiltersDispatch must be used within a FiltersProvider');
  }
  return context;
}

function useFilters() {
  return [useFiltersState(), useFiltersDispatch()];
}

export { FiltersProvider, useFilters, useFiltersState, useFiltersDispatch };

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

const deselect = arr => arr.map(c => (c.selected = false));
const verifySelected = arr => arr.some(c => c.selected);

function filtersReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_COLOR': {
      const newState = { ...state };

      // Check if color exist
      if (newState.colors.find(c => c._id === action.payload.id)) {
        const index = newState.colors.findIndex(
          c => c._id === action.payload.id
        );

        newState.colors[index].selected = !newState.colors[index].selected;
        newState.areColorsSelected = verifySelected(newState.colors);

        return newState;
      }

      // return previous state
      return state;
    }

    case 'TOGGLE_CATEGORY': {
      const newState = { ...state };

      // Check if category exist
      if (newState.categories.find(c => c._id === action.payload.id)) {
        const index = newState.categories.findIndex(
          c => c._id === action.payload.id
        );

        newState.categories[index].selected = !newState.categories[index]
          .selected;
        newState.areCategoriesSelected = verifySelected(newState.categories);

        return newState;
      }

      // return previous state
      return state;
    }

    case 'RESET_CATEGORIES': {
      const newState = { ...state };

      deselect(newState.categories);
      newState.areCategoriesSelected = verifySelected(newState.categories);

      return newState;
    }

    case 'RESET_COLORS': {
      const newState = { ...state };

      deselect(newState.colors);
      newState.areColorsSelected = verifySelected(newState.colors);

      return newState;
    }

    case 'RESET_ALL_FILTERS': {
      const newState = { ...state };

      deselect(newState.categories);
      deselect(newState.colors);

      newState.areCategoriesSelected = verifySelected(newState.categories);
      newState.areColorsSelected = verifySelected(newState.colors);

      return newState;
    }

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

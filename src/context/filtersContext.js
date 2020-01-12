import React, { createContext, useContext, useReducer } from 'react';

const FiltersStateContext = createContext();
const FiltersDispatchContext = createContext();

const initialState = {
  filters: [],
  areFiltersSelected: false
};

function filtersReducer(state, action) {
  switch (action.type) {
    case 'COLOR_SELECTED':
      break;

    case 'CATEGORY_SELECTED':
      break;

    case 'RESET_CATEGORIES':
      break;

    case 'RESET_COLORS':
      break;

    case 'RESET_ALL_FILTERS':
      break;

    default:
      break;
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

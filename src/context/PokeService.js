import { createContext, useReducer } from 'react';

export const PokeService = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'add_pokemon':
      return { user: payload };
    default:
      return state;
  }
};

const initialState = {
  user: false,
};

export const PokeServiceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokeService.Provider value={{ state, dispatch }}>
      {children}
    </PokeService.Provider>
  );
};

import React, { useContext, createContext, useState } from 'react';

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <StateContext.Provider value={{ searchQuery, setSearchQuery, page, setPage }}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

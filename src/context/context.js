import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  user: "jhon",
};

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(initialState.user);

  return (
    <StateContext.Provider value={{ user, setUser, initialState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

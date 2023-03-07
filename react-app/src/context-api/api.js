import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const Context = createContext();
const initialState = {
  data: [],
  value: 0,
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

export const useStore = () => {
  return useContext(Context);
};

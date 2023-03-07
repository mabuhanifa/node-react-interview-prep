import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const Context = createContext();
const initialState = {};
export const Provider = ({ children }) => {
const [state,dispatch] = useReducer(reducer,initialState)
const store={state,dispatch}

  return <Context.Provider value={store}>{children}</Context.Provider>;
};

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

export const useDispatch = () => {
  return useContext(Context).dispatch;
};

export const useSelector = (callback) => {
  const { state } = useContext(Context);
  const store = callback ? callback(state) : state;
  return store;
};

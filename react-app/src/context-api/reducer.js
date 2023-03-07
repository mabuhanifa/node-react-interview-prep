export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return { ...state, value: state.value++ };
      
    default:
      throw new Error();
  }
};

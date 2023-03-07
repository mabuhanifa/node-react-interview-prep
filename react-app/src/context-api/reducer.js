export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state;
    default:
      throw new Error();
  }
};

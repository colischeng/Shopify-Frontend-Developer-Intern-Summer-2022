const photosIndexReducer = (state = 0, action) => {
  switch (action.type) {
    case "left":
      return state - 5;
    case "right":
      return state + 5;
    default:
      return state;
  }
};

export default photosIndexReducer;

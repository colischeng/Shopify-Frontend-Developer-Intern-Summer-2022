const cameraReducer = (state = "curiosity", action) => {
  switch (action.type) {
    case "curiosity":
      return "curiosity";
    case "opportunity":
      return "opportunity";
    case "spirit":
      return "spirit";
    default:
      return state;
  }
};

export default cameraReducer;

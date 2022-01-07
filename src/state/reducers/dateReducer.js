const dateReducer = (state = new Date().toJSON().slice(0, 10), action) => {
  if (action.type === "date") {
    return action.payload;
  } else {
    return state;
  }
};

export default dateReducer;

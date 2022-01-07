const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const dateReducer = (state = yesterday.toJSON().slice(0, 10), action) => {
  if (action.type === "date") {
    return action.payload;
  } else {
    return state;
  }
};

export default dateReducer;

const initialDate = new Date(2021, 0, 21);

const dateReducer = (state = initialDate.toJSON().slice(0, 10), action) => {
  if (action.type === "date") {
    return action.payload;
  } else {
    return state;
  }
};

export default dateReducer;

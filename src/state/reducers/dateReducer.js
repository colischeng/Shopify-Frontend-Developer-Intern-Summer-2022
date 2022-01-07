const threeWeeksPrior = new Date();
threeWeeksPrior.setDate(threeWeeksPrior.getDate() - 21);

const dateReducer = (state = threeWeeksPrior.toJSON().slice(0, 10), action) => {
  if (action.type === "date") {
    return action.payload;
  } else {
    return state;
  }
};

export default dateReducer;

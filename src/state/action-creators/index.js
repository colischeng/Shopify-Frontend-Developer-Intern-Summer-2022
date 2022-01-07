export const deposit = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdraw = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const switchRover = (rover) => {
  return (dispatch) => {
    dispatch({
      type: rover,
    });
  };
};

export const changeDate = (date) => {
  return (dispatch) => {
    dispatch({
      type: "date",
      payload: date,
    });
  };
};

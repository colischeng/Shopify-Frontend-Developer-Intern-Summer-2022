export const switchRover = (rover) => {
  return (dispatch) => {
    dispatch({
      type: rover,
    });
  };
};

export const switchCamera = (camera) => {
  return (dispatch) => {
    dispatch({
      type: camera,
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

export const toggleLeft = () => {
  return (dispatch) => {
    dispatch({
      type: "left",
    });
  };
};

export const toggleRight = () => {
  return (dispatch) => {
    dispatch({
      type: "right",
    });
  };
};

export const toggleReset = () => {
  return (dispatch) => {
    dispatch({
      type: "reset",
    });
  };
};

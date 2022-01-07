import * as React from "react";
import TextField from "@mui/material/TextField";

const DatePicker = () => {
  return (
    <TextField
      id="date"
      label="Earth Date"
      type="date"
      defaultValue={new Date().toJSON().slice(0, 10)}
      sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePicker;

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import { Box, FormControl, TextField } from "@mui/material";

const DatePicker = () => {
  const { date } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { changeDate, toggleReset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <Box>
      {" "}
      <FormControl fullWidth>
        {" "}
        <TextField
          id="date"
          label="Earth Date"
          type="date"
          defaultValue={date}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) => {
            changeDate(event.target.value);
            toggleReset();
          }}
        />
      </FormControl>
    </Box>
  );
};

export default DatePicker;

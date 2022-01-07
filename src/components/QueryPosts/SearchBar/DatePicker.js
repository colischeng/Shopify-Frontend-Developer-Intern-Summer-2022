import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";
import TextField from "@mui/material/TextField";

const DatePicker = () => {
  const date = useSelector((state) => state.date);

  const dispatch = useDispatch();

  const { changeDate } = bindActionCreators(actionCreators, dispatch);

  return (
    <TextField
      id="date"
      label="Earth Date"
      type="date"
      defaultValue={date}
      sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(event) => {
        changeDate(event.target.value);
      }}
    />
  );
};

export default DatePicker;

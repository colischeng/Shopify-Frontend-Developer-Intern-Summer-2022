import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

const RoverSelector = () => {
  const { rover } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { switchRover, toggleReset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Rover</InputLabel>
        <Select
          value={rover}
          label="Rover"
          defaultValue={"curiosity"}
          onChange={(event) => {
            switchRover(event.target.value);
            toggleReset();
          }}
        >
          <MenuItem value={"curiosity"}>Curiosity</MenuItem>
          <MenuItem value={"opportunity"}>Opportunity</MenuItem>
          <MenuItem value={"spirit"}>Spirit</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default RoverSelector;

import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

const CameraSelector = () => {
  const camera = useSelector((state) => state.camera);

  const dispatch = useDispatch();

  const { switchCamera } = bindActionCreators(actionCreators, dispatch);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Camera</InputLabel>
        <Select
          value={camera}
          label="Camera"
          defaultValue={"curiosity"}
          onChange={(event) => {
            switchCamera(event.target.value);
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

export default CameraSelector;

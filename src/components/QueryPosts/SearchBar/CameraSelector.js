import { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const CameraSelector = () => {
  const [camera, setCamera] = useState("");

  const handleChange = (event) => {
    setCamera(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Camera</InputLabel>
        <Select value={camera} label="Camera" onChange={handleChange}>
          <MenuItem value={"curiosity"}>Curiosity</MenuItem>
          <MenuItem value={"opportunity"}>Opportunity</MenuItem>
          <MenuItem value={"spirit"}>Spirit</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CameraSelector;

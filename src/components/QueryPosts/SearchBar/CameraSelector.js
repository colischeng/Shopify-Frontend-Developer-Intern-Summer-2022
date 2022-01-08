import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../state";

const abbreviations = new Map();
abbreviations.set("fhaz", "Front Hazard Avoidance Camera");
abbreviations.set("rhaz", "Rear Hazard Avoidance Camera");
abbreviations.set("mast", "Mast Camera");
abbreviations.set("chemcam", "Chemistry and Camera Complex");
abbreviations.set("mahli", "Mars Hand Lens Imager");
abbreviations.set("mardi", "Mars Descent Imager");
abbreviations.set("navcam", "Navigation Camera");
abbreviations.set("pancam", "Panoramic Camera");
abbreviations.set(
  "minites",
  "Miniature Thermal Emission Spectrometer (Mini-TES)"
);

const CameraSelector = () => {
  const camera = useSelector((state) => state.camera);

  const dispatch = useDispatch();

  const { switchCamera, toggleReset } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Camera</InputLabel>
        <Select
          value={camera}
          label="Camera"
          defaultValue={"fhaz"}
          onChange={(event) => {
            switchCamera(event.target.value);
            toggleReset();
          }}
        >
          {Array.from(abbreviations.entries()).map((entry) => {
            const [key, value] = entry;
            return (
              <MenuItem key={key} value={key}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export let cameraAbbreviations = abbreviations;
export default CameraSelector;

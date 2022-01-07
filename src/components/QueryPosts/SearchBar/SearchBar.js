import CameraSelector from "./CameraSelector";
import DatePicker from "./DatePicker";
import { Button, Grid } from "@mui/material";
import Offset from "../../Offset";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
    backgroundColor: "transparent",
  },
};

const SearchBar = () => {
  return (
    <div style={classes.root}>
      <Offset />
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={6} sm={4}>
          <CameraSelector />
        </Grid>
        <Grid item xs={6} sm={4}>
          <DatePicker />
        </Grid>
        <Grid item xs={1} sm={1}>
          <Button>Search</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
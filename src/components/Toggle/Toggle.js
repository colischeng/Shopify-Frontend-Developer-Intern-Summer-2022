import { Grid, Stack, Switch, Typography } from "@mui/material";
import Offset from "../Offset";

export const Toggle = (props) => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h5">View Liked Posts</Typography>
        <Switch
          defaultChecked
          inputProps={{ "aria-label": "ant design" }}
          onChange={props.handleSwitch}
        />
        <Typography variant="h5">Query Posts</Typography>
      </Stack>
      <Offset />
    </Grid>
  );
};

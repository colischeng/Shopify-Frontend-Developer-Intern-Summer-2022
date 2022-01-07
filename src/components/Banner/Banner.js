import { Grid, styled, Typography } from "@mui/material";
import Offset from "../Offset";

const StyledBanner = styled(Typography, {
  name: "StyledBanner",
})({
  color: "white",
  backgroundColor: "blue",
  flexGrow: 1,
});

export const Banner = () => (
  <Grid>
    <StyledBanner variant="h4" align="center" component="div">
      Spacestagram: Image-sharing from the final frontier
    </StyledBanner>
    <Offset />
  </Grid>
);

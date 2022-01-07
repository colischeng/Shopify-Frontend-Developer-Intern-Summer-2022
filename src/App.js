import { Grid } from "@mui/material";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";

const App = () => {
  return (
    <Grid>
      <Banner />
      <Toggle />
      <QueryPosts />
    </Grid>
  );
};

export default App;

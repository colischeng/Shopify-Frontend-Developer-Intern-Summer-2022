import { useState } from "react";
import { Grid } from "@mui/material";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";
import { LikedPosts } from "./components/LikedPosts/LikedPosts";

const App = () => {
  const [view, setView] = useState(true);
  // true means we are viewing queried posts
  // false means we are viewing liked posts

  const handleSwitch = () => {
    setView(!view);
  };

  return (
    <Grid>
      <Banner />
      <Toggle handleSwitch={handleSwitch} />
      {view ? <QueryPosts /> : <LikedPosts />}
    </Grid>
  );
};

export default App;

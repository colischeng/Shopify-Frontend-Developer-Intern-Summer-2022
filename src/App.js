import { createContext, useState } from "react";
import { Grid } from "@mui/material";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";
import { LikedPosts } from "./components/LikedPosts/LikedPosts";
import { LikedContext } from "./state/context/LikedContext";

const App = () => {
  // true means we are viewing queried posts
  // false means we are viewing liked posts
  const [view, setView] = useState(true);

  const handleSwitch = () => {
    setView(!view);
  };

  return (
    <Grid>
      <Banner />
      <Toggle handleSwitch={handleSwitch} />
      <LikedContext>{view ? <QueryPosts /> : <LikedPosts />}</LikedContext>
    </Grid>
  );
};

export default App;

import { useState } from "react";
import { Grid } from "@mui/material";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";
import { LikedPosts } from "./components/LikedPosts/LikedPosts";
import { LikedContext } from "./state/context/LikedContext";

const App = () => {
  // true means we are viewing queried posts
  // false means we are viewing liked posts
  const [view, setView] = useState("query");

  const handleSwitch = () => {
    if (view === "query") {
      setView("liked");
    } else {
      setView("query");
    }
  };

  return (
    <Grid>
      <Banner />
      <Toggle handleSwitch={handleSwitch} />
      <LikedContext>
        {view === "query" ? <QueryPosts /> : <LikedPosts />}
      </LikedContext>
    </Grid>
  );
};

export default App;

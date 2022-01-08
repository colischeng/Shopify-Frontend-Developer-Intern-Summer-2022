import { useState } from "react";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";
import { LikedPosts } from "./components/LikedPosts/LikedPosts";
import { LikedContext } from "./state/context/LikedContext";

const App = () => {
  const dispatch = useDispatch();

  const { toggleReset } = bindActionCreators(actionCreators, dispatch);

  const [view, setView] = useState("query");

  const handleSwitch = () => {
    if (view === "query") {
      setView("liked");
    } else {
      setView("query");
    }

    toggleReset();
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

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { Grid } from "@mui/material";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";

const App = () => {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { withdraw, deposit } = bindActionCreators(actionCreators, dispatch);

  return (
    <Grid>
      <Banner />
      <Toggle />
      <QueryPosts />
    </Grid>
  );
};

export default App;

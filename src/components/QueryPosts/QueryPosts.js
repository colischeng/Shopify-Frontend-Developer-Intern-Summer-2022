import { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import SearchBar from "./SearchBar/SearchBar";
import Posts from "../Posts/Posts";
import Offset from "../Offset";

const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
  },
};

export const QueryPosts = () => {
  return (
    <Grid>
      <SearchBar />
      <div style={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={classes.paper}>
              <Typography variant="h6">
                Displaying photos # - (# + 5) from CAMERA on DATE
              </Typography>
            </Paper>
            <Offset />
          </Grid>
        </Grid>
      </div>

      <Posts />
    </Grid>
  );
};

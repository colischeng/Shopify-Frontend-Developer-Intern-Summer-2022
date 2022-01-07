import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

//create our styles
const classes = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 20,
    textAlign: "center",
  },
};

const Posts = () => {
  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={1}>
          <Paper style={classes.paper}>xs=6 sm=1</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper style={classes.paper}>xs=6 sm=2</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper style={classes.paper}>xs=6 sm=2</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper style={classes.paper}>xs=6 sm=2</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper style={classes.paper}>xs=6 sm=2</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper style={classes.paper}>xs=6 sm=2</Paper>
        </Grid>
        <Grid item xs={6} sm={1}>
          <Paper style={classes.paper}>xs=6 sm=1</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Posts;

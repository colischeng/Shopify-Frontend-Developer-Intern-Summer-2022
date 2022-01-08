import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { Button, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import Posts from "../Posts/Posts";
import Offset from "../Offset";
import { cameraAbbreviations } from "./SearchBar/CameraSelector";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const classes = {
  root: {
    flexGrow: 1,
  },
};

export const QueryPosts = () => {
  const { rover, camera, date, photoIndex } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { toggleLeft, toggleRight } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [posts, setPosts] = useState([]);
  const api_key = "QDGQBwt2iMaCNhqtTvb5TCG64mrj1RVyPDFfly9T"; // no need to put in a .env file
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=${api_key}`;

  const getAllPosts = () => {
    axios
      .get(url)
      .then((res) => {
        setPosts(Object.values(res.data.photos));
      })
      .catch((err) => {
        console.log(`Fetch Error: ${err}`);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, [rover, date, camera]);

  const numPhotos = posts.length;

  return (
    <Grid>
      <SearchBar />
      <div style={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={classes.paper}>
              <Typography variant="h6" align="center">
                Displaying photos {photoIndex} -{" "}
                {Math.min(photoIndex + 4, numPhotos)} from{" "}
                {capitalizeFirstLetter(rover)}'s{" "}
                {cameraAbbreviations.get(camera)} on {date}
              </Typography>
            </Paper>
            <Offset />
          </Grid>
        </Grid>
      </div>

      <div style={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={1}>
            {photoIndex > 0 && (
              <Button variant="contained" onClick={toggleLeft}>
                ←
              </Button>
            )}
          </Grid>
          <Grid item xs={6} sm={10}>
            {/* make sure array is properly sliced before passing in*/}
            <Posts images={posts.slice(photoIndex, photoIndex + 5)} />{" "}
          </Grid>
          <Grid item xs={6} sm={1}>
            {photoIndex + 5 < numPhotos && (
              <Button variant="contained" onClick={toggleRight}>
                →
              </Button>
            )}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

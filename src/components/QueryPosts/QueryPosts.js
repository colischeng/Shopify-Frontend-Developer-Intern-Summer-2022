import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography } from "@mui/material";
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
  paper: {
    padding: 20,
    textAlign: "center",
  },
};

export const QueryPosts = () => {
  const { rover, camera, date } = useSelector((state) => state);

  const [posts, setPosts] = useState({});
  const api_key = "QDGQBwt2iMaCNhqtTvb5TCG64mrj1RVyPDFfly9T"; // no need to put in a .env file
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&api_key=${api_key}`;

  const getAllPosts = () => {
    axios
      .get(url)
      .then((res) => {
        setPosts(res.data.photos);
      })
      .catch((err) => {
        console.log(`Fetch Error: ${err}`);
      });
  };

  useEffect(() => {
    getAllPosts();
  }, [rover, date, camera]);

  return (
    <Grid>
      <SearchBar />
      <div style={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={classes.paper}>
              <Typography variant="h6">
                Displaying photos # - (# + 5) from{" "}
                {capitalizeFirstLetter(rover)}'s{" "}
                {cameraAbbreviations.get(camera)} on {date}
              </Typography>
            </Paper>
            <div>{JSON.stringify(posts)}</div>
            <Offset />
          </Grid>
        </Grid>
      </div>
      <div>{rover}</div>
      <div>{camera}</div>
      <div>{date}</div>

      <Posts />
    </Grid>
  );
};

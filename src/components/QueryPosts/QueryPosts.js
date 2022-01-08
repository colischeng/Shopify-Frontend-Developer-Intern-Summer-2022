import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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

const sample = [
  {
    id: 907607,
    sol: 3330,
    camera: {
      id: 20,
      name: "FHAZ",
      rover_id: 5,
      full_name: "Front Hazard Avoidance Camera",
    },
    img_src:
      "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03330/opgs/edr/fcam/FRB_693125329EDR_F0920420FHAZ00337M_.JPG",
    earth_date: "2021-12-18",
    rover: {
      id: 5,
      name: "Curiosity",
      landing_date: "2012-08-06",
      launch_date: "2011-11-26",
      status: "active",
    },
  },
  {
    id: 907608,
    sol: 3330,
    camera: {
      id: 20,
      name: "FHAZ",
      rover_id: 5,
      full_name: "Front Hazard Avoidance Camera",
    },
    img_src:
      "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03330/opgs/edr/fcam/FLB_693125329EDR_F0920420FHAZ00337M_.JPG",
    earth_date: "2021-12-18",
    rover: {
      id: 5,
      name: "Curiosity",
      landing_date: "2012-08-06",
      launch_date: "2011-11-26",
      status: "active",
    },
  },
  {
    id: 907609,
    sol: 3330,
    camera: {
      id: 20,
      name: "FHAZ",
      rover_id: 5,
      full_name: "Front Hazard Avoidance Camera",
    },
    img_src:
      "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03330/opgs/edr/fcam/FLB_693125196EDR_F0920420FHAZ00200M_.JPG",
    earth_date: "2021-12-18",
    rover: {
      id: 5,
      name: "Curiosity",
      landing_date: "2012-08-06",
      launch_date: "2011-11-26",
      status: "active",
    },
  },
  {
    id: 907610,
    sol: 3330,
    camera: {
      id: 20,
      name: "FHAZ",
      rover_id: 5,
      full_name: "Front Hazard Avoidance Camera",
    },
    img_src:
      "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/03330/opgs/edr/fcam/FLB_693124982EDR_F0920420FHAZ00200M_.JPG",
    earth_date: "2021-12-18",
    rover: {
      id: 5,
      name: "Curiosity",
      landing_date: "2012-08-06",
      launch_date: "2011-11-26",
      status: "active",
    },
  },
];

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

      <div style={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={1}>
            <Button variant="contained">←</Button>
          </Grid>
          <Grid item xs={6} sm={10}>
            <Posts images={sample} />{" "}
            {/* make sure array is properly sliced before passing in*/}
          </Grid>
          <Grid item xs={6} sm={1}>
            <Button variant="contained">→</Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

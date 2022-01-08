import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import axios from "axios";
import SearchBar from "./SearchBar/SearchBar";
import Posts from "../Posts/Posts";
import { cameraAbbreviations } from "./SearchBar/CameraSelector";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const QueryPosts = () => {
  const { rover, camera, date, photoIndex } = useSelector((state) => state);

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
  const title = `Displaying photos ${photoIndex} - ${Math.min(
    photoIndex + 4,
    numPhotos === 0 ? 0 : numPhotos - 1
  )} from ${capitalizeFirstLetter(rover)}'s ${cameraAbbreviations.get(
    camera
  )} on ${date}`;
  return (
    <Grid>
      <SearchBar />
      <Posts images={posts} title={title} />
    </Grid>
  );
};

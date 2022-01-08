import { useContext } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import { LikedPostsContext } from "../../App";
import Offset from "../Offset";

export const LikedPosts = () => {
  const LikedPosts = useContext(LikedPostsContext);
  const photosArray = Object.values(LikedPosts);

  const { photoIndex } = useSelector((state) => state);

  const numPhotos = photosArray.length;

  const title = `Displaying photos ${photoIndex} - ${Math.min(
    photoIndex + 4,
    numPhotos === 0 ? 0 : numPhotos - 1
  )} out of ${numPhotos > 0 ? numPhotos - 1 : 0} of liked photos`;

  return (
    <Grid>
      <Offset />
      <Posts images={photosArray} title={title} />
    </Grid>
  );
};

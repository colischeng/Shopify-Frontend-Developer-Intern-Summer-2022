import { useContext } from "react";
import { Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import { LikedPostsContext } from "../../App";

export const LikedPosts = () => {
  const LikedPosts = useContext(LikedPostsContext);

  return (
    <Grid>
      <Posts images={Object.values(LikedPosts)} title={"Title"} />
    </Grid>
  );
};

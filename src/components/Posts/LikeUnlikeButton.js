import { useContext } from "react";
import { Button } from "@mui/material";
import { LikedPostsContext, UpdateLikedPostsContext } from "../../App";

export const LikeUnlikeButton = (post) => {
  const LikedPosts = useContext(LikedPostsContext);
  const UpdateLikedPosts = useContext(UpdateLikedPostsContext);

  const liked = post.item.id in LikedPosts;

  return (
    <div>
      {liked ? (
        <Button
          variant="outlined"
          color="error"
          onClick={() => UpdateLikedPosts(post, "unlike")}
        >
          Unlike
        </Button>
      ) : (
        <Button
          variant="outlined"
          onClick={() => UpdateLikedPosts(post, "like")}
        >
          Like
        </Button>
      )}
    </div>
  );
};

import { Button } from "@mui/material";
import { useLiked, useLikedUpdate } from "../../state/context/LikedContext";

export const LikeUnlikeButton = (post) => {
  const LikedPosts = useLiked();
  const UpdateLikedPosts = useLikedUpdate();

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

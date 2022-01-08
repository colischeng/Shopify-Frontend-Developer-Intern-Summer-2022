import { Button } from "@mui/material";

export const LikeUnlikeButton = (props) => {
  const { updateLikedPosts, item } = props;

  return (
    <Button variant="outlined" onClick={() => updateLikedPosts(item)}>
      Like{" "}
    </Button>
  );
};

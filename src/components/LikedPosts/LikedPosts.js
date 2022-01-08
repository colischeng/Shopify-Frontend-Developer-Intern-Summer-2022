import { useContext } from "react";
import { LikedPostsContext } from "../../App";

export const LikedPosts = () => {
  const LikedPosts = useContext(LikedPostsContext);

  return <div>{JSON.stringify(LikedPosts)}</div>;
};

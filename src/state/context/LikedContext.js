import { createContext, useContext, useState } from "react";

export const LikedPostsContext = createContext();
export const UpdateLikedPostsContext = createContext();

export const useLiked = () => {
  return useContext(LikedPostsContext);
};

export const useLikedUpdate = () => {
  return useContext(UpdateLikedPostsContext);
};

export const LikedContext = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState({});

  const updateLikedPosts = (post, act) => {
    const clone = Object.assign({}, likedPosts);

    if (act === "like") {
      clone[post.item.id] = post.item;
      setLikedPosts(clone);
    } else {
      delete clone[post.item.id];
      setLikedPosts(clone);
    }
  };

  return (
    <LikedPostsContext.Provider value={likedPosts}>
      <UpdateLikedPostsContext.Provider value={updateLikedPosts}>
        {children}
      </UpdateLikedPostsContext.Provider>
    </LikedPostsContext.Provider>
  );
};

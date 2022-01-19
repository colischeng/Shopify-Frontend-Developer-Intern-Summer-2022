import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

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

  useEffect(() => {
    const data = localStorage.getItem("likedPhotos");
    if (data) {
      setLikedPosts(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likedPhotos", JSON.stringify(likedPosts));
  });

  const { photoIndex } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { toggleReset } = bindActionCreators(actionCreators, dispatch);

  const updateLikedPosts = (post, act) => {
    const clone = Object.assign({}, likedPosts);

    if (act === "like") {
      clone[post.item.id] = post.item;
      setLikedPosts(clone);
    } else {
      delete clone[post.item.id];
      setLikedPosts(clone);

      if (photoIndex + 1 > Object.keys(clone).length) {
        // may need to change photoIndex if too many photos are unliked
        toggleReset();
      }
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

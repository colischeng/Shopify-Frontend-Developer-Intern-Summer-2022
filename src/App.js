import { createContext, useState, useContext } from "react";
import { Grid } from "@mui/material";
import { Banner } from "./components/Banner/Banner";
import { Toggle } from "./components/Toggle/Toggle";
import { QueryPosts } from "./components/QueryPosts/QueryPosts";
import { LikedPosts } from "./components/LikedPosts/LikedPosts";

export const LikedPostsContext = createContext();
export const UpdateLikedPostsContext = createContext();

const App = () => {
  // true means we are viewing queried posts
  // false means we are viewing liked posts
  const [view, setView] = useState(true);

  const handleSwitch = () => {
    setView(!view);
  };

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

    console.log(clone);
  };

  return (
    <Grid>
      <Banner />
      <Toggle handleSwitch={handleSwitch} />
      <LikedPostsContext.Provider value={likedPosts}>
        <UpdateLikedPostsContext.Provider value={updateLikedPosts}>
          {view ? <QueryPosts /> : <LikedPosts />}
        </UpdateLikedPostsContext.Provider>
      </LikedPostsContext.Provider>
    </Grid>
  );
};

export default App;

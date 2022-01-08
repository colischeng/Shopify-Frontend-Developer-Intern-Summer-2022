import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from "@mui/material";
import { LikeUnlikeButton } from "./LikeUnlikeButton";
import Offset from "../Offset";

const classes = {
  root: {
    flexGrow: 1,
  },
};

const Posts = (props) => {
  const { photoIndex } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { toggleLeft, toggleRight } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const images = props.images;
  const numPhotos = images.length;

  return (
    <div>
      <div style={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={classes.paper}>
              <Typography variant="h6" align="center">
                {" "}
                {props.title}
              </Typography>
            </Paper>
            <Offset />
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={1}>
          {photoIndex > 0 && (
            <Button variant="contained" onClick={toggleLeft}>
              ←
            </Button>
          )}
        </Grid>
        <Grid item xs={6} sm={10}>
          {/* make sure array is properly sliced before passing in*/}
          <ImageList cols={5}>
            {images.slice(photoIndex, photoIndex + 5).map((item) => (
              <ImageListItem key={item.id}>
                <img src={item.img_src} alt={item.img_src} loading="lazy" />
                <ImageListItemBar
                  title={`Photo ID: ${item.id}`}
                  subtitle={
                    <div>
                      <span>Sol: {item.sol}</span>
                      <br />
                      <span>Earth Day: {item.earth_date}</span>
                      <br />
                      <span>Rover: {item.rover.name}</span>
                      <br />
                      <span>Camera: {item.camera.name}</span>
                    </div>
                  }
                  position="below"
                />
                <LikeUnlikeButton item={item} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={6} sm={1}>
          {photoIndex + 5 < numPhotos && (
            <Button variant="contained" onClick={toggleRight}>
              →
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Posts;

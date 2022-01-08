import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const Posts = (props) => {
  const images = props.images;
  return (
    <ImageList cols={5}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img src={item.img_src} alt={item.img_src} loading="lazy" />
          <ImageListItemBar
            title={`Photo id: ${item.id}`}
            subtitle={
              <div>
                <span>Sol: {item.sol}</span>
              </div>
            }
            position="below"
          />
          <Button variant="outlined">Like </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Posts;

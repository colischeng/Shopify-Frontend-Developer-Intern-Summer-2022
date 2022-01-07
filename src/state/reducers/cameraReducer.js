import { cameraAbbreviations } from "../../components/QueryPosts/SearchBar/CameraSelector";

const cameraReducer = (state = "fhaz", action) => {
  if (cameraAbbreviations.has(action.type)) {
    return action.type;
  } else {
    return state;
  }
};

export default cameraReducer;

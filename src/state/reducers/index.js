import { combineReducers } from "redux";
import roverReducer from "./roverReducer";
import cameraReducer from "./cameraReducer";
import dateReducer from "./dateReducer";
import photosIndexReducer from "./photosIndexReducer";

const reducers = combineReducers({
  rover: roverReducer,
  camera: cameraReducer,
  date: dateReducer,
  photoIndex: photosIndexReducer,
});

export default reducers;

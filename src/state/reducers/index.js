import { combineReducers } from "redux";
import roverReducer from "./roverReducer";
import cameraReducer from "./cameraReducer";
import dateReducer from "./dateReducer";

const reducers = combineReducers({
  rover: roverReducer,
  camera: cameraReducer,
  date: dateReducer,
});

export default reducers;

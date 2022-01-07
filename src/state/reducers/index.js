import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import cameraReducer from "./cameraReducer";
import dateReducer from "./dateReducer";

const reducers = combineReducers({
  account: accountReducer,
  camera: cameraReducer,
  date: dateReducer,
});

export default reducers;

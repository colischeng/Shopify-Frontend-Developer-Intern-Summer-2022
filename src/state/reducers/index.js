import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import roverReducer from "./roverReducer";
import dateReducer from "./dateReducer";

const reducers = combineReducers({
  account: accountReducer,
  rover: roverReducer,
  date: dateReducer,
});

export default reducers;

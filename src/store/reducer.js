import { combineReducers } from "redux";
import developers from "./developers/reducer";

export default combineReducers({
  developers: developers
  // we can add more "slice" subreducers here later on...
});

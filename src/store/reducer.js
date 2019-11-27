import { combineReducers } from "redux";
import developers from "./developers/reducer";
import appState from "./appState/reducer";

export default combineReducers({
  developers: developers,
  appState: appState
});

import { combineReducers } from "redux";
import developers from "./developers/reducer";
import appState from "./appState/reducer";
import developerDetails from "./developerDetails/reducer";
import auth from "./auth/reducer";
import posts from "./posts/reducer";

export default combineReducers({
  developers: developers,
  appState: appState,
  developerDetails: developerDetails,
  auth: auth,
  posts: posts
});

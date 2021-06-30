import { combineReducers } from "redux";
import home from "./home";
import artist from "./artist";
import artistProfile from "./artistProfile";

export default combineReducers({
  home,
  artist,
  artistProfile,
});

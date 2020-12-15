import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import gallery from "./gallery";
import blogPosts from "./blogPosts";
import cocktails from "./cocktails";
import bartenders from "./bartenders";

const reducers = combineReducers({
  user,
  events,
  gallery,
  blogPosts,
  cocktails,
  bartenders,
});

export default reducers;

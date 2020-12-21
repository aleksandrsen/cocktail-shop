import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import gallery from "./gallery";
import blogPosts from "./blogPosts";
import cocktails from "./cocktails";
import bartenders from "./bartenders";

const rootReducer = combineReducers({
  user,
  events,
  gallery,
  blogPosts,
  cocktails,
  bartenders,
});

export type RootReducer = typeof rootReducer;

export default rootReducer;

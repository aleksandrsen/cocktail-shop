import {combineReducers} from "redux";
import events from "./events";
import blogPosts from "./blogPosts";
import cocktails from "./cocktails";

const reducers = combineReducers({
    events,
    blogPosts,
    cocktails
});

export default reducers;
import {combineReducers} from "redux";
import events from "./events";
import blogPosts from "./blogPosts";

const reducers = combineReducers({
    events,
    blogPosts
});

export default reducers;
import {combineReducers} from "redux";
import events from "./events";
import blogPosts from "./blogPosts";
import cocktails from "./cocktails";
import bartenders from "./bartenders";

const reducers = combineReducers({
    events,
    blogPosts,
    cocktails,
    bartenders
});

export default reducers;
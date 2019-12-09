import {combineReducers} from "redux";
import usersReducer from "./users-reducer";
import eventsReducer from "./events-reducer";
import blogPostsReducer from "./blog-posts-reducer";
import userReducer from "./user-reducer";

const reducers = combineReducers({
    events: eventsReducer,
    blogPosts: blogPostsReducer,
    users: usersReducer,
    user: userReducer
});

export default reducers;
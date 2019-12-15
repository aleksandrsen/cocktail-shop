import {combineReducers} from "redux";
import usersReducer from "./users-reducer";
import eventsReducer from "./events-reducer";
import blogPostsReducer from "./blog-posts-reducer";
import userReducer from "./user-reducer";
import bartendersReducer from "./bartenders-reducer";
import bartenderItemReducer from "./bartender-item-reducer";
import eventItemReducer from "./event-item-reducer";
import blogPostItemReducer from "./blog-post-item-reducer";
import blogPostsReviewsReducer from "./blog-posts-reviews-reducer";
import randomCocktailsState from "./randog-cocktails-reducer";

const reducers = combineReducers({
    events: eventsReducer,
    blogPosts: blogPostsReducer,
    users: usersReducer,
    blogPostsReviews: blogPostsReviewsReducer,
    bartenders: bartendersReducer,
    eventItem: eventItemReducer,
    blogPostItem: blogPostItemReducer,
    bartenderItem: bartenderItemReducer,
    user: userReducer,
    randomCocktails: randomCocktailsState
});

export default reducers;
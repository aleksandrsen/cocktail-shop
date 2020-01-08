import {combineReducers} from "redux";
import usersReducer from "./users-reducer";
import eventsReducer from "./events-reducer";
import blogPostsReducer from "./blog-posts-reducer";
import userReducer from "./user-reducer";
import bartendersReducer from "./bartenders-reducer";
import bartenderItemReducer from "./bartender-item-reducer";
import eventItemReducer from "./event-item-reducer";
import blogPostItemReducer from "./blog-post-item-reducer";
import reviewsBlogPostsReducer from "./reviews-blog-posts-reducer";
import randomCocktailsSReducer from "./random-cocktails-reducer";
import cartReducer from "./cart-reducer";
import wishListReducer from "./wish-list-reducer";
import cocktailsReducer from "./cocktails-reducer";
import cocktailItemReducer from "./cocktail-item-reducer";

const reducers = combineReducers({
    events: eventsReducer,
    blogPosts: blogPostsReducer,
    users: usersReducer,
    reviewsBlogPosts: reviewsBlogPostsReducer,
    bartenders: bartendersReducer,
    eventItem: eventItemReducer,
    blogPostItem: blogPostItemReducer,
    bartenderItem: bartenderItemReducer,
    cocktails: cocktailsReducer,
    cocktailItem: cocktailItemReducer,
    user: userReducer,
    randomCocktails: randomCocktailsSReducer,
    cart: cartReducer,
    wishList: wishListReducer
});

export default reducers;
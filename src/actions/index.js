import uuid from "uuid/v4";
import {
    LOAD_USERS,
    LOAD_EVENTS,
    LOAD_BLOG_POSTS,
    LOAD_BARTENDERS,
    LOAD_BARTENDER_BY_ID,
    LOAD_EVENT_BY_ID,
    LOAD_BLOG_POSTS_REVIEWS,
    LOAD_BLOG_POST_BY_ID,
    LOAD_COCKTAILS,
    LOAD_COCKTAIL_BY_ID,
    ADD_REVIEW_FOR_BLOG_POST,
    LIKE_REVIEW,
    DISLIKE_REVIEW,
    ADD_TO_CART,
    ADD_TO_WISH_LIST,
    REMOVE_FROM_WISH_LIST,
    REMOVE_FROM_CART,
    CREATE_NEW_USER,
    DELETE_REVIEW,
    EDIT_REVIEW,
    LOAD_RANDOM_COCKTAILS,
    USER_LOG_IN,
    USER_LOG_OUT,
    START,
    SUCCESS,
    FAIL
} from "../constants";


const apiBase = 'http://localhost:3000/api';
// const apiBase = 'api';

// Load data
// Cocktails
export const loadCocktails = () => ({
    type: LOAD_COCKTAILS,
    callApi: `${apiBase}/cocktails`
});

export const loadRandomCocktails = () => ({
    type: LOAD_RANDOM_COCKTAILS,
    callApi: `${apiBase}/random`
});

export const loadCocktailById = (cocktailId) => (dispatch, getState) => {
    const state = getState();
    const callApi = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    let isLoading = state.cocktailItem.loading;
    let isLoaded = state.cocktailItem.loaded;
    let cocktails = state.cocktails.entities;
    let cocktailItem = state.cocktailItem.item;

    let isCocktailInCocktails = cocktails.find(({idDrink}) => idDrink === cocktailId);

    if (cocktailItem && (cocktailItem.idDrink === cocktailId)) {
        dispatch({
            type: LOAD_COCKTAIL_BY_ID + SUCCESS,
            payload: {
                response: cocktailItem
            }
        });
    } else if (isCocktailInCocktails && isCocktailInCocktails.strInstructions) {
        dispatch({
            type: LOAD_COCKTAIL_BY_ID + SUCCESS,
            payload: {
                response: isCocktailInCocktails
            }
        });
    } else if (!isLoading && !isLoaded) {
        dispatch({
            type: LOAD_COCKTAIL_BY_ID,
            callApi: callApi
        });
    }
};

// Bartenders
export const loadBartenders = () => ({
    type: LOAD_BARTENDERS,
    callApi: `${apiBase}/bartenders`
});

export const loadBartenderById = (bartenderId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.bartenderItem.loading;
    let isLoaded = state.bartenderItem.loaded;
    let bartenders = state.bartenders.entities;
    let bartenderItem = state.bartenderItem.item;

    let isBartenderInBartenders = bartenders.find(({id}) => id === bartenderId);

    if (bartenderItem && (bartenderItem.id === bartenderId)) {
        dispatch({
            type: LOAD_BARTENDER_BY_ID + SUCCESS,
            payload: {
                response: bartenderItem
            }
        });
    } else if (isBartenderInBartenders) {
        dispatch({
            type: LOAD_BARTENDER_BY_ID + SUCCESS,
            payload: {
                response: isBartenderInBartenders
            }
        });
    } else if (!isLoading && !isLoaded) {
        dispatch({
            type: LOAD_BARTENDER_BY_ID,
            callApi: `${apiBase}/bartenders/${bartenderId}`
        });
    }
};

// Reviews
export const loadReviews = () => ({
    type: LOAD_BLOG_POSTS_REVIEWS,
    callApi: `${apiBase}/reviews`
});

// Users
export const loadUsers = () => ({
    type: LOAD_USERS,
    callApi: `${apiBase}/users`
});

// Blog posts
export const loadBlogPosts = () => ({
    type: LOAD_BLOG_POSTS,
    callApi: `${apiBase}/blog-posts`
});

export const loadBlogPostById = (blogPostId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.blogPostItem.loading;
    let isLoaded = state.blogPostItem.loaded;
    let isUsersLoaded = state.users.loaded;
    let isUsersLoading = state.users.loading;
    let isBlogPostsLoaded = state.blogPosts.loaded;
    let blogPostItem = state.blogPostItem.item;
    let isBlogPostsReviewsLoaded = state.reviewsBlogPosts.loaded;
    let blogPostsArr = state.blogPosts.entities;

    if (!isUsersLoaded && !isUsersLoading) dispatch(loadUsers());

    if (blogPostItem && blogPostItem.id === blogPostId && isUsersLoaded && isBlogPostsReviewsLoaded) {
        dispatch({
            type: LOAD_BLOG_POST_BY_ID + SUCCESS,
            payload: {
                response: blogPostItem
            }
        });
    } else if (isBlogPostsLoaded) {
        let blogPostItem = blogPostsArr.find(({id}) => id === blogPostId);
        dispatch({
            type: LOAD_BLOG_POST_BY_ID + SUCCESS,
            payload: {
                response: blogPostItem
            }
        });
    } else {
        if (!isLoading && !isLoaded) {
            dispatch({
                type: LOAD_BLOG_POST_BY_ID,
                callApi: `${apiBase}/blog-posts/${blogPostId}`
            })
        }
    }
};

export const loadAllDataForBlogPosts = () => (dispatch, getState) => {
    const state = getState();
    let isLoadingUsers = state.users.loading;
    let isLoadedUsers = state.users.loaded;
    let isLoadingBLogPosts = state.blogPosts.loading;
    let isLoadedBlogPosts = state.blogPosts.loaded;

    if (!isLoadingBLogPosts && !isLoadedBlogPosts) {
        dispatch(loadBlogPosts());
    }

    if (!isLoadingUsers && !isLoadedUsers) {
        dispatch(loadUsers());
    }
};

// Events
export const loadEvents = () => ({
    type: LOAD_EVENTS,
    callApi: `${apiBase}/events`
});

export const loadEventById = (eventId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.eventItem.loading;
    let isLoaded = state.eventItem.loaded;
    let events = state.events.entities;
    let eventItem = state.eventItem.item;

    let isEventInEvents = events.find(({id}) => id === eventId);

    if (eventItem && (eventItem.id === eventId)) {
        dispatch({
            type: LOAD_EVENT_BY_ID + SUCCESS,
            payload: {
                response: eventItem
            }
        });
    } else if (isEventInEvents) {
        dispatch({
            type: LOAD_EVENT_BY_ID + SUCCESS,
            payload: {
                response: isEventInEvents
            }
        });
    } else if (!isLoading && !isLoaded) {
        dispatch({
            type: LOAD_EVENT_BY_ID,
            callApi: `${apiBase}/events/${eventId}`
        });
    }
};

// Cart events
export const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: {
        id
    }
});

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: {
        id
    }
});

// WishList events
export const addToWishList = (id) => ({
    type: ADD_TO_WISH_LIST,
    payload: {
        id
    }
});

export const removeFromWishList = (id) => ({
    type: REMOVE_FROM_WISH_LIST,
    payload: {
        id
    }
});

// LogIn, LogOut
export const userLogIn = () => ({
    type: USER_LOG_IN
});

export const userLogOut = () => ({
    type: USER_LOG_OUT
});

// Reviews events
export const addReviewForBlogPost = ({id: blogPostId, fullName, email: userEmail, message}) => (dispatch, getState) => {
    let state = getState();
    let users = state.users.entities;
    let isUserExist = users.find(({email}) => email === userEmail);
    let newReviewId = uuid();

    if (isUserExist) {
        dispatch({
            type: ADD_REVIEW_FOR_BLOG_POST,
            payload: {
                id: newReviewId,
                userId: isUserExist.id,
                blogPostId,
                reviewText: message
            }
        });
    } else {
        let newUserId = uuid();
        let newUser = fullName.split(' ');
        dispatch({
            type: CREATE_NEW_USER,
            payload: {
                id: newUserId,
                name: newUser[0],
                surname: newUser[1] || '',
                email: userEmail
            }
        });

        dispatch({
            type: ADD_REVIEW_FOR_BLOG_POST,
            payload: {
                id: newReviewId,
                userId: newUserId,
                blogPostId,
                reviewText: message
            }
        });
    }
};

export const likeReview = (id) => ({
   type: LIKE_REVIEW,
   payload: {
       id
   }
});

export const disLikeReview = (id) => ({
    type: DISLIKE_REVIEW,
    payload: {
        id
    }
});
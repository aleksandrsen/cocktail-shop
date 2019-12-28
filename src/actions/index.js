import uuid from "uuid/v4";
import EventsService from "../services/events-service";
import BlogPostsService from "../services/blog-posts-service";
import UsersService from "../services/users-service";
import BartendersService from "../services/bartenders-service";
import CocktailsService from "../services/cocktails-service";
import getCocktailIngredientsFunc from "../functions/getCocktailIngredients";
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
    ADD_REVIEW_FOR_BLOG_POST,
    LOAD_COCKTAIL_DETAILS,
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

let eventsService = new EventsService();
let blogPostsService = new BlogPostsService();
let bartendersService = new BartendersService();

const apiBase = 'http://localhost:3000/api';

// Load events
export const loadCocktails = () => ({
    type: LOAD_COCKTAILS,
    callApi: `${apiBase}/cocktails`
});

export const loadRandomCocktails = () => ({
    type: LOAD_RANDOM_COCKTAILS,
    callApi: `${apiBase}/random`
});

export const loadBartenders = () => ({
    type: LOAD_BARTENDERS,
    callApi: `${apiBase}/bartenders`
});

export const loadReviews = () => ({
    type: LOAD_BLOG_POSTS_REVIEWS,
    callApi: `${apiBase}/reviews`
});

export const loadUsers = () => ({
    type: LOAD_USERS,
    callApi: `${apiBase}/users`
});

export const loadBlogPosts = () => ({
    type: LOAD_BLOG_POSTS,
    callApi: `${apiBase}/blog-posts`
});

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

export const loadEvents = () => ({
    type: LOAD_EVENTS,
    callApi: `${apiBase}/events`
});

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





export const loadCocktailDetails = () => ({
    type: LOAD_COCKTAIL_DETAILS,
    callApi: `${apiBase}/cocktails`
});

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
                surname: newUser[1],
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

export const loadBartenderById = (bartenderId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.bartenderItem.loading;
    let isLoaded = state.bartenderItem.loaded;
    let bartenders = state.bartenders.entities;
    let bartenderItem = state.bartenderItem.item;

    let isBartenderInBartenders = bartenders.find(({id}) => bartenderId === id);

    if (bartenderItem && bartenderItem.id === bartenderId) {
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
        dispatch({type: LOAD_BARTENDER_BY_ID + START});
        bartendersService.getBartenderById(bartenderId)
            .then(data => {
                dispatch({
                    type: LOAD_BARTENDER_BY_ID + SUCCESS,
                    payload: {
                        response: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_BARTENDER_BY_ID + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};

// export const loadAndSortEvents = () => (dispatch, getState) => {
//     const state = getState();
//     let isLoading = state.events.loading;
//     let isLoaded = state.events.loaded;
//     let events = state.events.entities;
//
//     if (events.length) {
//         dispatch({
//             type: LOAD_EVENTS + SUCCESS,
//             payload: {
//                 response: events
//             }
//         })
//     } else if (!isLoading && !isLoaded) {
//         dispatch({type: LOAD_EVENTS + START});
//         eventsService.getAllEvents()
//             .then(data => {
//                 let events = data.filter(evenItem => {
//                     let date = Date.now();
//                     let dateEventStart = +Date.parse(evenItem.dateStart);
//                     return date < dateEventStart;
//                 }).sort((firstEvent, secondEvent) => {
//                     let dateStartFirst = +Date.parse(firstEvent.dateStart);
//                     let dateStartSecond = +Date.parse(secondEvent.dateStart);
//                     return dateStartFirst - dateStartSecond;
//                 });
//                 dispatch({
//                     type: LOAD_EVENTS + SUCCESS,
//                     payload: {
//                         response: events
//                     }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: LOAD_EVENTS + FAIL,
//                     payload: {
//                         error: err
//                     }
//                 })
//             })
//     }
// };

export const loadAndSortBlogPosts = () => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.blogPosts.loading;
    let isLoaded = state.blogPosts.loaded;
    let blogPosts = state.blogPosts.entities;

    if (blogPosts.length) {
        dispatch({
            type: LOAD_BLOG_POSTS + SUCCESS,
            payload: {
                response: blogPosts
            }
        })
    } else if (!isLoading && !isLoaded) {
        dispatch({type: LOAD_BLOG_POSTS + START});
        blogPostsService.getAllBlogPosts()
            .then(data => {
                let sortedBlogPosts = data.sort((firstBlogPost, secondBlogPost) => {
                    let dateStartFirst = +Date.parse(firstBlogPost.date);
                    let dateStartSecond = +Date.parse(secondBlogPost.date);
                    return dateStartSecond - dateStartFirst;
                });
                dispatch({
                    type: LOAD_BLOG_POSTS + SUCCESS,
                    payload: {
                        response: sortedBlogPosts
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_BLOG_POSTS + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};

// export const loadUsers = () => (dispatch, getState) => {
//     const state = getState();
//     let isLoading = state.users.loading;
//     let isLoaded = state.users.loaded;
//     let users = state.users.entities;
//
//     if (users.length) {
//         dispatch({
//             type: LOAD_USERS + SUCCESS,
//             payload: {
//                 response: users
//             }
//         })
//     } else if (!isLoading && !isLoaded) {
//         dispatch({type: LOAD_USERS + START});
//         usersService.getAllUsers()
//             .then(data => {
//                 dispatch({
//                     type: LOAD_USERS + SUCCESS,
//                     payload: {
//                         response: data
//                     }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: LOAD_USERS + FAIL,
//                     payload: {
//                         error: err
//                     }
//                 })
//             })
//     }
// };

// export const loadAllDataForBlogPosts = () => (dispatch, getState) => {
//     const state = getState();
//     let isLoadingUsers = state.users.loading;
//     let isLoadedUsers = state.users.loaded;
//     let isLoadingBLogPosts = state.blogPosts.loading;
//     let isLoadedBlogPosts = state.blogPosts.loaded;
//
//     if (!isLoadingBLogPosts && !isLoadedBlogPosts) {
//         dispatch(loadBlogPosts);
//     }
//
//     if (!isLoadingUsers && !isLoadedUsers) {
//         dispatch(loadUsers);
//     }
// };

export const loadEventById = (eventId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.eventItem.loading;
    let isLoaded = state.eventItem.loaded;
    let eventItem = state.eventItem.item;
    let events = state.events.entities;

    let isEventInEvents = events.find(({id}) => eventId === id);

    if (eventItem && eventItem.id === eventId) {
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
        dispatch({type: LOAD_EVENT_BY_ID + START});
        eventsService.getEventById(eventId)
            .then(data => {
                dispatch({
                    type: LOAD_EVENT_BY_ID + SUCCESS,
                    payload: {
                        response: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_EVENT_BY_ID + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};

export const loadBlogPostById = (blogPostId) => (dispatch, getState) => {
    const state = getState();
    let isUsersLoaded = state.users.loaded;
    let isBlogPostsLoaded = state.blogPosts.loaded;
    let blogPostItem = state.blogPostItem.item;
    let isBlogPostsReviewsLoaded = state.blogPostsReviews.loaded;
    let blogPostsArr = state.blogPosts.entities;

    if (!isUsersLoaded) dispatch(loadUsers());

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
        blogPostsService.getBlogPostById(blogPostId)
            .then(data => {
                dispatch({
                    type: LOAD_BLOG_POST_BY_ID + SUCCESS,
                    payload: {
                        response: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_BLOG_POST_BY_ID + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};

// export const loadRandomCocktails = () => (dispatch, getState) => {
//     const state = getState();
//     let isLoaded = state.randomCocktails.loaded;
//     let isLoading = state.randomCocktails.loading;
//     let randomCocktails = state.randomCocktails.entities;
//
//     if (randomCocktails.length) {
//         dispatch({
//             type: LOAD_RANDOM_COCKTAILS + SUCCESS,
//             payload: {
//                 response: randomCocktails
//             }
//         })
//     } else if (!isLoading && !isLoaded) {
//         dispatch({type: LOAD_RANDOM_COCKTAILS + START});
//         cocktailsService.lookUpRandomCocktail()
//             .then(data => {
//                 const res = data.map(item => {
//                     let {strDrink, idDrink} = item.drinks[0];
//                     let cocktail = item.drinks[0];
//                     let ingredients = getCocktailIngredientsFunc(item.drinks[0]);
//                     let rate = Math.floor(strDrink.length / 4);
//                     return {
//                         ...cocktail,
//                         rate: rate < 0 ? 1 : rate > 5 ? 5 : rate,
//                         price: +(idDrink[0] + idDrink[2]),
//                         ingredients
//                     }
//                 });
//
//                 dispatch({
//                     type: LOAD_RANDOM_COCKTAILS + SUCCESS,
//                     payload: {
//                         response: res
//                     }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: LOAD_RANDOM_COCKTAILS + FAIL,
//                     payload: {
//                         error: err
//                     }
//                 })
//             })
//     }
// };

// export const loadCocktails = () => (dispatch, getState) => {
//     const state = getState();
//     let isLoaded = state.cocktails.loaded;
//     let isLoading = state.cocktails.loading;
//     let cocktails = state.cocktails.entities;
//     let randomCocktails = state.randomCocktails.entities;
//
//     if (cocktails.length) {
//         dispatch({
//             type: LOAD_COCKTAILS + SUCCESS,
//             payload: {
//                 response: cocktails
//             }
//         })
//     } else if (!isLoading && !isLoaded) {
//         dispatch({type: LOAD_COCKTAILS + START});
//         cocktailsService.loadCocktails()
//             .then(data => {
//                 let arr = [];
//                 data.forEach(item => {
//                     arr.push(...item.drinks);
//                 });
//                 let result = arr.map(item => {
//                     let {strDrink, idDrink: cocktailId} = item;
//                     let calcRate = Math.floor(strDrink.length / 4);
//                     let rating = calcRate < 0 ? 1 : calcRate > 5 ? 5 : calcRate;
//                     let price = +(cocktailId[0] + cocktailId[2]);
//
//                     let cocktailInRandom = randomCocktails.find(({idDrink}) => idDrink === cocktailId);
//                     if (cocktailInRandom) {
//                         return {
//                             ...cocktailInRandom
//                         }
//                     }
//                     return {
//                         ...item,
//                         rate: rating,
//                         price
//                     }
//                 });
//
//                 dispatch({
//                     type: LOAD_COCKTAILS + SUCCESS,
//                     payload: {
//                         response: result
//                     }
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: LOAD_COCKTAILS + FAIL,
//                     payload: {
//                         error: err
//                     }
//                 })
//             })
//     }
// };

// export const loadCocktailDetails = (id) => (dispatch, getState) => {
//     cocktailsService.lookUpCocktailDetailsById(id)
//         .then(data => {
//             if (data.status === "Error") {
//                 dispatch({
//                     type: LOAD_COCKTAIL_DETAILS + FAIL,
//                     payload: {
//                         id,
//                         err: data.message
//                     }
//                 });
//                 return
//             }
//
//             let {idDrink, strDrink} = data.drinks[0];
//             let ingredients = getCocktailIngredientsFunc(data.drinks[0]);
//             let calcRate = Math.floor(strDrink.length / 4);
//             let rate = calcRate < 0 ? 1 : calcRate > 5 ? 5 : calcRate;
//             let price = +(idDrink[0] + idDrink[2]);
//
//             dispatch({
//                 type: LOAD_COCKTAIL_DETAILS + SUCCESS,
//                 payload: {
//                     ...data.drinks[0],
//                     rate,
//                     price,
//                     ingredients
//                 }
//             })
//         })
//         .catch(err => {
//             dispatch({
//                 type: LOAD_COCKTAIL_DETAILS + FAIL,
//                 payload: {
//                     err
//                 }
//             })
//         })
// };
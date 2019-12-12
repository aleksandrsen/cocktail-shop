import EventsService from "../services/events-service";
import BlogPostsService from "../services/blog-posts-service";
import UsersService from "../services/users-service";
import BartendersService from "../services/bartenders-service";
import {
    LOAD_USERS,
    LOAD_EVENTS,
    LOAD_BLOG_POSTS,
    LOAD_BARTENDERS,
    LOAD_BARTENDER_BY_ID,
    LOAD_EVENT_BY_ID,
    LOAD_BLOG_POSTS_REVIEWS,
    LOAD_BLOG_POST_BY_ID,
    ADD_REVIEW_FOR_BLOG_POST,
    DELETE_REVIEW,
    EDIT_REVIEW,
    USER_LOG_IN,
    USER_LOG_OUT,
    START,
    SUCCESS,
    FAIL
} from "../constants";

let eventsService = new EventsService();
let blogPostsService = new BlogPostsService();
let usersService = new UsersService();
let bartendersService = new BartendersService();

export const userLogIn = () => ({
    type: USER_LOG_IN
});

export const userLogOut = () => ({
    type: USER_LOG_OUT
});

export const loadEvents = () => ({
    type: LOAD_EVENTS
});

export const loadBlogPosts = () => ({
    type: LOAD_BLOG_POSTS
});

export const loadBartenders = () => ({
    type: LOAD_BARTENDERS,
    callApi: "bartenders"
});

export const loadReviews = () => ({
    type: LOAD_BLOG_POSTS_REVIEWS,
    callApi: "reviews"
});

export const addReviewForBlogPost = (id, fullName, email, text) => ({
    type: ADD_REVIEW_FOR_BLOG_POST,
    generateId: true,
    payload: {
        blogPostId: id,
        fullName,
        userEmail: email,
        reviewText: text
    }
});

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

export const loadAndSortEvents = () => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.events.loading;
    let isLoaded = state.events.loaded;
    let events = state.events.entities;

    if (events.length) {
        dispatch({
            type: LOAD_EVENTS + SUCCESS,
            payload: {
                response: events
            }
        })
    } else if (!isLoading && !isLoaded) {
        dispatch({type: LOAD_EVENTS + START});
        eventsService.getAllEvents()
            .then(data => {
                let events = data.filter(evenItem => {
                    let date = Date.now();
                    let dateEventStart = +Date.parse(evenItem.dateStart);
                    return date < dateEventStart;
                }).sort((firstEvent, secondEvent) => {
                    let dateStartFirst = +Date.parse(firstEvent.dateStart);
                    let dateStartSecond = +Date.parse(secondEvent.dateStart);
                    return dateStartFirst - dateStartSecond;
                });
                dispatch({
                    type: LOAD_EVENTS + SUCCESS,
                    payload: {
                        response: events
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_EVENTS + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};

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

export const loadUsers = () => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.users.loading;
    let isLoaded = state.users.loaded;
    let users = state.users.entities;

    if (users.length) {
        dispatch({
            type: LOAD_USERS + SUCCESS,
            payload: {
                response: users
            }
        })
    } else if (!isLoading && !isLoaded) {
        dispatch({type: LOAD_USERS + START});
        usersService.getAllUsers()
            .then(data => {
                dispatch({
                    type: LOAD_USERS + SUCCESS,
                    payload: {
                        response: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_USERS + FAIL,
                    payload: {
                        error: err
                    }
                })
            })
    }
};

export const loadAllDataForBlogPosts = () => (dispatch, getState) => {
    const state = getState();
    let isLoadingUsers = state.users.loading;
    let isLoadedUsers = state.users.loaded;
    let isLoadingBLogPosts = state.blogPosts.loading;
    let isLoadedBlogPosts = state.blogPosts.loaded;

    if (!isLoadingBLogPosts && !isLoadedBlogPosts) {
        dispatch(loadAndSortBlogPosts());
    }

    if (!isLoadingUsers && !isLoadedUsers) {
        dispatch(loadUsers());
    }
};

export const loadEventById = (eventId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.eventItem.loading;
    let isLoaded = state.eventItem.loaded;
    let eventItem = state.eventItem.item;
    let events = state.events.entities;

    let isEventInEvents = events.find(({id}) => eventId === id);
    console.log(isEventInEvents);

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
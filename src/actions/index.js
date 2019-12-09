import EventsService from "../services/events-service";
import BlogPostsService from "../services/blog-posts-service";
import UsersService from "../services/users-service";
import BartendersService from "../services/bartenders-service";
import {
    LOAD_USERS,
    LOAD_EVENTS,
    LOAD_BLOG_POSTS,
    LOAD_BARTENDERS,
    LOAD_REVIEWS,
    ADD_REVIEW,
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

export const loadBartenderById = (bartenderId) => (dispatch, getState) => {
    const state = getState();
    let isLoading = state.bartenders.loading;
    let isLoaded = state.bartenders.loaded;
    if (!isLoading && !isLoaded) {
        dispatch({type: LOAD_BARTENDERS + START});
        bartendersService.getBartenderById(bartenderId)
            .then(data => {
                dispatch({
                    type: LOAD_BARTENDERS + SUCCESS,
                    payload: {
                        response: data
                    }
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_BARTENDERS + FAIL,
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
    if (!isLoading && !isLoaded) {
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
    if (!isLoading && !isLoaded) {
        dispatch({type: LOAD_BLOG_POSTS + START});
        blogPostsService.getAllBlogPosts()
            .then(data => {
                let blogPosts = data.sort((firstBlogPost, secondBlogPost) => {
                    let dateStartFirst = +Date.parse(firstBlogPost.date);
                    let dateStartSecond = +Date.parse(secondBlogPost.date);
                    return dateStartSecond - dateStartFirst;
                });
                dispatch({
                    type: LOAD_BLOG_POSTS + SUCCESS,
                    payload: {
                        response: blogPosts
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
    if (!isLoading && !isLoaded) {
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
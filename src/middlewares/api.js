import {START, SUCCESS, FAIL} from "../constants";
import EventsService from "../services/events-service";
import BartendersService from "../services/bartenders-service";
import BlogPostsReviewsService from "../services/blog-posts-reviews-service";
import UsersService from "../services/users-service";

const eventsService = new EventsService();
const bartendersService = new BartendersService();
const blogPostsReviewsService = new BlogPostsReviewsService();
const usersService = new UsersService();

export default (store) => (next) => (action) => {
    const {callApi, ...rest} = action;
    if (callApi) {
        next({
            ...rest,
            type: action.type + START
        });
        console.log(action.type + START);

        if (callApi === "events") {
            eventsService.getAllEvents()
                .then(data => {
                    next({
                        ...rest,
                        type: action.type + SUCCESS,
                        payload: {
                            response: data
                        }
                    });
                })
                .catch(err => {
                    next({
                        ...rest,
                        type: action.type + FAIL,
                        error: err
                    })
                })
        } else if (callApi === "bartenders") {
            bartendersService.getAllBartenders()
                .then(data => {
                    next({
                        ...rest,
                        type: action.type + SUCCESS,
                        payload: {
                            response: data
                        }
                    });
                })
                .catch(err => {
                    next({
                        ...rest,
                        type: action.type + FAIL,
                        error: err
                    })
                })
        } else if (callApi === "reviews") {
            blogPostsReviewsService.getAllReviews()
                .then(data => {
                    next({
                        ...rest,
                        type: action.type + SUCCESS,
                        payload: {
                            response: data
                        }
                    });
                })
                .catch(err => {
                    next({
                        ...rest,
                        type: action.type + FAIL,
                        error: err
                    })
                })
        }
    } else if (callApi === "users") {
        usersService.getAllUsers()
            .then(data => {
                next({
                    ...rest,
                    type: action.type + SUCCESS,
                    payload: {
                        response: data
                    }
                });
            })
            .catch(err => {
                next({
                    ...rest,
                    type: action.type + FAIL,
                    error: err
                })
            })
    } else {
        next(action);
    }
}
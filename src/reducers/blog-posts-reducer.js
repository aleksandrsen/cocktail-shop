import {LOAD_BLOG_POSTS, START, SUCCESS, FAIL} from "../constants";
import {resourceStartRecord} from "./utils";

export default (blogPostsState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_BLOG_POSTS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };

        case LOAD_BLOG_POSTS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_BLOG_POSTS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        default:
            return blogPostsState
    }
}
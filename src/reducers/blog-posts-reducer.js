import {LOAD_BLOG_POSTS, START, SUCCESS, FAIL, ADD_REVIEW_FOR_BLOG_POST} from "../constants";
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
        case  ADD_REVIEW_FOR_BLOG_POST:
            let reviewId = action.generateId;
            let blogPostId = action.payload.blogPostId;
            let blogPostItem = blogPostsState.entities.find(({id}) => id === blogPostId);
            let {reviews} = blogPostItem;

            let newBlogPostItem = {
                ...blogPostItem,
                reviews: [
                    ...reviews,
                    reviewId
                ]
            };
            let idx = blogPostsState.entities.findIndex(({id}) => id === blogPostId);
            let entities = blogPostsState.entities;
            return {
                ...blogPostsState,
                entities: [
                    ...entities.slice(0, idx),
                    newBlogPostItem,
                    ...entities.slice(idx + 1)
                ]
            };
        default:
            return blogPostsState
    }
}
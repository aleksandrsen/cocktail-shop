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
        case  ADD_REVIEW_FOR_BLOG_POST: {
            let {entities} = blogPostsState;
            let {id: newReviewId, blogPostId} = action.payload;
            let idx = entities.findIndex(({id}) => id === blogPostId);
            let blogPost = {...entities[idx]};

            let {reviews} = blogPost;
            let updatedBlogPost = {
                ...blogPost,
                reviews: [
                    ...reviews,
                    newReviewId
                ]
            };

            return {
                ...blogPostsState,
                entities: [
                    ...entities.slice(0, idx),
                    updatedBlogPost,
                    ...entities.slice(idx + 1)
                ]
            };
        }

        default:
            return blogPostsState
    }
}
import {LOAD_BLOG_POST_BY_ID, START, SUCCESS, FAIL, ADD_REVIEW_FOR_BLOG_POST} from "../constants";

let initBlogPostItemState = {
    loading: false,
    loaded: false,
    error: null,
    item: null
};

export default (blogPostItemState = initBlogPostItemState, action) => {
    switch (action.type) {
        case LOAD_BLOG_POST_BY_ID + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                item: null
            };
        case LOAD_BLOG_POST_BY_ID + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                item: action.payload.response
            };
        case LOAD_BLOG_POST_BY_ID + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                item: null
            };
        case ADD_REVIEW_FOR_BLOG_POST: {
            let {item} = blogPostItemState;
            let {reviews} = item;
            let reviewId = action.generateId;
            return {
                ...blogPostItemState,
                item: {
                    ...item,
                    reviews: [
                        ...reviews,
                        reviewId
                    ]
                }
            }
        }
        default:
            return blogPostItemState
    }
}
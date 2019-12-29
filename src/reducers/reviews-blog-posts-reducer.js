import {LOAD_BLOG_POSTS_REVIEWS, START, SUCCESS, FAIL, ADD_REVIEW_FOR_BLOG_POST} from "../constants";
import {resourceStartRecord} from "./utils";

export default (reviewsState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_BLOG_POSTS_REVIEWS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };
        case LOAD_BLOG_POSTS_REVIEWS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_BLOG_POSTS_REVIEWS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        case ADD_REVIEW_FOR_BLOG_POST: {
            let {entities} = reviewsState;
            let {reviewText, userId, id: newReviewId} = action.payload;
            let date = new Date(Date.now());
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();

            let newReview = {
                id: newReviewId,
                userId,
                date: `${year}-${month + 1}-${day}`,
                likes: 0,
                dislikes: 0,
                text: reviewText
            };

            return {
                ...reviewsState,
                entities: [
                    newReview,
                    ...entities
                ]
            };
        }
        default:
            return reviewsState
    }
}
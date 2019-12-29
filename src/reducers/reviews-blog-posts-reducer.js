import {
    LOAD_BLOG_POSTS_REVIEWS,
    START,
    SUCCESS,
    FAIL,
    ADD_REVIEW_FOR_BLOG_POST,
    LIKE_REVIEW,
    DISLIKE_REVIEW
} from "../constants";
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
        case LIKE_REVIEW: {
            let newState = countRating(reviewsState, action);
            return {
                ...newState
            }
        }
        case DISLIKE_REVIEW: {
            let newState = countRating(reviewsState, action);
            return {
                ...newState
            }
        }
        default:
            return reviewsState
    }
}

function countRating(state, action) {
    let {entities} = state;
    let field = action.type.split('_')[0].toLowerCase() + 's';
    let reviewId = action.payload.id;
    let idx = entities.findIndex(({id}) => id === reviewId);
    let reviewItem = {...entities[idx]};
    let newReviewItem = {
        ...reviewItem,
        [field]: reviewItem[field] + 1
    };

    return {
        ...state,
        entities: [
            ...entities.slice(0, idx),
            newReviewItem,
            ...entities.slice(idx + 1)
        ]
    };
}
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
            let {entities} = reviewsState;
            let reviewId = action.payload.id;
            let idx = entities.findIndex(({id}) => id === reviewId);
            let reviewItem = {...entities[idx]};
            let newReviewItem = {
              ...reviewItem,
              likes: reviewItem.likes + 1
            };

            return {
                ...reviewsState,
                entities: [
                    ...entities.slice(0, idx),
                    newReviewItem,
                    ...entities.slice(idx + 1)
                ]
            };
        }
        case DISLIKE_REVIEW: {
            let {entities} = reviewsState;
            let reviewId = action.payload.id;
            let idx = entities.findIndex(({id}) => id === reviewId);
            let reviewItem = {...entities[idx]};
            let newReviewItem = {
                ...reviewItem,
                dislikes: reviewItem.dislikes - 1
            };

            return {
                ...reviewsState,
                entities: [
                    ...entities.slice(0, idx),
                    newReviewItem,
                    ...entities.slice(idx + 1)
                ]
            };
        }
        default:
            return reviewsState
    }
}
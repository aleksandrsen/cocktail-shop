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
        case ADD_REVIEW_FOR_BLOG_POST:
            let {entities} = reviewsState;
            let {fullName, userEmail, reviewText} = action.payload;
            let id = action.generateId;
            // date: "2019-09-30",
            let date = new Date(Date.now());
            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();

            let newReview = {
                id,
                userId: "e9d1351a-f32f-4d6a-b32c-8c093fb3e2de",
                fullName,
                date: `${year}-${month + 1}-${day}`,
                likes: 0,
                dislikes: 0,
                text: reviewText
            };

            return {
                ...reviewsState,
                entities: [
                    ...entities,
                    newReview
                ]
            };


        default:
            return reviewsState
    }
}
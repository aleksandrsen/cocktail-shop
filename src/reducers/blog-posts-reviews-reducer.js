import {LOAD_REVIEWS, START, SUCCESS, FAIL} from "../constants";
import {resourceStartRecord} from "./utils";

export default (reviewsState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_REVIEWS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };

        case LOAD_REVIEWS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_REVIEWS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        default:
            return reviewsState
    }
}
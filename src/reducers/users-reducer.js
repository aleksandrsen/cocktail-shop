import {LOAD_USERS, START, SUCCESS, FAIL} from "../constants";
import {resourceStartRecord} from "./utils";

export default (eventsState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_USERS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };

        case LOAD_USERS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_USERS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        default:
            return eventsState
    }
}
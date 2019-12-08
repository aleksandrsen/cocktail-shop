import {LOAD_EVENTS, START, SUCCESS, FAIL} from "../constants";
import {arrToObj, resourceStartRecord} from "./utils";

export default (eventsState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_EVENTS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: {}
            };

        case LOAD_EVENTS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_EVENTS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: {}
            };
        default:
            return eventsState
    }
}
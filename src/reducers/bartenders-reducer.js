import {LOAD_BARTENDERS, START, SUCCESS, FAIL} from "../constants";
import {resourceStartRecord} from "./utils";

export default (bartendersState = resourceStartRecord(), action) => {
    switch (action.type) {
        case LOAD_BARTENDERS + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                entities: []
            };

        case LOAD_BARTENDERS + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                entities: action.payload.response
            };
        case LOAD_BARTENDERS + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                entities: []
            };
        default:
            return bartendersState
    }
}
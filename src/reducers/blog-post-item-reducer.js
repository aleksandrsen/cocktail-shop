import {LOAD_EVENT_BY_ID, START, SUCCESS, FAIL} from "../constants";

let initBartenderItemState = {
    loading: false,
    loaded: false,
    error: null,
    item: null
};

export default (eventItemState = initBartenderItemState, action) => {
    switch (action.type) {
        case LOAD_EVENT_BY_ID + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                item: null
            };

        case LOAD_EVENT_BY_ID + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                item: action.payload.response
            };
        case LOAD_EVENT_BY_ID + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                item: null
            };
        default:
            return eventItemState
    }
}
import {LOAD_BARTENDER_BY_ID, START, SUCCESS, FAIL} from "../constants";
import {itemStartRecord} from "./utils";

export default (bartenderItemState = itemStartRecord(), action) => {
    switch (action.type) {
        case LOAD_BARTENDER_BY_ID + START:
            return {
                loading: true,
                loaded: false,
                error: null,
                item: null
            };

        case LOAD_BARTENDER_BY_ID + SUCCESS:
            return {
                loading: false,
                loaded: true,
                error: null,
                item: action.payload.response
            };
        case LOAD_BARTENDER_BY_ID + FAIL:
            return {
                loading: false,
                loaded: false,
                error: action.error,
                item: null
            };
        default:
            return bartenderItemState
    }
}
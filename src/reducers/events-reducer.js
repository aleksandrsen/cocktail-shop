import {LOAD_EVENTS, START, SUCCESS, FAIL} from "../constants";

const initialState = {
    events: null,
    upcomingEvent: null,
    nextEvents: null,
}

export default (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}
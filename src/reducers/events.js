import {
  FETCH_EVENTS_LIST_SUCCESS,
  FETCH_NEXT_EVENTS_SUCCESS,
  FETCH_UPCOMING_EVENT_SUCCESS,
} from "../constants/events";

const initialState = {
  events: null,
  upcomingEvent: null,
  nextEvents: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_EVENT_SUCCESS:
      return { ...state, upcomingEvent: action.payload };

    case FETCH_NEXT_EVENTS_SUCCESS:
      return { ...state, nextEvents: action.payload };

    case FETCH_EVENTS_LIST_SUCCESS:
      return { ...state, events: action.payload };

    default:
      return state;
  }
};

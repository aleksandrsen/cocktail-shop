import {
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENTS_LIST_SUCCESS,
  FETCH_NEXT_EVENTS_SUCCESS,
  FETCH_UPCOMING_EVENT_SUCCESS,
  RESET_EVENT_DETAILS,
} from "../constants/events";
import { IEvents } from "../types/reducers";

const initialState: IEvents = {
  events: null,
  upcomingEvent: null,
  nextEvents: null,
  eventDetails: null,
};

const EventsState = (state = initialState, action: any): IEvents => {
  switch (action.type) {
    case FETCH_UPCOMING_EVENT_SUCCESS:
      return { ...state, upcomingEvent: action.payload };

    case FETCH_NEXT_EVENTS_SUCCESS:
      return { ...state, nextEvents: action.payload };

    case FETCH_EVENTS_LIST_SUCCESS:
      return { ...state, events: action.payload };
    case FETCH_EVENT_DETAILS_SUCCESS:
      return { ...state, eventDetails: action.payload };
    case RESET_EVENT_DETAILS:
      return { ...state, eventDetails: null };

    default:
      return state;
  }
};
export default EventsState;

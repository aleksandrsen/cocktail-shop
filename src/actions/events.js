import {
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENTS_LIST_REQUEST,
  FETCH_NEXT_EVENTS_REQUEST,
  FETCH_UPCOMING_EVENT_REQUEST,
} from "../constants/events";

export const fetchUpcomingEvent = () => ({
  type: FETCH_UPCOMING_EVENT_REQUEST,
});

export const fetchNextEvents = () => ({ type: FETCH_NEXT_EVENTS_REQUEST });

export const fetchEventsList = () => ({ type: FETCH_EVENTS_LIST_REQUEST });

export const fetchEventDetails = (id) => ({
  type: FETCH_EVENT_DETAILS_REQUEST,
  id,
});

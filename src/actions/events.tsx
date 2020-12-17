import {
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENTS_LIST_REQUEST,
  FETCH_NEXT_EVENTS_REQUEST,
  FETCH_UPCOMING_EVENT_REQUEST,
} from "../constants/events";
import { EventsActionType } from "../types/actions/events";

export const fetchUpcomingEvent = () => ({
  type: FETCH_UPCOMING_EVENT_REQUEST,
});

export const fetchNextEvents = (): EventsActionType => ({
  type: FETCH_NEXT_EVENTS_REQUEST,
});

export const fetchEventsList = (): EventsActionType => ({
  type: FETCH_EVENTS_LIST_REQUEST,
});

export const fetchEventDetails = (id: number): EventsActionType => ({
  type: FETCH_EVENT_DETAILS_REQUEST,
  id,
});

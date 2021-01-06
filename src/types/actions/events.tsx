import {
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENTS_LIST_REQUEST,
  FETCH_NEXT_EVENTS_REQUEST,
  FETCH_UPCOMING_EVENT_REQUEST,
  RESET_EVENT_DETAILS,
} from "../../constants/events";

type FetchUpcomingEventActionType = {
  type: typeof FETCH_UPCOMING_EVENT_REQUEST;
};

type FetchNextEventsActionType = {
  type: typeof FETCH_NEXT_EVENTS_REQUEST;
};

type FetchEventsListActionType = {
  type: typeof FETCH_EVENTS_LIST_REQUEST;
};

type FetchEventDetailsActionType = {
  type: typeof FETCH_EVENT_DETAILS_REQUEST;
  id: number;
};

type ResetEventDetailsActionType = {
  type: typeof RESET_EVENT_DETAILS;
};

export type EventsActionType =
  | FetchUpcomingEventActionType
  | FetchNextEventsActionType
  | FetchEventsListActionType
  | ResetEventDetailsActionType
  | FetchEventDetailsActionType;

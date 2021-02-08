import { takeLatest, put, all } from "redux-saga/effects";
import {
  FETCH_EVENT_DETAILS_FAIL,
  FETCH_EVENT_DETAILS_REQUEST,
  FETCH_EVENT_DETAILS_SUCCESS,
  FETCH_EVENTS_LIST_FAIL,
  FETCH_EVENTS_LIST_REQUEST,
  FETCH_EVENTS_LIST_SUCCESS,
  FETCH_NEXT_EVENTS_FAIL,
  FETCH_NEXT_EVENTS_REQUEST,
  FETCH_NEXT_EVENTS_SUCCESS,
  FETCH_UPCOMING_EVENT_FAIL,
  FETCH_UPCOMING_EVENT_REQUEST,
  FETCH_UPCOMING_EVENT_SUCCESS,
} from "../constants/events";
import callApi from "../config/api";

// workers
function* upcomingEventWorker() {
  try {
    const { data } = yield callApi("/upcomingEvent");
    yield put({ type: FETCH_UPCOMING_EVENT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_UPCOMING_EVENT_FAIL, payload: err });
  }
}

function* fetchNextEventsWorker() {
  try {
    const { data } = yield callApi("/nextEvents");
    yield put({ type: FETCH_NEXT_EVENTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_NEXT_EVENTS_FAIL, payload: err });
  }
}

function* fetchEventsListWorker() {
  try {
    const { data } = yield callApi("/events");
    yield put({ type: FETCH_EVENTS_LIST_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_EVENTS_LIST_FAIL, payload: err });
  }
}

function* fetchEventDetailsWorker(action) {
  try {
    const { data } = yield callApi(`/events/${action.id}`);
    yield put({ type: FETCH_EVENT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_EVENT_DETAILS_FAIL, payload: err });
  }
}

// watchers
export function* fetchUpcomingEvent() {
  yield takeLatest(FETCH_UPCOMING_EVENT_REQUEST, upcomingEventWorker);
}

export function* fetchNextEvents() {
  yield takeLatest(FETCH_NEXT_EVENTS_REQUEST, fetchNextEventsWorker);
}

export function* fetchEventsList() {
  yield takeLatest(FETCH_EVENTS_LIST_REQUEST, fetchEventsListWorker);
}

export function* fetchEventDetails() {
  yield takeLatest(FETCH_EVENT_DETAILS_REQUEST, fetchEventDetailsWorker);
}

export function* eventsSagas() {
  yield all([
    fetchUpcomingEvent(),
    fetchNextEvents(),
    fetchEventsList(),
    fetchEventDetails(),
  ]);
}

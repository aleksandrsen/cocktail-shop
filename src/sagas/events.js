import { takeLatest, put, all, call } from "redux-saga/effects";
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
    const { data } = yield call(callApi, "/upcomingEvent");
    yield put({ type: FETCH_UPCOMING_EVENT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_UPCOMING_EVENT_FAIL, payload: err });
  }
}

function* fetchNextEventsWorker() {
  try {
    const { data } = yield call(callApi, "/nextEvents");
    yield put({ type: FETCH_NEXT_EVENTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_NEXT_EVENTS_FAIL, payload: err });
  }
}

function* fetchEventsListWorker() {
  try {
    const { data } = yield call(callApi, "/events");
    yield put({ type: FETCH_EVENTS_LIST_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_EVENTS_LIST_FAIL, payload: err });
  }
}

function* fetchEventDetailsWorker(action) {
  try {
    const { data } = yield call(callApi, `/events/${action.id}`);
    yield put({ type: FETCH_EVENT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_EVENT_DETAILS_FAIL, payload: err });
  }
}

export function* eventsSagas() {
  yield all([
    takeLatest(FETCH_NEXT_EVENTS_REQUEST, fetchNextEventsWorker),
    takeLatest(FETCH_EVENTS_LIST_REQUEST, fetchEventsListWorker),
    takeLatest(FETCH_UPCOMING_EVENT_REQUEST, upcomingEventWorker),
    takeLatest(FETCH_EVENT_DETAILS_REQUEST, fetchEventDetailsWorker),
  ]);
}

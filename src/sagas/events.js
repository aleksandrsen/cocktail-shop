import { takeLatest, takeEvery, put } from "redux-saga/effects";
import {
  FETCH_UPCOMING_EVENT_FAIL,
  FETCH_UPCOMING_EVENT_REQUEST,
  FETCH_UPCOMING_EVENT_SUCCESS,
} from "../constants/events";
import callApi from "../api";

function* upcomingEventWorker() {
  const { data, err } = yield callApi("/events");
  if (data) yield put({ type: FETCH_UPCOMING_EVENT_SUCCESS, payload: data });
  if (err) yield put({ type: FETCH_UPCOMING_EVENT_FAIL });
}

export function* fetchUpcomingEvent() {
  yield takeLatest(FETCH_UPCOMING_EVENT_REQUEST, upcomingEventWorker);
}

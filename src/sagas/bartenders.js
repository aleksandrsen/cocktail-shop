import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  FETCH_BARTENDERS_REQUEST,
  FETCH_BARTENDERS_SUCCESS,
  FETCH_BARTENDERS_FAIL,
  FETCH_BARTENDERS_DETAILS_REQUEST,
  FETCH_BARTENDERS_DETAILS_SUCCESS,
  FETCH_BARTENDERS_DETAILS_FAIL,
  SEND_MESSAGE_TO_BARTENDER_REQUEST,
  SEND_MESSAGE_TO_BARTENDER_SUCCESS,
  SEND_MESSAGE_TO_BARTENDER_FAIL,
} from "../constants/bartenders";
import callApi from "../config/api";

const wait = () =>
  new Promise((resolve) => setTimeout(() => resolve({}), 1500));

// workers
function* fetchBartendersWorker() {
  try {
    const { data } = yield call(callApi, "/bartenders");
    yield put({ type: FETCH_BARTENDERS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BARTENDERS_FAIL, payload: err });
  }
}

function* fetchBartenderDetailsWorker({ id }) {
  try {
    const { data } = yield call(callApi, `/bartenders/${id}`);
    yield put({ type: FETCH_BARTENDERS_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BARTENDERS_DETAILS_FAIL, payload: err });
  }
}

function* sendMessageToBartenderWorker() {
  try {
    const data = yield wait();
    yield put({ type: SEND_MESSAGE_TO_BARTENDER_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: SEND_MESSAGE_TO_BARTENDER_FAIL, payload: err });
  }
}

export function* bartendersSagas() {
  yield all([
    takeLatest(FETCH_BARTENDERS_REQUEST, fetchBartendersWorker),
    takeLatest(FETCH_BARTENDERS_DETAILS_REQUEST, fetchBartenderDetailsWorker),
    takeLatest(SEND_MESSAGE_TO_BARTENDER_REQUEST, sendMessageToBartenderWorker),
  ]);
}

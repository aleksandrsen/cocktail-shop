import { put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_BARTENDERS_REQUEST,
  FETCH_BARTENDERS_SUCCESS,
  FETCH_BARTENDERS_FAIL,
  FETCH_BARTENDERS_DETAILS_REQUEST,
  FETCH_BARTENDERS_DETAILS_SUCCESS,
  FETCH_BARTENDERS_DETAILS_FAIL,
} from "../constants/bartenders";
import callApi from "../api";

// workers
function* fetchBartendersWorker() {
  try {
    const { data } = yield callApi("/bartenders");
    yield put({ type: FETCH_BARTENDERS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BARTENDERS_FAIL, payload: err });
  }
}

function* fetchBartenderDetailsWorker(action) {
  try {
    const { data } = yield callApi(`/bartenders/${action.payload}`);
    yield put({ type: FETCH_BARTENDERS_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BARTENDERS_DETAILS_FAIL, payload: err });
  }
}

// watchers
function* fetchBartenders() {
  yield takeLatest(FETCH_BARTENDERS_REQUEST, fetchBartendersWorker);
}

function* fetchBartenderDetails() {
  yield takeLatest(
    FETCH_BARTENDERS_DETAILS_REQUEST,
    fetchBartenderDetailsWorker
  );
}

export function* bartendersSagas() {
  yield all([fetchBartenders(), fetchBartenderDetails()]);
}

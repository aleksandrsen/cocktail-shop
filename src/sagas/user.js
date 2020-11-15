import { put, takeLatest, all } from "redux-saga/effects";
import {
  USER_SEND_MESSAGE_FAIL,
  USER_SEND_MESSAGE_REQUEST,
  USER_SEND_MESSAGE_SUCCESS,
} from "../constants/user";

const wait = () =>
  new Promise((resolve) => setTimeout(() => resolve({}), 1500));

// workers
function* userSendMessageWorker() {
  try {
    const data = yield wait();
    yield put({ type: USER_SEND_MESSAGE_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: USER_SEND_MESSAGE_FAIL, payload: err });
  }
}

// watchers
function* userSendMessage() {
  yield takeLatest(USER_SEND_MESSAGE_REQUEST, userSendMessageWorker);
}

export function* userSagas() {
  yield all([userSendMessage()]);
}

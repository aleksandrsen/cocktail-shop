import { put, takeLatest, all, select } from "redux-saga/effects";
import {
  ADD_ITEM_TO_CARD_REQUEST,
  ADD_ITEM_TO_CARD_SUCCESS,
  ADD_ITEM_TO_WISH_LIST_REQUEST,
  ADD_ITEM_TO_WISH_LIST_SUCCESS,
  DELETE_ITEM_FROM_CARD_REQUEST,
  DELETE_ITEM_FROM_CARD_SUCCESS,
  DELETE_ITEM_FROM_WISH_LIST_REQUEST,
  DELETE_ITEM_FROM_WISH_LIST_SUCCESS,
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

function* addItemToCardWorker({ data }) {
  const {
    user: { card },
  } = yield select();
  yield put({
    type: ADD_ITEM_TO_CARD_SUCCESS,
    payload: {
      ...card,
      [data.id]: data,
    },
  });
}

function* deleteItemFromCardWorker({ id }) {
  const {
    user: { card },
  } = yield select();

  const updatedCard = { ...card };
  delete updatedCard[id];

  yield put({ type: DELETE_ITEM_FROM_CARD_SUCCESS, payload: updatedCard });
}

function* addItemToWishListWorker({ data }) {
  const {
    user: { wishList },
  } = yield select();

  yield put({
    type: ADD_ITEM_TO_WISH_LIST_SUCCESS,
    payload: {
      ...wishList,
      [data.id]: data,
    },
  });
}

function* deleteItemFromWishListWorker({ id }) {
  const {
    user: { wishList },
  } = yield select();
  const updatedWishList = { ...wishList };
  delete updatedWishList[id];
  yield put({
    type: DELETE_ITEM_FROM_WISH_LIST_SUCCESS,
    payload: updatedWishList,
  });
}

export function* userSagas() {
  yield all([
    takeLatest(ADD_ITEM_TO_CARD_REQUEST, addItemToCardWorker),
    takeLatest(USER_SEND_MESSAGE_REQUEST, userSendMessageWorker),
    takeLatest(ADD_ITEM_TO_WISH_LIST_REQUEST, addItemToWishListWorker),
    takeLatest(DELETE_ITEM_FROM_CARD_REQUEST, deleteItemFromCardWorker),
    takeLatest(DELETE_ITEM_FROM_WISH_LIST_REQUEST, deleteItemFromWishListWorker),
  ]);
}

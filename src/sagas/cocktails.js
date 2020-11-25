import { put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_COCKTAILS_LIST_FAIL,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_COCKTAILS_LIST_SUCCESS,
  FETCH_RANDOM_COCKTAILS_FAIL,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  FETCH_RANDOM_COCKTAILS_SUCCESS,
} from "../constants/cocktails";
import callApi from "../api";

// workers
function* fetchRandomCocktailsWorker() {
  try {
    const { data } = yield callApi("/randomCocktails");
    yield put({ type: FETCH_RANDOM_COCKTAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_RANDOM_COCKTAILS_FAIL });
  }
}

function* fetchCocktailsListWorker() {
  try {
    const { data } = yield callApi("/cocktails");
    yield put({ type: FETCH_COCKTAILS_LIST_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_COCKTAILS_LIST_FAIL });
  }
}

// watchers
function* fetchRandomCocktails() {
  yield takeLatest(FETCH_RANDOM_COCKTAILS_REQUEST, fetchRandomCocktailsWorker);
}

function* fetchCocktailsList() {
  yield takeLatest(FETCH_COCKTAILS_LIST_REQUEST, fetchCocktailsListWorker);
}

export function* cocktailsSagas() {
  yield all([fetchRandomCocktails(), fetchCocktailsList()]);
}

import { put, takeLatest, all } from "redux-saga/effects";
import {
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

// watchers
function* fetchRandomCocktails() {
  yield takeLatest(FETCH_RANDOM_COCKTAILS_REQUEST, fetchRandomCocktailsWorker);
}

export function* cocktailsSagas() {
  yield all([fetchRandomCocktails()]);
}

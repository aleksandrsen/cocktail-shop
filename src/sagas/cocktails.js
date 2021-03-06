import { put, takeLatest, all, select, call } from "redux-saga/effects";
import {
  DISLIKE_COCKTAIL_REVIEW_FAIL,
  DISLIKE_COCKTAIL_REVIEW_REQUEST,
  DISLIKE_COCKTAIL_REVIEW_SUCCESS,
  FETCH_COCKTAIL_DETAILS_FAIL,
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAIL_DETAILS_SUCCESS,
  FETCH_COCKTAILS_LIST_FAIL,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_COCKTAILS_LIST_SUCCESS,
  FETCH_RANDOM_COCKTAILS_FAIL,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  FETCH_RANDOM_COCKTAILS_SUCCESS,
  LIKE_COCKTAIL_REVIEW_REQUEST,
  LIKE_COCKTAIL_REVIEW_SUCCESS,
  SEND_COCKTAIL_REVIEW_FAIL,
  SEND_COCKTAIL_REVIEW_REQUEST,
  SEND_COCKTAIL_REVIEW_SUCCESS,
} from "../constants/cocktails";
import callApi from "../config/api";
import { LIKE_BLOG_POST_REVIEW_FAIL } from "../constants/blog";

// workers
function* fetchRandomCocktailsWorker() {
  try {
    const { data } = yield call(callApi, "/randomCocktails");
    yield put({ type: FETCH_RANDOM_COCKTAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_RANDOM_COCKTAILS_FAIL });
  }
}

function* fetchCocktailsListWorker() {
  try {
    const { data } = yield call(callApi, "/cocktails");
    yield put({ type: FETCH_COCKTAILS_LIST_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_COCKTAILS_LIST_FAIL });
  }
}

function* fetchCocktailDetailsWorker({ id }) {
  try {
    const { data } = yield call(callApi, `/cocktails/${id}`);
    yield put({ type: FETCH_COCKTAIL_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_COCKTAIL_DETAILS_FAIL });
  }
}

function* sendCocktailReviewWorker({ id, data }) {
  try {
    const {
      data: { id: reviewId },
    } = yield call(callApi, `/cocktails/${id}/review`, "POST", data);

    const {
      cocktails: { cocktailDetails },
    } = yield select();

    yield put({
      type: SEND_COCKTAIL_REVIEW_SUCCESS,
      payload: {
        ...cocktailDetails,
        reviews: [
          {
            id: reviewId,
            author: data.name,
            likes: 0,
            dislikes: 0,
            date: Date.now(),
            text: data.message,
          },
          ...cocktailDetails.reviews,
        ],
      },
    });
  } catch (err) {
    yield put({ type: SEND_COCKTAIL_REVIEW_FAIL });
  }
}

function* setLikeCocktailReviewWorker({ id }) {
  try {
    const {
      cocktails: { cocktailDetails },
    } = yield select();
    const updatedDetails = {
      ...cocktailDetails,
      reviews: [
        ...cocktailDetails.reviews.map((item) =>
          item.id !== id
            ? item
            : {
                ...item,
                likes: ++item.likes,
              }
        ),
      ],
    };

    yield put({ type: LIKE_COCKTAIL_REVIEW_SUCCESS, payload: updatedDetails });
  } catch (err) {
    yield put({ type: LIKE_BLOG_POST_REVIEW_FAIL });
  }
}

function* setDislikeCocktailReviewWorker({ id }) {
  try {
    const {
      cocktails: { cocktailDetails },
    } = yield select();
    const updatedDetails = {
      ...cocktailDetails,
      reviews: [
        ...cocktailDetails.reviews.map((item) =>
          item.id !== id
            ? item
            : {
                ...item,
                dislikes: --item.dislikes,
              }
        ),
      ],
    };

    yield put({
      type: DISLIKE_COCKTAIL_REVIEW_SUCCESS,
      payload: updatedDetails,
    });
  } catch (err) {
    yield put({ type: DISLIKE_COCKTAIL_REVIEW_FAIL });
  }
}

export function* cocktailsSagas() {
  yield all([
    takeLatest(SEND_COCKTAIL_REVIEW_REQUEST, sendCocktailReviewWorker),
    takeLatest(FETCH_COCKTAILS_LIST_REQUEST, fetchCocktailsListWorker),
    takeLatest(LIKE_COCKTAIL_REVIEW_REQUEST, setLikeCocktailReviewWorker),
    takeLatest(FETCH_RANDOM_COCKTAILS_REQUEST, fetchRandomCocktailsWorker),
    takeLatest(FETCH_COCKTAIL_DETAILS_REQUEST, fetchCocktailDetailsWorker),
    takeLatest(DISLIKE_COCKTAIL_REVIEW_REQUEST, setDislikeCocktailReviewWorker)
  ]);
}

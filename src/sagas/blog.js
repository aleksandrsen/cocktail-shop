import { takeLatest, put, all } from "redux-saga/effects";
import {
  FETCH_LATEST_BLOG_POSTS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_SUCCESS,
  FETCH_LATEST_BLOG_POSTS_FAIL,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_BLOG_POSTS_FAIL,
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POST_DETAILS_REQUEST,
  FETCH_BLOG_POST_DETAILS_SUCCESS,
  FETCH_BLOG_POST_DETAILS_FAIL,
  SEND_BLOG_POST_REVIEW_REQUEST,
  SEND_BLOG_POST_REVIEW_SUCCESS,
  SEND_BLOG_POST_REVIEW_FAIL,
} from "../constants/blog";
import callApi from "../api";

// workers
function* fetchLatestBlogPostsWorker() {
  try {
    const { data } = yield callApi("/latestBlogPosts");
    yield put({ type: FETCH_LATEST_BLOG_POSTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_LATEST_BLOG_POSTS_FAIL, payload: err });
  }
}

function* fetchBlogPostsWorker() {
  try {
    const { data } = yield callApi("/blog-posts");
    yield put({ type: FETCH_BLOG_POSTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BLOG_POSTS_FAIL, payload: err });
  }
}

function* fetchBlogPostDetailsWorker({ id }) {
  try {
    const { data } = yield callApi(`/blog-posts/${id}`);
    yield put({ type: FETCH_BLOG_POST_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BLOG_POST_DETAILS_FAIL, err });
  }
}

function* sendBlogPostReviewWorker({ payload: { id, data } }) {
  try {
    const {data: {id: reviewId}} = yield callApi(`/blog-posts/${id}/review`, "POST", data);

    // yield put({ type: SEND_BLOG_POST_REVIEW_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: SEND_BLOG_POST_REVIEW_FAIL, err });
  }
}

// watchers
export function* fetchLatestBlogPosts() {
  yield takeLatest(FETCH_LATEST_BLOG_POSTS_REQUEST, fetchLatestBlogPostsWorker);
}

export function* fetchBlogPosts() {
  yield takeLatest(FETCH_BLOG_POSTS_REQUEST, fetchBlogPostsWorker);
}

export function* fetchBlogPostDetails() {
  yield takeLatest(FETCH_BLOG_POST_DETAILS_REQUEST, fetchBlogPostDetailsWorker);
}

export function* sendBlogPostReview() {
  yield takeLatest(SEND_BLOG_POST_REVIEW_REQUEST, sendBlogPostReviewWorker);
}

export function* blogSagas() {
  yield all([
    fetchLatestBlogPosts(),
    fetchBlogPosts(),
    fetchBlogPostDetails(),
    sendBlogPostReview(),
  ]);
}

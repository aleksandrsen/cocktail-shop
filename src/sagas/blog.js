import { takeLatest, put, all } from "redux-saga/effects";
import {
  FETCH_LATEST_BLOG_POSTS_REQUEST,
  FETCH_LATEST_BLOG_POSTS_SUCCESS,
  FETCH_LATEST_BLOG_POSTS_FAIL,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_BLOG_POSTS_FAIL,
  FETCH_BLOG_POSTS_REQUEST,
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

// watchers
export function* fetchLatestBlogPosts() {
  yield takeLatest(FETCH_LATEST_BLOG_POSTS_REQUEST, fetchLatestBlogPostsWorker);
}

export function* fetchBlogPosts() {
  yield takeLatest(FETCH_BLOG_POSTS_REQUEST, fetchBlogPostsWorker);
}

export function* blogSagas() {
  yield all([fetchLatestBlogPosts(), fetchBlogPosts()]);
}

import { takeLatest, takeEvery, put, all, select, call } from "redux-saga/effects";
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
  LIKE_BLOG_POST_REVIEW_REQUEST,
  DISLIKE_BLOG_POST_REVIEW_REQUEST,
  LIKE_BLOG_POST_REVIEW_SUCCESS,
  LIKE_BLOG_POST_REVIEW_FAIL,
  DISLIKE_BLOG_POST_REVIEW_SUCCESS,
  DISLIKE_BLOG_POST_REVIEW_FAIL,
} from "../constants/blog";
import callApi from "../config/api";

// workers
function* fetchLatestBlogPosts() {
  try {
    const { data } = yield call(callApi, "/latestBlogPosts");
    yield put({ type: FETCH_LATEST_BLOG_POSTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_LATEST_BLOG_POSTS_FAIL, payload: err });
  }
}

function* fetchBlogPosts() {
  try {
    const { data } = yield call(callApi, "/blog-posts");
    yield put({ type: FETCH_BLOG_POSTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BLOG_POSTS_FAIL, payload: err });
  }
}

function* fetchBlogPostDetails({ id }) {
  try {
    const { data } = yield call(callApi, `/blog-posts/${id}`);
    yield put({ type: FETCH_BLOG_POST_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BLOG_POST_DETAILS_FAIL, err });
  }
}

function* sendBlogPostReview({ payload: { id, data } }) {
  try {
    const {
      data: { id: reviewId },
    } = yield call(callApi, `/blog-posts/${id}/review`, "POST", data);

    const {
      blogPosts: { blogPostDetails },
    } = yield select();

    yield put({
      type: SEND_BLOG_POST_REVIEW_SUCCESS,
      payload: {
        ...blogPostDetails,
        reviews: [
          {
            id: reviewId,
            author: data.name,
            likes: 0,
            dislikes: 0,
            date: Date.now(),
            text: data.message,
          },
          ...blogPostDetails.reviews,
        ],
      },
    });
  } catch (err) {
    yield put({ type: SEND_BLOG_POST_REVIEW_FAIL, err });
  }
}

function* setLikeBlogPostReview({ id }) {
  try {
    // const {
    //   data: { id: reviewId },
    // } = yield callApi(`/blog-posts/${id}/review`, "POST", data);

    const {
      blogPosts: { blogPostDetails },
    } = yield select();

    const updatedDetails = {
      ...blogPostDetails,
      reviews: [
        ...blogPostDetails.reviews.map((review) =>
          review.id !== id
            ? review
            : {
                ...review,
                likes: ++review.likes,
              }
        ),
      ],
    };

    yield put({
      type: LIKE_BLOG_POST_REVIEW_SUCCESS,
      payload: updatedDetails,
    });
  } catch (err) {
    yield put({ type: LIKE_BLOG_POST_REVIEW_FAIL, err });
  }
}

function* setDislikeBlogPostReview({ id }) {
  try {
    // const {
    //   data: { id: reviewId },
    // } = yield callApi(`/blog-posts/${id}/review`, "POST", data);

    const {
      blogPosts: { blogPostDetails },
    } = yield select();

    const updatedDetails = {
      ...blogPostDetails,
      reviews: [
        ...blogPostDetails.reviews.map((review) =>
          review.id !== id
            ? review
            : {
                ...review,
                dislikes: --review.dislikes,
              }
        ),
      ],
    };

    yield put({
      type: DISLIKE_BLOG_POST_REVIEW_SUCCESS,
      payload: updatedDetails,
    });
  } catch (err) {
    yield put({ type: DISLIKE_BLOG_POST_REVIEW_FAIL, err });
  }
}

export function* blogSagas() {
  yield all([
    takeLatest(FETCH_BLOG_POSTS_REQUEST, fetchBlogPosts),
    takeLatest(SEND_BLOG_POST_REVIEW_REQUEST, sendBlogPostReview),
    takeEvery(LIKE_BLOG_POST_REVIEW_REQUEST, setLikeBlogPostReview),
    takeLatest(FETCH_LATEST_BLOG_POSTS_REQUEST, fetchLatestBlogPosts),
    takeLatest(FETCH_BLOG_POST_DETAILS_REQUEST, fetchBlogPostDetails),
    takeEvery(DISLIKE_BLOG_POST_REVIEW_REQUEST, setDislikeBlogPostReview),
  ]);
}

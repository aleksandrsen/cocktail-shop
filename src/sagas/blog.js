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
function* fetchLatestBlogPostsWorker() {
  try {
    const { data } = yield call(callApi, "/latestBlogPosts");
    yield put({ type: FETCH_LATEST_BLOG_POSTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_LATEST_BLOG_POSTS_FAIL, payload: err });
  }
}

function* fetchBlogPostsWorker() {
  try {
    const { data } = yield call(callApi, "/blog-posts");
    yield put({ type: FETCH_BLOG_POSTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BLOG_POSTS_FAIL, payload: err });
  }
}

function* fetchBlogPostDetailsWorker({ id }) {
  try {
    const { data } = yield call(callApi, `/blog-posts/${id}`);
    yield put({ type: FETCH_BLOG_POST_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_BLOG_POST_DETAILS_FAIL, err });
  }
}

function* sendBlogPostReviewWorker({ payload: { id, data } }) {
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

function* setLikeBlogPostReviewWorker({ id }) {
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

function* setDislikeBlogPostReviewWorker({ id }) {
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

export function* setLikeBlogPostReview() {
  yield takeEvery(LIKE_BLOG_POST_REVIEW_REQUEST, setLikeBlogPostReviewWorker);
}

export function* setDislikeBlotPostReview() {
  yield takeEvery(
    DISLIKE_BLOG_POST_REVIEW_REQUEST,
    setDislikeBlogPostReviewWorker
  );
}

export function* blogSagas() {
  yield all([
    fetchLatestBlogPosts(),
    fetchBlogPosts(),
    fetchBlogPostDetails(),
    sendBlogPostReview(),
    setLikeBlogPostReview(),
    setDislikeBlotPostReview(),
  ]);
}

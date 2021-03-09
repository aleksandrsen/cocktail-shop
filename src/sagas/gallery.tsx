import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  FETCH_INSTAGRAM_PHOTOS_REQUEST,
  FETCH_INSTAGRAM_PHOTOS_SUCCESS,
  FETCH_INSTAGRAM_PHOTOS_FAIL,
  FETCH_GALLERY_PHOTOS_REQUEST,
  FETCH_GALLERY_PHOTOS_SUCCESS,
  FETCH_GALLERY_PHOTOS_FAIL,
} from "../constants/gallery";
import callApi from "../config/api";

// workers
function* fetchInstagramPhotosWorker() {
  try {
    const { data } = yield call(callApi, "/instagram");
    yield put({ type: FETCH_INSTAGRAM_PHOTOS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_INSTAGRAM_PHOTOS_FAIL, payload: err });
  }
}

function* fetchGalleryPhotosWorker() {
  try {
    const { data } = yield call(callApi, "/gallery");
    yield put({ type: FETCH_GALLERY_PHOTOS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: FETCH_GALLERY_PHOTOS_FAIL, payload: err });
  }
}

// watchers
function* fetchInstagramPhotos() {
  yield takeLatest(FETCH_INSTAGRAM_PHOTOS_REQUEST, fetchInstagramPhotosWorker);
}

function* fetchGalleryPhotos() {
  yield takeLatest(FETCH_GALLERY_PHOTOS_REQUEST, fetchGalleryPhotosWorker);
}

export function* gallerySagas() {
  yield all([fetchInstagramPhotos(), fetchGalleryPhotos()]);
}

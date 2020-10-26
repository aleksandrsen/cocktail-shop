import { all } from "redux-saga/effects";

import { eventsSagas } from "./events";
import { blogSagas } from "./blog";
import { cocktailsSagas } from "./cocktails";

export default function* rootSaga() {
  yield all([eventsSagas(), blogSagas(), cocktailsSagas()]);
}

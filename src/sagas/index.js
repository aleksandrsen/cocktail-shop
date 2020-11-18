import { all } from "redux-saga/effects";

import { userSagas } from "./user";
import { blogSagas } from "./blog";
import { eventsSagas } from "./events";
import { gallerySagas } from "./gallery";
import { cocktailsSagas } from "./cocktails";
import { bartendersSagas } from "./bartenders";

export default function* rootSaga() {
  yield all([
    userSagas(),
    blogSagas(),
    eventsSagas(),
    gallerySagas(),
    cocktailsSagas(),
    bartendersSagas(),
  ]);
}

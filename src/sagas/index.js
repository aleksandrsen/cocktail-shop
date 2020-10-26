import {all} from "redux-saga/effects"

import {eventsSagas} from "./events";
import {blogSagas} from "./blog";


export default function* rootSaga() {
    yield all([
        eventsSagas(),
        blogSagas(),
    ])
}
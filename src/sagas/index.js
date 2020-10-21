import {all} from "redux-saga/effects"

import {fetchUpcomingEvent} from "./events";


export default function* rootSaga() {
    yield all([
        fetchUpcomingEvent()
    ])
}
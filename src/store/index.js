import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import api from "../middlewares/api";
import logger from "../middlewares/logger";

const store = createStore(reducers, applyMiddleware(
    thunk,
    api,
    // logger
));

window.store = store;

export default store;
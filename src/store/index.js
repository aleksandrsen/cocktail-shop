import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import api from "../middlewares/api";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generateId";

const store = createStore(reducers, applyMiddleware(
    thunk,
    generateId,
    api,
    logger
));

window.store = store;

export default store;
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import api from "../middlewares/api";
import logger from "../middlewares/logger";
import generateId from "../middlewares/generateId";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        thunk,
        generateId,
        api,
        // logger
    )
));


window.store = store;

export default store;
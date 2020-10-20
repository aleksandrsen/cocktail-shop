import {createStore, applyMiddleware} from "redux";
import reducers from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

window.store = store;

export default store;
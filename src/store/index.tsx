import { createStore, applyMiddleware } from "redux";
import rootSaga from "../sagas";
import reducers, { RootReducer } from "../reducers";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type AppStateType = ReturnType<RootReducer>;

sagaMiddleware.run(rootSaga);

export default store;

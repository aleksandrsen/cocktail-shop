import { applyMiddleware, createStore } from "redux";
import { sagaMiddleware } from "../store";
import rootReducer from "../reducers";

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`);

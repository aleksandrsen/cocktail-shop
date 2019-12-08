import {combineReducers} from "redux";
import userReducer from "./user-reducer";
import eventsReducer from "./events-reducer";

const reducers = combineReducers({
    isLogin: userReducer,
    events: eventsReducer
});

export default reducers;
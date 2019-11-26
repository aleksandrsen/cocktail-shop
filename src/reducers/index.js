import {combineReducers} from "redux";
import userLoginReducer from "./user-login-reducer";

const reducers = combineReducers({
    isLogin: userLoginReducer
});

export default reducers;
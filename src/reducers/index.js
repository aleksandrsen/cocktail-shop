import {combineReducers} from "redux";
import events from "./events-reducer";
import {reducer as formReducer} from "redux-form";


const reducers = combineReducers({
    events,
    form: formReducer
});

export default reducers;
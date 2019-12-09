import {USER_LOG_IN, USER_LOG_OUT} from "../constants";

let initStateUser = {
    logIn: false,
    name: "User",
    email: "Surname",
    address: "New York, Central Park"
};

export default (userState = initStateUser, action) => {
    switch (action.type) {
        case USER_LOG_IN:
            return {
                ...userState,
                logIn: true
            };
        case USER_LOG_OUT:
            return {
                ...userState,
                logIn: false
            };
        default:
            return userState
    }
}
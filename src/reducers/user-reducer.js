import {USER_LOG_OUT, USER_LOG_IN} from "../constants"
export default (isLogin = true, action) => {
    switch (action.type) {
        case USER_LOG_IN: {
            return true
        }
        case USER_LOG_OUT: {
            return false
        }
        default:
            return isLogin
    }
};
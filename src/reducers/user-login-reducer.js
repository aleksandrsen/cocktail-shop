import {userLogin, userLogOut} from "../constants"
export default (isLogin = true, action) => {
    switch (action.type) {
        case userLogin: {
            return true
        }
        case userLogOut: {
            return false
        }
        default:
            return isLogin
    }
};
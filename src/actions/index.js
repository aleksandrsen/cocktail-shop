import {userLogin, userLogOut} from "../constants"

const userLoginAction = () => ({type: userLogin});
const userLogOutAction = () => ({type: userLogOut});

export {
    userLoginAction,
    userLogOutAction
}
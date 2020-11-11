import {FETCH_USER_INFO_REQUEST, USER_SEND_MESSAGE_REQUEST} from "../constants/user";

export const getUserInfo = () => ({type: FETCH_USER_INFO_REQUEST});

export const userSendMessage = data => ({type: USER_SEND_MESSAGE_REQUEST, payload: data});
import {
  ADD_ITEM_TO_CARD,
  ADD_ITEM_TO_WISH_LIST,
  DELETE_ITEM_FROM_CARD,
  DELETE_ITEM_FROM_WISH_LIST,
  FETCH_USER_INFO_REQUEST,
  USER_SEND_MESSAGE_REQUEST,
} from "../constants/user";

export const getUserInfo = () => ({ type: FETCH_USER_INFO_REQUEST });

export const userSendMessage = (data) => ({
  type: USER_SEND_MESSAGE_REQUEST,
  payload: data,
});

export const addItemToCard = (data) => ({ type: ADD_ITEM_TO_CARD, data });

export const deleteItemFromCard = (id) => ({ type: DELETE_ITEM_FROM_CARD, id });

export const addItemToWishList = (data) => ({
  type: ADD_ITEM_TO_WISH_LIST,
  data,
});

export const deleteItemFromWishList = (id) => ({
  type: DELETE_ITEM_FROM_WISH_LIST,
  id,
});

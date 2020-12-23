import {
  FETCH_USER_INFO_REQUEST,
  ADD_ITEM_TO_CARD_REQUEST,
  USER_SEND_MESSAGE_REQUEST,
  JOIN_MAILING_LIST_REQUEST,
  ADD_ITEM_TO_WISH_LIST_REQUEST,
  DELETE_ITEM_FROM_CARD_REQUEST,
  DELETE_ITEM_FROM_WISH_LIST_REQUEST,
} from "../constants/user";
import {
  CardItemType,
  WishListItemType,
  RequestMessageType,
} from "../types/common";
import { UserActionType } from "../types/actions/user";

export const getUserInfo = () => ({ type: FETCH_USER_INFO_REQUEST });

export const userSendMessage = (data: RequestMessageType): UserActionType => ({
  type: USER_SEND_MESSAGE_REQUEST,
  data,
});

export const addItemToCard = (data: CardItemType): UserActionType => ({
  type: ADD_ITEM_TO_CARD_REQUEST,
  data,
});

export const deleteItemFromCard = (id: number): UserActionType => ({
  type: DELETE_ITEM_FROM_CARD_REQUEST,
  id,
});

export const addItemToWishList = (data: WishListItemType): UserActionType => ({
  type: ADD_ITEM_TO_WISH_LIST_REQUEST,
  data,
});

export const deleteItemFromWishList = (id: number): UserActionType => ({
  type: DELETE_ITEM_FROM_WISH_LIST_REQUEST,
  id,
});

export const addUserToMailingList = (email: string): UserActionType => ({
  type: JOIN_MAILING_LIST_REQUEST,
  email,
});

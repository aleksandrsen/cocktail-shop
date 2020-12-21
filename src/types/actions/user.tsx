import {
  FETCH_USER_INFO_REQUEST,
  ADD_ITEM_TO_CARD_REQUEST,
  USER_SEND_MESSAGE_REQUEST,
  ADD_ITEM_TO_WISH_LIST_REQUEST,
  DELETE_ITEM_FROM_CARD_REQUEST,
  DELETE_ITEM_FROM_WISH_LIST_REQUEST,
} from "../../constants/user";
import { CardItemType, RequestMessageType, WishListItemType } from "../common";

type GetUserInfoActionType = {
  type: typeof FETCH_USER_INFO_REQUEST;
};

type UserSendMessageActionType = {
  type: typeof USER_SEND_MESSAGE_REQUEST;
  data: RequestMessageType;
};

type AddItemToCardActionType = {
  type: typeof ADD_ITEM_TO_CARD_REQUEST;
  data: CardItemType;
};

type DeleteItemFromCard = {
  type: typeof DELETE_ITEM_FROM_CARD_REQUEST;
  id: number;
};

type AddItemToWishListActionType = {
  type: typeof ADD_ITEM_TO_WISH_LIST_REQUEST;
  data: WishListItemType;
};

type DeleteItemFromWishListActionType = {
  type: typeof DELETE_ITEM_FROM_WISH_LIST_REQUEST;
  id: number;
};

export type UserActionType =
  | GetUserInfoActionType
  | UserSendMessageActionType
  | AddItemToCardActionType
  | DeleteItemFromCard
  | AddItemToWishListActionType
  | DeleteItemFromWishListActionType;

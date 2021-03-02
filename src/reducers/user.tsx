import {
  ADD_ITEM_TO_CARD_SUCCESS,
  ADD_ITEM_TO_WISH_LIST_SUCCESS,
  DELETE_ITEM_FROM_CARD_SUCCESS,
  DELETE_ITEM_FROM_WISH_LIST_SUCCESS,
} from "../constants/user";
import { IUser } from "../types/reducers";

const defaultState: IUser = {
  userInfo: {
    firstName: "User first name",
    lastName: "UserLastName",
    email: "user@gmail.com",
    phoneNumber: "+380934321832"
  },
  card: {},
  wishList: {},
  isAuthenticated: false
};

const UserState = (state = defaultState, action: any): IUser => {
  switch (action.type) {
    case ADD_ITEM_TO_CARD_SUCCESS:
    case DELETE_ITEM_FROM_CARD_SUCCESS:
      return { ...state, card: action.payload };
    case ADD_ITEM_TO_WISH_LIST_SUCCESS:
    case DELETE_ITEM_FROM_WISH_LIST_SUCCESS:
      return { ...state, wishList: action.payload };

    default:
      return state;
  }
};

export default UserState;

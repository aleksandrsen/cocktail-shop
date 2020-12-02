import {
  ADD_ITEM_TO_CARD_SUCCESS,
  ADD_ITEM_TO_WISH_LIST_SUCCESS,
  DELETE_ITEM_FROM_CARD_SUCCESS,
  DELETE_ITEM_FROM_WISH_LIST_SUCCESS,
} from "../constants/user";

const defaultState = {
  userInfo: null,
  card: {},
  wishList: {},
};

export default (state = defaultState, action) => {
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

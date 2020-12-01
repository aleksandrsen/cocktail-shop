import {
  ADD_ITEM_TO_CARD,
  ADD_ITEM_TO_WISH_LIST,
  DELETE_ITEM_FROM_CARD,
  DELETE_ITEM_FROM_WISH_LIST,
} from "../constants/user";

const defaultState = {
  userInfo: null,
  card: null,
  wishList: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CARD:
    case DELETE_ITEM_FROM_CARD:
      return { ...state, card: action.payload };
    case ADD_ITEM_TO_WISH_LIST:
    case DELETE_ITEM_FROM_WISH_LIST:
      return { ...state, wishList: action.payload };

    default:
      return state;
  }
};

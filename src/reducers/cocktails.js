import {FETCH_COCKTAILS_LIST_SUCCESS, FETCH_RANDOM_COCKTAILS_SUCCESS} from "../constants/cocktails";

const initialState = {
  list: null,
  randomCocktails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_COCKTAILS_SUCCESS:
      return { ...state, randomCocktails: action.payload };
    case FETCH_COCKTAILS_LIST_SUCCESS:
      return { ...state, list: action.payload };

    default:
      return state;
  }
};

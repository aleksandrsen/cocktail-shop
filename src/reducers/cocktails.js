import {
  DISLIKE_COCKTAIL_REVIEW_SUCCESS,
  FETCH_COCKTAIL_DETAILS_SUCCESS,
  FETCH_COCKTAILS_LIST_SUCCESS,
  FETCH_RANDOM_COCKTAILS_SUCCESS,
  LIKE_COCKTAIL_REVIEW_SUCCESS,
  SEND_COCKTAIL_REVIEW_SUCCESS,
} from "../constants/cocktails";

const initialState = {
  list: null,
  randomCocktails: null,
  cocktailDetails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_COCKTAILS_SUCCESS:
      return { ...state, randomCocktails: action.payload };
    case FETCH_COCKTAILS_LIST_SUCCESS:
      return { ...state, list: action.payload };
    case FETCH_COCKTAIL_DETAILS_SUCCESS:
    case SEND_COCKTAIL_REVIEW_SUCCESS:
    case LIKE_COCKTAIL_REVIEW_SUCCESS:
    case DISLIKE_COCKTAIL_REVIEW_SUCCESS:
      return { ...state, cocktailDetails: action.payload };

    default:
      return state;
  }
};

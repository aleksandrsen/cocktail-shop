import {
  FETCH_COCKTAIL_DETAILS_SUCCESS,
  FETCH_COCKTAILS_LIST_SUCCESS,
  FETCH_RANDOM_COCKTAILS_SUCCESS,
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
      return { ...state, cocktailDetails: action.payload };

    default:
      return state;
  }
};

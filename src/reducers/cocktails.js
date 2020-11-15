import { FETCH_RANDOM_COCKTAILS_SUCCESS } from "../constants/cocktails";

const initialState = {
  randomCocktails: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_COCKTAILS_SUCCESS:
      return { ...state, randomCocktails: action.payload };

    default:
      return state;
  }
};

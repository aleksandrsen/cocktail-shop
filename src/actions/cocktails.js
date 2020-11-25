import {
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
} from "../constants/cocktails";

export const fetchRandomCocktails = () => ({
  type: FETCH_RANDOM_COCKTAILS_REQUEST,
});

export const fetchCocktailsList = () => ({
  type: FETCH_COCKTAILS_LIST_REQUEST,
});

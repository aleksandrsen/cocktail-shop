import {
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
} from "../constants/cocktails";

export const fetchRandomCocktails = () => ({
  type: FETCH_RANDOM_COCKTAILS_REQUEST,
});

export const fetchCocktailsList = () => ({
  type: FETCH_COCKTAILS_LIST_REQUEST,
});

export const fetchCocktailsDetails = (id) => ({
  type: FETCH_COCKTAIL_DETAILS_REQUEST,
  id,
});

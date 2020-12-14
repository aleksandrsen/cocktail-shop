import {
  DISLIKE_COCKTAIL_REVIEW_REQUEST,
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  LIKE_COCKTAIL_REVIEW_REQUEST,
  SEND_COCKTAIL_REVIEW_REQUEST,
} from "../constants/cocktails";

export const fetchRandomCocktails = () => ({
  type: FETCH_RANDOM_COCKTAILS_REQUEST,
});

export const fetchCocktailsList = () => ({
  type: FETCH_COCKTAILS_LIST_REQUEST,
});

export const fetchCocktailsDetails = (id: string) => ({
  type: FETCH_COCKTAIL_DETAILS_REQUEST,
  id,
});

export const sendCocktailReview = (id: string, data: {}) => ({
  type: SEND_COCKTAIL_REVIEW_REQUEST,
  id,
  data,
});

export const setLikeCocktailReview = (id: string) => ({
  type: LIKE_COCKTAIL_REVIEW_REQUEST,
  id,
});

export const setDislikeCocktailReview = (id: string) => ({
  type: DISLIKE_COCKTAIL_REVIEW_REQUEST,
  id,
});

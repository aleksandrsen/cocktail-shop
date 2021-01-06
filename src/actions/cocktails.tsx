import {
  DISLIKE_COCKTAIL_REVIEW_REQUEST,
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  LIKE_COCKTAIL_REVIEW_REQUEST,
  RESET_COCKTAIL_DETAILS,
  SEND_COCKTAIL_REVIEW_REQUEST,
} from "../constants/cocktails";
import { CocktailsActionType } from "../types/actions/cocktails";
import { RequestMessageType } from "../types/common";

export const fetchRandomCocktails = (): CocktailsActionType => ({
  type: FETCH_RANDOM_COCKTAILS_REQUEST,
});

export const fetchCocktailsList = (): CocktailsActionType => ({
  type: FETCH_COCKTAILS_LIST_REQUEST,
});

export const fetchCocktailsDetails = (id: number): CocktailsActionType => ({
  type: FETCH_COCKTAIL_DETAILS_REQUEST,
  id,
});

export const resetCocktailsDetails = (): CocktailsActionType => ({
  type: RESET_COCKTAIL_DETAILS,
});

export const sendCocktailReview = (
  id: number,
  data: RequestMessageType
): CocktailsActionType => ({
  type: SEND_COCKTAIL_REVIEW_REQUEST,
  id,
  data,
});

export const setLikeCocktailReview = (id: number): CocktailsActionType => ({
  type: LIKE_COCKTAIL_REVIEW_REQUEST,
  id,
});

export const setDislikeCocktailReview = (id: number): CocktailsActionType => ({
  type: DISLIKE_COCKTAIL_REVIEW_REQUEST,
  id,
});

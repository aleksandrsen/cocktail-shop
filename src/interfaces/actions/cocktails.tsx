import {
  DISLIKE_COCKTAIL_REVIEW_REQUEST,
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  LIKE_COCKTAIL_REVIEW_REQUEST,
  SEND_COCKTAIL_REVIEW_REQUEST,
} from "../../constants/cocktails";
import { RequestMessageType } from "../common";

interface IFetchRandomCocktails {
  type: typeof FETCH_RANDOM_COCKTAILS_REQUEST;
}

interface IFetchCocktailsList {
  type: typeof FETCH_COCKTAILS_LIST_REQUEST;
}

interface IFetchCocktailDetails {
  type: typeof FETCH_COCKTAIL_DETAILS_REQUEST;
  id: number;
}

interface ISendCocktailReview {
  type: typeof SEND_COCKTAIL_REVIEW_REQUEST;
  id: number;
  data: RequestMessageType;
}

interface ISetLikeCocktailReview {
  type: typeof LIKE_COCKTAIL_REVIEW_REQUEST;
  id: number;
}

interface ISetDislikeCocktailReview {
  type: typeof DISLIKE_COCKTAIL_REVIEW_REQUEST;
  id: number;
}

export type CocktailsActionType =
  | IFetchRandomCocktails
  | IFetchCocktailsList
  | IFetchCocktailDetails
  | ISendCocktailReview
  | ISetLikeCocktailReview
  | ISetDislikeCocktailReview;

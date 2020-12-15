import {
  DISLIKE_COCKTAIL_REVIEW_REQUEST,
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  LIKE_COCKTAIL_REVIEW_REQUEST,
  SEND_COCKTAIL_REVIEW_REQUEST,
} from "../../constants/cocktails";
import { RequestMessageType } from "../common";

export interface IFetchRandomCocktails {
  type: typeof FETCH_RANDOM_COCKTAILS_REQUEST;
}

export interface IFetchCocktailsList {
  type: typeof FETCH_COCKTAILS_LIST_REQUEST;
}

export interface IFetchCocktailDetails {
  type: typeof FETCH_COCKTAIL_DETAILS_REQUEST;
  id: number;
}

export interface ISendCocktailReview {
  type: typeof SEND_COCKTAIL_REVIEW_REQUEST;
  id: number;
  data: RequestMessageType;
}

export interface ISetLikeCocktailReview {
  type: typeof LIKE_COCKTAIL_REVIEW_REQUEST;
  id: number;
}

export interface ISetDislikeCocktailReview {
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

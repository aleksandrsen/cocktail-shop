import {
  DISLIKE_COCKTAIL_REVIEW_REQUEST,
  FETCH_COCKTAIL_DETAILS_REQUEST,
  FETCH_COCKTAILS_LIST_REQUEST,
  FETCH_RANDOM_COCKTAILS_REQUEST,
  LIKE_COCKTAIL_REVIEW_REQUEST,
  SEND_COCKTAIL_REVIEW_REQUEST,
} from "../../constants/cocktails";
import { RequestMessageType } from "../common";

type FetchRandomCocktailsActionType = {
  type: typeof FETCH_RANDOM_COCKTAILS_REQUEST;
};

type FetchCocktailsListActionType = {
  type: typeof FETCH_COCKTAILS_LIST_REQUEST;
};

type FetchCocktailDetailsActionType = {
  type: typeof FETCH_COCKTAIL_DETAILS_REQUEST;
  id: number;
};

type SendCocktailReviewActionType = {
  type: typeof SEND_COCKTAIL_REVIEW_REQUEST;
  id: number;
  data: RequestMessageType;
};

type SetLikeCocktailReviewActionType = {
  type: typeof LIKE_COCKTAIL_REVIEW_REQUEST;
  id: number;
};

type SetDislikeCocktailReviewActionType = {
  type: typeof DISLIKE_COCKTAIL_REVIEW_REQUEST;
  id: number;
};

export type CocktailsActionType =
  | FetchRandomCocktailsActionType
  | FetchCocktailsListActionType
  | FetchCocktailDetailsActionType
  | SendCocktailReviewActionType
  | SetLikeCocktailReviewActionType
  | SetDislikeCocktailReviewActionType;

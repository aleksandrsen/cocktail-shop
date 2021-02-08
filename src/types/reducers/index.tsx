import {
  UserItemType,
  UserCardType,
  EventItemType,
  BlogPostItemType,
  CocktailItemType,
  UserWishListType,
  BartenderItemType,
} from "../common";

export interface ICocktailsReducer {
  readonly list: null | CocktailItemType[];
  readonly randomCocktails: null | CocktailItemType[];
  readonly cocktailDetails: null | CocktailItemType;
}

export interface IBlogPosts {
  readonly blogPosts: null | BlogPostItemType[];
  readonly latestBlogPosts: null | BlogPostItemType[];
  readonly blogPostDetails: null | BlogPostItemType;
}

export interface IBartenders {
  readonly bartenders: null | BartenderItemType[];
  readonly bartenderDetails: null | BartenderItemType;
}

export interface IEvents {
  readonly events: null | EventItemType[];
  readonly upcomingEvent: null | EventItemType;
  readonly nextEvents: null | EventItemType[];
  readonly eventDetails: null | EventItemType;
}

export interface IGallery {
  readonly instagram: null | string[];
  readonly gallery: null | string[];
}

export interface IUser {
  readonly userInfo: null | UserItemType;
  readonly card: UserCardType;
  readonly wishList: UserWishListType;
  readonly isAuthenticated: boolean
}

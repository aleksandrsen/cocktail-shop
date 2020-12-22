export interface ICocktailsReducer {
  readonly list: null | [];
  readonly randomCocktails: null | [];
  readonly cocktailDetails: null | {};
}

export interface IBlogPosts {
  readonly blogPosts: null | [];
  readonly latestBlogPosts: null | [];
  readonly blogPostDetails: null | {};
  readonly counter: number;

}

export interface IBartenders {
  readonly bartenders: null | [];
  readonly bartenderDetails: null | {};
}

export interface IEvents {
  readonly events: null | [];
  readonly upcomingEvent: null | {};
  readonly nextEvents: null | [];
  readonly eventDetails: null | {};
}

export interface IGallery {
  readonly instagram: null | [];
  readonly gallery: null | [];
}

export interface IUser {
  readonly userInfo: null | {};
  readonly card: {};
  readonly wishList: {};
}

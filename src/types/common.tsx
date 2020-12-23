/// Common ///
export type RequestMessageType = {
  name: string;
  email: string;
  message: string;
};

export type CardItemType = {
  id: number;
  name: string;
  price: number;
  previewSrc: string;
};

export type WishListItemType = {
  id: number;
  name: string;
  price: number;
  previewSrc: string;
};

//// COCKTAILS ////
export type CocktailItemType = {
  id: number;
  rate: number;
  name: string;
  price: number;
  category: string;
  alcoholic: string;
  previewSrc: string;
  ingredients: string[];
  reviews?: CocktailReviewItemType[];
};

export type CocktailReviewItemType = {
  author: string;
  date: string;
  dislikes: number;
  id: number;
  likes: number;
  text: string;
};

/// BLOG POSTS ///
export type BlogPostItemType = {
  authorFullName: string;
  content: string;
  date: string;
  id: number;
  title: string;
  previewSrc: string;
  reviews?: BlogPostReviewItemType[];
};

export type BlogPostReviewItemType = {
  author: string;
  date: string;
  dislikes: number;
  id: number;
  likes: number;
  text: string;
};

/// EVENTS ///
export type EventItemType = {
  address: string;
  dateEnd: string;
  dateStart: string;
  description: string;
  id: number;
  previewSrc: string;
  title: string;
};

/// BARTENDERS ///
export type BartenderItemType = {
  email: string;
  id: number; // ?????????????????????
  img: string;
  name: string;
  surname: string;
};

/// USER ///
export type UserItemType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

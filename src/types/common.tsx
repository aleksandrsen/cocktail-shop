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

export type ReviewType = {
  id: string;
  author: string;
  date: string;
  likes: number;
  dislikes: number;
  text: string;
};

export type BlogNewsItemType = {
  authorFullName: string;
  content: string;
  date: string;
  id: number;
  title: string,
  previewSrc: string;
  reviews?: ReviewType[];
};

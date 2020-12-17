import {
  FETCH_INSTAGRAM_PHOTOS_REQUEST,
  FETCH_GALLERY_PHOTOS_REQUEST,
} from "../../constants/gallery";

type FetchInstagramPhotosActionType = {
  type: typeof FETCH_INSTAGRAM_PHOTOS_REQUEST;
};

type FetchGalleryPhotosActionType = {
  type: typeof FETCH_GALLERY_PHOTOS_REQUEST;
};

export type PhotosActionType =
  | FetchInstagramPhotosActionType
  | FetchGalleryPhotosActionType;

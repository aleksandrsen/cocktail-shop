import {
  FETCH_INSTAGRAM_PHOTOS_REQUEST,
  FETCH_GALLERY_PHOTOS_REQUEST,
} from "../constants/gallery";

import { PhotosActionType } from "../types/actions/gallery";

export const fetchInstagramPhotos = (): PhotosActionType => ({
  type: FETCH_INSTAGRAM_PHOTOS_REQUEST,
});
export const fetchGalleryPhotos = (): PhotosActionType => ({
  type: FETCH_GALLERY_PHOTOS_REQUEST,
});

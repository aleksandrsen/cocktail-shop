import {
  FETCH_INSTAGRAM_PHOTOS_REQUEST,
  FETCH_GALLERY_PHOTOS_REQUEST,
} from "../constants/gallery";

export const fetchInstagramPhotos = () => ({
  type: FETCH_INSTAGRAM_PHOTOS_REQUEST,
});
export const fetchGalleryPhotos = () => ({
  type: FETCH_GALLERY_PHOTOS_REQUEST,
});

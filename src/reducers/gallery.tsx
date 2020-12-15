import {
  FETCH_INSTAGRAM_PHOTOS_SUCCESS,
  FETCH_GALLERY_PHOTOS_SUCCESS,
} from "../constants/gallery";
import { IGallery } from "../interfaces/reducers";

const initial: IGallery = {
  instagram: null,
  gallery: null,
};

const GalleryState = (state = initial, action: any): IGallery => {
  switch (action.type) {
    case FETCH_INSTAGRAM_PHOTOS_SUCCESS:
      return { ...state, instagram: action.payload };
    case FETCH_GALLERY_PHOTOS_SUCCESS:
      return { ...state, gallery: action.payload };
    default:
      return state;
  }
};

export default GalleryState;

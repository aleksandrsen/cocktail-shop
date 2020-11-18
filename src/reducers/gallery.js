import {
  FETCH_INSTAGRAM_PHOTOS_SUCCESS,
  FETCH_GALLERY_PHOTOS_SUCCESS,
} from "../constants/gallery";

const initial = {
  instagram: null,
  gallery: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case FETCH_INSTAGRAM_PHOTOS_SUCCESS:
      return { ...state, instagram: action.payload };
    case FETCH_GALLERY_PHOTOS_SUCCESS:
      return { ...state, gallery: action.payload };
    default:
      return state;
  }
};

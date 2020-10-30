import {
  FETCH_BARTENDERS_DETAILS_SUCCESS,
  FETCH_BARTENDERS_SUCCESS,
} from "../constants/bartenders";

const initial = {
  bartenders: null,
  bartenderDetails: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case FETCH_BARTENDERS_SUCCESS:
      return { ...state, bartenders: action.payload };
    case FETCH_BARTENDERS_DETAILS_SUCCESS:
      return { ...state, bartenderDetails: action.payload };
    default:
      return state;
  }
};

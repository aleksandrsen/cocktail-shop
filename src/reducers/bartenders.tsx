import {
  RESET_BARTENDER_DETAILS,
  FETCH_BARTENDERS_SUCCESS,
  FETCH_BARTENDERS_DETAILS_SUCCESS,
} from "../constants/bartenders";
import { IBartenders } from "../types/reducers";

const initial: IBartenders = {
  bartenders: null,
  bartenderDetails: null,
};

const BartendersState = (state = initial, action: any): IBartenders => {
  switch (action.type) {
    case FETCH_BARTENDERS_SUCCESS:
      return { ...state, bartenders: action.payload };
    case FETCH_BARTENDERS_DETAILS_SUCCESS:
      return { ...state, bartenderDetails: action.payload };
    case RESET_BARTENDER_DETAILS:
      return { ...state, bartenderDetails: null };
    default:
      return state;
  }
};

export default BartendersState;

import { FETCH_BARTENDERS_SUCCESS } from "../constants/bartenders";

const initial = {
  bartenders: null,
};

export default (state = initial, action) => {
  switch (action.type) {
    case FETCH_BARTENDERS_SUCCESS:
      return { ...state, bartenders: action.payload };
    default:
      return state;
  }
};

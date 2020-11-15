import {
  FETCH_BARTENDERS_DETAILS_REQUEST,
  FETCH_BARTENDERS_REQUEST,
  SEND_MESSAGE_TO_BARTENDER_REQUEST,
} from "../constants/bartenders";

export const fetchBartenders = () => ({ type: FETCH_BARTENDERS_REQUEST });

export const fetchBartendersDetails = (id) => ({
  type: FETCH_BARTENDERS_DETAILS_REQUEST,
  payload: id,
});

export const sendMessageToBartender = (bartenderId, data) => ({
  type: SEND_MESSAGE_TO_BARTENDER_REQUEST,
  payload: { bartenderId, data },
});

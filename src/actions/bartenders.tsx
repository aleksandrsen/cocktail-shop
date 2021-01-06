import {
  RESET_BARTENDER_DETAILS,
  FETCH_BARTENDERS_REQUEST,
  FETCH_BARTENDERS_DETAILS_REQUEST,
  SEND_MESSAGE_TO_BARTENDER_REQUEST,
} from "../constants/bartenders";
import { RequestMessageType } from "../types/common";
import { BartendersActionType } from "../types/actions/bartenders";

export const fetchBartenders = () => ({ type: FETCH_BARTENDERS_REQUEST });

export const fetchBartendersDetails = (id: number): BartendersActionType => ({
  type: FETCH_BARTENDERS_DETAILS_REQUEST,
  id,
});

export const sendMessageToBartender = (
  bartenderId: number,
  data: RequestMessageType
): BartendersActionType => ({
  type: SEND_MESSAGE_TO_BARTENDER_REQUEST,
  bartenderId,
  data,
});

export const resetBartenderDetails = (): BartendersActionType => ({
  type: RESET_BARTENDER_DETAILS,
});

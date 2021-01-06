import {
  RESET_BARTENDER_DETAILS,
  FETCH_BARTENDERS_REQUEST,
  FETCH_BARTENDERS_DETAILS_REQUEST,
  SEND_MESSAGE_TO_BARTENDER_REQUEST,
} from "../../constants/bartenders";
import { RequestMessageType } from "../common";

type FetchBartendersActionType = {
  type: typeof FETCH_BARTENDERS_REQUEST;
};

type FetchBartendersDetailsActionType = {
  type: typeof FETCH_BARTENDERS_DETAILS_REQUEST;
  id: number;
};

type SendMessageToBartenderActionType = {
  type: typeof SEND_MESSAGE_TO_BARTENDER_REQUEST;
  bartenderId: number;
  data: RequestMessageType;
};

type ResetBartenderDetailsActionType = {
  type: typeof RESET_BARTENDER_DETAILS;
};

export type BartendersActionType =
  | FetchBartendersActionType
  | FetchBartendersDetailsActionType
  | SendMessageToBartenderActionType
  | ResetBartenderDetailsActionType;

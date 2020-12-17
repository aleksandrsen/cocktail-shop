import {
  FETCH_BARTENDERS_DETAILS_REQUEST,
  FETCH_BARTENDERS_REQUEST,
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

export type BartendersActionType =
  | FetchBartendersActionType
  | FetchBartendersDetailsActionType
  | SendMessageToBartenderActionType;

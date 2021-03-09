import React, { useEffect } from "react";
import "./bartener-details.scss";
// Utils
import { connect } from "react-redux";
import { match } from "react-router-dom";
// Actions
import {
  resetBartenderDetails,
  fetchBartendersDetails,
  sendMessageToBartender,
} from "../../../actions/bartenders";
// Components
import ReviewForm from "../../reusable-components/review-form";
import ImgSkeleton from "../../reusable-components/img-skeleton";
import RippleButton from "../../reusable-components/ripple-button";
import FieldSkeleton from "../../reusable-components/field-skeleton";
// Types
import { AppRootState } from "../../../store";
import { BartenderItemType, RequestMessageType } from "../../../types/common";

type MatchParamsType = {
  id: string;
};

type BartenderDetailsPropsType = {
  match: match<MatchParamsType>;
  resetBartenderDetails: () => void;
  bartenderDetails: null | BartenderItemType;
  fetchBartendersDetails: (id: number) => void;
  sendMessageToBartender: (id: number, values: RequestMessageType) => void;
};

const BartenderDetails = ({
  match: {
    params: { id },
  },
  bartenderDetails,
  resetBartenderDetails,
  fetchBartendersDetails,
  sendMessageToBartender,
}: BartenderDetailsPropsType) => {
  useEffect(() => {
    fetchBartendersDetails(+id);
    return () => {
      resetBartenderDetails();
    };
  }, [fetchBartendersDetails, id, resetBartenderDetails]);

  const handleSubmit = (values: RequestMessageType) =>
    sendMessageToBartender(+id, values);

  return (
    <>
      <div className="default-section bartenderDetails">
        <div className="container">
          <h2 className="section-sub-title">Bartender</h2>
          <h1 className="section-title">
            {bartenderDetails ? (
              `${bartenderDetails.name} ${bartenderDetails.surname}`
            ) : (
              <FieldSkeleton
                styles={{ padding: "20px 0", width: "20%", margin: "auto" }}
              />
            )}
          </h1>
          {bartenderDetails ? (
            <p className="default-text">{bartenderDetails.story}</p>
          ) : (
            <FieldSkeleton
              className={"default-text"}
              styles={{ height: "90px" }}
            />
          )}
          <ImgSkeleton
            src={bartenderDetails?.img}
            title={`${bartenderDetails?.name} ${bartenderDetails?.surname}`}
            classes={[
              "bartenderDetails__photo",
              "col col-4 col-lg-6 col-md-7 col-sm-10 col-xs-12",
            ]}
            skeletonStyle={{
              height: "500px",
              margin: "auto",
              borderRadius: "5px",
            }}
            skeletonClasses={[
              "col col-4 col-lg-6 col-md-7 col-sm-10 col-xs-12",
            ]}
          />
          {bartenderDetails ? (
            <p className="default-text">{bartenderDetails.greeting}</p>
          ) : (
            <FieldSkeleton
              className={"default-text"}
              styles={{ height: "50px" }}
            />
          )}
          <RippleButton>Awards</RippleButton>
          <ReviewForm
            handleSubmit={handleSubmit}
            title={`Talk to ${bartenderDetails?.name} ${bartenderDetails?.surname}`}
          />
        </div>
      </div>
    </>
  );
};

export default connect(
  (state: AppRootState) => ({
    bartenderDetails: state.bartenders.bartenderDetails,
  }),
  { fetchBartendersDetails, sendMessageToBartender, resetBartenderDetails }
)(React.memo(BartenderDetails));

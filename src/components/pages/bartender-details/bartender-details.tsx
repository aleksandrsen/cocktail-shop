import React, { useEffect } from "react";
import "./bartener-details.scss";
// Utils
import { connect } from "react-redux";
import { match } from "react-router-dom";
// Actions
import {
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

interface IMatchParams {
  id: string;
}

type BartenderDetailsPropsType = {
  match: match<IMatchParams>;
  bartenderDetails: null | BartenderItemType;
  fetchBartendersDetails: (id: number) => void;
  sendMessageToBartender: (id: number, values: RequestMessageType) => void;
};

const BartenderDetails = ({
  match: {
    params: { id },
  },
  bartenderDetails,
  fetchBartendersDetails,
  sendMessageToBartender,
}: BartenderDetailsPropsType) => {
  useEffect(() => {
    fetchBartendersDetails(+id);
  }, []);

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
          <p className="default-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            deleniti dolores eaque et expedita harum hic illo iste modi
            necessitatibus nostrum nulla porro quae quidem repellat soluta
            tempora, veniam veritatis! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Amet cumque debitis eligendi expedita modi, nemo
            quia ratione. Corporis, deleniti error ex maiores nam nesciunt
            perspiciatis quaerat tempora tempore velit, voluptatem.
          </p>
          <ImgSkeleton
            src={bartenderDetails?.img}
            title={`${bartenderDetails?.name} ${bartenderDetails?.surname}`}
            classes={["bartenderDetails__photo", "col col-4"]}
            skeletonStyle={{
              width: "30%",
              height: "500px",
              margin: "auto",
              borderRadius: "5px",
            }}
          />
          <p className="default-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
            deleniti dolores eaque et expedita harum hic illo iste modi
            necessitatibus nostrum nulla porro quae quidem repellat soluta
            tempora, veniam veritatis!
          </p>
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
  { fetchBartendersDetails, sendMessageToBartender }
)(BartenderDetails);

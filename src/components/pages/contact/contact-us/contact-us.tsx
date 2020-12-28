import React from "react";
import "./contact-us.scss";
// Components
import ReviewForm from "../../../reusable-components/review-form";
// Actions
import { userSendMessage } from "../../../../actions/user";
// Utils
import { connect } from "react-redux";
// Types
import { RequestMessageType } from "../../../../types/common";

type ContactUsPropsType = {
  userSendMessage: (values: RequestMessageType) => void;
};

const ContactUs = ({ userSendMessage }: ContactUsPropsType) => {
  const handleSubmit = (values: RequestMessageType) => userSendMessage(values);

  return (
    <section className="default-section contactUs">
      <div className="container">
        <h2 className="section-title">Contact us</h2>
        <ReviewForm handleSubmit={handleSubmit} title=" " />
      </div>
    </section>
  );
};

export default connect(null, { userSendMessage })(ContactUs);

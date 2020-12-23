import React from "react";
import "./happy-hour.scss";
import logo from "../../../../src_/img/logo.png";

const HappyHour = () => (
  <div className="default-section happyHour">
    <div className="container">
      <img className="happyHour__logo" src={logo} alt="" />
      <div className="section-title">Happy hour is here</div>
      <div className="section-sub-title">Weekdays 6.00 pm to 9.00 pm</div>
    </div>
  </div>
);

export default HappyHour;

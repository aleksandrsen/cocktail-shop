import React from "react";
import "./get-in-touch-section.scss";
import emailIcon from "../../../../img/icons/email-icon.svg";
import phoneIcon from "../../../../img/icons/phone-icon.svg";
import mapIcon from "../../../../img/icons/map-icon.svg";
// Components
import { Row, Col } from "antd";

const GetInTouchSection = (props) => (
  <section className="default-section get-in-touch-section">
    <h2 className="section-title">Get in touch</h2>
    <div className="container">
      <Row type="flex" justify="space-between" align="middle">
        <Col span={8}>
          <div className="contact-item">
            <img
              className="contact-item-icon"
              src={emailIcon}
              alt="send-icon"
            />
            <div className="contact">
              <span>Email: </span>pubOnHub@gmail.com
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="contact-item">
            <img
              className="contact-item-icon"
              src={phoneIcon}
              alt="phone-icon"
            />
            <div className="contact">
              <span>Phone: </span>+1 245 123 222
            </div>
          </div>
        </Col>
        <Col span={8}>
          <div className="contact-item">
            <img className="contact-item-icon" src={mapIcon} alt="map-icon" />
            <div className="contact">
              <span>Address: </span>New York, 345 Park AveNY 10154, USA
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </section>
);

export default GetInTouchSection;

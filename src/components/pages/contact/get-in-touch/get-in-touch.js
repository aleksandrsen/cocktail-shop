import React from "react";
import "./get-in-touch.scss";
// Utils
import { Icons } from "../../../../src_/icons";

const GetInTouch = (props) => (
  <section className="default-section getInTouch">
    <h2 className="getInTouch__title section-title">Get in touch</h2>
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col col-3">
          <div className="getInTouch__contactItem">
            {Icons.contactEmail}
            <div className="contact">
              <span>Email: </span>pubOnHub@gmail.com
            </div>
          </div>
        </div>
        <div className="col col-3">
          <div className="getInTouch__contactItem">
            {Icons.contactPhone}
            <div className="contact">
              <span>Phone: </span>+1 245 123 222
            </div>
          </div>
        </div>
        <div className="col col-3">
          <div className="getInTouch__contactItem">
            {Icons.contactMap}
            <div className="contact">
              <span>Address: </span>New York, 345 Park AveNY 10154, USA
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GetInTouch;

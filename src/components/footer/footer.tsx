import React from "react";
import "./footer.scss";
// Utils
import logo from "../../source/img/logo.png";
// Components
import SocialNetworks from "../social-networks";

const Footer = () => (
  <footer className="mainFooter" data-test="mainFooter">
    <div className="container">
      <div className="row">
        <div className="col col-4 col-md-6 col-sm-12">
          <div className="mainFooter__contacts">
            <h4 className="mainFooter__title">Contact us</h4>
            <div className="mainFooter__contactItem">
              <span>Address: </span>
              New York, 345 Park AveNY 10154, USA
            </div>
            <div className="mainFooter__contactItem">
              <span>Email: </span>
              pubOnHub@gmail.com
            </div>
            <div className="mainFooter__contactItem">
              <span>Phone: </span>
              +1 245 123 222
            </div>
          </div>
        </div>
        <div className="col col-4 col-md-12">
          <img src={logo} alt="logo" />
        </div>
        <div className="col col-4 col-md-6 col-sm-12">
          <div className="mainFooter__about">
            <h4 className="mainFooter__title">About story</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aspernatur autem beatae delectus dolores dolorum error est ex
              inventore laudantium nam numquam optio, quod sint soluta, totam
              vitae voluptate voluptates.
            </p>
            <span className="hub">Hub on pubs</span>
          </div>
        </div>
      </div>
      <SocialNetworks />
      <div className="mainFooter__copyright">
        <svg>
          <use xlinkHref="#footer-copyright" />
        </svg>
        {new Date().getFullYear()} - Hub on pubs - All Rights Reserved
      </div>
    </div>
  </footer>
);

export default React.memo(Footer);

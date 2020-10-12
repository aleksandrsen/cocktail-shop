import React from "react";
import "./footer.scss";
import logo from "../../img/logo.png";
import Container from "../layout-components/container";
import SocialNetworks from "../social-networks";

const Footer = (props) => (
  <footer>
    <Container>
      <div className="footer-content">
        <div className="contact-us">
          <h4 className="footer-title">Contact us</h4>
          <div className="address contact-item">
            <span>Address: </span>
            New York, 345 Park AveNY 10154, USA
          </div>
          <div className="email contact-item">
            <span>Email: </span>
            pubOnHub@gmail.com
          </div>
          <div className="phone contact-item">
            <span>Phone: </span>
            +1 245 123 222
          </div>
        </div>
        <img src={logo} alt="logo" />
        <div className="about-story">
          <h4 className="footer-title">About story</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            aspernatur autem beatae delectus dolores dolorum error est ex
            inventore laudantium nam numquam optio, quod sint soluta, totam
            vitae voluptate voluptates.
          </p>
          <span className="hub">Hub on pubs</span>
        </div>
      </div>
      <SocialNetworks />
      <div className="copyright">
        <i className="material-icons">copyright</i>
        {new Date().getFullYear()} - Hub on pubs - All Rights Reserved
      </div>
    </Container>
  </footer>
);

export default Footer;

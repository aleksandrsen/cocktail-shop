import React from 'react';
import './footer.scss';
import logo from './img/logo.png'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import pinterest from './img/pinterest.svg'
import youtube from './img/youtube.svg'
import instagram from './img/instagram.svg'
import Container from "../common-components/container";

function Footer(props) {

    return (
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
                    <img src={logo} alt="logo"/>
                    <div className="about-story">
                        <h4 className="footer-title">About story</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur autem beatae
                            delectus dolores dolorum error est ex inventore laudantium nam numquam optio, quod sint
                            soluta, totam vitae voluptate voluptates.
                        </p>
                        <span className="hub">Hub on pubs</span>
                    </div>
                </div>
                <div className="social-networks">
                    <a href="#">
                        <img src={facebook} alt="facebook"/>
                    </a>
                    <a href="#">
                        <img src={twitter} alt="twitter"/>
                    </a>
                    <a href="#">
                        <img src={pinterest} alt="pinterest"/>
                    </a>
                    <a href="#">
                        <img src={youtube} alt="youtube"/>
                    </a>
                    <a href="#">
                        <img src={instagram} alt="youtube"/>
                    </a>
                </div>
                <div className="copyright">
                    <i className="material-icons">copyright</i>
                    {new Date().getFullYear()} - Hub on pubs - All Rights Reserved
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
import React from 'react';
import './get-in-touch-section.scss';
import emailIcon from "../../data/img/email-icon.svg";
import phoneIcon from "../../data/img/phone-icon.svg";
import mapIcon from "../../data/img/map-icon.svg";
// Components
import {Row, Col} from 'antd';
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";

function GetInTouchSection(props) {

    return (
        <Section className="get-in-touch-section">
            <SectionTitle>Get in touch</SectionTitle>
            <Container>
                <Row type="flex" justify="space-between" align="middle">
                    <Col span={8}>
                        <div className="contact-item">
                            <img src={emailIcon} alt="send-icon"/>
                            <div className="contact">
                                <span>Email: </span>pubOnHub@gmail.com
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="contact-item">
                            <img src={phoneIcon} alt="phone-icon"/>
                            <div className="contact">
                                <span>Phone: </span>+1 245 123 222
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="contact-item">
                            <img src={mapIcon} alt="map-icon"/>
                            <div className="contact">
                                <span>Address: </span>New York, 345 Park AveNY 10154, USA
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}

export default GetInTouchSection;


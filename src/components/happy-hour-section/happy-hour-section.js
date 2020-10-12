import React from 'react';
import './happy-hour-section.scss';
import logo from "../../img/logo.png";
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import SectionSubTitle from "../common-components/section-sub-title";

function HappyHourSection(props) {

    return (
        <Section className="happy-hour">
            <Container>
                <div className="content-wrapper">
                    <img className="logo" src={logo} alt=""/>
                    <SectionTitle>Happy hour is here</SectionTitle>
                    <SectionSubTitle>Weekdays 6.00 pm to 9.00 pm</SectionSubTitle>
                </div>
            </Container>
        </Section>
    );
}

export default HappyHourSection;
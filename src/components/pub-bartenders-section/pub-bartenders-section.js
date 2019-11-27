import React from 'react';
import './pub-partners-section.scss';
// Components
import partner1 from "./img/partner-1.png"
import partner2 from "./img/partner-2.png"
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";

function PubPartnersSection(props) {

    return (
        <Section className="pub-partners-section">
            <Container>
                <SectionTitle>Pub partners</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et expedita
                    harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta tempora,
                    veniam veritatis!
                </DefaultText>
                <div className="partners">
                    <img src={partner1} alt="pub partner img"/>
                    <img src={partner2} alt="pub partner img"/>
                    <img src={partner1} alt="pub partner img"/>
                </div>
            </Container>
        </Section>
    );
}

export default PubPartnersSection;

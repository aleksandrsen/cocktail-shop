import React from 'react';
import './bartenders-section.scss';
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import DefaultText from "../common-components/default-text";
import SectionSubTitle from "../common-components/section-sub-title";
import BartendersList from "../bartenders-list";

function BartendersSection(props) {

    return (
        <Section className="pub-bartenders-section">
            <Container>
                <SectionSubTitle>Our team</SectionSubTitle>
                <SectionTitle>Pub bartenders</SectionTitle>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti dolores eaque et expedita
                    harum hic illo iste modi necessitatibus nostrum nulla porro quae quidem repellat soluta tempora,
                    veniam veritatis!
                </DefaultText>
                <BartendersList/>
            </Container>
        </Section>
    );
}

export default BartendersSection;
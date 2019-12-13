import React from 'react';
import './talk-to-bartender-section.scss';
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import ContactForm from "../contact-form";

function TalkToBartenderSection(props) {

    let {name, surname, id} = props.bartender;

    return (
        <Section className="talk-to-bartender-section">
            <Container>
                <SectionTitle>Talk to {name + " " + surname}</SectionTitle>
                <ContactForm reviewGoal={{goal: "bartender", id: id}}/>
            </Container>
        </Section>
    );
}

export default TalkToBartenderSection;
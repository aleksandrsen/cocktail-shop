import React from 'react';
import './contact-us-section.scss';
// Components
import Section from "../common-components/section";
import SectionTitle from "../common-components/section-title";
import Container from "../common-components/container";
import ContactForm from "../contact-form";

function ContactUsSection(props) {

    return (
        <Section className="contact-us-section">
            <Container>
                <SectionTitle>Contact us</SectionTitle>
                <ContactForm btnText="Send us"/>
            </Container>
        </Section>
    );
}

export default ContactUsSection;

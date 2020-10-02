import React from "react";
import "./contact-us-section.scss";
// Components
import Section from "../../../layout-components/section";
import SectionTitle from "../../../layout-components/section-title";
import Container from "../../../layout-components/container";
import ContactForm from "../contact-form";

const ContactUsSection = (props) => (
  <Section className="contact-us-section">
    <Container>
      <SectionTitle>Contact us</SectionTitle>
      <ContactForm
        btnText="Send us"
        reviewGoal={{ id: "1111", goal: "blog-post" }}
      />
    </Container>
  </Section>
);

export default ContactUsSection;

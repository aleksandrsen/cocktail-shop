import React from "react";
import "./upcoming-events-section.scss";
// Components
import Section from "../../../common-components/section";
import SectionTitle from "../../../common-components/section-title";
import Container from "../../../common-components/container";
import DefaultText from "../../../common-components/default-text";
import UpcomingEventItem from "./upcoming-event-item";

const UpcomingEventsSection = (props) => (
  <Section className="upcoming-events">
    <Container>
      <SectionTitle>Upcoming Events</SectionTitle>
      <DefaultText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
        dolore quibusdam sequiveritatisvoluptatibus. A consectetur doloremque
        ex, explicabo ipsa laboriosam neque, pariaturpraesentium quosrecusandae
        repellat saepe vero voluptatum.
      </DefaultText>
      <UpcomingEventItem />
    </Container>
  </Section>
);

export default UpcomingEventsSection;
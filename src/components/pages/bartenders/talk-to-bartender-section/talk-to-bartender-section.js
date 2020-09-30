import React from "react";
import "./talk-to-bartender-section.scss";
// Components
import Section from "../../../common-components/section";
import SectionTitle from "../../../common-components/section-title";
import Container from "../../../common-components/container";
import TalkToBartenderForm from "../talk-to-bartender-form/talk-to-bartender-form";

const TalkToBartenderSection = ({ bartender: { name, surname, id } }) => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Section className="talk-to-bartender-section">
      <Container>
        <SectionTitle>Talk to {name + " " + surname}</SectionTitle>
        <TalkToBartenderForm onSubmit={handleSubmit} />
      </Container>
    </Section>
  );
};

export default TalkToBartenderSection;

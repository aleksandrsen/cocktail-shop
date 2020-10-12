import React from "react";
import "./bartenders.scss";
// Components
import Section from "../../../layout-components/section";
import SectionTitle from "../../../layout-components/section-title";
import Container from "../../../layout-components/container";
import DefaultText from "../../../layout-components/default-text";
import SectionSubTitle from "../../../layout-components/section-sub-title";
import BartendersList from "../bartenders-list";

const Bartenders = (props) => (
  <Section className="pub-bartenders-section">
    <Container>
      <SectionSubTitle>Our team</SectionSubTitle>
      <SectionTitle>Pub bartenders</SectionTitle>
      <DefaultText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At deleniti
        dolores eaque et expedita harum hic illo iste modi necessitatibus
        nostrum nulla porro quae quidem repellat soluta tempora, veniam
        veritatis!
      </DefaultText>
      <BartendersList />
    </Container>
  </Section>
);

export default Bartenders;

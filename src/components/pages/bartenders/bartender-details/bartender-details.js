import React, { useEffect } from "react";
import "./bartener-details.scss";
import { connect } from "react-redux";
// Actions
import { loadBartenderById } from "../../../../actions";
// Selectors
import {
  bartenderItemIdSelector,
  bartenderItemLoadedSelector,
  bartenderItemLoadingSelector,
  bartenderItemSelector,
} from "../../../../selectors";
// Components
import Section from "../../../layout-components/section";
import SectionTitle from "../../../layout-components/section-title";
import Container from "../../../layout-components/container";
import DefaultText from "../../../layout-components/default-text";
import SectionSubTitle from "../../../layout-components/section-sub-title";
import DefaultButton from "../../../layout-components/default-button";
import TalkToBartenderSection from "../talk-to-bartender-section";
import Spinner from "../../../spinner";

const BartenderDetails = ({
  isLoading,
  isLoaded,
  bartender,
  oldBartenderId,
  loadBartenderById,
  id,
}) => {
  useEffect(() => {
    if ((!isLoading && !isLoaded) || id !== oldBartenderId) {
      loadBartenderById(id);
    }
  });

  if (!isLoading && isLoaded) {
    let { name, surname, img } = bartender;

    return (
      <>
        <Section className="bartender-details">
          <Container>
            <SectionSubTitle>Bartender</SectionSubTitle>
            <SectionTitle>{name + " " + surname}</SectionTitle>
            <DefaultText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              deleniti dolores eaque et expedita harum hic illo iste modi
              necessitatibus nostrum nulla porro quae quidem repellat soluta
              tempora, veniam veritatis! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet cumque debitis eligendi expedita modi, nemo
              quia ratione. Corporis, deleniti error ex maiores nam nesciunt
              perspiciatis quaerat tempora tempore velit, voluptatem.
            </DefaultText>
            <img className="bartender-photo" src={img} alt={name + surname} />
            <DefaultText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              deleniti dolores eaque et expedita harum hic illo iste modi
              necessitatibus nostrum nulla porro quae quidem repellat soluta
              tempora, veniam veritatis!
            </DefaultText>
            <DefaultButton>Awards</DefaultButton>
          </Container>
        </Section>
        <TalkToBartenderSection bartender={bartender} id={id} />
      </>
    );
  }

  return <Spinner />;
};

export default connect(
  (state) => ({
    isLoading: bartenderItemLoadingSelector(state),
    isLoaded: bartenderItemLoadedSelector(state),
    oldBartenderId: bartenderItemIdSelector(state),
    bartender: bartenderItemSelector(state),
  }),
  { loadBartenderById }
)(BartenderDetails);

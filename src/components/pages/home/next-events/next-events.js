import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./next-events.scss";
// Actions
import { loadEvents } from "../../../../actions";
// Selectors
import {
  eventsSelector,
  eventsLoadedSelector,
  eventsLoadingSelector,
} from "../../../../selectors";
// Components
import Container from "../../../layout-components/container";
import SectionTitle from "../../../layout-components/section-title";
import NextEventItem from "./next-event-item";
import SmallSection from "../../../layout-components/small-section";
import Spinner from "../../../spinner";

const NextEvents = ({loading, loaded, events, loadEvents}) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadEvents();
    }
  });

  if (!loading && loaded) {
    return (
      <SmallSection className="next-events-section">
        <Container>
          <SectionTitle>Don't miss our next events</SectionTitle>
          <div className="next-events-container">
            {events.slice(0, 2).map(({ id, dateStart, title }) => {
              return (
                <NextEventItem
                  key={id}
                  date={dateStart}
                  id={id}
                  title={title}
                />
              );
            })}
          </div>
        </Container>
      </SmallSection>
    );
  }
  return <Spinner />;
}

export default connect(
  (state) => ({
    loading: eventsLoadingSelector(state),
    loaded: eventsLoadedSelector(state),
    events: eventsSelector(state),
  }),
  { loadEvents }
)(NextEvents);

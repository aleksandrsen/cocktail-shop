import React from "react";
import "./upcoming-event-item.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cutTextContent } from "../../../../../utils";
// Components
import DefaultText from "../../../../common-components/default-text";
import EventCounter from "../../../../event-counter";
import UpcomingEventDate from "../upcoming-event-date";
import DefaultButton from "../../../../common-components/default-button";
import Spinner from "../../../../spinner";
// Selectors
import {
  eventsLoadingSelector,
  eventsLoadedSelector,
  eventsSelector,
} from "../../../../../selectors";

import { Row, Col } from "antd";

const UpcomingEventItem = ({ loading, loaded, events }) => {
  if (!loading && loaded) {
    let { dateStart, title, text, middleImg } = events[0];
    let eventText = cutTextContent(text, 300);
    let nearestEventDate = new Date(Date.parse(dateStart));

    return (
      <Row type="flex" gutter={0} className="upcoming-event-item">
        <Col span={10} className="event-info">
          <h3 className="upcoming-event-title">{title}</h3>
          <UpcomingEventDate date={nearestEventDate} />
          <DefaultText>{eventText}</DefaultText>
          <EventCounter date={nearestEventDate} />
          <div className="upcoming-event-actions">
            <Link to={"/music-events/"} className="default-button">
              Events
            </Link>
            <DefaultButton>Book on event</DefaultButton>
          </div>
        </Col>
        <Col span={14} className="event-img">
          <img src={middleImg} alt="event-img" />
        </Col>
      </Row>
    );
  }

  return <Spinner />;
};

export default connect(
  state => ({
    loading: eventsLoadingSelector(state),
    loaded: eventsLoadedSelector(state),
    events: eventsSelector(state),
  }),
  null
)(UpcomingEventItem);

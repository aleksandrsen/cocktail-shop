import React, {useEffect} from 'react';
import "./upcoming-event-item.scss";
// Actions
import {loadAndSortEvents} from "../../actions";
// Components
import DefaultText from "../common-components/default-text";
import EventCounter from "../event-counter";
import UpcomingEventDate from "../upcoming-event-date";
import DefaultButton from "../common-components/default-button";
import Spinner from "../spinner";
// Helpers
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {eventsLoadingSelector, eventsLoadedSelector, eventsSelector} from "../../selectors";
import cutTextContent from "../../functions/cut-text-content";

function UpcomingEventItem(props) {
    let {loading, loaded, loadAndSortEvents, events} = props;

    useEffect(() => {
        loadAndSortEvents();
    });

    if (!loading && loaded) {
        let {dateStart, title, text, middleImg} = events[0];
        let eventText = cutTextContent(text, 300);
        let nearestEventDate = new Date(Date.parse(dateStart));

        return (
            <div className="upcoming-event-item">
                <div className="event-info">
                    <h3 className="upcoming-event-title">{title}</h3>
                    <UpcomingEventDate date={nearestEventDate}/>
                    <DefaultText>
                        {eventText}
                    </DefaultText>
                    <EventCounter date={nearestEventDate}/>
                    <div className="upcoming-event-actions">
                        <Link to={"/music-events/"} className="default-button">Events</Link>
                        <DefaultButton>Book on event</DefaultButton>
                    </div>
                </div>
                <div className="event-img">
                    <img src={middleImg} alt="event-img"/>
                </div>
            </div>
        );
    }

    return <Spinner/>;
}

let mapStateToProps = (state) => {
    return {
        loading: eventsLoadingSelector(state),
        loaded: eventsLoadedSelector(state),
        events: eventsSelector(state)
    }
};

export default connect(mapStateToProps, {loadAndSortEvents})(UpcomingEventItem);
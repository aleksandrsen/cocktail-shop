import React from 'react';
import "./upcoming-event-item.scss"
import eventImg from "../../img/upcoming-event-img.jpg";
// Components
import DefaultText from "../common-components/default-text";
import EventCounter from "../event-counter";
import UpcomingEventDate from "../upcoming-event-date";
import DefaultButton from "../common-components/default-button";
import {Link} from "react-router-dom";

function UpcomingEventItem(props) {

    let upcomingEventDate = new Date(2020, 0, 1, 5, 30);

    return (
        <div className="upcoming-event-item">
            <div className="event-info">
                <h3 className="upcoming-event-title">Live music and events</h3>
                <UpcomingEventDate date={upcomingEventDate}/>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus enim eum exercitationem, fuga
                    ipsa laudantium placeat quam ratione sint? At autem ea eius iusto laboriosam magnam magni natus
                    vitae.
                </DefaultText>
                <EventCounter date={upcomingEventDate}/>
                <div className="upcoming-event-actions">
                    <Link to={"/music-events/"} className="default-button">Events</Link>
                    <DefaultButton>Book on event</DefaultButton>
                </div>
            </div>
            <div className="event-img">
                <img src={eventImg} alt="event-img"/>
            </div>
        </div>
    );
}

export default UpcomingEventItem;

import React from 'react';
import "./upcoming-event-item.scss"
import eventImg from "./img/upcoming-event-img.jpg"
// Components
import DefaultText from "../common-components/default-text";
import EventCounter from "../event-counter";
import UpcomingEventDate from "../upcoming-event-date";
import DefaultButton from "../common-components/default-button";

function UpcomingEventItem(props) {

    let upcomingEventDate = new Date(2020, 0, 1, 0, 0);

    return (
        <div className="upcoming-event-item">
            <div className="event-info">
                <h3 className="upcoming-event-title">Live music and events</h3>
                <UpcomingEventDate date={upcomingEventDate}/>
                <DefaultText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum delectus enim eum exercitationem, fuga ipsa laudantium placeat quam ratione sint? At autem ea eius iusto laboriosam magnam magni natus vitae.
                </DefaultText>
                <EventCounter date={upcomingEventDate}/>
                <div className="upcoming-event-actions">
                    <DefaultButton isLink={true} linkPath={'/events'}>Events</DefaultButton>
                    <DefaultButton>Book on event</DefaultButton>
                </div>
                {/*/upcoming-event-actions*/}
            </div>
            {/*/event-info*/}
            <div className="event-img">
                <img src={eventImg} alt=""/>
            </div>
        </div>
    );
}

export default UpcomingEventItem;

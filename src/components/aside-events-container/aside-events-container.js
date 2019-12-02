import React from 'react';
import './aside-events-container.scss';
import sortedEvents from '../../data/events'
// Components
import AsideEventItem from "../aside-event-item";

function AsideEventsContainer(props) {
    let events = sortedEvents.slice(0, 4);

    return (
        <div className="aside-events-container">
            {
                events.map(event => {
                    return <AsideEventItem key={event.id} eventItem = {event}/>
                })
            }
        </div>
    );
}

export default AsideEventsContainer;

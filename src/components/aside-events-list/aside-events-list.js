import React from 'react';
import './aside-events-list.scss';
import sortedEvents from '../../normalize-date/events'
// Components
import AsideEventItem from "../aside-event-item";

function AsideEventsList(props) {
    let events = sortedEvents.slice(0, 4);

    return (
        <div className="aside-events-list">
            {
                events.map(event => {
                    return <AsideEventItem key={event.id} eventItem={event}/>
                })
            }
        </div>
    );
}

export default AsideEventsList;

import React from 'react';
import './music-events-container.scss';
import sortedEvents from "../../data/events";
import {withRouter} from "react-router-dom";
// Components
import DefaultButton from "../common-components/default-button";
import MusicEventItem from "../music-event-item/music-event-item";

function MusicEventsContainer(props) {
    let events = sortedEvents.slice(0, 5);
    let {history} = props;

    return (
        <div className="music-events-container">
            {
                events.map(eventItem => {
                    return <MusicEventItem
                        key={eventItem.id}
                        eventItem={eventItem}
                        showEventDetails={() => history.push(eventItem.id)}
                    />
                })
            }
            <DefaultButton>More events</DefaultButton>
        </div>
    );
}

export default withRouter(MusicEventsContainer);
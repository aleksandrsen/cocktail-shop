import React from 'react';
import './next-events-item.scss';

function NextEventsItem(props) {

    return (
        <div className="next-event-item">
            <div className="next-event-info">
                <span className="next-event-date">15 oct</span>
                <span className="next-event-title">The pub festival</span>
                <span className="next-event-time">11:00 am</span>
            </div>
            <a href="#" className="next-event-details">Event details</a>
        </div>

    );
}

export default NextEventsItem;
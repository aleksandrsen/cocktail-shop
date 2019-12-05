import React from 'react';
import './next-event-item.scss';
import {Link} from "react-router-dom";
import formatDate from "../../functions/format-date";
import cutTextContent from "../../functions/cut-text-content";

function NextEventItem(props) {
    let {date, id, title} = props;
    const eventDate = formatDate(date, {month: "short", day: "numeric"});
    const eventTime = formatDate(date, {hour: "2-digit", minute: "2-digit"});
    const eventTitle = cutTextContent(title, 20);

    return (
        <div className="next-event-item">
            <div className="next-event-info">
                <span className="next-event-date">{eventDate}</span>
                <span className="next-event-title">{eventTitle}</span>
                <span className="next-event-time">{eventTime}</span>
            </div>
            <Link to={`/music-events/${id}`} className="next-event-details">
                Event details
            </Link>
        </div>
    );
}

export default NextEventItem;
import React from 'react';
import './upcoming-event-date.scss';
import formatDate from "../../functions/format-date";

function UpcomingEventDate(props) {
    let {date} = props;

    let eventDate = formatDate(date, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    return (
        <div className="upcoming-event-date">
            <i className="small material-icons">calendar_today</i>
            <span className="format-event-date">
                {eventDate}
            </span>
        </div>
    );
}

export default UpcomingEventDate;
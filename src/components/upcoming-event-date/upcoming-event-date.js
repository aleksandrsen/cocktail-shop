import React from 'react';
import './upcoming-event-date.scss';

function UpcomingEventDate(props) {
    let {date} = props;

    let formatDate = function (dateString) {
        const date = new Date(dateString);
        let formatter = new Intl.DateTimeFormat("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit"
        });
        return formatter.format(date);
    };

    return (
        <div className="upcoming-event-date">
            <i className="small material-icons">calendar_today</i>
            <span className="format-event-date">
                {formatDate(date)}
            </span>
        </div>
    );
}

export default UpcomingEventDate;
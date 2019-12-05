import React from 'react';
import './aside-event-item.scss';
import cutTextContent from "../../functions/cut-text-content";
import formatDate from "../../functions/format-date";

function AsideEventItem(props) {
    let {title, dateStart, dateEnd} = props.eventItem;
    const maxTitleLength = 54;
    let eventTitle = cutTextContent(title, maxTitleLength);
    let day = formatDate(dateStart, {day: "numeric"});
    let eventMonthYear = formatDate(dateStart, {year: "numeric", month: "short"});
    let timeStart = formatDate(dateStart, {hour: "2-digit", minute: "2-digit"});
    let timeEnd = formatDate(dateEnd, {hour: "2-digit", minute: "2-digit"});
    return (

        <div className="aside-even-item">
            <div className="left">
                <div className="event-day">
                    {day < 10 ? "0" + day : day}
                </div>
                <div className="event-month-year">
                    {eventMonthYear}
                </div>

            </div>
            <div className="right">
                <div className="event-title">
                    {eventTitle}
                </div>
                <div className="event-time">
                    <i className="material-icons">query_builder</i>
                    {timeStart} - {timeEnd}
                </div>

            </div>
        </div>
    );
}

export default AsideEventItem;
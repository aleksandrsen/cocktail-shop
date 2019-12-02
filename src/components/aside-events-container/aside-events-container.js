import React from 'react';
import './aside-events-container.scss';
import sortedEvents from '../../data/events'
import cutTextContent from "../../functions/cut-text-content";
import formatDate from "../../functions/format-date";
// Components


function AsideEventsContainer(props) {

    return (
        <div className="aside-events-container">
            {
                sortedEvents.map(event => {
                    let { title, dateStart, dateEnd } = event;
                    const maxTitleLength = 100;
                    let eventTitle = cutTextContent(title, maxTitleLength);
                    let day = formatDate(dateStart, {day: "numeric"});
                    let eventMonthYear = formatDate(dateStart, {year: "numeric", month: "short"});
                    let timeStart = formatDate(dateStart, {hour: "numeric"});
                    let timeEnd = formatDate(dateEnd, {hour: "numeric"});

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
                    )
                })
            }
        </div>
    );
}

export default AsideEventsContainer;

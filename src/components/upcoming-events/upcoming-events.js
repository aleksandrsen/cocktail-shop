import React from 'react';
import './upcoming-events.scss';

function UpcomingEvents(props) {

        let formatDate = function(dateString) {
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
        <section className="default-section upcoming-events">
            <div className="container">
                <h2 className="section-title">Upcoming Events</h2>
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cumque labore magni nobis omnis rerum, soluta? Delectus id impedit velit veniam vero voluptates. Alias amet doloribus fuga impedit modi quia!</p>

                <div className="upcoming-event-item">
                    <div className="event-info">
                        <h3 className="upcoming-event-title">Live music and events</h3>
                        <div className="upcoming-event-date">
                            <i className = "small material-icons">calendar_today</i>
                            <span className="format-event-date">
                                {formatDate(new Date())}
                            </span>
                        </div>
                        <p className="default-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis laboriosam laudantium modi non officia quos. Cum fugiat pariatur praesentium sapiente veritatis? Consectetur debitis dignissimos laborum maiores nobis nostrum, voluptas?
                        </p>
                        <div className="event-counter">
                            <div className="count-item days active">
                                <span>17</span><span>days</span>
                            </div>
                            <div className="count-item hours">
                                <span>10</span><span>hours</span>
                            </div>
                            <div className="count-item minutes">
                                <span>55</span><span>minutes</span>
                            </div>
                            <div className="count-item seconds">
                                <span>07</span><span>seconds</span>
                            </div>
                        </div>

                        <div className="upcoming-event-actions">
                            <button>Events</button>
                            <button>Book on event</button>
                        </div>
                    </div>

                    <div className="event-img">
                        <img src="./img/upcoming-event-img.jpg" alt=""/>
                    </div>
                </div>

                <div className="next-events">
                    <h2 className="section-title">Don't miss our next events</h2>
                    <div className="next-events-container">
                        <div className="next-event-item">
                            <span className="next-event-date">15 oct</span>
                            <span className="next-event-title">The pub festival</span>
                            <span className="next-event-time">11:00 am</span>
                            <a href="#" className="next-event-details">Event details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpcomingEvents;

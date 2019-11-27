import React, {useEffect, useState} from 'react';
import './event-counter.scss';

function EventCounter(props) {
    let {date} = props;
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            let dateDifference = new Date(date - new Date());
            setDays(Math.floor(+dateDifference/(24 * 60 * 60 * 1000)));
            setHours(dateDifference.getHours());
            setMinutes(dateDifference.getMinutes());
            setSeconds(dateDifference.getSeconds());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    });

    function formatNumber(number) {
        return number < 10 ? `0${number}` : number;
    }

    return (
        <div className="event-counter">
            <div className="count-item days active">
                <span>{formatNumber(days)}</span><span>days</span>
            </div>
            <div className="count-item hours">
                <span>{formatNumber(hours)}</span><span>hours</span>
            </div>
            <div className="count-item minutes">
                <span>{formatNumber(minutes)}</span><span>minutes</span>
            </div>
            <div className="count-item seconds">
                <span>{formatNumber(seconds)}</span><span>seconds</span>
            </div>
        </div>
    );
}

export default EventCounter;
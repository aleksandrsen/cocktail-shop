import React, { useEffect, useState } from "react";
import "./event-counter.scss";

const EventCounter = ({ date: eventDate }) => {
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateDifference = new Date(eventDate - new Date());

      setDate({
        days: formatNumber(Math.floor(+dateDifference / (24 * 60 * 60 * 1000))),
        hours: formatNumber(dateDifference.getHours()),
        minutes: formatNumber(dateDifference.getMinutes()),
        seconds: formatNumber(dateDifference.getSeconds()),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  return (
    <div className="event-counter">
      <div className="count-item days active">
        <span>{date.days}</span>
        <span>days</span>
      </div>
      <div className="count-item hours">
        <span>{date.hours}</span>
        <span>hours</span>
      </div>
      <div className="count-item minutes">
        <span>{date.minutes}</span>
        <span>minutes</span>
      </div>
      <div className="count-item seconds">
        <span>{date.seconds}</span>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default EventCounter;

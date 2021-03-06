import React, { useEffect, useState } from "react";
import "./event-counter.scss";

interface IDate {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventCounter = ({ date: eventDate }: { date: string }) => {
  const [date, setDate] = useState<IDate>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateDifference: Date = new Date(+new Date(eventDate) - +new Date());

      setDate({
        days: Math.floor(+dateDifference / (24 * 60 * 60 * 1000)),
        hours: dateDifference.getHours(),
        minutes: dateDifference.getMinutes(),
        seconds: dateDifference.getSeconds(),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [eventDate]);

  return (
    <div className="eventCounter">
      {Object.entries(date).map(([key, value], idx) => (
        <div
          className={`eventCounter__item ${key === "days" ? "active" : ""}`}
          key={key}
        >
          <span>{value < 10 ? `0${value}` : value}</span>
          <span>{`${key[0].toUpperCase()}${key.slice(1)}`}</span>
        </div>
      ))}
    </div>
  );
};

export default React.memo(EventCounter);

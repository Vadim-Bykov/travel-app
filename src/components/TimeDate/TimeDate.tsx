import React, { useState, useEffect } from 'react';
import * as util from './util';

const TimeDate:React.FC<{timeZone: string, language: string}> = ({timeZone, language}) => {

  const [time, setTime] = useState(util.getTime(language, timeZone));
  const [weekDay, setWeekDay] = useState(util.getWeekDay(language, timeZone));
  const [date, setDate] = useState(util.getDate(language, timeZone));

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(util.getTime(language, timeZone));
        setWeekDay(util.getWeekDay(language, timeZone));
        setDate(util.getDate(language, timeZone));
    }, 1000);

    return () => clearInterval(interval);
  }, [language, timeZone]);



  return (
    <div>
      <div>{time}</div>
      <div>{weekDay}</div>
      <div>{date}</div>
    </div>
  );
}

export default TimeDate;

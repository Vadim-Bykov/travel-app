import React, { useState, useEffect } from 'react';
import * as util from './util';

// style
import style from './TimeDate.module.scss'

const TimeDate:React.FC<{timeZone: string, language: string}> = ({timeZone, language}) => {

  const [time, setTime] = useState(util.getTime(language, timeZone));
  const [weekDay, setWeekDay] = useState(util.getWeekDay(language, timeZone));
  const [date, setDate] = useState(util.getDate(language, timeZone));

  const updateTimeDate = (language: string, timeZone: string): void => {
    setTime(util.getTime(language, timeZone));
    setWeekDay(util.getWeekDay(language, timeZone));
    setDate(util.getDate(language, timeZone));
  }

  useEffect(() => {
    updateTimeDate(language, timeZone);

    const interval = setInterval(() => {
      updateTimeDate(language, timeZone);
    }, 1000);

    return () => clearInterval(interval);
  }, [language, timeZone]);

  return (
    <div className={style.container}>
      <p>{time}</p>
      <p>{weekDay}</p>
      <p>{date}</p>
    </div>
  );
}

export default TimeDate;

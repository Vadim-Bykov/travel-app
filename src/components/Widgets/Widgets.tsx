import React from 'react';
import TimeDate from '../TimeDate/TimeDate';
import Weather from '../Weather/Weather';

type TProps = {
  curLang: string,
  city: string,
  timeZone: string,
}

const Widgets: React.FC<TProps>  = ({curLang, city, timeZone}) => {
  return (
    <div>
      <TimeDate timeZone={timeZone} language={curLang}/>
      <Weather city={city} language={curLang}/>
    </div>
  )
}

export default Widgets;

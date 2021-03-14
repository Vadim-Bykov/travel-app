import React from 'react';
import { useSelector } from 'react-redux';
import TimeDate from '../TimeDate/TimeDate';
import Weather from '../Weather/Weather';

const Widgets = () => {
  return (
    <div>
      <TimeDate timeZone={'Europe/Minsk'} language={'en'}/>
      <Weather city={'Minsk'} language={'en'}/>
    </div>
  )
}

export default Widgets;

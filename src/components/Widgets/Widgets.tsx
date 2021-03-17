import React from 'react';
import TimeDate from '../TimeDate/TimeDate';
import Weather from '../Weather/Weather';
import Currency from '../Currency/Currency';

// style
import style from './Widgets.module.scss'

type TProps = {
  curLang: string,
  city: string,
  timeZone: string,
  currencyCode: string,
  currencyName: string
}

const Widgets: React.FC<TProps>  = ({curLang, city, timeZone, currencyCode, currencyName}) => {
  return (
    <div className={style.container}>
      <TimeDate timeZone={timeZone} language={curLang}/>
      <Weather city={city} language={curLang}/>
      <Currency currencyCode={currencyCode} currencyName={currencyName} language={curLang}/>
    </div>
  )
}

export default Widgets;

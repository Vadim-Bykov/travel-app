import style from './CountryPage.module.scss';
import React, { useEffect } from 'react';
import { ParamsType } from './Types';
import { requestCountryData } from '../../store/countryPage/operations';
import { useDispatchThunk } from '../../store/store';
import { useSelector } from 'react-redux';
import { getCountryData } from '../../store/countryPage/selectors';
import { CountryDataType } from '../../store/countryPage/types';
import { getCurLang } from '../../store/mainPage/selectors';
import cn from 'classnames';
import Slider from '../Slider/Slider';

const CountryPage: React.FC<ParamsType> = ({ id }) => {
  const curLang = useSelector(getCurLang);
  const dispatch = useDispatchThunk();

  useEffect(() => dispatch(requestCountryData(id)), []);

  const countryData: CountryDataType = useSelector(getCountryData);

  const carouselItems =
    countryData.sightseeings &&
    countryData.sightseeings.map((item, i) => (
      <div key={item.name[curLang]} className={cn('carousel-item', {['active']: i===0 })}>
        <img className='d-block w-100' src={item.img} alt={item.name[curLang]}></img>
        <div className='carousel-caption d-none d-md-block'>
          {/* <h5>{item.name[curLang]}</h5>
          <p>{item.shortInfo[curLang]}</p> */}
        </div>
      </div>
    ));

  return (
    <>
      {countryData.capital && (
        <div className={style.countryPage}>
          <img src={countryData.mainPhoto} alt='mainPhoto'></img>
          <h2>{countryData.name[curLang]}</h2>
          <h3>{countryData.capital[curLang]}</h3>
          <div>{countryData.shortInfo[curLang]}</div>

          <Slider curLang={curLang} sightseeings={countryData.sightseeings} />
        </div>
      )}
    </>
  );
};

export default CountryPage;

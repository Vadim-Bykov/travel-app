import style from './CountryPage.module.scss';
import React, { useEffect } from 'react';
import { ParamsType } from './Types';
import { requestCountryData } from '../../store/countryPage/operations';
import { useDispatchThunk } from '../../store/store';
import { useSelector } from 'react-redux';
import { getCountryData } from '../../store/countryPage/selectors';
import { CountryDataType } from '../../store/countryPage/types';
import { getCurLang } from '../../store/mainPage/selectors';
import Slider from '../Slider/Slider';
import { capital } from '../../data/dataFront';
import Video from '../Video/Video';
import { useLocation } from 'react-router';
import Widgets from '../Widgets/Widgets';
import Map from '../Map/Map';

const CountryPage: React.FC<ParamsType> = ({ id }) => {
  const curLang = useSelector(getCurLang);
  const dispatch = useDispatchThunk();

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => dispatch(requestCountryData(id)), [dispatch, id]);
  const countryData: CountryDataType = useSelector(getCountryData);

  return (
    <>
      {countryData.capital && (
        <React.Fragment>
          <Widgets
              curLang={curLang}
              city={countryData.capital[curLang]}
              timeZone={countryData.timeZone}
              currencyCode={countryData.currencyCode}
              currencyName={countryData.currencyName[curLang]} />
          <div className={style.countryPage}>
            <img
              className={style.mainPhoto}
              src={countryData.mainPhoto}
              alt='mainPhoto'
            ></img>
            <h2>{countryData.name[curLang]}</h2>
            <h3>
              {capital[curLang]} - {countryData.capital[curLang]}
            </h3>
            <div>{countryData.shortInfo[curLang]}</div>

            <Slider curLang={curLang} sightseeings={countryData.sightseeings} />

            <Map id={id} countryData={countryData} curLang={curLang} />

            <Video curLang={curLang} videoLins={countryData.video} />
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default CountryPage;

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

const CountryPage: React.FC<ParamsType> = ({ id }) => {
  const curLang = useSelector(getCurLang);
  const dispatch = useDispatchThunk();

  useEffect(() => dispatch(requestCountryData(id)), []);

  const countryData: CountryDataType = useSelector(getCountryData);

  const carouselItems =
    countryData.sightseeings &&
    countryData.sightseeings.map((item, i) => (
      <div className={cn('carousel-item active', { [(i = 0)]: 'active' })}>
        <img src={item.img} alt={item.name[curLang]}></img>
        <div className='carousel-caption d-none d-md-block'>
          <h5>{item.name[curLang]}</h5>
          <p>{item.shortInfo[curLang]}</p>
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

          <div
            id='carouselExampleIndicators'
            className='carousel slide'
            data-ride='carousel'
          >
            <ol className='carousel-indicators'>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='0'
                className='active'
              ></li>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='1'
              ></li>
              <li
                data-target='#carouselExampleIndicators'
                data-slide-to='2'
              ></li>
            </ol>
            <div className='carousel-inner'>
              {carouselItems}
              {/* <div className='carousel-item active'>
                <img
                  className='d-block w-100'
                  src='...'
                  alt='First slide'
                ></img>
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='...'
                  alt='Second slide'
                ></img>
              </div>
              <div className='carousel-item'>
                <img
                  className='d-block w-100'
                  src='...'
                  alt='Third slide'
                ></img>
              </div> */}
            </div>
            <a
              className='carousel-control-prev'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#carouselExampleIndicators'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CountryPage;

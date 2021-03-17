import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather, getErrorWeather, getLoadingWeather } from '../../store/widgets/selectors';
import { updateWeather } from '../../store/widgets/operations';
import Loader from '../Loader/Loader';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

// style
import style from './Weather.module.scss'

const Weather: React.FC<{city: string, language: string}> = ({city, language}) => {
  const loadingWeather = useSelector(getLoadingWeather);
  const errorWeather = useSelector(getErrorWeather);
  const {temperature, description, icon} = useSelector(getWeather);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateWeather(city, language));
  }, [dispatch, city, language]);


  if (loadingWeather) return <Loader containerClazz={style.container} />
  if (errorWeather) return <ErrorComponent containerClazz={style.container} errorText={errorWeather}/>;

  return (
    <div className={style.container}>
      <p className={style.temperature}>{temperature}&deg;</p>
      <div>
        <img className={style.icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}

export default Weather;

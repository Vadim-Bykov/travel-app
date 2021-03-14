import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWeather, getErrorWeather, getLoadingWeather } from '../../store/widgets/selectors';
import { updateWeather } from '../../store/widgets/operations';

const Weather: React.FC<{city: string, language: string}> = ({city, language}) => {
  const loadingWeather = useSelector(getLoadingWeather);
  const errorWeather = useSelector(getErrorWeather);
  const {temperature, description, icon} = useSelector(getWeather);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateWeather(city, language));
  }, [dispatch, city, language]);


  if (loadingWeather) return <div>...LOADING</div>
  if (errorWeather) return <div>{errorWeather}</div>;
  console.log(temperature, description, icon);

  return (
    <div>
      <div>{temperature}&deg;</div>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon" />
      <div>{description}</div>
    </div>
  );
}

export default Weather;

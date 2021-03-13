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
  }, [dispatch]);


  console.log(loadingWeather);
  console.log(errorWeather);
  console.log(temperature, description, icon);

  return (
    <div>
      <div>{city}, {language}</div>
      {/* <div>{weekDay}</div>
      <div>{date}</div> */}
    </div>
  );
}

export default Weather;

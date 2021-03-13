import * as actionTypes from './actionTypes';
import * as types from './types';

export const weatherRequest = (): types.TWeatherRequest => ({
  type: actionTypes.FETCH_WEATHER_REQUEST,
});

export const weatherLoaded  = (weather: types.TWeather): types.TWeatherLoaded => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
  payload: {
    weather
  }
});

export const weatherError  = (error: string): types.TWeatherError => ({
  type: actionTypes.FETCH_WEATHER_FAILURE,
  payload: {
    error
  }
})

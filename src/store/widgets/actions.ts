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
});

export const currencyRequest = (): types.TCurrencyRequest => ({
  type: actionTypes.FETCH_CURRENCY_REQUEST,
});

export const currencyLoaded  = (ratioCurrency: types.TRatioCurrency): types.TCurrencyLoaded => ({
  type: actionTypes.FETCH_CURRENCY_SUCCESS,
  payload: {
    ratioCurrency
  }
});

export const currencyError  = (error: string): types.TCurrencyError => ({
  type: actionTypes.FETCH_CURRENCY_FAILURE,
  payload: {
    error
  }
});

import * as actionTypes from './actionTypes';

export type TWeatherRequest = {
  type: typeof actionTypes.FETCH_WEATHER_REQUEST
};

export type TWeatherLoaded = {
  type: typeof actionTypes.FETCH_WEATHER_SUCCESS,
  payload: {
    weather: TWeather
  }
};

export type TWeatherError = {
  type: typeof actionTypes.FETCH_WEATHER_FAILURE,
  payload: {
    error: string
  }
};

export type TActions = TWeatherRequest | TWeatherLoaded | TWeatherError;

export type TWeather = {
  temperature: string,
  description: string,
  icon: string
};

export type TError = null | string;

export type TState = {
  weather: TWeather,
  loadingWeather: boolean,
  errorWeather: null | string
}

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

export type TCurrencyRequest = {
  type: typeof actionTypes.FETCH_CURRENCY_REQUEST
};

export type TCurrencyLoaded = {
  type: typeof actionTypes.FETCH_CURRENCY_SUCCESS,
  payload: {
    ratioCurrency: TRatioCurrency
  }
};

export type TCurrencyError = {
  type: typeof actionTypes.FETCH_CURRENCY_FAILURE,
  payload: {
    error: string
  }
};

export type TActions = TWeatherRequest | TWeatherLoaded | TWeatherError |
  TCurrencyRequest | TCurrencyLoaded | TCurrencyError;

export type TWeather = {
  temperature: number,
  description: string,
  icon: string
};

export type TRatioCurrency = {
  USD: number,
  EUR: number,
  BYN: number
};


export type TError = null | string;

export type TState = {
  weather: TWeather,
  loadingWeather: boolean,
  errorWeather: null | string,
  rationCurrency: TRatioCurrency,
  loadingCurrency: boolean,
  errorCurrency: null | string
}

import * as actionTypes from "./actionTypes";
import * as types from './types';

const initialState: types.TState = {
  weather: { } as types.TWeather,
  loadingWeather: true,
  errorWeather: null,
  rationCurrency: { } as types.TRatioCurrency,
  loadingCurrency: true,
  errorCurrency: null,
}

const widgetsReducer = (state = initialState, action: types.TActions): types.TState => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_REQUEST:
      return {
        ...state,
        loadingWeather: true,
        errorWeather: null
      }

    case actionTypes.FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload.weather,
        loadingWeather: false,
        errorWeather: null
      }

    case actionTypes.FETCH_WEATHER_FAILURE:
      return {
        ...state,
        loadingWeather: false,
        errorWeather: action.payload.error
      }

    case actionTypes.FETCH_CURRENCY_REQUEST:
      return {
        ...state,
        loadingCurrency: true,
        errorCurrency: null
      }

    case actionTypes.FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        rationCurrency: action.payload.ratioCurrency,
        loadingCurrency: false,
        errorCurrency: null
      }

    case actionTypes.FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        loadingCurrency: false,
        errorCurrency: action.payload.error
      }


    default:
      return state;
  }
}

export default widgetsReducer;

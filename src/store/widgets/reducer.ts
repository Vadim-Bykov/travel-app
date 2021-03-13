import * as actionTypes from "./actionTypes";
import * as types from './types';

const initialState: types.TState = {
  weather: { } as types.TWeather,
  loadingWeather: true,
  errorWeather: null
}

const widgetReducer = (state = initialState, action: types.ActionsTypes): types.TState => {
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

    default:
      return state;
  }
}

export default widgetReducer;

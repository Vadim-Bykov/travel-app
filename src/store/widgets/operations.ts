import { ThunkAction } from 'redux-thunk'
import * as actions from './actions';
import { TActions } from './types';
import { AppStateType } from '../store';
import getWeatherAPI from '../../api/weatherAPI';
import getCurrencyAPI from '../../api/currencyAPI';

type TThunk = ThunkAction<void, AppStateType, unknown, TActions>;

export const updateWeather = (city: string, language: string): TThunk => async (dispatch) => {
  dispatch(actions.weatherRequest());
  try {
    const weather = await getWeatherAPI(city, language);
    dispatch(actions.weatherLoaded(weather))
  } catch (error) {
    dispatch(actions.weatherError(error.message));
  }
}

export const updateRatioCurrency = (currencyCode: string): TThunk => async (dispatch) => {
  dispatch(actions.currencyRequest());
  try {
    const ratioCurrency = await getCurrencyAPI(currencyCode);
    dispatch(actions.currencyLoaded(ratioCurrency));
  } catch (error) {
    dispatch(actions.currencyError(error.message));
  }
}


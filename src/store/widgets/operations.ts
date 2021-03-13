import { ThunkAction } from 'redux-thunk'
import * as actions from './actions';
import {TActions, TWeather} from './types';
import { AppStateType } from '../store';

type TThunk = ThunkAction<void, AppStateType, unknown, TActions>;

export const updateWeather = (city: string, language: string): TThunk => async (dispatch) => {
  dispatch(actions.weatherRequest());
  const weather = await getWeather();
  dispatch(actions.weatherLoaded(weather))
}

const getWeather = (): Promise<TWeather> => new Promise(function(resolve, reject) {
  setTimeout(() => resolve({temperature: '15', description: 'Drizzle', icon:'d'}), 2000);
});


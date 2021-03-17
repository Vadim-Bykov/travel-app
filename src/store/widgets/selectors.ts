import { AppStateType } from '../store';
import * as types from './types'

export const getWeather = (state: AppStateType): types.TWeather => state.widgets.weather;

export const getLoadingWeather = (state: AppStateType): boolean => state.widgets.loadingWeather;

export const getErrorWeather = (state: AppStateType): types.TError  => state.widgets.errorWeather;

export const getRatioCurrency = (state: AppStateType): types.TRatioCurrency => state.widgets.rationCurrency;

export const getLoadingCurrency = (state: AppStateType): boolean => state.widgets.loadingCurrency;

export const getErrorCurrency = (state: AppStateType): types.TError  => state.widgets.errorCurrency;

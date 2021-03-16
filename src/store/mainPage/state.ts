import * as types from './types';

export const initialState = {
  countries: [] as Array<types.CountriesType>,

  curLang: 'en',
};

export type initialStateType = typeof initialState;

import * as actionTypes from './actionTypes';
import * as types from './types';

export const setLanguage = (curLang: string): types.SetLanguageActionType => ({
  type: actionTypes.MAIN_SET_LANGUAGE,
  curLang,
});

export const setCountriesData = (
  countries: Array<types.CountriesType>
): types.SetCountriesDataType => ({
  type: actionTypes.MAIN_SET_COUNTRIES_DATA,
  countries,
});

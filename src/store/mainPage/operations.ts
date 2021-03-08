import { countriesCopy } from './../../data/dataFront';
import * as api from './../../api/countriesAPI';
import * as actions from './actions';
import { CountriesType, ThunkType } from './types';

export const requestCountriesData = (): ThunkType => (dispatch) => {
  const countries:Array<CountriesType> = api.getCountriesAPI();
  dispatch(actions.setCountriesData(countries));
  countriesCopy.push(...countries);
};

export const requestLanguage = (): ThunkType => (dispatch) => {
  const curLang: string = api.getLanguageAPI();
  dispatch(actions.setLanguage(curLang));
};

export const changeLanguage = (lang: string): ThunkType => (dispatch) => {
  api.setLanguageAPI(lang);
  dispatch(actions.setLanguage(lang));
};

import * as api from './../../api/countriesAPI';
import * as actions from './actions';
import { ThunkType } from './types';

export const requestCountriesData = (): ThunkType => (dispatch) => {
  const countries = api.getCountriesAPI();
  dispatch(actions.setCountriesData(countries));
};

export const requestLanguage = (): ThunkType => (dispatch) => {
  const curLang = api.getLanguageAPI();
  dispatch(actions.setLanguage(curLang));
};

export const changeLanguage = (lang: string): ThunkType => (dispatch) => {
  api.setLanguageAPI(lang);
  dispatch(actions.setLanguage(lang));
};

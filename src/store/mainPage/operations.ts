import { getCountriesAPI, getLanguageAPI } from './../../api/countriesAPI';
import { setCountriesData, setLanguage } from './actions';
import { ThunkType } from './types';

export const requestCountriesData = (): ThunkType => (dispatch) => {
   const countries = getCountriesAPI();
   dispatch(setCountriesData(countries));
};

export const requestLanguage = (): ThunkType => (dispatch) => {
   const curLang = getLanguageAPI();
   dispatch(setLanguage(curLang));
};


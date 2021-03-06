import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';
import * as actionTypes from './actionTypes';

export type SetLanguageActionType = {
  type: typeof actionTypes.MAIN_SET_LANGUAGE;
  curLang: string;
};

export type SetCountriesDataType = {
  type: typeof actionTypes.MAIN_SET_COUNTRIES_DATA;
  countries: Array<CountriesType>;
};

export type ActionsTypes = SetLanguageActionType | SetCountriesDataType;

export type LangType = {
  [en: string]: string;
  ru: string;
  de: string;
};

export type CountriesType = {
  id: number;
  name: LangType;
  capital: LangType;
  mainPhoto: string;
};

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;

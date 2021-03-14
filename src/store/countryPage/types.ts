import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../store';
import * as actionTypes from './actionTypes';

export type SetCountryDataType = {
  type: typeof actionTypes.COUNTRY_SET_DATA;
  data: CountryDataType;
};


export type ActionsTypes = SetCountryDataType;

export type LangType = {
  [en: string]: string;
  ru: string;
  de: string;
};

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>;


type SightseeingsType = {
  img: string
  name: LangType
  shortInfo: LangType
}

export type CountryDataType = {
  id: number
  name: LangType;
  capital: LangType
  mainPhoto: string;
  shortInfo: LangType
  sightseeings:Array<SightseeingsType>
  video: LangType
  timeZone: string
}

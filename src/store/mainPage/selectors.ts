import { AppStateType } from "../store";
import { CountriesType, LangType } from "./types";

export const getCountries = (state: AppStateType): Array<CountriesType> => state.main.countries;

export const getCurLang = (state: AppStateType): string => state.main.curLang;

export const getCardBtnTitle = (state: AppStateType): LangType => state.main.cardBtnTitle;
